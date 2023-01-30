<script setup>
import Logo from '~/assets/img/japanrabbit-logo.svg?component'
import FooterArt from '~/assets/img/footer-art.svg?component'

const sections = [
  {
    title: 'support',
    links: [
      {
        key: 'help',
        to: 'https://help.japanrabbit.com',
      },
      {
        key: 'fees',
        to: 'https://app.japanrabbit.com/pricing',
      },
      {
        key: 'calculator',
        to: 'https://app.japanrabbit.com/shipping-calculator',
      },
      {
        key: 'systemStatus',
        to: 'https://status.japanrabbit.com/',
      },
      {
        key: 'changelog',
        to: '/changelog',
      },
    ],
  },
  {
    title: 'company',
    links: [
      {
        key: 'about',
        to: 'https://www.whiterabbitexpress.com/about',
      },
      {
        key: 'careers',
        to: 'https://careers.whiterabbitjapan.com',
      },
    ],
  },
  {
    title: 'sister',
    links: [
      {
        text: 'Blackship',
        to: 'https://blackship.com',
      },
      {
        text: 'OMG Japan',
        to: 'https://omgjapan.com',
      },
      {
        text: 'White Rabbit Press',
        to: 'https://whiterabbitpress.com',
      },
    ],
  },
]

const sns = [
  {
    name: 'twitter',
    to: 'https://twitter.com/japanrabbitcom',
    ariaLabel: 'blackship on twitter',
  },
  {
    name: 'facebook-square',
    to: 'https://www.facebook.com/WhiteRabbitExpress/',
    ariaLabel: 'blackship on facebook',
  },
]
</script>

<template>
  <footer class="text-gray-strong font-medium">
    <div
      class="container flex flex-col items-center justify-between pt-10 pb-10 mx-auto text-sm"
    >
      <div
        class="flex flex-row justify-between w-full lgDown:flex-wrap mdDown:flex-col mdDown:gap-2 mdDown:items-center"
      >
        <div class="w-1/4 pr-6 lgDown:w-full">
          <Logo
            class="w-40 mb-3 -mt-4 -ml-2 transform scale-90 text-primary"
            alt="Japan Rabbit logo"
          />
          <div class="pl-2 mt-8 mb-6 flex space-x-5">
            <NuxtLink
              v-for="icon in sns"
              :key="icon.name"
              :to="icon.to"
              target="_blank"
              class="text-xs text-gray-strong"
              :aria-label="icon.ariaLabel"
            >
              <FA :icon="['fab', icon.name]" class="w-6 h-6" />
            </NuxtLink>
          </div>
          <p class="lgUp:max-w-sm">
            {{ $t('footer.siteDescription') }}
          </p>
        </div>

        <hr
          class="w-full my-6 border-gray-strong xlUp:hidden mdDown:border-transparent"
        />

        <div
          v-for="section in sections"
          :key="sections.title"
          class="w-1/5 mb-4 mdDown:w-2/5 whitespace-nowrap mdDown:text-center"
        >
          <div
            class="mb-3 text-lg font-bold uppercase text-primary lgDown:text-lg"
          >
            {{ $t(`footer.${section.title}`) }}
          </div>
          <ul>
            <li
              v-for="link in section.links"
              :key="link.key || link.text"
              class="pb-3"
            >
              <NuxtLink
                :to="link.to"
                :target="link.to.startsWith('https://') ? '_blank' : '_self'"
                class="no-underline hover:text-primary text-gray-strong"
              >
                {{ link.text || $t('footer.' + link.key) }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-white bg-primary">
      <div class="container relative pt-4 pb-8 mx-auto text-center">
        {{ $t('footer.copyright', [new Date().getFullYear()]) }}
        &middot;
        <NuxtLink to="/terms" class="text-white no-underline">
          {{ $t('footer.terms') }}
        </NuxtLink>

        <FooterArt
          class="absolute top-0 right-12 w-72 lgDown:w-56 mdDown:w-40 mdDown:right-2"
          style="transform: translateY(-99%)"
          width="294"
        />
      </div>
    </div>
  </footer>
</template>
