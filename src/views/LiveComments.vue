<template>
  <div class="LiveComm">
    <p>Оставьте комментарий</p>
    <liveComments />
  </div>
</template>

<script>
import liveComments from "../components/liveComments";

export default {
  name: "LiveComments",
  components: {
    liveComments
  }
};
</script>

<style scoped></style>
