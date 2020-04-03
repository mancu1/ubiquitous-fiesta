<template>
  <div>
    <v-btn @click="toggle">togle dark mode</v-btn>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return { color: false };
  },
  methods: {
    toggle() {
      this.color = !this.color;
      document.body.className = this.color ? "black" : "white";
    }
  }
};
</script>

<style scoped></style>
