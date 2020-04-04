<template>
  <v-app>
    <Header />
    <router-view />
  </v-app>
</template>

<style lang="scss"></style>
<script>
import Header from "./components/header";
export default {
  components: { Header }
};
</script>
