<template>
  <v-toolbar app dark max-height="100" flat>
    <v-toolbar-title><v-btn>Лучший проект</v-btn> </v-toolbar-title>
    <v-toolbar-items>
      <router-link to="/" class="btn">
        <v-btn>главная</v-btn>
      </router-link>
      <router-link to="/Setting" class="btn">
        <v-btn>настройки</v-btn>
      </router-link>
      <router-link to="/Reviews" class="btn"><v-btn>отзв</v-btn></router-link>

      <router-link to="/LiveComments" class="btn">
        <v-btn>комментраии </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "header"
};
</script>

<style lang="scss">
.btn {
  text-decoration: none;
  color: white;
  margin-right: 30px;
  margin-top: 13px;
}
</style>
