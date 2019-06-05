<template>
  <div class="background--alt">
    <nav class="container mx-auto flex items-center justify-between flex-wrap pt-8 px-6 md:px-12">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <transition appear name="fadeDown">
          <a
            class="cursor-pointer inline-block w-8 grow"
            href="/"
            rel="noopener noreferrer"
          >
            <img
              alt="Poketto Icon"
              class="w-8"
              src="@/assets/svg/poketto-icon.svg"
              >
          </a>
        </transition>
      </div>
      <div class="hidden lg:block lg:inline-flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#wallet"
            v-smooth-scroll="{ duration: 1000, offset: 85 }"
            class="block mt-4 lg:inline-block lg:mt-0 cursor-pointer gt-walsheim-regular text-black hover-link mr-5"
            >
              Wallet
          </a>
          <a href="#features"
            v-smooth-scroll="{ duration: 1000 }"
            class="block mt-4 lg:inline-block lg:mt-0 cursor-pointer gt-walsheim-regular text-black hover-link mr-5"
            >
              Features
          </a>
          <a href="#xdai"
            v-smooth-scroll="{ duration: 1000 }"
            class="block mt-4 lg:inline-block lg:mt-0 cursor-pointer gt-walsheim-regular text-black hover-link mr-5"
            >
              What is xDai
          </a>
          <a href="#community"
            v-smooth-scroll="{ duration: 1000, offset: 95 }"
            class="block mt-4 lg:inline-block lg:mt-0 cursor-pointer gt-walsheim-regular text-black hover-link"
            >
              Community
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>