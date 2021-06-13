<template>
  <div id="app" class="row">
    <div class="offset-3 col-6">
      <div class="offset-3 col-6" v-if="!completed">
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

      <!-- 結果表示する部分 -->
      <div class="offset-3 col-6" v-if="completed">
        <div class="card">
          <div class="card-body">
            <p class="badge badge-dark">結果</p>
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
    };
  },
  methods: {
    addAnswer: function (index) {
      this.answers.push(index);

      if (!this.completed) {
        this.questionIndex++;
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
