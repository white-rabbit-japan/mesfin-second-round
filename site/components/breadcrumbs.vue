<script setup lang="ts">
const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul class="px-8 lgUp:px-0 max-w-2xl mt-8 flex mx-auto">
    <li>
      <NuxtLink to="/" class="font-bold text-gray-strong no-underline">
        Japan Rabbit
      </NuxtLink>
      &nbsp;&nbsp;
    </li>

    <li v-for="link in links">
      <NuxtLink
        v-if="link.to"
        :to="link.to"
        class="font-bold text-gray-strong no-underline"
      >
        •&nbsp;&nbsp;{{ link.label }}&nbsp;&nbsp;
      </NuxtLink>

      <span v-else class="text-gray-strong">
        •&nbsp;&nbsp;{{ link.label }}
      </span>
    </li>
  </ul>
</template>
