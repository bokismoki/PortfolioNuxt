<template>
  <section class="contact bg-main-dark" id="contact">
    <div class="py-20">
      <h1 class="relative text-center text-white text-3xl font-semibold">CONTACT</h1>
      <p class="text-main-blue text-center text-sm mt-5">Have a question or want to work together?</p>
      <form class="mt-5" action="https://formspree.io/borisbosnjak084@gmail.com" method="POST">
        <div class="max-w-lg mx-auto px-5">
          <label class="text-white opacity-75 block my-1 cursor-pointer" for="name">Name:</label>
          <input
            class="block w-full px-2 py-1 text-white bg-main-darkest text-sm"
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            required
          />
          <label class="text-white opacity-75 block my-1 cursor-pointer" for="email">Email:</label>
          <input
            class="block w-full my-1 px-2 py-1 text-white bg-main-darkest text-sm"
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            required
          />
          <label class="text-white opacity-75 block my-1 cursor-pointer" for="message">Message:</label>
          <textarea
            class="w-full px-2 py-1 text-white bg-main-darkest text-sm"
            name="message"
            placeholder="Your message"
            id="message"
            required
          ></textarea>
          <button
            class="text-white block ml-auto text-xs mt-2 px-2 py-1 uppercase font-semibold border-white border-2 hover:border-main-blue hover:bg-main-blue focus:border-main-blue focus:bg-main-blue transition-colors transition-500"
            type="submit"
          >Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact {
  clip-path: polygon(50% 10%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
}
.contact > div > h1::after {
  @apply absolute;
  @apply bg-white;
  @apply bottom-0;
  @apply w-24;
  @apply h-1;
  content: '';
  left: calc(50% - 45px);
}
textarea {
  min-height: 150px !important;
  max-height: 200px !important;
}
</style>