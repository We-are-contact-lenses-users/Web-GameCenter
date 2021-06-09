<template>
  <div class="backDisplay">
    <back id="canvas1"></back>
    <div class="item item2">
      <div class="gamebox">
        <game id="canvas2"></game>
      </div>
    </div>
    <div @click="next" class="item item3">Result</div>
  </div>
</template>

<script>
import back from "./BackDisplay.vue";
import game from "./GameDisplay.vue";
export default {
  components: {
    back,
    game,
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
.item2,
.item3 {
  left: 0;
  right: 0;
}
.item2 {
  top: 50px;
  width: 500px;
  height: 500px;
  background-color: rgba(45, 105, 105, 0.7);
}

.item3 {
  top: 80%;
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
.gamebox {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
