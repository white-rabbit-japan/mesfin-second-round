<script setup>
import Code from '~/components/blocks/code.vue'
import Figure from '~/components/blocks/figure.vue'
import externalLink from '~/components/blocks/externalLink.vue'
import internalLink from '~/components/blocks/internalLink.vue'
import StrikeThrough from '~/components/blocks/strike-through.vue'
import Underline from '~/components/blocks/underline.vue'

const props = defineProps({
  blocks: Object,
})

const serializers = {
  types: {
    figure: Figure,
  },
  marks: {
    code: Code,
    externalLink: externalLink,
    internalLink: internalLink,
    'strike-through': StrikeThrough,
    underline: Underline,
  },
}
</script>

<template>
  <div :class="$style.block">
    <SanityContent :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<style module>
.block {
  @apply text-gray-strong;

  h1 {
    @apply mt-8 mb-4 text-3xl text-primary font-semibold;
  }

  h2 {
    @apply mt-8 mb-4 text-2xl text-primary font-semibold;
  }

  h3 {
    @apply mt-8 mb-4 text-xl text-primary font-semibold;
  }

  h4,
  h5,
  h6 {
    @apply mt-8 mb-4 text-lg text-primary font-semibold;
  }

  p {
    @apply text-lg leading-8 mb-4;
  }

  ul {
    @apply text-lg leading-8 list-disc ml-6 mb-4;

  }

  ol {
    @apply text-lg leading-8 list-decimal ml-6 mb-4;
  }

  blockquote {
    @apply border-l-primary border-l-4 px-4 py-2 bg-gray-soft italic mb-4;
  }
}
</style>
