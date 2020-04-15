<template>
  <section class="projects container mx-auto" id="projects">
    <div class="py-20">
      <h1 class="relative text-center text-3xl font-semibold opacity-75">PROJECTS</h1>
      <div class="mt-20 lg:flex lg:flex-wrap xl:w-5/6 xl:mx-auto">
        <div
          class="item mb-10 w-5/6 max-w-md mx-auto bg-black rounded-lg overflow-hidden"
          style="box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5)"
          v-for="project in projects"
          :key="project._id"
        >
          <ProjectItem :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  components: {
    ProjectItem: () => import('~/components/ProjectItem')
  },
  data() {
    return {
      projects: [
        {
          _id: 0,
          name: 'Skullcandy',
          description:
            "Recreated a few of Skullcandy's pages, backend CRUD for User & Cart, explore the top quality headphones.",
          technologies: [
            {
              src: require('~/assets/img/nuxt.svg'),
              alt: 'Nuxt Logo'
            },
            {
              src: require('~/assets/img/tailwindcss.svg'),
              alt: 'TailwindCSS Logo'
            },
            {
              src: require('~/assets/img/node.svg'),
              alt: 'Node Logo'
            },
            {
              src: require('~/assets/img/mongodb.svg'),
              alt: 'MongoDB Logo'
            }
          ],
          background: require('~/assets/img/skullcandy_bg.jpg'),
          liveURL: 'https://skullcandy.herokuapp.com/',
          githubURL: 'https://github.com/bokismoki/skullcandy'
        },
        {
          _id: 1,
          name: 'Social App',
          description:
            'Facebook/Google OAuth login, backend CRUD for posts and comments, chat and track online users with Socket.io, like/dislike, follow/unfollow, in-app notifications.',
          technologies: [
            {
              src: require('~/assets/img/nuxt.svg'),
              alt: 'Nuxt Logo'
            },
            {
              src: require('~/assets/img/tailwindcss.svg'),
              alt: 'TailwindCSS Logo'
            },
            {
              src: require('~/assets/img/node.svg'),
              alt: 'Node Logo'
            },
            {
              src: require('~/assets/img/mysql.svg'),
              alt: 'MySQL Logo'
            },
            {
              src: require('~/assets/img/socket-io.svg'),
              alt: 'Socket.io Logo'
            }
          ],
          background: require('~/assets/img/social_app_bg.png'),
          liveURL: 'https://social-app-social.herokuapp.com/',
          githubURL: 'https://github.com/bokismoki/SocialApp'
        },
        {
          _id: 2,
          name: '</Jobs>',
          description:
            "Create job offers and connect them with your company's site, your potential emloyee will easily hear about you and start applying for the job.",
          technologies: [
            {
              src: require('~/assets/img/nuxt.svg'),
              alt: 'Nuxt Logo'
            },
            {
              src: require('~/assets/img/tailwindcss.svg'),
              alt: 'TailwindCSS Logo'
            },
            {
              src: require('~/assets/img/nest.svg'),
              alt: 'Node Logo'
            },
            {
              src: require('~/assets/img/mysql.svg'),
              alt: 'MongoDB Logo'
            }
          ],
          background: require('~/assets/img/jobs_bg.png'),
          liveURL: 'https://jobs-it.herokuapp.com/',
          githubURL: 'https://github.com/bokismoki/Jobs'
        },
        {
          _id: 3,
          name: 'Skullcandy',
          description:
            "Recreated Skullcandy's pages, backend for User & Cart, Stripe payment service.",
          technologies: [
            {
              src: require('~/assets/img/nuxt.svg'),
              alt: 'Nuxt Logo'
            },
            {
              src: require('~/assets/img/tailwindcss.svg'),
              alt: 'TailwindCSS Logo'
            },
            {
              src: require('~/assets/img/node.svg'),
              alt: 'Node Logo'
            },
            {
              src: require('~/assets/img/mongodb.svg'),
              alt: 'MongoDB Logo'
            }
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
.item {
  transform: scale(0.4);
  transition: transform 750ms;
}

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