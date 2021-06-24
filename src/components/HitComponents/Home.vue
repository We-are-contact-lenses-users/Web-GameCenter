<template>
  <div class="backDisplay">
    <back id="canvas1"></back>
    <transition tag="template" name="fade">
      <div v-if="!description && !result">
        <h1 class="item item2">Sniper Game</h1>
        <div @click="next" class="item item3">Play</div>
        <div class="item item4" @click="changeResult">Ranking</div>
        <div class="item item5" @click="changeDescription">Description</div>
      </div>
    </transition>
    <transition tag="template" name="fade">
      <description @back="changeDescription" v-if="description"></description>
    </transition>
    <transition tag="template" name="fade">
      <result @back="changeResult" :HitScore="HitScore" v-if="result"></result>
    </transition>
  </div>
</template>

<script>
import back from "./BackDisplay.vue";
import description from "./Description.vue";
import result from "./DisplayResult.vue";
export default {
  components: {
    back,
    description,
    result,
  },
  props: ["HitScore"],
  methods: {
    next() {
      this.$emit("next");
    },
    changeDescription() {
      this.description = !this.description;
    },
    changeResult() {
      this.result = !this.result;
    },
  },
  data() {
    return {
      description: false,
      result: false,
    };
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
  font-family: "Nosifer", cursive;
  top: calc(50% - 50px);
  font-size: 44px;
  color: rgb(227, 238, 130);
  left: 0;
  right: 0;
}
.item3 {
  top: calc(80% - 50px);
  left: 0;
  right: 0;
}
.item4 {
  top: 20%;
  left: 20%;
}
.item5 {
  top: 20%;
  right: 25%;
}
.item3,
.item4,
.item5 {
  display: inline-block;
  width: 100px;
  background: transparent;
  z-index: 1;
  line-height: 2;
  color: white;
  font-size: 32px;
  opacity: 0.7;
  transition: opacity scale();
  transition-duration: 1s;
  cursor: pointer;
}
.item3:hover,
.item4:hover,
.item5:hover {
  opacity: 1;
  transform: scale(1.4);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
</style>
