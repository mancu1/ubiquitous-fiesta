<template>
  <div>
    <v-row class="justify-center">
      <v-col sm="3">
        <v-text-field
          label="ваш комментарий"
          single-line
          solo
          v-model="changeComments"
          v-on:keyup.enter="addCom()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <h2>Коментарии</h2>
    <v-card
      class="ma-2"
      v-for="(task, ind) in comments"
      :key="ind"
      outlined
      hover
    >
      <v-card-text x-large>
        {{ task }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "liveComments",
  computed: {
    changeComments: {
      get() {
        return this.$store.getters.getCurrentComment;
      },
      set(newComment) {
        this.$store.commit("SET_CURRENT_COMMENT", newComment);
      }
    },
    comments: {
      get() {
        return this.$store.getters.getComments;
      }
    }
  },
  methods: {
    addCom() {
      this.$store.dispatch("CREATE_COMMENT", this.changeComments);
    }
  }
};
</script>

<style lang="scss">
li {
  margin-top: 10px;
  list-style: none;
  text-align: start;
}
</style>
