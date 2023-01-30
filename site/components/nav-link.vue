<template>
  <NuxtLink
    :exact-active-class="$style.activeLink"
    :class="isActive ? [$style.link, $style.activeLink] : $style.link"
    :to="to"
    :target="to?.includes(':') ? '_blank' : '_self'"
    class="cursor-pointer"
  >
    {{ $t(tKey) }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  tKey: String,
  to: String,
  isActive: Boolean,
})
</script>

<style module>
.link {
  @apply relative text-primary no-underline font-medium min-w-full px-2 leading-relaxed;

  transition: all 0.2s ease;

  &::after {
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 2px;
    content: ' ';
    transition: all 0.2s ease;

    @apply bg-primary;
  }
  &:hover {
    &::after {
      left: 2.5%;
      width: 95%;
    }
  }
}

.activeLink {
  &::after {
    left: 2.5%;
    width: 95%;
  }
}
</style>
