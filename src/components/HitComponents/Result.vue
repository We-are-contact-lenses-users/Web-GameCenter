<template>
  <div class="backDisplay">
    <back id="canvas1"></back>
    <h1 class="item item2">Result</h1>
    <h1 class="item item3">0点</h1>
    <div @click="next" class="item item4">Home</div>
    <div @click="again" class="item item5">Again</div>
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
    again() {
      this.$emit("again");
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
  top: 40%;
  left: 0;
  right: 0;
  color: white;
}
.item4 {
  top: calc(70% - 50px);
  left: 30%;
}
.item5 {
  top: calc(70% - 50px);
  right: 30%;
}
.item4,
.item5 {
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
.item4:hover,
.item5:hover {
  opacity: 1;
  transform: scale(1.4);
}
</style>
