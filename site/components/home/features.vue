<script setup>
import vipSrc from '~/assets/img/home/features/vip.svg?url'
import quoteSrc from '~/assets/img/home/features/quote.svg?url'
import storageSrc from '~/assets/img/home/features/storage.svg?url'
import moneybackSrc from '~/assets/img/home/features/moneyback.svg?url'

const features = [
  { key: 'vip', src: vipSrc },
  { key: 'quote', src: quoteSrc },
  { key: 'storage', src: storageSrc },
  { key: 'moneyback', src: moneybackSrc },
]
</script>

<template>
  <div class="waves-section">
    <div class="container mx-auto">
      <h3
        class="max-w-4xl mx-auto text-3xl font-semibold text-center mb-28 text-primary"
      >
        {{ $t('home.features.title') }}
      </h3>
      <div style="max-width: 722px" class="mx-auto space-y-6 mdDown:space-y-16">
        <div
          v-for="(feat, index) in features"
          :key="feat.key"
          class="flex items-center justify-between mdDown:flex-col"
          :class="index % 2 === 0 ? 'flex-row-reverse' : ''"
        >
          <div class="px-2 text-center">
            <img :src="feat.src" :alt="feat.key" :width="294" />
          </div>
          <div
            class="items-center px-2 py-4 mdDown:text-center max-w-80 mdDown:max-w-full"
          >
            <div class="mb-4 text-3xl font-bold text-primary">
              {{ $t(`home.features.${feat.key}.title`) }}
            </div>
            <div class="text-xl font-normal text-gray-strong">
              {{ $t(`home.features.${feat.key}.desc`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
