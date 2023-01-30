<script setup>
import paymentSrc from '~/assets/img/home/reasons/payment.svg?url'
import shippingSrc from '~/assets/img/home/reasons/shipping.svg?url'
import auctionsSrc from '~/assets/img/home/reasons/auctions.svg?url'
import talkSrc from '~/assets/img/home/reasons/talk-to-sellers.svg?url'
import chatSrc from '~/assets/img/home/reasons/chat.svg?url'
import preorderSrc from '~/assets/img/home/reasons/preorder.svg?url'
import pickupSrc from '~/assets/img/home/reasons/in-store-pickup.svg?url'
import limitedSrc from '~/assets/img/home/reasons/limited-editions.svg?url'

const reasons = [
  { key: 'payment', src: paymentSrc, imageWidth: 80 },
  { key: 'shipping', src: shippingSrc, imageWidth: 70 },
  { key: 'auctions', src: auctionsSrc, imageWidth: 80 },
  { key: 'talkSellers', src: talkSrc, imageWidth: 80 },
  { key: 'chat', src: chatSrc, imageWidth: 70 },
  { key: 'preorders', src: preorderSrc, imageWidth: 70 },
  { key: 'pickup', src: pickupSrc, imageWidth: 70 },
  { key: 'limitedEditions', src: limitedSrc, imageWidth: 90 },
]
</script>

<template>
  <div>
    <div
      class="container mx-auto mt-6 mb-24 text-center text-gray-strong mdDown:pt-8"
    >
      <h3 class="max-w-4xl mx-auto text-3xl font-semibold mb-28 text-primary">
        {{ $t('home.reasons.title') }}
      </h3>
      <div class="flex flex-wrap justify-center">
        <div
          v-for="(reason, index) in reasons"
          :key="reason.key"
          class="w-64 my-2 smDown:mx-auto"
        >
          <div class="flex justify-center h-24">
            <img
              :src="reason.src"
              :width="reason.imageWidth"
              class="mx-auto"
              :alt="reason.key"
            />
          </div>
          <div class="px-6 mt-2">
            <div class="mb-4 text-xl font-bold text-primary">
              {{ $t(`home.reasons.${reason.key}.title`) }}
            </div>
            <div class="text-base font-normal">
              {{ $t(`home.reasons.${reason.key}.desc`) }}
            </div>
          </div>
          <br class="lgDown:hidden" :class="{ hidden: index > 3 }" />
        </div>
      </div>
    </div>
  </div>
</template>
