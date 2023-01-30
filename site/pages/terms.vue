<script setup>
const links = [
  {
    key: 'privacy',
    href: 'https://www.iubenda.com/privacy-policy/52539869',
    text: 'terms.privacy',
    icon: 'user-shield',
    title: 'Privacy Policy',
  },
  {
    key: 'cookie',
    href: 'https://www.iubenda.com/privacy-policy/52539869/cookie-policy',
    text: 'terms.cookie',
    icon: 'cookie-bite',
    title: 'Cookie Policy',
  },
  {
    key: 'tandc',
    href: 'https://www.iubenda.com/terms-and-conditions/52539869',
    text: 'terms.tandc',
    icon: 'file-alt',
    title: 'Terms and Conditions',
  },
]

onMounted(() => {
  if (document.getElementById('iubenda')) return

  const script = document.createElement('script')

  script.id = 'iubenda-script'
  script.src = 'https://cdn.iubenda.com/iubenda.js'

  document.head.appendChild(script)
})
</script>

<template>
  <NuxtLayout name="main">
    <Title>{{ $t('terms.title') }}</Title>
    <div class="container pt-10 mx-auto">
      <div class="max-w-4xl">
        <h1
          class="font-bold leading-tight text-gray-strong text-4xl+ pt-28 mdDown:text-4xl mb-8"
        >
          Terms and Privacy
        </h1>
        <div class="flex flex-col space-y-4 pb-28">
          <a
            v-for="link in links"
            :key="link.key"
            class="flex text-xl no-underline hover:text-primary text-gray-strong iubenda-nostyle no-brand iubenda-noiframe iubenda-embed"
            :href="link.href"
            :title="link.title"
            target="_blank"
          >
            <FA :icon="['fal', link.icon]" fixed-width class="mr-2 h-6 w-6" />
            {{ $t(link.text) }}
            <FA
              :icon="['fal', 'external-link']"
              class="mt-1 ml-3 text-xs text-primary h-4 w-4"
            />
          </a>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
