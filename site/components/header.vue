<script setup>
import Logo from '~/assets/img/japanrabbit-logo.svg?component'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="z-10">
    <nav
      class="container flex flex-wrap items-center justify-between mx-auto mdUp:py-2 xlUp:py-4"
    >
      <NuxtLink to="/" aria-label="home">
        <Logo
          class="mt-1 lgDown:transform lgDown:scale-50 text-primary"
          alt="Japan Rabbit logo"
        />
      </NuxtLink>

      <div class="hidden lgDown:block smDown:-mr-4">
        <button
          :class="{
            [$style.hamburger]: true,
            [$style.isActive]: isMenuOpen,
          }"
          aria-label="menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul
        class="flex items-center justify-center flex-initial w-auto -mt-8 uppercase lgDown:w-full lgDown:mt-0 lgDown:pb-8"
        :class="isMenuOpen ? 'lgDown:block' : 'lgDown:hidden'"
      >
        <li class="text-center lgDown:pb-6 mr-5 lgDown:mr-0">
          <NavLink to="/" t-key="header.home" />
        </li>

        <li class="text-center lgDown:pb-6 mr-5 lgDown:mr-0">
          <NavLink to="https://help.japanrabbit.com/" t-key="header.help" />
        </li>

        <li class="lgDown:mb-5">
          <Button
            to="https://app.japanrabbit.com"
            class="table mx-auto xlUp:ml-2"
          >
            {{ $t('header.cta') }}
          </Button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style module>
.hamburger {
  position: relative;
  display: block;
  width: 3.25rem;
  height: 3.25rem;
  margin-left: auto;
  color: #4a4a4a;

  span {
    position: absolute;
    left: calc(50% - 8px);
    display: block;
    width: 16px;
    height: 1px;
    background-color: currentColor;
    transition: all 86ms ease-out;
    transform-origin: center;
  }

  span:nth-child(1) {
    top: calc(50% - 6px);
  }
  span:nth-child(2) {
    top: calc(50% - 1px);
  }
  span:nth-child(3) {
    top: calc(50% + 4px);
  }

  &.isActive {
    span:nth-child(1) {
      transform: translateY(5px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-5px) rotate(-45deg);
    }
  }
}
</style>
