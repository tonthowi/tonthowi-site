import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

export async function GET(req) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Tonthowi Al Ahyar',
    email: 'tonthowi@gmail.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Projects I was working on',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let workIds = require
    .context('../../contents/works', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''))

  for (let id of workIds) {
    let url = String(new URL(`/contents/works/${id}`, req.url))
    let html = await (await fetch(url)).text()
    let $ = cheerio.load(html)

    let publicUrl = `${siteUrl}/contents/works/${id}`
    let work = $('work').first()
    let title = work.find('h1').first().text()
    let content = work.find('[data-mdx-content]').first().html()

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof content === 'string')

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
