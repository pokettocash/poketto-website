<template>
  <div class="pt-24 pb-20 md:pb-16 bg-white p-8 background--alt">
    <div class="container mx-auto text-left opacity-100 text-sm lg:px-4">
      <div
        class="flex flex-col justify-center items-start content-start lg:flex-row mb-4"
      >
        <div class="mb-6 md:mb-0 sm:w-1/4 h-auto">
          <a
            v-scroll-reveal="{ delay: 1000, distance: '5%' }"
            class="cursor-pointer inline-block w-8"
            href="/"
            rel="noopener noreferrer"
          >
            <img
              alt="Poketto Icon"
              class="w-8 grow"
              src="@/assets/svg/poketto-icon.svg"
              >
          </a>
          <p
            class="mt-32 text-left gt-walsheim-regular text-grey text-sm opacity-50 hidden lg:block"
          >
            © Poketto Cash
          </p>
        </div>
        <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div class="gt-walsheim-medium text-lg text-grey-darkest mb-4">
            Poketto
          </div>
          <ul class="list-reset leading-normal cursor-pointer">
            <li class="mb-4 md:mb-2">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="https://itunes.apple.com/us/app/poketto-cash/id1460141974"
                target="_blank"
                rel="noopener noreferrer"
                >Download the app</a
              >
            </li>
            <li class="mb-4 md:mb-2">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="#wallet"
                v-smooth-scroll="{ duration: 1000, offset: 85 }"
                >
                  Discover our wallet
                </a>
            </li>
            <li class="mb-4 md:mb-2">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="https://medium.com/poa-network/poa-network-partners-with-makerdao-on-xdai-chain-the-first-ever-usd-stable-blockchain-65a078c41e6a"
                target="_blank"
                rel="noopener noreferrer"
                >Learn more about xDai</a
              >
            </li>
          </ul>
        </div>
        <div class="sm:w-1/4 h-auto mt-8 lg:mt-0">
          <div class="gt-walsheim-medium text-lg text-grey-darkest mb-4">Help</div>
          <ul class="list-reset leading-normal cursor-pointer">
            <li class="mb-4 md:mb-2">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="mailto:onboard@poketto.cash?Subject=I%27m%20looking%20for%20a%201%3A1%20Poketto%20onboarding%20session&Body=%5BPlease%20let%20us%20know%20your%20availability%5D"
                target="_blank"
                rel="noopener noreferrer"
                >Onboard 1:1</a
              >
            </li>
            <li class="mb-4 md:mb-2">
              <a
                class="link open-sans-regular text-grey-darker hover-link"
                href="mailto:support@poketto.cash?Subject=I%27m%20having%20trouble%20with%20Poketto&Body=%5BPlease%20describe%20your%20issue%5D"
                target="_blank"
                rel="noopener noreferrer"
                >App support</a
              >
            </li>
            <li class="mb-4 md:mb-2">
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
            <div class="mt-12 mt-4 lg:mt-0">
              <a
                class="opacity-100 inline-block w-8 mr-6 md:mr-4 grow"
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
                class="opacity-100 inline-block w-8 mr-6 md:mr-4 grow"
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
              class="opacity-100 inline-block w-8 mr-6 md:mr-4 grow"
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
                class="hidden opacity-100 inline-block w-8 mr-6 md:mr-4 grow"
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