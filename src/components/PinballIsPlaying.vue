<template>
  <div class="box">
    <div class="beforeFinishText" :class="{ finishText: isFinish }">
      <h1>Finish!!!</h1>
      <button @click="next">次へ</button>
    </div>
    <div class="description" :class="{ start: isStart }">
      <h2>Enterキーを押すとスタート</h2>
      <h2>矢印キーでバーを操作</h2>
    </div>
    <BlockBack />
    <div class="mainGame">
      <Display
        :point="point"
        :currentPlusPoint="currentPlusPoint"
        :bonusPoint="bonusPoint"
        :collideCount="collideCount"
        @minus10="$emit('minus10')"
        @plus10="$emit('plus10')"
        @plus20="$emit('plus20')"
        @plus30="$emit('plus30')"
        @plusRandom="$emit('plusRandom')"
        @finish="finish"
      />
    </div>
  </div>
</template>

<script>
import BlockBack from "./Pinball_BlockBack.vue";
import Display from "./Pinball_Display.vue";
export default {
  components: {
    BlockBack,
    Display,
  },
  props: ["point", "currentPlusPoint", "collideCount", "bonusPoint"],
  data() {
    return {
      isStart: false,
      isFinish: false,
    };
  },
  methods: {
    finish() {
      this.isFinish = !this.isFinish;
      this.$emit('record')
    },
    next() {
      this.$emit("next");
    },
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      if(this.isStart) {
        return
      }
      if (e.key === "Enter") {
        this.isStart = !this.isStart;
      }
    });
  },
};
</script>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
}
.description {
  position: absolute;
  top: 42%;
  left: 0;
  right: 0%;
  z-index: 2;
  color: rgba(0, 0, 0, 0.6);
}
.start {
  opacity: 0;
  z-index: 0;
}
.beforeFinishText {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  z-index: 0;
  opacity: 0;
  transition: opacity 1s;
}
.finishText {
  z-index: 2;
  opacity: 1;
}
.finishText h1 {
  font-size: 50px;
}
.finishText button {
  display: inline-block;
  width: 300px;
  margin-top: 30px;
  padding: 10px;
  background-color: seashell;
  font-size: 28px;
  border-radius: 5px;
  box-shadow: 0 3px 2px gray;
}
.finishText button:hover {
  opacity: 0.8;
}
.finishText button:active {
  box-shadow: none;
  transform: translateY(3px);
}
.mainGame {
  z-index: 1;
  position: absolute;
  top: 5%;
  left: 0;
  right: 0;
  height: 100%;
}
</style>
