<script setup>
setResponseStatus(404)
</script>

<template>
  <NuxtLayout name="main">
    <Title>{{ $t('notFound.title') }}</Title>
    <div class="flex flex-col justify-center text-center align-middle">
      <img src="~/assets/img/404.svg?url" class="max-w-5xl mx-auto" />

      <div class="mb-4 text-2xl">
        {{ $t('notFound.doesntExist') }}
      </div>

      <RouterLink class="text-lg" to="/">
        {{ $t('notFound.goHome') }}
      </RouterLink>
    </div>
  </NuxtLayout>
</template>
