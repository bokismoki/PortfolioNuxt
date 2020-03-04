<template>
  <div class="email_popup w-full h-full flex">
    <div class="m-auto p-5">
      <div
        class="text-white font-semibold text-sm p-5 rounded text-center max-w-sm"
        :class="{'bg-red-700': !response.success, 'bg-green-700': response.success}"
      >{{response.msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailPopup',
  props: ['response']
}
</script>

<style scoped>
</style>