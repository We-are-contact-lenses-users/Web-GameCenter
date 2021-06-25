<template>
  <div id="app">
    <img src="https://repair-master.jp/wp-content/uploads/2019/10/40223bd3fdfa498525be30966715a5e4.jpg" alt="" class="image">
    <div class="container">
      <div class="title">
        <h1 v-if="!startFlg && endFlg == true" class="result">結果発表</h1>
        <h1 v-else class="toptitle animate__animated animate__flipInX">Typing Game</h1>
      </div>
      <button
        v-if="!startFlg && !endFlg"
        class="startButton mb-20 btn"
        @click="gameStart"
      >
        START
      </button>
      <div v-if="startFlg">
        <div class="question mb-20">{{ current_question }}</div>
        <div v-if="current_question_counts == question_counts" class="clear">
          <div class="cleartext">Clear!</div>
          <button @click="gameResult" class="resultbutton btn">RESULT</button>
        </div>
        <div class="typeFormWrapper mb-20">
          <input
            id="typeForm"
            v-model="typeBox"
            type="text"
            :class="[{ typeForm: !isCleared }, { displayinput: isCleared }]"
          />
        </div>
        <div class="gaugeWrapper mb-20">
          <div v-bind:style="styleObject" class="gauge"></div>
        </div>
        <div>{{ current_question_counts }}/{{ question_counts }}</div>
      </div>
      <div v-if="!startFlg && endFlg == true" class="resulttext">
        <div class="animate__animated animate__zoomIn">
        ただいまの結果は{{ second }}秒でした！
        </div>
        <button v-on:click="reset" class="btn">RESET</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",

  components: {},
  data() {
    return {
      startFlg: "",
      endFlg: "",
      current_question: "",
      questions: ["apple", "banana", "chocolate", "dounut", "espresso"],
      typeBox: "",
      current_question_counts: 0,
      question_counts: 0,
      second: "",
      totalTime: "",
      minute: "",
      recordAll: [],
      finishTime: "",
      startTime: "",
      beforeTime: "",
      TypingScore: [],
      isCleared: false,
    };
  },
  created() {
    firebase
      .firestore()
      .collection("Score")
      .doc("TypingTop10")
      .get()
      .then((doc) => {
        doc.data().Top10.forEach((Top10) => {
          this.TypingScore.push({
            ...Top10,
          });
        });
      });
  },
  computed: {
    styleObject: function () {
      let width = 20 * this.current_question_counts + "%";
      let color = "orange";
      if (this.current_question_counts == 5) {
        color = "#03a9f4";
      }
      return {
        width: width,
        "background-color": color,
      };
    },
  },
  methods: {
    gameStart: function () {
      this.startFlg = true;
      this.startTime = performance.now();
      this.$nextTick(function () {
        document.getElementById("typeForm").focus();
      });
    },
    gameResult: function () {
      this.startFlg = false;
      this.endFlg = true;
    },
    _display() {
      this.totalTime = ((this.finishTime - this.startTime) / 1000).toFixed(2);

      this.second = this.totalTime;
      if (this.minute === 0) {
        this.beforeTime = `${this.second}秒`;
      } else {
        this.beforeTime = `${this.minute}分${this.second}秒`;
      }
    },
    reset: function () {
      this.$router.go({ path: this.$router.currentRoute.path, force: true });
    },
  },
  mounted: function () {
    this.current_question = this.questions[0];
    this.question_counts = this.questions.length;
  },
  watch: {
    current_question_counts() {
      if (this.current_question_counts === 5) {
        this.isCleared = !this.isCleared;
      }
    },
    typeBox: function (e) {
      if (e == this.current_question) {
        this.questions.splice(0, 1);
        this.current_question = this.questions[0];
        this.typeBox = "";
        this.current_question_counts += 1;
        if (this.current_question_counts == this.question_counts) {
          this.finishTime = performance.now();
          this._display();

          this.TypingScore.push({
            score: this.second,
            name: this.$auth.currentUser.displayName,
          });

          this.TypingScore.sort((a, b) => {
            return a.score - b.score;
          });
          this.TypingScore.splice(10, 1);

          firebase
            .firestore()
            .collection("Score")
            .doc("TypingTop10")
            .set({ Top10: this.TypingScore });
        }
      }
    },
  },
};
</script>

<style scoped>
#app {
  background: rgba(238, 244, 255, 0.61);
  font-size: 32px;
  height: 100vh;
  width: 100vw;
  position: relative;
}

#app .mb-20 {
  margin-bottom: 20px;
}
#app .container {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
  position: absolute;
  left: 0;
  right: 0;
}
.image {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: block;
  z-index: -1;
}
#app .title {
  position: relative;
  padding: 150px 0;
  font-family: 'Cinzel', serif;
}
.animate__animated .animate__flipInX, .animate__animated .animate__zoomIn {
  --animate-duration: 2s;
}
.toptitle {
  font-size: 70px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
}
.question {
  color: black !important;
}
.btn {
  width: 200px;
  color: black;
  background: white;
  display: inline-block;
  padding: 20px 40px;
  text-decoration: none;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.29);
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 22px;
  margin-top: 80px;
  font-family: 'Cinzel', serif;
  font-weight: bold;
}

.btn:active {
  transform: translateY(3px);
  box-shadow: none;
}
.btn:hover {
  opacity: 0.7;
}
#app .question {
  color: gray;
}
#app .clear {
  color: #f46303;
}
#app .typeForm {
  text-align: center;
  outline: none;
  border: none;
  font-size: 30px;
  display: inline-block;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid black;
}
#app .gauge {
  height: 12px;
  transition: all 0.3s ease;
}
#app .gaugeWrapper {
  border: 1px solid;
  height: 12px;
}
.result {
  font-size: 40px;
}
.resulttext {
  font-size: 30px;
  line-height: 1.6;
  transform: translateY(-30px);
}
.displayinput {
  display: none;
}
.clear .btn {
  font-size: 20px;
  padding: 10px 30px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0 0 20px;
}
.cleartext {
  font-weight: bold;
  padding-bottom: 30px;
  font-family: 'Cinzel', serif;
}
</style>
