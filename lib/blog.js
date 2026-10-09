import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const DIR = path.join(process.cwd(), 'content', 'blog');

// Черновик: во frontmatter draft: true ИЛИ в тексте осталась пометка «Статья готовится».
// Черновики не попадают в список, роуты и sitemap — чтобы в индекс не ушли пустые страницы.
function isDraft(data, content) {
  return data.draft === true || /Статья готовится/i.test(content);
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
    .map(p => ({ slug: p.slug, ...p.data }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, slug + '.md'), 'utf8'));
  return { slug, meta: data, html: marked.parse(content), draft: isDraft(data, content) };
}

export function getAllSlugs() {
  return readAll().filter(p => !p.draft).map(p => p.slug);
}
