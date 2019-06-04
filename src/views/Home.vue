<template>
  <div>
    <Header />
    <div class="background--alt">
      <div class="container mx-auto flex min-h-screen">
        <div class="flex">
          <div class="inline-flex flex-row flex-no-wrap items-center">
            <div class="w-1/2 px-12 flex flex-col items-start">
            <img class="w-64" src="@/assets/svg/poketto-text.svg">
            <h2 class="mt-8 text-3xl gt-walsheim-medium leading-tight">A wallet that you can <br> actually show to your parents </h2>
            <div class="mt-4 text-lg open-sans-regular leading-snug">The simplest, most secure and near instant way <br> to pay friends and your every day items.</div>
            <div class="inline-flex flex-row">
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
              <a
                class="mt-8 ml-8"
                href="https://poketto.cash"
                target="_blank"
                rel="noopener noreferrer"
                title="App store link"
              >
                <img
                  alt="App store badge"
                  class="w-40 cursor-pointer"
                  src="@/assets/svg/donation.svg"
                  >
              </a>
            </div>
          </div>
          <div class="w-1/2 px-16">
            <img src="@/assets/img/intro/iphone@2x.png" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-32">
        <div class="w-5/6">
          <img src="@/assets/img/illustrations/everyone.png" />
        </div>
        <h1 class="mt-12 text-5xl gt-walsheim-medium">A wallet for everyone, everywhere</h1>
      </div>
    </div>
    <div class="flex background--alt">
      <div class="mx-auto flex flex-col flex-no-wrap items-center mt-32 mb-32">
        <h1 class="text-5xl gt-walsheim-medium leading-tight">Introducing your new wallet</h1>
        <p class="mt-4 text-center text-2xl open-sans-regular leading-snug">You shouldn't have to read a manual to start using a payment wallet, <br> it should be as easy and intuitive as any other app you used before.</p>
        <div class="mt-12 max-w-7xl flex flex-row items-center justify-around -mx-10">
          <div class="max-w-sm mr-6">
            <img src="@/assets/img/app/settings@2x.png" />
          </div>
          <div class="max-w-sm mr-6">
            <img src="@/assets/img/app/request-qr@2x.png" />
          </div>
          <div class="max-w-sm mr-4">
            <img src="@/assets/img/app/request@2x.png" />
          </div>
          <div class="max-w-2xl">
            <img src="@/assets/img/intro/iphone-alt@3x.png" />
          </div>
          <div class="max-w-sm ml-4">
            <img src="@/assets/img/app/pay@2x.png" />
          </div>
          <div class="max-w-sm ml-6">
            <img src="@/assets/img/app/pay-amount@2x.png" />
          </div>
          <div class="max-w-sm ml-6">
            <img src="@/assets/img/app/pay-confirm@2x.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-40">
        <h1 class="text-5xl gt-walsheim-medium leading-tight">Why use this wallet?</h1>
        <p class="mt-4 text-center text-2xl open-sans-regular leading-snug">We built our wallet with simplicity in mind from day one without <br> sacrificing any convenience that you need to use your money.</p>
        <div class="flex flex-col items-center">
          <div class="mt-32 flex flex-row items-center">
            <div class="flex flex-col max-w-sm pr-12">
              <h2 class="text-3xl header-color gt-walsheim-medium">Near instant payments</h2>
              <p class="mt-2 text-xl open-sans-regular">By using xDai you can transfer instantaneously with a <span class="header-red underline cursor-pointer">ridiculous low transfer fee</span>* to another wallet.</p>
            </div>
            <div class="w-64 background--illustration">
              <img src="@/assets/img/illustrations/instant_payments.png" alt="" />
            </div>
          </div>
          <div class="mt-32 flex flex-row items-center">
            <div class="flex flex-col max-w-sm pr-12">
              <h2 class="text-3xl header-color gt-walsheim-medium">Wallet is on your phone</h2>
              <p class="mt-2 text-xl open-sans-regular">All you need to get started is your phone. Our wallet generates the key and stores it in your phone.</p>
            </div>
            <div class="w-64 background--illustration">
              <img src="@/assets/img/illustrations/wallet_phone.png" alt="" />
            </div>
          </div>
          <div class="mt-32 flex flex-row items-center">
            <div class="flex flex-col max-w-sm pr-12">
              <h2 class="text-3xl header-color gt-walsheim-medium">Addresses as contacts</h2>
              <p class="mt-2 text-xl open-sans-regular">You can easily assign addresses to contacts using your wallet, making it easier to control payments.</p>
            </div>
            <div class="w-64 background--illustration">
              <img src="@/assets/img/illustrations/addresses_contacts.png" alt="" />
            </div>
          </div>
          <div class="mt-32 flex flex-row items-center">
            <div class="flex flex-col max-w-sm pr-12">
              <h2 class="text-3xl header-color gt-walsheim-medium">Completly open source</h2>
              <p class="mt-2 text-xl open-sans-regular">Our wallet code is avaiable for anyone to check or <span span class="header-blue underline cursor-pointer">contribute to on Github</span>. Help us build the future!</p>
            </div>
            <div class="w-64 background--illustration">
              <img src="@/assets/img/illustrations/open_source.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex background--alt">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-40">
        <div class="mt-16 inline-flex flex-row flex-no-wrap items-center">
          <div class="w-1/2 px-12 flex flex-col items-start">
            <h1 class="text-5xl gt-walsheim-medium leading-tight">Poketto uses xDai</h1>
            <div class="mt-4 text-lg open-sans-regular leading-normal mr-16">The xDai Chain is an Ethereum compatible sidechain with Dai as the native currency of the network, combining POA Network’s interoperability knowledge and technology with MakerDAO’s Dai, the permissionless, crypto-collateralized USD-stable coin.</div>
            <div class="inline-flex flex-row">
              <a
                class="mt-8"
                href="https://medium.com/poa-network/poa-network-partners-with-makerdao-on-xdai-chain-the-first-ever-usd-stable-blockchain-65a078c41e6a"
                target="_blank"
                rel="noopener noreferrer"
                title="App store link"
              >
                <img
                  class="w-40 cursor-pointer"
                  src="@/assets/svg/learn-more.svg"
                  >
              </a>
              <a
                class="mt-8 ml-8"
                href="https://medium.com/@jaredstauffer/how-to-get-xdai-how-to-convert-dai-to-xdai-eth-dai-xdai-30a60e4b6641"
                target="_blank"
                rel="noopener noreferrer"
                title="App store link"
              >
                <img
                  class="w-40 cursor-pointer"
                  src="@/assets/svg/how-to-convert.svg"
                  >
              </a>
            </div>
            <h2 class="mt-12 text-3xl gt-walsheim-medium leading-tight">Still unsure? <br> We can help you onboard!</h2>
            <a
                class="mt-8"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="w-40 cursor-pointer"
                  src="@/assets/svg/help-onboard.svg"
                  >
              </a>
          </div>
          <div class="w-1/2 max-w-5xl px-16">
            <img src="@/assets/img/illustrations/xdai.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="container mx-auto flex flex-col items-center mt-32 mb-32">
        <div class="w-5/6 background--illustration">
          <img src="@/assets/img/illustrations/done_sunday.png" alt="" />
        </div>
        <h1 class="mt-12 text-5xl gt-walsheim-medium leading-tight">Supported by a community</h1>
        <p class="mt-4 text-center text-2xl open-sans-regular leading-snug">Poketto started as an idea within our Done Sunday community. <br> You can join our discord and be part of the discussion too!</p>
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
