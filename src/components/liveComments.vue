<template>
  <div class="container">
    <input type="text" v-model="changeComments" />
    <button @click="addCommetn()">добавить комментарий</button>
    <ul>
      <li v-for="task in comments" :key="task">
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
      comments: {
        nameComments: "fdsfdsfdsfd"
      }
    };
  },
  methods: {
    addCommetn: function() {
      this.comments.push({
        nameComments: this.changeComments
      });
      this.changeComments = "";
    }
  }
};
</script>

<style scoped></style>
