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

    <ul>
      <li v-for="(task, ind) in comments" :key="ind" link x-large>
        <v-chip> {{ task.nameComments }}</v-chip>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "liveComments",
  data() {
    return {
      changeComments: "",
      comments: [
        {
          nameComments: "AYE"
        }
      ]
    };
  },
  methods: {
    addCom: function() {
      this.comments.push({
        nameComments: this.changeComments
      });
      this.changeComments = "";
    }
  }
};
</script>

<style lang="scss">
li {
  margin-top: 10px;
}
</style>
