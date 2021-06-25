<template>
  <div id="app">
    <Quizback class="back"></Quizback>
    <div class="mainbox">
      <div class="box" v-if="!completed">
        <div v-if="!startFlg">
          <p class="gametitle animate__animated animate__fadeInUp">QuizGame</p>
          <div class="starttext animate__animated animate__fadeInUp">間違えると+5秒されるよ</div>
          <button class="btn startbtn" @click="gameStart">START</button>
        </div>
        <div v-if="startFlg">
          <h1 class="top">第 {{ questionIndex + 1 }} 問</h1>
          <p class="question">{{ currentQuestion.question }}</p>
          <div class="flex">
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
      <div class="box" v-if="completed && startFlg === false">
        <p class="top">結果</p>
        <div class="result animate__animated animate__fadeInUp">{{ result }}秒</div>
        <div
          v-for="(question, index) in questions"
          v-bind:key="index"
          class="answer-box"
        >
          <div>
            <p class="answer-question">~ {{ question.question }} ~</p>
            <span v-if="question.answer == answers[index]">正解 &#x1F44D;</span>
            <span v-else
              >不正解 &#x1F622;<br />正解は「{{
                question.answers[question.answer]
              }}」でした。</span
            >
          </div>
        </div>
        <button v-on:click="reset" class="btn reset">RESET</button>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import Quizback from "@/components/QuizBack.vue"
export default {
  components: {
    Quizback,
  },
  data() {
    return {
      currenNumber: 0,
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
      // startFlg: true,
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
<style scoped>
#app {
  min-height: 100vh;
  position: relative;
}
.mainbox {
  background: rgba(181, 230, 243, 0.363);
  min-height: 100vh;
  width: 100%;
  position: absolute;
}
.box {
  min-height: 100vh;
  padding-top: 150px;
  max-width: 800px;
  width: 90%;
}
.gametitle {
  font-size: 70px;
  font-weight: bold;
  font-family: 'Viaoda Libre', cursive;
}
.animate__animated.animate__fadeInUp {
  --animate-duration: 1s;
  --animation-delay: 0.5s;
}
.btn {
  display: inline-block;
  width: 200px;
  padding: 5px 10px;
  line-height: 30px;
  border-radius: 15px;
  background: rgb(39, 35, 35);
  color: white;
  border: none;
  box-shadow: 0 3px 2px rgb(20, 19, 19);
}
.btn:hover {
  opacity: 0.7;
}
.btn:active {
  transform: translateY(3px);
  box-shadow: none;
}
.startbtn {
  margin: 150px;
}
.starttext {
  font-size: 30px;
  margin: 50px;
}
.top {
  font-size: 38px;
  font-weight: bold;
}
#app .question {
  color: black;
}
.question {
  font-size: 24px;
  margin: 40px 0 0;
  background: white;
  padding: 50px 20px;
  border-radius: 50%;
}
.flex {
  display: flex;
  width: 100%;
}
.flex .btn {
  margin-top: 50px;
  font-size: 18px;
  font-weight: normal;
}
.answer-box {
  background: rgba(255, 255, 255, 0.747);
  border-radius: 20px;
  padding: 20px;
}
.answer-box + .answer-box {
  margin-top: 30px;
}
.answer-question {
  font-size: 26px;
}
.answer-box span {
  font-size: 20px;
}
.flex2 {
  list-style: none;
}
.result {
  margin: 30px 0;
  font-size: 30px;
}
.reset {
  margin: 60px 0 200px;
}
@media (max-width: 700px) {
  .flex {
    flex-direction: column;
  }
  .flex button + button {
    margin-top: 30px;
  }
}
</style>
