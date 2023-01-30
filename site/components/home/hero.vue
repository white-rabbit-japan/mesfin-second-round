<script setup lang="ts">
import heroArtSrc from '~/assets/img/home/hero-art.svg?url'
type Hero = {
  hero: {
    cta: {
      link: string
      text: string
    }
    subText: string
    tagLine: string
  }
}

const query = groq`
  *[_type == "home"]{
    hero
  }[0]
`

const { data } = useLazySanityQuery<Hero>(query)
</script>

<template>
  <div
    class="relative -mt-3 h-[min(715px,_100vw_*_1.64)] xs:h-[660px]"
    v-if="data?.hero"
  >
    <div
      class="container relative flex flex-col h-full mx-auto smDown:text-center overflow-x-hidden"
    >
      <div
        class="z-10 max-w-sm pr-2 pt-28 smDown:mt-12 smDown:mx-auto smDown:pt-2"
      >
        <h2
          class="mb-12 -mt-1 text-base italic font-light mdDown:mb-6 text-gray-strong"
        >
          {{ data.hero.subText }}
        </h2>

        <h1
          class="font-bold leading-tight text-gray-strong text-4xl+ pt-1 mdDown:text-4xl"
        >
          {{ data.hero.tagLine }}
        </h1>
        <Button
          :to="data.hero.cta.link"
          class="inline-block mt-8 text-xl"
          is-accent
        >
          {{ data.hero.cta.text }}
        </Button>
      </div>

      <img
        :src="heroArtSrc"
        alt="hero art japan rabbit"
        class="absolute bottom-0 left-0 right-0 z-0 max-w-[1440px] w-screen mdDown:-translate-x-[230px] mdDown:w-[calc(100vw_+_270px)]"
      />
    </div>
  </div>
</template>
