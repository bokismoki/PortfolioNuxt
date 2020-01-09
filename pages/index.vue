<template>
  <div>
    <Hero />
    <Navbar />
    <Projects />
    <hr class="border-2 border-white" />
    <About />
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import('~/components/Hero'),
    Navbar: () => import('~/components/Navbar'),
    Projects: () => import('~/components/Projects'),
    About: () => import('~/components/About')
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
