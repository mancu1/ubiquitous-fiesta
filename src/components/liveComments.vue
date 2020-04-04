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
      <v-card outlined hover>
        <v-card-titel>ваши коментарии </v-card-titel>

        <v-card-text v-for="(task, ind) in comments" :key="ind" link x-large>
          <li>
            <v-card-subtitle>{{ task.nameComments }}</v-card-subtitle>
          </li>
        </v-card-text>
      </v-card>
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
  list-style: none;
  text-align: start;
}
</style>
