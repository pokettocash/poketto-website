<template>
  <div class="overflow-x-hidden">
    <Header />
    <div class="background--alt">
      <div class="container mx-auto flex md:min-h-screen">
        <div class="flex">
          <div
            class="inline-flex flex-col md:flex-row flex-no-wrap md:items-center"
          >
            <div class="md:w-1/2 px-6 md:px-12 flex flex-col md:items-start">
              <img
                class="mt-12 md:mt-0 w-48 lg:w-64"
                src="@/assets/svg/poketto-text.svg"
              />
              <h2
                class="mt-8 text-xl lg:text-3xl max-w-md gt-walsheim-medium leading-tight"
              >
                A wallet that you can actually show to your parents
              </h2>
              <div
                class="mt-4 text-base lg:text-lg max-w-md open-sans-regular leading-snug"
              >
                The simplest, most secure and near instant way to pay friends
                and your every day items.
              </div>
              <transition appear name="fade">
                <div class="inline-flex flex-row">
                  <a
                    class="mt-8 grow--button"
                    href="https://itunes.apple.com/us/app/poketto-cash/id1460141974"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      class="w-40 cursor-pointer"
                      src="@/assets/svg/app-store.svg"
                    />
                  </a>
                  <button class="mt-8 ml-8" @click="$modal.show('donation')">
                    <img
                      class="hidden md:block w-40 cursor-pointer"
                      src="@/assets/svg/donation.svg"
                    />
                    <DonationModal />
                  </button>
                </div>
              </transition>
            </div>
            <div class="md:w-1/2 md:px-16 mt-8 block md:hidden">
              <transition appear name="fade">
                <img
                  class="mt-8 block md:hidden"
                  src="@/assets/img/intro/iphone-half.png"
                />
              </transition>
            </div>
            <div class="md:w-1/2 md:px-16 hidden md:block">
              <transition appear name="fade">
                <img
                  class="hidden md:block"
                  src="@/assets/img/intro/iphone.png"
                />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="container mx-auto flex flex-col items-center mt-24 mb-24">
        <div class="w-5/6 md:w-3/4">
          <img src="@/assets/img/illustrations/everyone.jpg" />
        </div>
        <h1
          class="mt-16 text-center text-3xl md:text-4xl lg:text-5xl gt-walsheim-medium"
          v-scroll-reveal="{ delay: 500, distance: '15%' }"
        >
          A wallet for everyone, everywhere
        </h1>
      </div>
    </div>
    <div id="wallet" class="flex px-8 md:px-0 background--alt">
      <div class="mx-auto flex flex-col flex-no-wrap items-center mt-24 mb-24">
        <h1
          class="text-2xl md:text-4xl text-center gt-walsheim-medium leading-tight"
        >
          Introducing your new wallet
        </h1>
        <p
          class="mt-4 text-center text-base md:text-xl lg:text-xl open-sans-regular leading-snug md:max-w-4xl md:px-32"
        >
          You shouldn't have to read a manual to start using a payment wallet,
          it should be as easy and intuitive as any other app you used before.
        </p>
        <div
          class="mt-16 md:max-w-7xl flex flex-row items-center justify-around -mx-16 md:-mx-10"
        >
          <div
            class="hidden md:block max-w-sm mr-6"
            v-scroll-reveal="{ delay: 1500, distance: '20%' }"
          >
            <img src="@/assets/img/app/settings.png" />
          </div>
          <div
            class="hidden md:block max-w-sm mr-6"
            v-scroll-reveal="{ delay: 1500, distance: '20%' }"
          >
            <img src="@/assets/img/app/request-qr.png" />
          </div>
          <div
            class="hidden md:block max-w-sm mr-4"
            v-scroll-reveal="{ delay: 1500, distance: '20%' }"
          >
            <img src="@/assets/img/app/request.png" />
          </div>
          <div
            class="hidden md:block max-w-2xl"
            v-scroll-reveal="{ delay: 1000, distance: '20%' }"
          >
            <img src="@/assets/img/intro/iphone-alt.png" />
          </div>
          <div
            class="max-w-sm md:ml-4"
            v-scroll-reveal="{ delay: 1500, distance: '20%' }"
          >
            <img src="@/assets/img/app/pay.png" />
          </div>
          <div
            class="max-w-sm ml-2 md:ml-6"
            v-scroll-reveal="{ delay: 1500, distance: '20%' }"
          >
            <img src="@/assets/img/app/pay-amount.png" />
          </div>
          <div
            class="max-w-sm ml-2 md:ml-6"
            v-scroll-reveal="{ delay: 1500, distance: '20%' }"
          >
            <img src="@/assets/img/app/pay-confirm.png" />
          </div>
        </div>
      </div>
    </div>
    <div id="features" class="flex px-10 md:px-0 ">
      <div
        class="container mx-auto flex flex-col items-center mt-24 mb-24 md:mb-32"
      >
        <h1 class="text-2xl md:text-4xl gt-walsheim-medium leading-tight">
          Why use this wallet?
        </h1>
        <p
          class="mt-4 text-center text-base md:text-xl open-sans-regular leading-snug md:max-w-4xl md:px-32"
        >
          We built our wallet with simplicity in mind from day one without
          sacrificing any convenience that you need to use your money.
        </p>
        <div class="flex flex-col items-center">
          <div
            class="mt-16 md:mt-32 flex flex-col-reverse md:flex-row items-center"
          >
            <div
              class="flex flex-col items-center md:items-start max-w-sm px-4 md:px-0 text-center md:text-left md:pr-12"
            >
              <h2
                class="mt-8 md:mt-0 text-xl md:text-2xl md:px-4 header-color gt-walsheim-medium"
              >
                Near instant payments
              </h2>
              <p class="mt-2 text-base md:text-lg md:px-4 open-sans-regular">
                By using xDai you can transfer instantaneously with a
                <span
                  v-popover:foo
                  class="header-red underline cursor-pointer hover-link"
                  >ridiculous low transfer fee</span
                >* to another wallet.
              </p>
              <popover
                class="open-sans-regular text-base md:text-lg text-center px-4 -ml-8 mt-2"
                :width="155"
                :event="hover"
                name="foo"
              >
                0.00002$ per transaction!
              </popover>
            </div>
            <div class="w-3/4 md:w-48 lg:w-64 background--illustration">
              <img
                src="@/assets/img/illustrations/instant_payments.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            class="mt-16 md:mt-32 flex flex-col-reverse md:flex-row items-center"
          >
            <div
              class="flex flex-col items-center md:items-start  max-w-sm px-4 md:px-0 text-center md:text-left md:pr-12"
            >
              <h2
                class="mt-8 md:mt-0 text-xl md:text-2xl md:px-4 header-color gt-walsheim-medium"
              >
                Wallet is on your phone
              </h2>
              <p class="mt-2 text-base md:text-lg md:px-4 open-sans-regular">
                All you need to get started is your phone. Our wallet generates
                the key and stores it in your phone.
              </p>
            </div>
            <div class="w-3/4 md:w-48 lg:w-64 background--illustration">
              <img src="@/assets/img/illustrations/wallet_phone.jpg" alt="" />
            </div>
          </div>
          <div
            class="mt-16 md:mt-32 flex flex-col-reverse md:flex-row items-center"
          >
            <div
              class="flex flex-col items-center md:items-start  max-w-sm px-4 md:px-0 text-center md:text-left md:pr-12"
            >
              <h2
                class="mt-8 md:mt-0 text-xl md:text-2xl md:px-4 header-color gt-walsheim-medium"
              >
                Addresses as contacts
              </h2>
              <p class="mt-2 text-base md:text-lg md:px-4 open-sans-regular">
                You can easily assign addresses to contacts using your wallet,
                making it easier to control payments.
              </p>
            </div>
            <div class="w-3/4 md:w-48 lg:w-64 lg:w-6 background--illustration">
              <img
                src="@/assets/img/illustrations/addresses_contacts.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            class="mt-16 md:mt-32 flex flex-col-reverse md:flex-row items-center"
          >
            <div
              class="flex flex-col items-center md:items-start  max-w-sm px-3 md:px-0 text-center md:text-left md:pr-12"
            >
              <h2
                class="mt-8 md:mt-0 text-xl md:text-2xl md:px-4 header-color gt-walsheim-medium"
              >
                Completly open source
              </h2>
              <p class="mt-2 text-base md:text-lg md:px-4 open-sans-regular">
                Our wallet code is avaiable for anyone to check or contribute to
                <a
                  href="https://github.com/pokettocash"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="header-blue underline cursor-pointer hover-link "
                  >on Github</a
                >. Help us build the future!
              </p>
            </div>
            <div class="w-3/4 md:w-48 lg:w-64 background--illustration">
              <img src="@/assets/img/illustrations/open_source.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="xdai" class="flex background--alt">
      <div
        class="container mx-auto flex flex-col items-center mt-24 mb-24 md:mb-32"
      >
        <div
          class="md:mt-16 inline-flex flex-col-reverse lg:flex-row px-6 md:px-0 flex-no-wrap items-center justify-center"
        >
          <div
            class="md:w-1/2 flex flex-col md:max-w-lg md:items-start md:pl-6 md:pr-8"
          >
            <h1
              class="mt-16 text-center md:text-left lg:mt-0 text-2xl md:text-4xl gt-walsheim-medium leading-tight"
            >
              Poketto uses xDai
            </h1>
            <h2
              class="mt-4 text-center md:text-left text-xl md:text-2xl gt-walsheim-regular leading-tight px-6 md:px-0"
            >
              The xDai Chain is an Ethereum compatible sidechain with Dai,
              acting as the native currency of the network
            </h2>
            <div
              class="mt-4 text-center md:text-left text-base md:text-base lg:text-lg open-sans-regular leading-normal"
            >
              Combining POA Network’s interoperability knowledge and technology
              with MakerDAO’s Dai, the permissionless, crypto-collateralized
              USD-stable coin.
            </div>
            <div class="mt-2 inline-flex flex-row">
              <a
                class="mt-8 grow--button"
                href="https://medium.com/poa-network/poa-network-partners-with-makerdao-on-xdai-chain-the-first-ever-usd-stable-blockchain-65a078c41e6a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="w-40 cursor-pointer"
                  src="@/assets/svg/learn-more.svg"
                />
              </a>
              <a
                class="mt-8 ml-8 grow--button"
                href="https://medium.com/@jaredstauffer/how-to-get-xdai-how-to-convert-dai-to-xdai-eth-dai-xdai-30a60e4b6641"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="w-40 cursor-pointer"
                  src="@/assets/svg/how-to-convert.svg"
                />
              </a>
            </div>
            <h2
              class="hidden lg:block mt-12 text-3xl gt-walsheim-medium leading-tight"
            >
              Still unsure? <br />
              We can help you onboard!
            </h2>
            <a
              class="mt-10 hidden lg:block grow--button"
              href="mailto:onboard@poketto.cash?Subject=I%27m%20looking%20for%20a%201%3A1%20Poketto%20onboarding%20session&Body=%5BPlease%20let%20us%20know%20your%20availability%5D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="w-40 cursor-pointer"
                src="@/assets/svg/help-onboard.svg"
              />
            </a>
          </div>
          <div
            class="md:w-1/2 max-w-5xl px-20 md:px-20"
            v-scroll-reveal="{ delay: 1000, distance: '20%' }"
          >
            <img src="@/assets/img/illustrations/xdai.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div id="community" class="flex">
      <div
        class="container mx-auto flex flex-col px-6 md:px-0 items-center mt-24 mb-24"
      >
        <div class="w-5/6 md:w-3/4 background--illustration">
          <img src="@/assets/img/illustrations/done_sunday.jpg" alt="" />
        </div>
        <h1
          class="mt-16 text-center md:text-left text-3xl md:text-4xl gt-walsheim-medium leading-tight"
          v-scroll-reveal="{ delay: 500, distance: '15%' }"
        >
          Supported by a community
        </h1>
        <p
          class="mt-4 text-center text-base md:text-xl open-sans-regular leading-snug px-5 md:max-w-5xl md:px-40"
          v-scroll-reveal="{ delay: 500, distance: '15%' }"
        >
          Poketto started as an idea within our
          <a
            href="https://donesunday.com"
            target="_blank"
            rel="noopener noreferrer"
            class="header-red underline cursor-pointer hover-link"
            >Done Sunday</a
          >
          community. You can join our
          <a
            href="https://discord.gg/kMTUpME"
            target="_blank"
            rel="noopener noreferrer"
            class="header-blue underline cursor-pointer hover-link "
            >discord</a
          >
          and be part of the discussion too!
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import DonationModal from "@/components/DonationModal.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    DonationModal,
    Footer
  }
};
</script>
