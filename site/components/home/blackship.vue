<script setup>
import Logo from '~/assets/img/home/blackship/logo.svg?component'
import Art from '~/assets/img/home/blackship/art.svg?component'
</script>

<template>
  <div class="container relative h-full pt-20 pb-40 mx-auto text-gray-strong">
    <div
      class="flex items-center justify-center w-full lgUp:translate-x-20 lgUp:transform mdDown:flex-col mdDown:space-y-12"
    >
      <div class="px-6">
        <Logo class="w-64 fill-current mdDown:mx-auto text-blackship" />

        <p class="mt-4 text-xl max-w-48 mdDown:text-center mdDown:mx-auto">
          {{ $t('home.blackship.text') }}
        </p>

        <Button
          class="inline-block mt-8 text-xl"
          to="https://blackship.com"
          is-success
        >
          {{ $t('home.blackship.cta') }}
        </Button>
      </div>
      <div class="px-6 overflow-x-hidden">
        <Art
          width="555"
          alt="package open doll"
          class="max-w-full lgUp:-mt-8 lgUp:min-w-[555px] mdDown:transform mdDown:translate-x-10"
        />
      </div>
    </div>
  </div>
</template>
