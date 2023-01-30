import fs from 'fs'

export default () => {
  const robotsTxt = `User-agent: *
${process.env.CF_PAGES_BRANCH === 'master' ? '' : 'Disallow: /'}
Sitemap: https://japanrabbit.com/sitemap.xml`

  fs.writeFileSync('public/robots.txt', robotsTxt)
}
