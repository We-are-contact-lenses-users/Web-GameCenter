<template>
  <div id="app" class="row">
    <div class="offset-3 col-6">
      <div class="offset-3 col-6" v-if="!completed">
        <div v-if="!startFlg">
          <p class="badge badge-dark">QuizGame</p>
          <button class="startButton mb-20" @click="gameStart">START</button>
          <div>間違えると+5秒されるよ</div>
        </div>
        <div v-if="startFlg">
          <div class="card">
            <div class="card-body">
              <p class="badge badge-dark">第 {{ questionIndex + 1 }} 問</p>
              <br />
              <h4 class="card-title">{{ currentQuestion.question }}</h4>
              <hr />
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block text-left"
                v-for="(answer, index) in currentQuestion.answers"
                v-bind:key="index"
                @click="addAnswer(index)"
              >
                {{ index + 1 }}. {{ answer }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 結果表示する部分 -->
      <div class="offset-3 col-6" v-if="completed && startFlg === false">
        <div class="card">
          <div class="card-body">
            <p class="badge badge-dark">結果</p>
            <div>ただいまの結果は{{ result }}秒でした！</div>
            <div v-for="(question, index) in questions" v-bind:key="index">
              <h4 class="card-title">{{ question.question }}</h4>
              <ul>
                <li
                  v-for="(answer, index) in question.answers"
                  v-bind:key="index"
                >
                  {{ answer }}
                </li>
              </ul>
              <span v-if="question.answer == answers[index]"
                >正解 &#x1F44D;</span
              >
              <span v-else
                >不正解 &#x1F622;<br />正解は「{{
                  question.answers[question.answer]
                }}」でした。</span
              >
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      answers: [],
      questionIndex: 0,
      answer: [1, 0, 1],
      questions: [
        {
          question: "囲碁の石の大きさはどっちが大きい？",
          answers: ["白い石", "黒い石", "どちらも同じ"],
          answer: 1,
        },
        {
          question:
            "コンビニチェーンのセブンイレブン。アルファベット表記で１文字だけ小文字なのは？",
          answers: ["N", "L", "V"],
          answer: 0,
        },
        {
          question: "カラオケは「空○○」略です。空欄に入る言葉は何？",
          answers: ["OK", "オーケストラ", "おけら"],
          answer: 1,
        },
      ],
      startFlg: false,
      falseCount: "",
      second: "",
      result: "",
      totalTime: "",
      minute: "",
      recordAll: [],
      finishTime: "",
      startTime: "",
      beforeTime: "",
    };
  },
  methods: {
    addAnswer: function (index) {
      this.answers.push(index);

      if (!this.completed) {
        this.questionIndex++;
      } else {
        this.startFlg = false;
        this.finishTime = performance.now();
        this._display();
        for (let i = 0; i < this.answer.length; i++) {
          if (this.answer[i] != this.answers[i]) {
            this.falseCount += 1;
          }
        }
        this.result = this.falseCount * 5 + this.second;
      }
    },
    gameStart: function () {
      this.startFlg = true;
      this.startTime = performance.now();
    },
    _display() {
      this.totalTime = ((this.finishTime - this.startTime) / 1000).toFixed(1);
      this.minute = Math.floor(this.totalTime / 60);
      this.second = Math.floor(this.totalTime % 60);
      this.result = this.second;
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
  computed: {
    currentQuestion: function () {
      return this.questions[this.questionIndex];
    },
    completed: function () {
      return this.questions.length == this.answers.length;
    },
  },
};
</script>
