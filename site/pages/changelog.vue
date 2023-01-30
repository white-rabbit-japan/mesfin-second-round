<script setup lang="ts">
type Changelog = {
  changelog: {
    seo: {
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
    }
    title: string
  }
  entries: {
    _id: string
    body: any[]
    date: Date
    title: string
  }[]
}

const query = groq`
  {
    "changelog": *[_type == "changelog"]{
      title,
      seo{metaDescription, metaKeywords, openGraph{title, description, type, image{asset->} }, pageTitle}
    }[0],
    "entries": *[_type == "changelogEntry" && !(_id in path("drafts.**"))]{
      _id,
      body[]{..., markDefs[]{..., reference->}, image{asset->}},
      date,
    } | order(date desc)
  }
`

const { data, pending, error } = useLazySanityQuery<Changelog>(query)
</script>

<template>
  <NuxtLayout name="main">
    <Seo v-if="data?.changelog" v-bind="data.changelog.seo" />

    <div v-if="data?.changelog" class="pt-16">
      <div
        class="flex justify-center px-2 items-center mb-20 flex-col mdUp:flex-row gap-4 mdUp:gap-8"
      >
        <img
          src="~/assets/img/shop-bunny.svg?url"
          alt="shopping bunny"
          class="h-32 mdUp:h-32"
        />
        <h1
          class="text-center leading-tight text-primary text-4xl mdUp:text-2xl+"
        >
          {{ data.changelog.title }}
        </h1>
      </div>

      <div
        v-if="!pending && !data.entries.length"
        class="container mx-auto text-center"
      >
        <div v-if="error">
          <div class="mb-4 text-2xl">Could not load changelog!</div>
          <div class="text-primary">{{ error }}</div>
        </div>
        <div v-else class="text-2xl">
          No changes have been posted yet. Check back later.
        </div>
      </div>

      <div
        v-for="(entry, index) in data?.entries?.filter(Boolean) || []"
        :key="entry._id"
        class="!max-w-5xl mx-auto container"
        :id="entry.date.toString()"
      >
        <div class="flex flex-col mdUp:flex-row gap-4 mdUp:gap-0 items-start">
          <NuxtLink
            :to="`#${entry.date.toString()}`"
            class="mdUp:sticky top-4 font-light text-gray-strong whitespace-nowrap no-underline mdUp:w-1/4"
          >
            {{
              new Date(entry.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })
            }}
          </NuxtLink>

          <Blocks :blocks="entry.body" class="[&>*]:!mt-0 mdUp:w-3/4" />
        </div>

        <hr
          v-if="index < (data.entries.length || 0) - 1"
          class="border-gray-soft mt-14 mb-20 border-t-2"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
