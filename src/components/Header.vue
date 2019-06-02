<template>
  <nav class="container mx-auto flex items-center justify-between flex-wrap pt-8 px-12">
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      <img class="w-8" src="@/assets/svg/poketto-icon.svg" alt="" />
    </div>
    <div class="hidden lg:block lg:inline-flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
          Docs
        </a>
        <a class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
          Examples
        </a>
        <a class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black">
          Blog
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>