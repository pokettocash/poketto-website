<template>
  <div class="background--alt">
    <nav class="container mx-auto flex items-center justify-between flex-wrap pt-8 px-12">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <a
          class="cursor-pointer inline-block w-8 grow"
          href="https://poketto.cash"
          rel="noopener noreferrer"
          title="Poketto Website"
        >
          <img
            alt="Poketto Icon"
            class="w-8"
            src="@/assets/svg/poketto-icon.svg"
            >
        </a>
      </div>
      <div class="hidden lg:block lg:inline-flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a class="block mt-4 lg:inline-block lg:mt-0 cursor-pointer gt-walsheim-regular text-black hover-link mr-5">
            Wallet
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 cursor-pointer gt-walsheim-regular text-black hover-link mr-5">
            Features
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 cursor-pointer gt-walsheim-regular text-black hover-link mr-5">
            What is xDai
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 cursor-pointer gt-walsheim-regular text-black hover-link">
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