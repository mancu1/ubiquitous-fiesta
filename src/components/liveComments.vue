<template>
  <div>
    <v-col sm="3">
      <v-text-field
        label="Solo"
        single-line
        solo
        v-model="changeComments"
        v-on:keyup.enter="addCom()"
        class="lox"
      ></v-text-field>
    </v-col>

    <ul>
      <li v-for="(task, ind) in comments" :key="ind">
        {{ task.nameComments }}
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

<style lang="scss"></style>
