<template>
  <div class="flex flex-col min-h-screen font-sans leading-normal">
    <Header />

    <main :class="$style.main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style module>
.main {
  position: relative;
  z-index: 1;
  padding-bottom: 128px;

  &::before {
    position: absolute;
    top: -12px;
    right: 0;
    bottom: 25%;
    left: 0;
    z-index: -1;
    content: '';
    background-color: white;
    transform: skewY(-4.5deg);
    transform-origin: 50% 0;
  }

  &::after {
    position: absolute;
    top: 25%;
    right: 0;
    bottom: 46px;
    left: 0;
    z-index: -1;
    content: '';
    background-color: white;
    transform: skewY(4.5deg);
    transform-origin: 50% 0;
  }
}
</style>
