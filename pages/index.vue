<template>
  <div>
    <Hero />
    <Navbar />
    <Projects />
    <hr class="border-2 border-white" />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import('~/components/Hero'),
    Navbar: () => import('~/components/Navbar'),
    Projects: () => import('~/components/Projects'),
    About: () => import('~/components/About'),
    Contact: () => import('~/components/Contact'),
    Footer: () => import('~/components/Footer')
  },
  data() {
    return {}
  },
  methods: {
    scrollEvent() {
      const heroSection = document.querySelector('.hero'),
        projectsSection = document.querySelector('.projects'),
        aboutSection = document.querySelector('.about'),
        contactSection = document.querySelector('.contact'),
        positionHero = heroSection.getBoundingClientRect(),
        positionProjects = projectsSection.getBoundingClientRect(),
        positionAbout = aboutSection.getBoundingClientRect(),
        positionContact = contactSection.getBoundingClientRect(),
        navLinks = document.querySelectorAll('.navbar a')

      if (positionHero.y <= 0) {
        navLinks.forEach(item => item.classList.remove('text-main-pink'))
        navLinks[0].classList.add('text-main-pink')
      }
      if (positionProjects.y <= 50) {
        navLinks.forEach(item => item.classList.remove('text-main-pink'))
        navLinks[1].classList.add('text-main-pink')
      }
      if (positionAbout.y <= 50) {
        navLinks.forEach(item => item.classList.remove('text-main-pink'))
        navLinks[2].classList.add('text-main-pink')
      }
      if (positionContact.y <= 200) {
        navLinks.forEach(item => item.classList.remove('text-main-pink'))
        navLinks[3].classList.add('text-main-pink')
      }
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollEvent)
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
