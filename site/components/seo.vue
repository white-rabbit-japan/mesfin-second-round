<script setup lang="ts">
const props = defineProps<{
  metaDescription: string
  metaKeywords: string
  openGraph: {
    title: string
    description: string
    type: string
    image: {
      asset: {
        url: string
        metadata: { dimensions: { height: number; width: number } }
      }
    }
  }
  pageTitle: string
}>()
</script>

<template>
  <Head>
    <Title v-if="pageTitle">{{ pageTitle }}</Title>

    <Meta
      v-if="metaDescription"
      name="description"
      :content="metaDescription"
    />
    <Meta v-if="metaKeywords" name="keywords" :content="metaKeywords" />

    <!-- Facebook Meta Tags -->
    <Meta v-if="openGraph.type" property="og:type" :content="openGraph.type" />
    <Meta
      v-if="openGraph.title"
      property="og:title"
      :content="openGraph.title"
    />
    <Meta
      v-if="openGraph.description"
      property="og:description"
      :content="openGraph.description"
    />
    <Meta
      v-if="openGraph.image?.asset.url"
      property="og:image"
      :content="openGraph.image?.asset.url"
    />
    <Meta v-if="openGraph.title" property="og:alt" :content="openGraph.title" />
    <Meta
      v-if="openGraph.image?.asset.metadata.dimensions.width.toString()"
      property="og:width"
      :content="openGraph.image?.asset.metadata.dimensions.width.toString()"
    />
    <Meta
      v-if="openGraph.image?.asset.metadata.dimensions.height.toString()"
      property="og:height"
      :content="openGraph.image?.asset.metadata.dimensions.height.toString()"
    />
    <Meta
      v-if="openGraph.image?.asset.url"
      property="og:image:secure_url"
      :content="openGraph.image?.asset.url"
    />

    <!-- Twitter Meta Tags -->
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta property="twitter:url" content="https://japanrabbit.com/changelog" />
    <Meta property="twitter:domain" content="japanrabbitcom" />
    <Meta
      v-if="openGraph.title"
      name="twitter:title"
      :content="openGraph.title"
    />
    <Meta
      v-if="openGraph.description"
      name="twitter:description"
      :content="openGraph.description"
    />
    <Meta
      v-if="openGraph.image?.asset.url"
      name="twitter:image"
      :content="openGraph.image?.asset.url"
    />
  </Head>
</template>
