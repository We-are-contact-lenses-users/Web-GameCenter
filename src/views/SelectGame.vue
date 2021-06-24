<template>
  <div class="topDisplay">
    <StarBackGround></StarBackGround>
    <div class="firstDisplay">
      <div class="top-image">
        <router-link to="/typinggame" class="image image1">
          <img src="" alt="タイピングゲーム" />
        </router-link>

        <router-link to="/puzzlegame" class="image image2">
          <img src="@/assets/Puzzle.jpg" alt="パズルゲーム" />
        </router-link>

        <router-link to="/pinballgame" class="image image3">
          <img src="@/assets/Pinball.jpg" alt="ピンボールゲーム" />
        </router-link>

        <router-link to="/hitgame" class="image image4">
          <img src="@/assets/SniperGame.jpg" alt="スナイパーゲーム" />
        </router-link>

        <router-link to="/quizgame" class="image image5">
          <img src="" alt="クイズゲーム" />
        </router-link>
        <div class="image image6">
          <p>Welcome</p>
          <p>Web GameCenter</p>
        </div>
      </div>
    </div>
    <div class="top-menu">
      <h1 class="title">Game Lineup</h1>
      <div class="games">
        <div class="game">
          <router-link to="/typinggame" class="gameitem gameimage">
            <img src="" alt="タイピングゲーム" />
          </router-link>
          <div class="gameitem gametext">
            <h1 class="gametitle">タイピングゲーム</h1>
            <p class="gamedescription">説明</p>
          </div>
        </div>
        <div class="game">
          <router-link to="/puzzlegame" class="gameitem gameimage">
            <img src="@/assets/Puzzle.jpg" alt="パズルゲーム" />
          </router-link>
          <div class="gameitem gametext">
            <h1 class="gametitle">Time Attack!!</h1>
            <p class="gamedescription">3×3のパズルゲームです！<br>早くピカチュウを揃えよう！</p>
          </div>
        </div>
        <div class="game">
          <router-link to="/pinballgame" class="gameitem gameimage">
            <img src="@/assets/Pinball.jpg" alt="ピンボールゲーム" />
          </router-link>
          <div class="gameitem gametext">
            <h1 class="gametitle">ミニピンボール</h1>
            <p class="gamedescription">予測不明な跳ね返り方をするボールに対応し、点数を重ね続けることはできるのか？？</p>
          </div>
        </div>
        <div class="game">
          <router-link to="/hitgame" class="gameitem gameimage">
            <img src="@/assets/SniperGame.jpg" alt="スナイパーゲーム" />
          </router-link>
          <div class="gameitem gametext">
            <h1 class="gametitle">Sniper Game</h1>
            <p class="gamedescription">動く的あてゲーム！<br>回数を追うごとに少しずつ変化していくよ！</p>
          </div>
        </div>
        <div class="game">
          <router-link to="/quizgame" class="gameitem gameimage">
            <img src="" alt="クイズゲーム" />
          </router-link>
          <div class="gameitem gametext">
            <h1 class="gametitle">クイズゲーム</h1>
            <p class="gamedescription">説明</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarBackGround from "@/components/StarBackGround.vue";

export default {
  components: {
    StarBackGround,
  },
  computed: {
    user() {
      return this.$auth.currentUser;
    },
  },
};
</script>
<style scoped>
* {
  font-family: 'Dancing Script', monospace;
}
.topDisplay {
  position: relative;
  width: 100%;
}
.firstDisplay {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.top-image {
  position: absolute;
  top: 150px;
  width: 600px;
  height: 400px;
  left: 0;
  right: 0;
  border-radius: 100px;
}
.top-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: movePicture infinite;
  animation-duration: 18s;
  border-radius: 10%;
  border: 8px solid rgb(22, 21, 21);
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image1 {
  animation-delay: 0;
  background: rgb(27, 215, 221);
}

.image2 {
  animation-delay: -3s;
}

.image2 img {
  object-position: 50% 70%;
}

.image3 {
  animation-delay: -6s;
}

.image3 img {
  object-position: 50% 0%;
}
.image4 {
  animation-delay: -9s;
}
.image4 img {
  object-position: 50% 80%;
}
.image5 {
  animation-delay: -12s;
  background: rgba(150, 148, 37, 0.993);
}
.image6 {
  animation-delay: -15s;
  background: white;
  text-align: center;
  line-height: 60px;
  padding-top: 70px;
  font-size: 36px;
  
}

@keyframes movePicture {
  0%,
  12%,
  100% {
    top: -5%;
    left: 0;
    right: 0;
    z-index: 3;
    transform: scale(1.2);
    opacity: 1;
  }
  17%,
  29% {
    top: 0%;
    left: -40%;
    right: auto;
    z-index: 2;
    transform: scale(1) rotateX(40deg) rotateZ(30deg);
    opacity: 0.5;
  }
  33%,
  45% {
    top: -25%;
    left: -70%;
    right: auto;
    z-index: 1;
    transform: scale(1) rotateX(60deg) rotateZ(70deg);
    opacity: 0.3;
  }
  50% {
    top: -25%;
    left: -70%;
    right: auto;
    transform: scale(1) rotateX(60deg) rotateZ(70deg);
    opacity: 0;
  }

  60% {
    top: -25%;
    left: auto;
    right: -70%;
    z-index: 0;
    transform: scale(1) rotateX(60deg) rotateZ(-70deg);
    opacity: 0;
  }
  67%,
  79% {
    top: -25%;
    left: auto;
    right: -70%;
    z-index: 1;
    transform: scale(1) rotateX(60deg) rotateZ(-70deg);
    opacity: 0.3;
  }
  83%,
  95% {
    top: 0%;
    left: auto;
    right: -40%;
    z-index: 2;
    transform: scale(1) rotateX(40deg) rotateZ(-30deg);
    opacity: 0.5;
  }
}
.top-menu {
  position: absolute;
  z-index: 1;
  top: 100vh;
  left: 0;
  right: 0;
}
.title {
  margin: 120px 0;
  color: antiquewhite;
}
.games {
  width: 95%;
  margin: 0 auto;
  max-width: 900px;
  padding-bottom: 200px;
}
.game {
  overflow: hidden;
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 60px;
  height: 400px;
  background: rgba(233, 232, 245, 0.178);
}
.game:nth-child(2n) {
  flex-direction: row-reverse;
}
.gameimage {
  height: 350px;
  width: 45%;
  background: cornflowerblue;
  border-radius: 10%;
  overflow: hidden;
  border: 1px solid rgb(59, 58, 58);
}

.gameimage img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gametext {
  width: 50%;
  height: 350px;
  color: azure;
}

.gametitle {
  font-size: 28px;
  padding: 40px 0;
  color: rgb(245, 242, 73);
}
.gamedescription {
  width: 90%;
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 1px;
}
/* 後々調整 */
@media (max-width: 600px) {
  .top-image {
    top: 150px;
    width: 300px;
    height: 200px;
  }
  .image6 {
    padding-top: 50px;
  }
}
@media (max-width: 900px) {
  .top-image {
    top: 150px;
    width: 450px;
    height: 300px;
  }
  .image6 {
    padding-top: 60px;
  }
}
</style>
