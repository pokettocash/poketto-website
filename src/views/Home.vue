<template>
  <div>
    <Header />
    <div class="container mx-auto flex min-h-screen">
      <div class="flex">
        <div class="inline-flex flex-row flex-no-wrap items-center">
          <div class="w-1/2 px-12 flex flex-col items-start">
          <img alt="Poketto text" src="@/assets/svg/poketto-text.svg">
          <h2 class="mt-8 text-4xl">A simple payment wallet that <br> you can also show your parents </h2>
          <div class="mt-4 text-lg">The simplest, most secure and near instant way <br> to pay friends and your every day items.</div>
          <a
            class="mt-8"
            href="https://poketto.cash"
            target="_blank"
            rel="noopener noreferrer"
            title="App store link"
          >
            <img
              alt="App store badge"
              class="w-40 cursor-pointer"
              src="@/assets/svg/app-store.svg"
              >
          </a>
        </div>
        <div class="w-1/2 px-16">
          <img src="@/assets/img/intro/iphone@2x.png" alt="" />
        </div>
        </div>
      </div>
    </div>
    <div class="flex bg-gray-100">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-32">
        <div class="w-5/6">
          <img src="@/assets/img/illustrations/everyone.png" alt="" />
        </div>
        <h1 class="mt-8 text-5xl">A wallet for everyone, everywhere</h1>
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col flex-no-wrap items-center mt-32 mb-32">
        <h1 class="text-5xl">Let's be simple about it</h1>
        <p class="mt-2 text-center text-2xl">yadadadadayadadadadayadadadadayadadadadayadadadada
          yadadadadayadadadadayadadadadayadadadadayadadadada</p>
        <div class="mt-12 max-w-5xl flex flex-row items-center justify-around">
          <div class="max-w-xs mr-6">
            <img src="@/assets/img/app/settings@2x.png" alt="" />
          </div>
          <div class="max-w-xs mr-4">
            <img src="@/assets/img/app/request@2x.png" alt="" />
          </div>
          <div class="max-w-lg">
            <img src="@/assets/img/intro/iphone-alt@3x.png" alt="" />
          </div>
          <div class="max-w-xs ml-4">
            <img src="@/assets/img/app/pay@2x.png" alt="" />
          </div>
          <div class="max-w-xs ml-6">
            <img src="@/assets/img/app/pay-amount@2x.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex bg-gray-100">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-32">
        <h1 class="text-5xl">Let's be simple about it</h1>
        <p class="mt-2 text-center text-2xl">yadadadadayadadadadayadadadadayadadadadayadadadada
          yadadadadayadadadadayadadadadayadadadadayadadadada</p>
        <div class="mt-12 flex flex-col">
          <div class="max-w-xs">
            <img src="@/assets/img/illustrations/instant_payments.png" alt="" />
          </div>
          <div class="max-w-xs">
            <img src="@/assets/img/illustrations/wallet_phone.png" alt="" />
          </div>
          <div class="max-w-xs">
            <img src="@/assets/img/illustrations/addresses_contacts.png" alt="" />
          </div>
          <div class="max-w-xs">
            <img src="@/assets/img/illustrations/open_source.png" alt="" />
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
          <div class="w-1/2 max-w-5xl px-16">
            <img src="@/assets/img/illustrations/xdai.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex bg-gray-100">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-32">
        <div class="w-5/6">
          <img src="@/assets/img/illustrations/done_sunday.png" alt="" />
        </div>
        <h1 class="mt-8 text-5xl">Enabling all to enjoy</h1>
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
