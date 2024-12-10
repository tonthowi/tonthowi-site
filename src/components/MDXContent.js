'use client';

import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';

import { ImageWithAlt, VideoWithAlt } from '../contents/media'; // Correct path to your media file

const components = {
  img: ({ src, alt, title, width, height }) => {
    return (
      <Image
        className="relative max-w-full overflow-hidden rounded-lg"
        src={src}
        alt={alt || ''}
        title={title}
        width={width || 800}
        height={height || 600}
        priority
      />
    );
  },
  a: (props) => <Link {...props} />,
  ImageWithAlt,
  VideoWithAlt,
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