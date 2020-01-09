<template>
  <div class="project_item">
    <a
      :href="project.liveURL"
      target="_blank"
      class="block w-full h-64 relative"
      :style="{'background': `url(${project.background}) center/cover no-repeat`}"
    >
      <div class="absolute w-full h-full"></div>
    </a>
    <div class="relative text-white bg-main-darker px-5 py-3">
      <h1 class="uppercase font-semibold tracking-wide">{{project.name}}</h1>
      <p class="text-xs opacity-75 w-5/6">{{project.description}}</p>
      <div class="flex items-center mt-5">
        <img
          class="w-6 h-6 mr-3"
          v-for="(technologie, index) in project.technologies"
          :key="index"
          :src="technologie"
        />
      </div>
      <a class="absolute right-0 bottom-0 mb-3 mr-5" :href="project.githubURL" target="_blank">
        <img class="w-8 h-8" src="~/assets/img/github.svg" alt="Github Logo" />
      </a>
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
</style>