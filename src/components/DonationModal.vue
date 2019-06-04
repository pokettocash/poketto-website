<template>
  <modal
    name="donation"
    >

    <div slot="top-right">
      <button v-on:click="hide">
        ❌
      </button>
    </div>

    Hello, ☀️!

  </modal>
</template>

<script>
export default {
  name: "DonationModal",
  methods: {
    hide () {
      this.$modal.hide('donation');
    }
  }
};
</script>