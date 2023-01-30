<template>
  <Html>
    <Head>
      <Title>{{ TITLE }}</Title>
      <Meta name="description" :content="DESCRIPTION" />
      <Meta name="keywords" content="Japan Rabbit,Japan,proxy,buying" />

      <!-- Favicon setup -->
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />

      <Link rel="manifest" href="/favicon/site.webmanifest" />
      <Link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#E32C1B"
      />
      <Meta name="msapplication-TileColor" content="#1F1E29" />
      <Meta name="theme-color" content="#ffffff" />

      <!-- Facebook Meta Tags -->
      <Meta property="og:url" :content="URL" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" :content="TITLE" />
      <Meta property="og:description" :content="DESCRIPTION" />
      <Meta property="og:image" :content="IMAGE" />
      <Meta property="og:alt" :content="TITLE" />
      <Meta property="og:width" content="1200" />
      <Meta property="og:height" content="630" />
      <Meta property="og:image:secure_url" :content="IMAGE" />

      <!-- Twitter Meta Tags -->
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta property="twitter:url" :content="URL" />
      <Meta property="twitter:domain" content="japanrabbitcom" />
      <Meta name="twitter:title" :content="TITLE" />
      <Meta name="twitter:description" :content="DESCRIPTION" />
      <Meta name="twitter:image" :content="IMAGE" />
    </Head>

    <Body class="bg-gray">
      <NuxtPage />
    </Body>
  </Html>
</template>

<script setup lang="ts">
const TITLE = 'Japan Rabbit | Proxy-buying from Japan'
const DESCRIPTION =
  'Pioneers of proxy-buying from Japan. We treat everyone like a VIP. Innovative, customer-focused, and honest. Shop any Japanese store, simple and easy.'
const IMAGE = 'https://japanrabbit.com/img/japanrabbit-sns.png'
const URL = 'https://japanrabbit.com'
</script>
