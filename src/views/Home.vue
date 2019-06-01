<template>
  <div>
    <div class="container mx-auto min-h-screen">
      <Header />
      <div class="my-10 mb-32 flex flex-col items-center">
        <div class="mt-16 inline-flex flex-row flex-no-wrap items-center">
          <div class="w-1/2 px-12 flex flex-col items-start">
            <h1 class="">Poketto</h1>
            <h2 class="">A payment wallet that your parents can easily use</h2>
            <div class="">The simplest, most secure and near instant way to pay friends and your every day items.</div>
            <button class="bg-red-600">lol</button>
          </div>
          <div class="w-1/2 max-w-xl px-16">
            <img src="https://poketto.cash/static/f8de452fe07e33711ff4eb838017a699/a417a/iphone-main.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex bg-orange-100">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-32">
        <div class="w-5/6">
          <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/4e74dd9cb48fe941858939f885378d4e-1558975072163/poketto%20fiverr%20scene%202.jpg?__cld_token__=exp=1559410551~hmac=d1e4deab65535fea12e20d96210ceec55ffc6ae812cfe023642fd286bb99b219" alt="" />
        </div>
        <h1 class="mt-8 text-5xl">A wallet for everyone, everywhere</h1>
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col items-center mt-32 mb-32">
        <h1 class="text-5xl">Let's be simple about it</h1>
        <p class="mt-2 text-center text-2xl">yadadadadayadadadadayadadadadayadadadadayadadadada
          yadadadadayadadadadayadadadadayadadadadayadadadada</p>
        <div class="mt-12 flex flex-row">
          <div class="max-w-xs">
            <img src="https://poketto.cash/static/f8de452fe07e33711ff4eb838017a699/a417a/iphone-main.png" alt="" />
          </div>
          <div class="max-w-xs">
            <img src="https://poketto.cash/static/f8de452fe07e33711ff4eb838017a699/a417a/iphone-main.png" alt="" />
          </div>
          <div class="max-w-xs">
            <img src="https://poketto.cash/static/f8de452fe07e33711ff4eb838017a699/a417a/iphone-main.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex bg-gray-200">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-32">
        <h1 class="text-5xl">Let's be simple about it</h1>
        <p class="mt-2 text-center text-2xl">yadadadadayadadadadayadadadadayadadadadayadadadada
          yadadadadayadadadadayadadadadayadadadadayadadadada</p>
        <div class="mt-12 flex flex-col">
          <div class="max-w-xs">
            <img src="https://poketto.cash/static/f8de452fe07e33711ff4eb838017a699/a417a/iphone-main.png" alt="" />
          </div>
          <div class="max-w-xs">
            <img src="https://poketto.cash/static/f8de452fe07e33711ff4eb838017a699/a417a/iphone-main.png" alt="" />
          </div>
          <div class="max-w-xs">
            <img src="https://poketto.cash/static/f8de452fe07e33711ff4eb838017a699/a417a/iphone-main.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-32">
        <div class="mt-16 inline-flex flex-row flex-no-wrap items-center">
          <div class="w-1/2 px-12 flex flex-col items-start">
            <h1 class="">Poketto</h1>
            <h2 class="">A payment wallet that your parents can easily use</h2>
            <div class="">The simplest, most secure and near instant way to pay friends and your every day items.</div>
            <button class="bg-red-600">lol</button>
          </div>
          <div class="w-1/2 max-w-xl px-16">
            <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/f29e95157e21269fa3dceb3185b3ce21-1559386554226/poketto%20xdai%20fiverr%202%20.jpg?__cld_token__=exp=1559429153~hmac=83e4b0b8cd6a7b00a581b6cedee8fe47f8387630182caf6e1ae699926a3554db" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex bg-gray-200">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-32">
        <div class="w-5/6">
          <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/4e74dd9cb48fe941858939f885378d4e-1558975072173/poketto%20fiverr%20friends%202.jpg?__cld_token__=exp=1559429153~hmac=ebf826f47d73008241c3b8aba5ca4d42818d38faae6ebfe13367c48c2cef554b" alt="" />
        </div>
        <h1 class="mt-8 text-5xl">A wallet for everyone, everywhere</h1>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  }
};
</script>
