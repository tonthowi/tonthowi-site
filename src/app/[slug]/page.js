import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/MDXContent';
import { WorkLayout } from '@/components/WorkLayout';

export async function generateStaticParams() {
  // Read all files in the "works" and "articles" directories
  const worksFiles = fs.readdirSync(path.join(process.cwd(), 'src/contents/works'));
  const articlesFiles = fs.readdirSync(path.join(process.cwd(), 'src/contents/articles'));

  // Generate slugs for dynamic routes
  return [
    ...worksFiles.map((filename) => ({
      slug: filename.replace('.mdx', ''),
    })),
    ...articlesFiles.map((filename) => ({
      slug: filename.replace('.mdx', ''),
    })),
  ];
}

export default async function Page({ params }) {
  try {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    if (!slug) {
      notFound();
    }

    const worksPath = path.join(process.cwd(), 'src/contents/works', `${slug}.mdx`);
    const articlesPath = path.join(process.cwd(), 'src/contents/articles', `${slug}.mdx`);
    let filePath;

    if (fs.existsSync(worksPath)) {
      filePath = worksPath;
    } else if (fs.existsSync(articlesPath)) {
      filePath = articlesPath;
    } else {
      notFound();
    }

    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter, content } = matter(markdownWithMeta);

    const mdxSource = await serialize(content, {
      parseFrontmatter: true,
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    });

    return (
      <WorkLayout
        title={frontMatter.title}
        description={frontMatter.description}
        role={[frontMatter.role]}
        year={[frontMatter.year]}
      >
        <MDXContent source={mdxSource} />
      </WorkLayout>
    );
  } catch (error) {
    console.error('Error loading content:', error);
    notFound();
  }
}