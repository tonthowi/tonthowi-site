// src/components/MDXContent.js
'use client'

import { MDXRemote } from 'next-mdx-remote'

export default function MDXContent({ source }) {
  if (!source) {
    return null
  }
  
  return <MDXRemote {...source} />
}