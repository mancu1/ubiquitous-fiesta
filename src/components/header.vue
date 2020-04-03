<template>
  <div id="nav">
    <v-avatar> </v-avatar>
    <router-link to="/">главная</router-link> |
    <router-link to="/Setting">настройки</router-link>|
    <router-link to="/Reviews">отзв</router-link>|
    <router-link to="/LiveComments"> комментраии </router-link>
  </div>
</template>

<script>
export default {
  name: "header"
};
</script>

<style scoped></style>
