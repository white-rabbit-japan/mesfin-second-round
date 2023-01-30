<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :target="to && to.includes('http') ? '_blank' : '_self'"
    :class="[
      $style.button,
      isSuccess ? 'bg-success' : isAccent ? 'bg-accent' : 'bg-primary',
    ]"
    class="px-7 py-1.5 font-sans text-white no-underline rounded-2xl whitespace-nowrap cursor-pointer"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :class="[$style.button, isAccent ? 'bg-accent' : 'bg-primary']"
    class="px-7 py-1.5 font-sans text-white no-underline rounded-2xl whitespace-nowrap cursor-pointer"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: '',
  },
  isSuccess: {
    type: Boolean,
    default: false,
  },
  isAccent: {
    type: Boolean,
    default: false,
  },
})
</script>

<style module>
.button {
  box-shadow: 0 3px 6px #00000029;

  &:hover {
    filter: brightness(110%) saturate(110%);
  }
}
</style>
