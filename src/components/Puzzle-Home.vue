<template>
  <div>
    <div
      :class="{ blackBack: isActive, blackBack2: isActive2,}"
      class="blackBackBase"
    >
      <clock class="clock" :class="{ display: isActive3 }"></clock>
      <div class="box">
        <h1 class="animate__animated animate__lightSpeedInLeft">
          Time Attack
        </h1>
        <table>
          <tr>
            <td>前回の記録</td>
            <td>{{ beforeTime }}</td>
          </tr>
        </table>

        <div class="flex">
          <button v-button @click="start">Game Start</button>
          <button v-button @click="changeIsActive">How to play?</button>
          <button v-button @click="changeIsActive2">record</button>
        </div>
      </div>
    </div>
    <div :class="{ whiteBox1: isActive }" class="whiteBoxBase1">
      <div class="container">
        <div class="flex-item">
          <img src="../assets/キャプチャ.gif" />
        </div>
        <p class="flex-item">
          このゲームは3×3のパズルゲームです。<br />Game Start
          ボタンを押すとパズルが表示されるので、パズルの写真がそろうようにピースをスライドさせてください！<br />試行回数に制限はなく、ペナルティもありません。
        </p>
      </div>
      <button v-button class="btn" @click="changeIsActive">
        Back to display
      </button>
    </div>
    <div :class="{ whiteBox2: isActive2 }" class="whiteBoxBase2">
      <p class="resultTitle">直近５回の成績</p>
      <table v-if="recordAll.length !== 0" class="result">
        <tr>
          <td>date</td>
          <td>record</td>
        </tr>
        <tr v-for="(record, index) in recordAll" :key="index">
          <td>{{ record.month }}月{{ record.date }}日</td>
          <td>{{ record.record }}</td>
        </tr>
      </table>

      <button v-button class="btn" @click="changeIsActive2">
        Back to display
      </button>
    </div>
  </div>
</template>

<script>
import clock from "./Pazzle-Clock.vue";

export default {
  components: {
    clock,
  },
  data() {
    return {
      isActive: false,
      isActive2: false,
      isActive3: false,
    };
  },
  props: ["beforeTime", "recordAll"],
  methods: {
    start() {
      this.$emit("start");
    },
    changeIsActive() {
      this.isActive = !this.isActive;
      this.isActive3 = !this.isActive3;
    },
    changeIsActive2() {
      this.isActive2 = !this.isActive2;
      this.isActive3 = !this.isActive3;
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
  margin: 0 auto;
  font-family: 'Squada One', cursive;
  letter-spacing: 2px;
}
h1 {
  padding: 15vh 0 10vh;
  font-size: 60px;
}
button:hover {
  opacity: 0.8;
}
button:active {
  box-shadow: none !important;
  transform: translateY(3px);
}
.notButton {
  display: none;
}
.clock {
  position: absolute;
  z-index: 1;
  transform: scale(1.5) rotateX(10deg) rotateY(10deg) rotateZ(10deg);
  top: 20vh;
  left: 10vw;
}
.box {
  max-width: 600px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
}
table {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
tr {
  width: 50%;
  display: flex;
  align-items: center;
}
td {
  font-size: 20px;
  display: block;
  width: 40%;
}
.flex {
  display: flex;
  justify-content: center;
}
.btn {
  padding: none;
  margin: 0 !important;
  margin-bottom: 20px !important;
}
.blackBackBase {
  transition: background-color 0.5s;
  height: 100vh;
  position: relative;
  background-color: rgba(179, 131, 241, 0.295);
  overflow: hidden;
}
.blackBack,
.blackBack2 {
  background-color: rgba(5, 14, 22, 0.856);
  opacity: 0.6;
}
.whiteBoxBase1,
.whiteBoxBase2 {
  transition: all 0.5s ease;
  background-color: #fff;
  box-shadow: 2px 2px 3px rgba(250, 250, 250, 0.7);
  border-radius: 30px;
  width: 80%;
  max-width: 600px;
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  transform: translateY(-100vh);
  opacity: 0;
}
.whiteBox1,
.whiteBox2 {
  transform: translateY(0);
  opacity: 1;
}
.container {
  display: flex;
  justify-content: center;
}
.flex-item {
  width: 40%;
  padding: 35px 0 25px;
  margin: 20px;
}
.flex-item:first-child img {
  border-radius: 30px;
  width: 100%;
  height: 100%;
}
.resultTitle {
  font-size: 20px;
  padding: 40px 0 20px;
}
.result tr {
  width: 80%;
}
.result td {
  width: 30%;
  margin: 0 auto;
}
.flex-item:last-child {
  padding-top: 50px;
  line-height: 1.7;
}
.display {
  display: none;
}
.animate__animated.animate__lightSpeedInLeft {
  --animate-duration: 1.2s;
}
@media (max-width: 600px) {
  .container,
  .flex {
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
    align-items: center;
  }
  .flex-item {
    margin: 0 auto;
  }
  .flex-item:first-child {
    width: 30%;
  }
  .flex-item:last-child {
    width: 80%;
    padding-top: 0;
  }
  .flex button {
    width: 70%;
    margin: 30px 0 !important;
  }
}
@keyframes clock {
  0%,
  100% {
    transform: 0;
  }
  50% {
    transform: translateY(5px);
  }
}
</style>
