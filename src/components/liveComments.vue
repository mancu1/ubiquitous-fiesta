<template>
  <div>
    <v-row class="justify-center">
      <v-col sm="3">
        <v-text-field
          label="ваш комментарий"
          single-line
          solo
          v-model.lazy="changeComments"
        >
        </v-text-field>
        <v-text-field
          label="ваше имя"
          single-line
          solo
          v-model="changeUserName"
        >
        </v-text-field>
        <v-btn @click="addCom">добавить комментраий </v-btn>
      </v-col>
    </v-row>
    <h2>Коментарии</h2>

    <v-card
      class="mt-2"
      v-for="(comment, ind) in Comments"
      :key="ind"
      outlined
      hover
    >
      <h2>
        {{ comment.name }}
      </h2>
      <v-card-text x-large>
        {{ comment.body }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "liveComments",
  mounted() {
    this.$store.dispatch("ALL_POSTS");
  },
  computed: {
    changeComments: {
      get() {
        return this.$store.getters.getCurrentComment;
      },
      set(Comment) {
        this.$store.commit("SET_CURRENT_COMMENT", Comment);
      }
    },
    changeUserName: {
      get() {
        return this.$store.getters.getCurrentUser;
      },
      set(User) {
        this.$store.commit("SET_CURRENT_USER", User);
      }
    },
    Comments: {
      get() {
        return this.$store.getters.getComments;
      }
    }
  },
  methods: {
    addCom() {
      let comment = { name: this.changeUserName, body: this.changeComments };
      this.$store.dispatch("CREATE_COMMENT", comment);
    }
  }
};
</script>

<style scoped></style>
