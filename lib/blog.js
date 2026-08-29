import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts() {
  const files = fs.readdirSync(DIR).filter(f => f.endsWith('.md'));
  return files.map(f => {
    const slug = f.replace(/\.md$/, '');
    const { data } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'));
    return { slug, ...data };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, slug + '.md'), 'utf8'));
  return { slug, meta: data, html: marked.parse(content) };
}

export function getAllSlugs() {
  return fs.readdirSync(DIR).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));
}
