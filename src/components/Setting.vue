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
      if (this.color) {
        document.body.style.color = "white";
      } else {
        document.body.style.color = "black";
      }
    }
  }
};
</script>

<style scoped></style>
