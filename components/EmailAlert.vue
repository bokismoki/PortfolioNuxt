<template>
  <div
    class="email_alert fixed text-white px-2 py-1 rounded-full w-2/3 max-w-xs text-center"
    :class="{'bg-red-600': !isSuccessful, 'bg-green-600': isSuccessful}"
  >{{alertMsg}}</div>
</template>

<script>
export default {
  name: 'EmailAlert',
  props: ['alertMsg', 'isSuccessful']
}
</script>

<style scoped>
.email_alert {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>