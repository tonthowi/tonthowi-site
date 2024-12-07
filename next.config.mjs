import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'], // Enable MDX as pages
  experimental: {
    outputFileTracingIncludes: {
      '/works/*': ['./src/contents/works/*.mdx'], // Include .mdx files for dynamic routes
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Match SVG files
      use: ['@svgr/webpack'], // Use SVGR loader to import SVGs as React components
    });
    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm], // GitHub-Flavored Markdown support
    rehypePlugins: [rehypePrism], // Syntax highlighting with Prism.js
  },
});

export default withMDX(nextConfig);