<template>
  <div>
    <vue-image-slider
      :images="imageArray"
      :intervalVal="3000"
      :height="700"
      :width="1200"
    />
  </div>
</template>

<script>
import VueImageSlider from "vue-image-slider";
export default {
  name: "ImgSlider",
  components: {
    VueImageSlider
  },
  data() {
    return {
      imageArray: [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ]
    };
  }
};
</script>

<style scoped></style>
