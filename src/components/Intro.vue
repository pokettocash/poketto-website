<template>
  <div class="container mx-auto min-h-screen">
    <Header />
    <div class="my-10 flex flex-col items-center">
    <div class="mt-16 inline-flex flex-row flex-no-wrap items-center">
      <div class="w-1/2 px-12 flex flex-col items-start">
        <h1 class="">Poketto</h1>
        <h2 class="">A payment wallet that your parents can easily use</h2>
        <div class="">The simplest, most secure and near instant way to pay friends and your every day items.</div>
        <button class="bg-red-600">lol</button>
      </div>
      <div class="w-1/2 max-w-xl px-16">
        <!-- <img :src="coverImageURL" alt="" /> -->
        <img src="https://poketto.cash/static/f8de452fe07e33711ff4eb838017a699/a417a/iphone-main.png" alt="" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Intro",
  components: {
    Header
  }
};
</script>