<template>
  <div id="app">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
      <h1 class="title">Ranking</h1>
      <ul class="rankings">
        <li v-for="(ranking, index) in rankings" :key="index" class="rankingBox">
          <h2>{{ranking.title}}</h2>
          <table>
            <tr v-for="(rank, index2) in ranking" :key="index * 10 + index2">
              <td>{{rank.rank}}</td>
              <td>{{rank.person}}</td>
              <td>{{rank.result}}</td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import StarBackGround from "@/components/StarBackGround.vue";

export default {
  // ここのデータをfirebaseから引っ張り出す
  data() {
    return {
      rankings: {
        allranking: {
          title: '総合ランキング',
          first: {
            rank: "1位",
            person: "入賞者",
            result: 0
          },
          second: {
            rank: "2位",
            person: "入賞者",
            result: 0
          },
          third: {
            rank: "3位",
            person: "入賞者",
            result: 0
          },
          fourth: {
            rank: "4位",
            person: "入賞者",
            result: 0
          },
          fifth: {
            rank: "5位",
            person: "入賞者",
            result: 0
          },
        },
        puzzlegame: {
          title: "Puzzle Game",
          first: {
            rank: "1位",
            person: "入賞者",
            result: 0
          },
          second: {
            rank: "2位",
            person: "入賞者",
            result: 0
          },
          third: {
            rank: "3位",
            person: "入賞者",
            result: 0
          },
          fourth: {
            rank: "4位",
            person: "入賞者",
            result: 0
          },
          fifth: {
            rank: "5位",
            person: "入賞者",
            result: 0
          },
        },
        typinggame: {
          title: "Typing Game",
          first: {
            rank: "1位",
            person: "入賞者",
            result: 0
          },
          second: {
            rank: "2位",
            person: "入賞者",
            result: 0
          },
          third: {
            rank: "3位",
            person: "入賞者",
            result: 0
          },
          fourth: {
            rank: "4位",
            person: "入賞者",
            result: 0
          },
          fifth: {
            rank: "5位",
            person: "入賞者",
            result: 0
          },
        },
        pinballgame: {
          title: 'Pinball Game',
          first: {
            rank: "1位",
            person: "入賞者",
            result: 0
          },
          second: {
            rank: "2位",
            person: "入賞者",
            result: 0
          },
          third: {
            rank: "3位",
            person: "入賞者",
            result: 0
          },
          fourth: {
            rank: "4位",
            person: "入賞者",
            result: 0
          },
          fifth: {
            rank: "5位",
            person: "入賞者",
            result: 0
          },
        },
        quizgame: {
          title: "Quiz Game",
          first: {
            rank: "1位",
            person: "入賞者",
            result: 0
          },
          second: {
            rank: "2位",
            person: "入賞者",
            result: 0
          },
          third: {
            rank: "3位",
            person: "入賞者",
            result: 0
          },
          fourth: {
            rank: "4位",
            person: "入賞者",
            result: 0
          },
          fifth: {
            rank: "5位",
            person: "入賞者",
            result: 0
          },
        },
        snipergame: {
          title: "Sniper Game",
          first: {
            rank: "1位",
            person: "入賞者",
            result: 0
          },
          second: {
            rank: "2位",
            person: "入賞者",
            result: 0
          },
          third: {
            rank: "3位",
            person: "入賞者",
            result: 0
          },
          fourth: {
            rank: "4位",
            person: "入賞者",
            result: 0
          },
          fifth: {
            rank: "5位",
            person: "入賞者",
            result: 0
          },
        }
      }
    }
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

@media(max-width: 900px) {
  ul {
    flex-direction: column;
  }
  .rankingBox {
    width: 100%;
  }
}
</style>
