<template>
  <div>
    <input type="text" v-model="changeComments" v-on:keyup.enter="addCom()" />
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
      comments: [
        {
          nameComments: "ОФОФООФОФОФО"
        },
        {
          nameComments: "ЭТО просто нечто!!БОжесственный проект!"
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

<style scoped></style>
