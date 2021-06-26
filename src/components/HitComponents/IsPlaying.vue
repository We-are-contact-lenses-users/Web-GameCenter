<template>
  <div class="backDisplay">
    <back id="canvas1"></back>
    <div class="item item2">
      <div class="gamebox">
        <game
          id="canvas2"
          :goNext="goNext"
          :playCount="playCount"
          @mistake="mistake"
          @plusPoint10="plusPoint10"
          @plusPoint20="plusPoint20"
          @plusPoint30="plusPoint30"
          @plusPoint50="plusPoint50"
          @restartGame="tryAgain"
          @finish="appear"
        ></game>
      </div>
    </div>
    <div v-if="displayResult">
      <div @click="tryAgain" class="item item3" v-if="playCount !== 4">Next</div>
      <div @click="next" class="item item3" v-else>Result</div>
      <div class="item getpoint">{{ getPoint }}pt!</div>
    </div>
  </div>
</template>

<script>
import back from "./BackDisplay.vue";
import game from "./GameDisplay.vue";
export default {
  watch: {
    goNext() {
      console.log(this.goNext)
    }
  },
  props: ["point", "getPoint"],
  components: {
    back,
    game,
  },
  data() {
    return {
      playCount: 0,
      displayResult: false,
      goNext: false
    };
  },
  methods: {
    appear() {
      if(this.displayResult) {
        this.playCount++
      }
      this.displayResult = !this.displayResult;
    },
    tryAgain() {
      this.goNext = !this.goNext
    },
    next() {
      this.$emit("next");
    },
    mistake() {
      this.$emit("mistake");
    },
    plusPoint10() {
      this.$emit("plusPoint10");
    },
    plusPoint20() {
      this.$emit("plusPoint20");
    },
    plusPoint30() {
      this.$emit("plusPoint30");
    },
    plusPoint50() {
      this.$emit("plusPoint50");
    },
  },
  created() {
    this.playCount = 0
  }
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
  box-sizing: unset;
  top: 50px;
  width: 500px;
  height: 500px;
  background-color: rgba(252, 252, 252, 0.452);
  border: 20px solid rgba(0, 0, 0, 0.67);
}
.item3 {
  top: 70%;
  display: inline-block;
  width: 100px;
  background: transparent;
  z-index: 30;
  line-height: 2;
  color: white;
  font-size: 28px;
  font-weight: bold;
  opacity: 0.7;
  transition: opacity scale();
  transition-duration: 1s;
  cursor: pointer;
}
.item3:hover {
  opacity: 1;
  transform: scale(1.4);
}
.gamebox {
  position: relative;
  width: 500px;
  height: 100%;
}
.getpoint {
  top: 350px;
  left: 0;
  right: 0;
  color: black;
  z-index: 30;
  font-size: 40px;
}
</style>
