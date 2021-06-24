<template>
  <div id="app">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
      <h1 class="title">Ranking</h1>
      <!-- <ul class="rankings">
        <li
          v-for="(ranking, index) in rankings"
          :key="index"
          class="rankingBox"
        >
          <h2>{{ ranking.title }}</h2>
          <table>
            <tr v-for="(rank, index2) in ranking" :key="index * 10 + index2">
              <td>{{ rank.rank }}</td>
              <td>{{ rank.person }}</td>
              <td>{{ rank.result }}</td>
            </tr>
          </table>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
import StarBackGround from "@/components/StarBackGround.vue";
import firebase from "firebase";

export default {
  // ここのデータをfirebaseから引っ張り出す
  data() {
    return {
      titles: [
        "総合ランキング",
        "Puzzle Game",
        "Typing Game",
        "Pinball Game",
        "Quiz Game",
        "Sniper Game",
      ],

      allranking: [
        {
          rank: "1位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "2位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "3位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "4位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "5位",
          person: "入賞者",
          result: 0,
        },
      ],
      quizgame: [
        {
          rank: "1位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "2位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "3位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "4位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "5位",
          person: "入賞者",
          result: 0,
        },
      ],
      typinggame: [
        {
          rank: "1位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "2位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "3位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "4位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "5位",
          person: "入賞者",
          result: 0,
        },
      ],
      pinballgame: [
        {
          rank: "1位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "2位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "3位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "4位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "5位",
          person: "入賞者",
          result: 0,
        },
      ],
      puzzlegame: [
        {
          rank: "1位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "2位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "3位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "4位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "5位",
          person: "入賞者",
          result: 0,
        },
      ],
      snipergame: [
        {
          rank: "1位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "2位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "3位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "4位",
          person: "入賞者",
          result: 0,
        },
        {
          rank: "5位",
          person: "入賞者",
          result: 0,
        },
      ],

      HitScore: [],
      PinBallScore: [],
      PuzzleScore: [],
      QuizScore: [],
      TypingScore: [],
    };
  },
  created() {
    firebase
      .firestore()
      .collection("Score")
      .doc("HitTop10")
      .get()
      .then((doc) => {
        doc.data().Top10.forEach((Top10) => {
          this.HitScore.push({
            ...Top10,
          });
        });
        for (let i = 0; i < 5; i++) {
          this.snipergame[i].result = this.HitScore[i].score;
          this.snipergame[i].person = this.HitScore[i].name;
        }
      });
    firebase
      .firestore()
      .collection("Score")
      .doc("PinBallTop10")
      .get()
      .then((doc) => {
        doc.data().Top10.forEach((Top10) => {
          this.PinBallScore.push({
            ...Top10,
          });
        });
        for (let i = 0; i < 5; i++) {
          this.pinballgame[i].result = this.PinBallScore[i].score;
          this.pinballgame[i].person = this.PinBallScore[i].name;
        }
      });
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
        for (let i = 0; i < 5; i++) {
          this.puzzlegame[i].result = this.PuzzleScore[i].score;
          this.puzzlegame[i].person = this.PuzzleScore[i].name;
        }
      });
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
        for (let i = 0; i < 5; i++) {
          this.quizgame[i].result = this.QuizScore[i].score;
          this.quizgame[i].person = this.QuizScore[i].name;
        }
      });
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
        for (let i = 0; i < 5; i++) {
          this.typinggame[i].result = this.TypingScore[i].score;
          this.typinggame[i].person = this.TypingScore[i].name;
        }
      });
  },
  components: {
    StarBackGround,
  },
};
</script>
<style scoped>
#app {
  position: relative;
}
.top-menu {
  position: absolute;
  z-index: 1;
  width: 90%;
  left: 0;
  right: 0;
}
.title {
  font-size: 30px;
  padding: 140px 0 80px;
  color: antiquewhite;
}
.rankings {
  width: 92%;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 200px;
}
.rankingBox {
  background: rgba(253, 245, 230, 0.897);
  margin: 30px 0;
  border-radius: 20px;
  display: block;
  width: 47%;
  padding-bottom: 30px;
  border: 1px solid black;
}
h2 {
  font-size: 34px;
  padding: 30px;
}
table {
  width: 100%;
}
tr {
  width: 80%;
  max-width: 700px;
  padding: 10px 20px;
}
td {
  width: 30%;
}

@media (max-width: 900px) {
  ul {
    flex-direction: column;
  }
  .rankingBox {
    width: 100%;
  }
}
</style>
