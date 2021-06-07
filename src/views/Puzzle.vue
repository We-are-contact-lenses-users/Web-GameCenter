<template>
  <component
    :is="componentName[currentNumber]"
    @back="back"
    @start="next"
    @toResult="next"
    @toStart="next"
    @Again="again"
    :beforeTime="beforeTime"
    :recordAll="recordAll"
    class="mainBox"
  ></component>
</template>

<script>
import home from "./components/Puzzle-Home.vue";
import firstGame from "./components/Puzzle-IsPlaying.vue";
import result from "./components/Puzzle-Result.vue";

export default {
  components: {
    home,
    firstGame,
    result,
  },
  data() {
    return {
      startTime: 0,
      finishTime: 0,
      recordTime: 0,
      beforeTime: 0,
      recordAll: [],
      currentNumber: 0,
      componentName: [
        "home",
        "firstGame",
        "result",
      ],
    };
  },
  methods: {
    back() {
      this.currentNumber = 0
    },
    next() {
      this.currentNumber++;
      if (this.currentNumber === 1) {
        this.startTime = performance.now();
      }
      if (this.currentNumber === 2) {
        this.finishTime = performance.now();
        this._display();
      }
      if (this.currentNumber === 3) {
        this.currentNumber = 0;
      }
    },
    again() {
      this.currentNumber = 1;
      this.startTime = performance.now();
    },
    _display() {
      let totalTime = ((this.finishTime - this.startTime) / 1000).toFixed(1);
      let minute = Math.floor(totalTime / 60);
      let second = Math.floor(totalTime % 60);
      if (minute === 0) {
        this.beforeTime = `${second}秒`;
      } else {
        this.beforeTime = `${minute}分${second}秒`;
      }
      this.recordAll.push({
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        record: this.beforeTime,
      })
      if(this.recordAll.length === 6) {
        this.recordAll.splice(0,1)
      }
    },
  },
  watch: {
    recordAll() {
      localStorage.recordAll = JSON.stringify(this.recordAll);
    },
    beforeTime() {
      localStorage.beforeTime = JSON.stringify(this.beforeTime);
    },
  },
  created() {
    if (localStorage.recordAll) {
      this.recordAll = JSON.parse(localStorage.recordAll);
    }
    if (localStorage.beforeTime) {
      this.beforeTime = JSON.parse(localStorage.beforeTime);
    }
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
body {
  margin: 0 !important;
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
.mainBox {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
