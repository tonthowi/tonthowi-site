'use client';

import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';

const components = {
  // Custom handling for `img` to work with `next/image`
  img: ({ src, alt, title, width, height }) => {
    return (
      <>
        <Image className="relative max-w-full overflow-hidden rounded-lg"
          src={src}
          alt={alt || ''}
          title={title}
          width={width || 800} // Default width
          height={height || 600} // Default height
          priority // Ensures critical images are loaded eagerly
        />
      </>
    );
  },
  // Handle links with `next/link`
  a: (props) => <Link {...props} />,
};

export default function MDXContent({ source }) {
  if (!source) {
    return <p>No content available.</p>;
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  );
}