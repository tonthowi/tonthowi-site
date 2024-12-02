import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/MDXContent';
import { Container } from '@/components/Container';

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
    // Await `params` if it's a promise (should not usually be the case)
    const resolvedParams = await params;

    // Safely destructure `slug` from `params`
    const { slug } = resolvedParams;

    if (!slug) {
      notFound();
    }

    // Define file paths for "works" and "articles"
    const worksPath = path.join(process.cwd(), 'src/contents/works', `${slug}.mdx`);
    const articlesPath = path.join(process.cwd(), 'src/contents/articles', `${slug}.mdx`);
    let filePath;

    // Check if the file exists in either directory
    if (fs.existsSync(worksPath)) {
      filePath = worksPath;
    } else if (fs.existsSync(articlesPath)) {
      filePath = articlesPath;
    } else {
      notFound();
    }

    // Read file content and parse front matter
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter, content } = matter(markdownWithMeta);

    // Serialize MDX content
    const mdxSource = await serialize(content, {
      parseFrontmatter: true,
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    });

    // Render the page
    return (
      <Container>
        <article className="prose dark:prose-invert mx-auto mt-16">
          <h1>{frontMatter.title}</h1>
          <p className="text-zinc-400">{frontMatter.year}</p>
          <MDXContent source={mdxSource} />
        </article>
      </Container>
    );
  } catch (error) {
    console.error('Error loading content:', error);
    notFound();
  }
}