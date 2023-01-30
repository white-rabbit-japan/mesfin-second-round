import externalLink from './objects/externalLink'
import internalLink from './objects/internalLink'
import list from './objects/list'
import openGraph from './objects/openGraph'
import richText from './objects/richText'
import seo from './objects/seo'

import changelogEntry from './documents/changelogEntry'
import productGenre from './documents/productGenre'
import shop from './documents/shop'
import competitor from './documents/competitor'
import page from './documents/page'

import changelogPage from './pages/changelog'

import homePage from './pages/home'
import hero from './pages/home/hero'

import addPageGroup from '../utils/addPageGroup'
import addSeo from '../utils/addSeo'

export const schemaTypes = [
  // generic types to be used anywhere
  internalLink,
  externalLink,
  list,
  openGraph,
  richText,
  seo,

  // used to form collections of documents
  changelogEntry,
  competitor,
  productGenre,
  shop,
  page,

  hero,

  // these turn into pages on the static site
  addSeo(addPageGroup(changelogPage)),
  addSeo(addPageGroup(homePage)),
]
