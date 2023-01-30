<script setup lang="ts">
const props = defineProps({
  reference: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :to="`/${reference.slug.current}`">
    <slot />
  </NuxtLink>
</template>
