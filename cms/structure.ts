import { StructureBuilder } from 'sanity/desk'

import {
  FaFile,
  FaExchangeAlt,
  FaHome,
  // FaThList,
  // FaShoppingBag,
  // FaStore,
  // FaThumbsDown,
} from 'react-icons/fa'

// Context includes `currentUser` and the client
export const structure = (S: StructureBuilder, context: object) => {
  return S.list()
    .title('Content')

    .items([
      S.listItem()
        .title('Site Pages')
        .icon(FaFile)
        .child(
          S.list()
            .title('Site Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .icon(FaHome)
                .child(S.document().schemaType('home').documentId('home')),
              S.listItem()
                .title('Changelog')
                .icon(FaExchangeAlt)
                .child(
                  S.document().schemaType('changelog').documentId('changelog')
                ),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Changelog Entries')
        .icon(FaExchangeAlt)
        .child(
          S.documentTypeList('changelogEntry').schemaType('changelogEntry')
        ),

      // S.listItem()
      //   .title('Collections')
      //   .icon(FaThList)
      //   .child(S.documentTypeList('collection').schemaType('collection')),

      // S.listItem()
      //   .title('Product Genres')
      //   .icon(FaShoppingBag)
      //   .child(S.documentTypeList('productGenre').schemaType('productGenre')),

      // S.listItem()
      //   .title('Shops')
      //   .icon(FaStore)
      //   .child(S.documentTypeList('shop').schemaType('shop')),

      // S.listItem()
      //   .title('Competitors')
      //   .icon(FaThumbsDown)
      //   .child(S.documentTypeList('competitor').schemaType('competitor')),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'page',
            'home',
            'changelog',
            'changelogEntry',
            'collection',
            'productGenre',
            'shop',
            'competitor',
            'media.tag',
          ].includes(listItem.getId() as string)
      ),
    ])
}
