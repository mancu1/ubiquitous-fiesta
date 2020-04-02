<template>
  <div>
    <button @click="toggle">togle dark mode</button>
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
      document.body.className = this.color ? "black" : "green";
    }
  }
};
</script>

<style scoped></style>
