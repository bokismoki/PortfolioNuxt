<template>
  <div class="project_item">
    <a
      :href="project.liveURL"
      target="_blank"
      rel="noopener"
      class="bg_image block w-full h-64 relative"
    >
      <div
        class="absolute w-full h-full transitiong-bg transition-500"
        :style="{'background': `url(${project.background}) center/cover no-repeat`}"
      ></div>
    </a>
    <div
      class="relative text-white bg-main-darker px-5 py-3 flex flex-col"
      style="min-height: 150px;"
    >
      <div class="mb-5">
        <h1 class="uppercase font-semibold tracking-wide">{{project.name}}</h1>
        <p class="text-xs opacity-75">{{project.description}}</p>
      </div>
      <div class="flex items-center mt-auto">
        <img
          class="w-6 h-6 mr-3"
          v-for="(technologie, index) in project.technologies"
          :key="index"
          :src="technologie.src"
          :alt="technologie.alt"
        />
      </div>
      <div class="absolute right-0 bottom-0 mb-3 mr-5 flex items-center">
        <a
          class="live w-8 h-8 transition-all transition-500"
          :href="project.liveURL"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/img/live.svg" alt="Full Screen" />
        </a>
        <a
          class="github w-8 h-8 ml-5 transition-all transition-500"
          :href="project.githubURL"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/img/github.svg" alt="Github Logo" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: ['project']
}
</script>

<style scoped>
.github:hover,
.live:hover,
.github:focus,
.live:focus {
  @apply w-10;
  @apply h-10;
}

.bg_image:focus > div {
  background-position: 10% !important;
}
</style>