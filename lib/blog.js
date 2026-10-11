import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import site from '@/content/site.json';

const DIR = path.join(process.cwd(), 'content', 'blog');

// Черновик: во frontmatter draft: true ИЛИ в тексте осталась пометка «Статья готовится».
// Черновики не попадают в список, роуты и sitemap — чтобы в индекс не ушли пустые страницы.
function isDraft(data, content) {
  return data.draft === true || /Статья готовится/i.test(content);
}

const slugify = (s) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-zа-яё0-9]+/gi, '-').replace(/^-|-$/g, '');

// id у H2 для оглавления
function renderWithToc(md) {
  const toc = [];
  const renderer = new marked.Renderer();
  // marked 12: heading(text, level)
  renderer.heading = function (text, level) {
    if (level === 2) { const id = slugify(text); toc.push({ id, text: text.replace(/<[^>]+>/g, '') }); return `<h2 id="${id}">${text}</h2>\n`; }
    return `<h${level}>${text}</h${level}>\n`;
  };
  const html = marked.parse(md, { renderer });
  return { html, toc };
}

function readingTime(content) {
  const words = content.replace(/[#*>\-\[\]()`]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 180));
}

function authorOf(data) {
  const t = site.team.find((x) => x.name === data.author) || site.team[0];
  return { name: t.name, role: t.role, photo: t.photo || '', text: t.text };
}

function readAll() {
  return fs.readdirSync(DIR).filter(f => f.endsWith('.md')).map(f => {
    const slug = f.replace(/\.md$/, '');
    const { data, content } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'));
    return { slug, data, content, draft: isDraft(data, content) };
  });
}

export function getAllPosts() {
  return readAll().filter(p => !p.draft)
    .map(p => ({ slug: p.slug, ...p.data, minutes: readingTime(p.content), author: authorOf(p.data), words: p.content.split(/\s+/).length }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, slug + '.md'), 'utf8'));
  const { html, toc } = renderWithToc(content);
  return { slug, meta: data, html, toc, draft: isDraft(data, content), minutes: readingTime(content), author: authorOf(data) };
}

export function getAllSlugs() {
  return readAll().filter(p => !p.draft).map(p => p.slug);
}
