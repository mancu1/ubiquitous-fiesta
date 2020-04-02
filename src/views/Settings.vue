<template>
  <div>
    Я настройка
    <Setting />
    <ImgSlider />
  </div>
</template>

<script>
import ImgSlider from "../components/ImgSlider";
import Setting from "../components/Setting";
export default {
  name: "Settings",
  components: { Setting, ImgSlider }
};
</script>

<style scoped></style>
