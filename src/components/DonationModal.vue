<template>
  <modal :adaptive="true" name="donation" height="485" width="650">
    <div class="flex flex-col items-end">
      <button
        class="mt-4 mr-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        @click="hide"
      >
        Close
      </button>
      <div class="px-6 py-3 flex flex-row items-start">
        <div class="w-1/2 p-4 flex flex-col items-center justify-center">
          <div>
            <div class="flex flex-row opacity-75">
              <img class="w-12 h-12 mr-2" src="@/assets/svg/eth.svg" />
              <img class="w-10 h-12 mr-2" src="@/assets/svg/xdai.svg" />
              <img class="w-12 h-12" src="@/assets/svg/dai.svg" />
            </div>
            <h1 class="mt-6 text-2xl gt-walsheim-medium">
              ERC20 Tokens or xDai
            </h1>
            <p class="mt-2 text-lg open-sans-regular mr-6">
              Donations enable us to continue bootstrapping Poketto's
              development.
            </p>
            <h2 class="mt-6 text-3xl gt-walsheim-medium leading-snug">
              Thank you <span class="text-red-600">♥</span> <br />
              for your support!
            </h2>
          </div>
        </div>
        <div
          class="w-1/2 border-l-2 border-dotted border-gray-300 flex flex-col p-4 items-center justify-center content-center self-center"
        >
          <div class="p-4 flex flex-col justify-center">
            <img class="w-48" src="@/assets/svg/qrcode.svg" />
            <p class="mt-2 text-xs text-center open-sans-regular">
              0x3849bA8A4D7193bF550<br />a6e04632b176F9Ce1B7e8
            </p>
            <button
              v-clipboard="copyData"
              @success="handleSuccess"
              class="mt-6 text-center open-sans-regular cursor-pointer poketto-colour text-white py-2 px-4 rounded grow--button"
            >
              Copy to clipboard
            </button>
            <transition appear name="fadeDown">
              <p
                v-if="copyResult == true"
                class="mt-2 text-xs text-center open-sans-regular"
              >
                Copied 👍
              </p>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: "DonationModal",
  data() {
    return {
      copyData: "0x3849bA8A4D7193bF550a6e04632b176F9Ce1B7e8",
      copyResult: false
    };
  },
  methods: {
    handleSuccess(e) {
      console.log(e);
      this.copyResult = true;
      setTimeout(() => {
        this.copyResult = false;
      }, 1000);
    },
    hide() {
      this.$modal.hide("donation");
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
  }
};
</script>
