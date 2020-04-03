<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss"></style>
<script>
import Header from "./components/header";
export default {
  components: { Header }
};
</script>
