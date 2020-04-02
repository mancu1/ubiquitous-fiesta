<template>
  <div class="home">
    <ImgSlider />
    <Comments />
  </div>
</template>

<script>
// @ is an alias to /src

import ImgSlider from "../components/ImgSlider";
import Comments from "../components/Comments";
export default {
  name: "Home",
  components: { Comments, ImgSlider }
};
</script>
