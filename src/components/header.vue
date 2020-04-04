<template>
  <v-toolbar dark max-height="100" flat bottom>
    <v-toolbar-title>Лучший проект</v-toolbar-title>
    <v-spacer></v-spacer>
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
  name: "header",
  created() {
    document.body.style.textAlign = "center";
  }
};
</script>

<style lang="scss">
.btn {
  text-decoration: none;
  color: white;
  margin-right: 30px;
  margin-top: 15px;
}
</style>
