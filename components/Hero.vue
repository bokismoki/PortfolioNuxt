<template>
  <section
    class="hero w-full h-screen flex bg-black"
    :style="{'background': `url(${heroBg}) center/cover no-repeat`}"
  >
    <div class="m-auto text-white text-center">
      <h1 class="text-2xl font-semibold sm:text-3xl lg:text-4xl xl:text-5xl">
        Welcome, I'm
        <span class="text-main-pink">Boris Bošnjak</span>.
      </h1>
      <h1
        class="text-lg font-semibold sm:text-xl lg:text-2xl xl:text-3xl"
      >I'm a front end web developer.</h1>
      <a
        class="inline-block border-white border-2 mt-5 py-2 px-5 hover:border-main-blue hover:text-main-blue focus:border-main-blue focus:text-main-blue lg:py-3 lg:px-6 lg:text-lg"
        href="#"
      >View my work</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      heroBg: require('~/assets/img/hero_bg.jpg')
    }
  }
}
</script>

<style scoped>
</style>