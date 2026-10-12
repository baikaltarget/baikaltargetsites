import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import PageHero from '@/components/PageHero';

// Юридические страницы из content/legal/<name>.md
export function readLegal(name) {
  const { data, content } = matter(fs.readFileSync(path.join(process.cwd(), 'content', 'legal', name + '.md'), 'utf8'));
  return { ...data, html: marked.parse(content) };
}

export default function LegalPage({ name }) {
  const d = readLegal(name);
  return (
    <>
      <PageHero crumbs={[{ name: 'Главная', href: '/' }, { name: d.title }]} title={d.title} lead={'Редакция от ' + d.updated} />
      <section>
        <div className="wrap"><article className="article article-v2 legal-text" dangerouslySetInnerHTML={{ __html: d.html }} /></div>
      </section>
    </>
  );
}
