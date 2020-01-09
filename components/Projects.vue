<template>
  <section class="projects container mx-auto">
    <div class="py-20">
      <h1 class="relative text-center text-3xl font-semibold opacity-75">PROJECTS</h1>
      <div class="mt-20 lg:flex lg:flex-wrap xl:w-5/6 xl:mx-auto">
        <div
          class="mb-10 w-5/6 max-w-md mx-auto bg-black rounded-lg overflow-hidden"
          style="box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5)"
          v-for="project in projects"
          :key="project._id"
        >
          <ProjectsItem :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  components: {
    ProjectsItem: () => import('~/components/ProjectsItem')
  },
  data() {
    return {
      projects: [
        {
          _id: 0,
          name: 'Skullcandy',
          description:
            "Recreated Skullcandy's pages, backend for User & Cart, Stripe payment service.",
          technologies: [
            require('~/assets/img/nuxt.svg'),
            require('~/assets/img/tailwindcss.svg'),
            require('~/assets/img/node.svg'),
            require('~/assets/img/mongodb.svg')
          ],
          background: require('~/assets/img/skullcandy_bg.jpg'),
          liveURL: 'https://skullcandy.herokuapp.com/',
          githubURL: 'https://github.com/bokismoki/skullcandy'
        },
        {
          _id: 1,
          name: 'Skullcandy',
          description:
            "Recreated Skullcandy's pages, backend for User & Cart, Stripe payment service.",
          technologies: [
            require('~/assets/img/nuxt.svg'),
            require('~/assets/img/tailwindcss.svg'),
            require('~/assets/img/node.svg'),
            require('~/assets/img/mongodb.svg')
          ],
          background: require('~/assets/img/skullcandy_bg.jpg'),
          liveURL: 'https://skullcandy.herokuapp.com/',
          githubURL: 'https://github.com/bokismoki/skullcandy'
        },
        {
          _id: 2,
          name: 'Skullcandy',
          description:
            "Recreated Skullcandy's pages, backend for User & Cart, Stripe payment service.",
          technologies: [
            require('~/assets/img/nuxt.svg'),
            require('~/assets/img/tailwindcss.svg'),
            require('~/assets/img/node.svg'),
            require('~/assets/img/mongodb.svg')
          ],
          background: require('~/assets/img/skullcandy_bg.jpg'),
          liveURL: 'https://skullcandy.herokuapp.com/',
          githubURL: 'https://github.com/bokismoki/skullcandy'
        },
        {
          _id: 3,
          name: 'Skullcandy',
          description:
            "Recreated Skullcandy's pages, backend for User & Cart, Stripe payment service.",
          technologies: [
            require('~/assets/img/nuxt.svg'),
            require('~/assets/img/tailwindcss.svg'),
            require('~/assets/img/node.svg'),
            require('~/assets/img/mongodb.svg')
          ],
          background: require('~/assets/img/skullcandy_bg.jpg'),
          liveURL: 'https://skullcandy.herokuapp.com/',
          githubURL: 'https://github.com/bokismoki/skullcandy'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects > div > h1::after {
  @apply absolute;
  @apply bg-black;
  @apply bottom-0;
  @apply w-24;
  @apply h-1;
  content: '';
  left: calc(50% - 45px);
}
</style>