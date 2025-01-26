import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const worksDirectory = path.join(process.cwd(), 'src/contents/works')

export async function getAllWorks() {
  // Get file names under /works
  const fileNames = fs.readdirSync(worksDirectory)
  
  const works = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read markdown file as string
      const fullPath = path.join(worksDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents)

      // Combine the data with the slug
      return {
        slug,
        ...data,
      }
    })
    // Sort works by date in descending order
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date) - new Date(a.date)
      }
      return 0
    })

  return works
}

export async function getWorkBySlug(slug) {
  const fullPath = path.join(worksDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    ...data,
  }
} 