<script setup>
import VLazyImage from 'v-lazy-image'

const props = defineProps({
  image: Object,
  altText: String,
  caption: String,
})
</script>

<template>
  <figure class="my-8">
    <v-lazy-image
      :src="image.asset.url"
      :src-placeholder="image.asset.metadata.lqip"
      :alt="altText"
      :srcset="`${image.asset.url}?auto=format&w=300 300w, ${image.asset.url}?auto-format&w=400 400w, ${image.asset.url}?auto-format&w=552 552w`"
      sizes="(max-width: 400px) 300px, (max-width: 500px) 400px, 552px"
      class="object-contain w-full max-h-[500px] object-left"
    />
    <figcaption v-if="caption" class="italic text-center mt-2">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 250ms;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
