<template>
  <div>
    <Hero />
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import ('~/components/Hero')
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
