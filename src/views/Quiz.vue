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
            <Button v-on:click="reset">リセット</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      answers: [],
      questionIndex: 0,
      answer: [],
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
        {
          question: "お菓子のPRETZはどこの会社のお菓子？",
          answers: ["グリコ", "森永", "明治"],
          answer: 0,
        },
        {
          question:
            "一石二鳥を英語で表した場合の()の中は？ ( ) two birds with one stone.",
          answers: ["attack", "hit", "kill"],
          answer: 2,
        },
        {
          question: "吉田沙保里のレスリング世界大会は何連覇？",
          answers: ["6", "11", "16"],
          answer: 2,
        },
        {
          question: "日本の中で一番背が高い仏像がいる都道府県は？",
          answers: ["神奈川県", "茨城県", "奈良県"],
          answer: 1,
        },
        {
          question: "山のつく県はいくつ？",
          answers: ["6", "7", "8"],
          answer: 0,
        },
        {
          question: "馬肉の別名は？",
          answers: ["ボタン", "モミジ", "サクラ"],
          answer: 2,
        },
        {
          question: "イタリア発祥の料理は？",
          answers: ["ドリア", "カルパッチョ", "プリン・アラモード"],
          answer: 1,
        },
        {
          question: "日本の郵便ポストの昔の色は？",
          answers: ["青色", "茶色", "黒色"],
          answer: 2,
        },
        {
          question: "キリンの平均睡眠時間は？",
          answers: ["20分", "2時間", "12時間"],
          answer: 0,
        },
        {
          question: "ロダン作の彫刻「考える人」は何を考えている？",
          answers: ["平和とは何か", "人生とは何か", "特に何も考えていない"],
          answer: 2,
        },
        {
          question: "犬の嗅覚は人間の約何倍？",
          answers: ["百倍", "一万倍", "百万倍"],
          answer: 2,
        },
        {
          question: "ハリセンボンの針は実際は何本？",
          answers: ["約350本", "約500本", "約1000本"],
          answer: 0,
        },
        {
          question: "実際に存在する料理はどれ？",
          answers: ["にっこり団子", "ばかうけ団子", "へらへら団子"],
          answer: 2,
        },
        {
          question: "アブラカタブラの意味は？",
          answers: ["こんにちは", "花粉症退治", "悪霊退散"],
          answer: 1,
        },
        {
          question: "ハイジャックの語源は？",
          answers: [
            "高いところで襲撃するから",
            "ジャックという名前が多かったから",
            "高い金銭を要求するから",
          ],
          answer: 1,
        },
        {
          question: "六つ葉のクローバーに秘められた幸運とは？",
          answers: ["地位・名声", "安産", "金運"],
          answer: 0,
        },
        {
          question: "孫の手の「孫」とは誰のこと？",
          answers: ["孫", "子供", "美女"],
          answer: 2,
        },
      ],
      startFlg: false,
      falseCount: 0,
      second: 0,
      result: 0,
      totalTime: 0,
      minute: 0,
      recordAll: [],
      finishTime: 0,
      startTime: 0,
      beforeTime: 0,
      QuizScore: [],
    };
  },
  created() {
    firebase
      .firestore()
      .collection("Score")
      .doc("QuizTop10")
      .get()
      .then((doc) => {
        doc.data().Top10.forEach((Top10) => {
          this.QuizScore.push({
            ...Top10,
          });
        });
      });
    const shuffle = ([...array]) => {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    this.questions = shuffle(this.questions);
    this.questions = this.questions.slice(15);

    for (let j = 0; j < this.questions.length; j++) {
      this.answer[j] = this.questions[j].answer;
    }
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
        this.result = Number(this.falseCount) * 5 + Number(this.second);
        this.QuizScore.push({
          score: this.result,
          name: this.$auth.currentUser.displayName,
        });

        this.QuizScore.sort((a, b) => {
          return a.score - b.score;
        });
        this.QuizScore.splice(10, 1);

        firebase
          .firestore()
          .collection("Score")
          .doc("QuizTop10")
          .set({ Top10: this.QuizScore });
      }
    },
    gameStart: function () {
      this.startFlg = true;
      this.startTime = performance.now();
    },
    _display() {
      this.totalTime = ((this.finishTime - this.startTime) / 1000).toFixed(2);

      this.second = this.totalTime;

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
    reset: function () {
      this.$router.go({ path: this.$router.currentRoute.path, force: true });
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
