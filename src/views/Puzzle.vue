<template>
  <component
    :is="componentName[currentNumber]"
    @back="back"
    @start="next"
    @toResult="next"
    @toStart="next"
    @Again="again"
    :beforeTime="beforeTime"
    :PuzzleScore="PuzzleScore"
    class="mainBox"
  ></component>
</template>

<script>
import home from "@/components/PuzzleComponents/Home.vue";
import firstGame from "@/components/PuzzleComponents/IsPlaying.vue";
import result from "@/components/PuzzleComponents/Result.vue";
import firebase from "firebase";

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
      beforeTime: "-",
      currentNumber: 0,
      componentName: ["home", "firstGame", "result"],
      PuzzleScore: [],
    };
  },
  created() {
    firebase
      .firestore()
      .collection("Score")
      .doc("PuzzleTop10")
      .get()
      .then((doc) => {
        doc.data().Top10.forEach((Top10) => {
          this.PuzzleScore.push({
            ...Top10,
          });
        });
      });
  },
  methods: {
    back() {
      this.currentNumber = 0;
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
      this.PuzzleScore.push({
        score: totalTime,
        name: this.$auth.currentUser.displayName,
      });
      this.PuzzleScore.sort((a, b) => {
        return a.score - b.score;
      });
      this.PuzzleScore.splice(10, 1);

      firebase
        .firestore()
        .collection("Score")
        .doc("PuzzleTop10")
        .set({ Top10: this.PuzzleScore });
      // firebaseいれてー
      // compareTimeで比較、recordで出力
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
  margin: 0 auto;
  font-family: "Squada One", cursive;
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
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(179, 131, 241, 0.295);
}
</style>
