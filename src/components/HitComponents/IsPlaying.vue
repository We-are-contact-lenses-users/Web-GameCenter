<template>
  <div class="backDisplay">
    <back id="canvas1"></back>
    <h1 class="item item2">IsPlaying</h1>
    <div @click="next" class="item item3">Result</div>
  </div>
</template>

<script>
import back from "./BackDisplay.vue";
export default {
  components: {
    back,
  },
  methods: {
    next() {
      this.$emit("next");
    },
  },
};
</script>

<style scoped>
.backDisplay {
  position: relative;
  height: 100vh;
}
.item {
  position: absolute;
}
.item2 {
  top: calc(30% - 50px);
  left: 0;
  right: 0;
  color: white;
}

.item3 {
  top: calc(70% - 50px);
  left: 0;
  right: 0;
}

.item3 {
  display: inline-block;
  width: 100px;
  background: transparent;
  z-index: 1;
  line-height: 2;
  color: white;
  font-size: 28px;
  font-weight: bold;
  opacity: 0.7;
  transition: opacity scale();
  transition-duration: 1s;
}
.item3:hover {
  opacity: 1;
  transform: scale(1.4);
}
</style>
