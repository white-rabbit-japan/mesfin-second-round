<script setup>
import worldSrc from '~/assets/img/home/world.svg?url'
</script>

<template>
  <div class="mb-24">
    <div class="container mx-auto">
      <h3
        class="max-w-4xl mx-auto mb-4 text-3xl font-semibold text-center text-primary"
      >
        {{ $t('home.why.title') }}
      </h3>
      <div
        class="max-w-3xl px-2 mx-auto text-xl font-normal text-center text-gray-strong"
      >
        {{ $t(`home.why.description`) }}
      </div>

      <div class="mt-4 text-center">
        <Button
          class="inline-block mt-8 text-xl"
          is-accent
          to="https://app.japanrabbit.com"
        >
          {{ $t('home.why.cta') }}
        </Button>
      </div>

      <img
        :src="worldSrc"
        alt="customers all around the world"
        class="mx-auto mt-6"
      />

      <div
        class="max-w-2xl mx-auto mt-20 text-xl italic text-center text-primary"
        v-html="$t('home.why.note')"
      />
    </div>
  </div>
</template>
