<template>
  <div class="pt-24 pb-16 bg-white p-8 background--alt">
    <div class="container mx-auto text-left opacity-100 text-sm lg:px-4">
      <div
        class="flex flex-col justify-center items-start content-start md:flex-row mb-4"
      >
        <div class="sm:w-1/4 h-auto">
          <a
            class="cursor-pointer inline-block w-8 grow"
            href="https://poketto.cash"
            target="_blank"
            rel="noopener noreferrer"
            title="Poketto Website"
          >
            <img
              alt="Poketto Icon"
              class="w-8"
              src="@/assets/svg/poketto-icon.svg"
              >
          </a>
          <p
            class="mt-32 text-left gt-walsheim-regular text-grey text-sm opacity-50 hidden md:block"
          >
            © Poketto Cash
          </p>
        </div>
        <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div class="gt-walsheim-medium text-lg text-grey-darkest mb-4">
            Poketto
          </div>
          <ul class="list-reset leading-normal cursor-pointer">
            <li class="mb-3">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="https://youtu.be/7SmC7AuZNWY"
                target="_blank"
                rel="noopener noreferrer"
                >Download the app</a
              >
            </li>
            <li class="mb-3">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="https://github.com/blockstack/gaia"
                target="_blank"
                rel="noopener noreferrer"
                >Discover our features</a
              >
            </li>
            <li class="mb-3">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="https://app.co/mining/apps"
                target="_blank"
                rel="noopener noreferrer"
                >Learn more about xDai</a
              >
            </li>
          </ul>
        </div>
        <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div class="gt-walsheim-medium text-lg text-grey-darkest mb-4">Support</div>
          <ul class="list-reset leading-normal cursor-pointer">
            <li class="mb-2">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="mailto:support@poketto.cash"
                target="_blank"
                rel="noopener noreferrer"
                >Contact us</a
              >
            </li>
            <li class="mb-2">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="https://github.com/orgs/pokettocash/projects/2"
                target="_blank"
                rel="noopener noreferrer"
                >Onboard help</a
              >
            </li>
            <li class="mb-2">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="https://github.com/orgs/pokettocash/projects/2"
                target="_blank"
                rel="noopener noreferrer"
                >Roadmap</a
              >
            </li>
          </ul>
        </div>
        <div>
          <transition appear name="fade">
            <div class="mt-12 md:mt-4">
              <a
                class="opacity-100 inline-block w-8 mr-4 grow"
                href="https://github.com/pokettocash"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <img
                  alt="Github Icon"
                  class="w-8"
                  src="@/assets/svg/logo-github.svg"
                  >
              </a>
              <a
                class="opacity-100 inline-block w-8 mr-4 grow"
                href="https://twitter.com/pokettocash"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <img
                  alt="Twitter Icon"
                  class="w-14"
                  src="@/assets/svg/logo-twitter.svg"
                />
              </a>
              <a
              class="opacity-100 inline-block w-8 mr-4 grow"
              href="https://discord.gg/kMTUpME"
              target="_blank"
              rel="noopener noreferrer"
              title="Discord"
            >
              <img
                alt="Discord Icon"
                class="w-8"
                src="@/assets/svg/logo-discord.svg">
              </a>
              <a
                class="opacity-100 inline-block w-8 mr-4 grow"
                href="https://www.producthunt.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Product Hunt"
              >
                <img
                  alt="Product Hunt Icon"
                  class="w-14"
                  src="@/assets/svg/logo-product-hunt.svg"
                />
              </a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>