<template>
  <NuxtLayout name="main">
    <Title>{{ $t('style.title') }}</Title>
    <div>
      <div class="container py-16 mx-auto text-purple-100 sm:py-8">
        <div class="text-left">
          <h2 :class="$style.title" class="mb-12">
            {{ $t('style.general.brandAndStyleGuide') }}
          </h2>

          <p class="mb-4">
            <a
              class="text-xl no-underline hover:text-primary text-gray-strong"
              href="https://company-236235.frontify.com/d/8dFHDFF9BEQp"
              title="Japan Rabbit Style Guide"
              target="_blank"
            >
              {{ $t('style.general.styleGuideLinkText') }}
              <FA
                :icon="['fal', 'external-link']"
                class="inline h-5 mb-1 ml-1"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style module>
.title {
  @apply text-4xl font-sansTitle text-center;
  @screen mdDown {
    @apply text-3xl;
  }
}
</style>
