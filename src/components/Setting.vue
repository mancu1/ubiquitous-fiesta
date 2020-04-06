<template>
  <div>
    <v-btn @click="toggle">toggle dark mode</v-btn>
  </div>
</template>

<script>
export default {
  name: "Setting",
  methods: {
    toggle() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped></style>
