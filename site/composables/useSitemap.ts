export const useSitemap = async () => {
  const cms = await useNuxtApp().$cms

  return cms.collections.map((c) => ({
    text: c.breadcrumb,
    to: `/${c.slug.current}`,
  }))
}
