<template>
  <div id="app">
    <div class="container">
      <div class="title">
        <h1 v-if="!startFlg && endFlg == true">結果発表</h1>
        <h1 v-else>Typing Game</h1>
        <div class="marker"></div>
      </div>
      <button
        v-if="!startFlg && !endFlg"
        class="startButton mb-20"
        @click="gameStart"
      >
        START
      </button>
      <div v-if="startFlg">
        <div class="question mb-20">{{ current_question }}</div>
        <div v-if="current_question_counts == question_counts" class="clear">
          <div>Clear!</div>
          <button @click="gameResult">結果発表</button>
        </div>
        <div class="typeFormWrapper mb-20">
          <input id="typeForm" v-model="typeBox" type="text" class="typeForm" />
        </div>
        <div class="gaugeWrapper mb-20">
          <div v-bind:style="styleObject" class="gauge"></div>
        </div>
        <div>{{ current_question_counts }}/{{ question_counts }}</div>
      </div>
      <div v-if="!startFlg && endFlg == true">
        ただいまの結果は{{ second }}秒でした！
      </div>
    </div>
  </div>
</template>

<script>
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
    };
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
      this.totalTime = ((this.finishTime - this.startTime) / 1000).toFixed(1);
      this.minute = Math.floor(this.totalTime / 60);
      this.second = Math.floor(this.totalTime % 60);
      if (this.minute === 0) {
        this.beforeTime = `${this.second}秒`;
      } else {
        this.beforeTime = `${this.minute}分${this.second}秒`;
      }
      this.recordAll.push({
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        record: this.beforeTime,
      });
      if (this.recordAll.length === 6) {
        this.recordAll.splice(0, 1);
      }
    },
  },
  mounted: function () {
    this.current_question = this.questions[0];
    this.question_counts = this.questions.length;
  },
  watch: {
    typeBox: function (e) {
      if (e == this.current_question) {
        this.questions.splice(0, 1);
        this.current_question = this.questions[0];
        this.typeBox = "";
        this.current_question_counts += 1;
        if (this.current_question_counts == this.question_counts) {
          this.finishTime = performance.now();
          this._display();
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-size: 32px;
}

#app .mb-20 {
  margin-bottom: 20px;
}
#app .container {
  width: 800px;
  margin: 0 auto;
  text-align: center;
}
#app .title {
  position: relative;
  font-size: 48px;
}
#app .marker {
  width: 100%;
  height: 35%;
  background-color: #a2a2a270;
  position: absolute;
  bottom: 5%;
  z-index: -1;
}
#app .startButton {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #888888; /*ボタン色*/
  color: #555555; /*ボタン色より暗く*/
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  border-bottom: solid 3px #627295;
  border-radius: 3px;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
}
#app .startButton:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-bottom: none;
}
#app .startButton:hover {
  opacity: 0, 7;
}
#app .question {
  color: gray;
}
#app .clear {
  color: #03a9f4;
}
#app .typeForm {
  text-align: center;
  outline: none;
  border: none;
  font-size: 30px;
}
#app .typeFormWrapper {
  border-bottom: 1px solid gray;
}
#app .gauge {
  height: 12px;
  transition: all 0.3s ease;
}
#app .gaugeWrapper {
  border: 1px solid;
  height: 12px;
}
</style>
