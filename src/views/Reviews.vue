<template>
  <div>
    я отзыв
    <Comments />
    <Review />
  </div>
</template>

<script>
import Comments from "../components/Comments";
import Review from "../components/Review";
export default {
  name: "Reviews",
  components: { Review, Comments }
};
</script>

<style lang="scss">
div {
  text-align: center;
}
</style>
