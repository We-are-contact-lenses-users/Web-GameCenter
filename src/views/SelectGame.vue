<template>
  <div class="topDisplay">
    <StarBackGround></StarBackGround>
    <div class="firstDisplay">
      <div class="top-image">
        <router-link to="/typinggame" class="image image1">
          <img src="" alt="タイピングゲーム" />
        </router-link>

        <router-link to="/puzzlegame" class="image image2">
          <img src="" alt="パズルゲーム" />
        </router-link>

        <router-link to="/pinballgame" class="image image3">
          <img src="" alt="ピンボールゲーム" />
        </router-link>

        <router-link to="/hitgame" class="image image4">
          <img src="" alt="スナイパーゲーム" />
        </router-link>

        <router-link to="/quizgame" class="image image5">
          <img src="" alt="クイズゲーム" />
        </router-link>
        <div class="image image6">
          <p>Welcome</p>
          <p>Web GameCenter</p>
          <p>{{ user.displayName }}</p>
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
            <img src="" alt="パズルゲーム" />
          </router-link>
          <div class="gameitem gametext">
            <h1 class="gametitle">パズルゲーム</h1>
            <p class="gamedescription">説明</p>
          </div>
        </div>
        <div class="game">
          <router-link to="/pinballgame" class="gameitem gameimage">
            <img src="" alt="ピンボールゲーム" />
          </router-link>
          <div class="gameitem gametext">
            <h1 class="gametitle">ピンボールゲーム</h1>
            <p class="gamedescription">説明</p>
          </div>
        </div>
        <div class="game">
          <router-link to="/hitgame" class="gameitem gameimage">
            <img src="" alt="スナイパーゲーム" />
          </router-link>
          <div class="gameitem gametext">
            <h1 class="gametitle">スナイパーゲーム</h1>
            <p class="gamedescription">説明</p>
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
  // mounted() {
  //   console.log('select')
  //   console.log(this.$auth.currentUser.displayName);
  // }
};
</script>
<style scoped>
.topDisplay {
  position: relative;
  width: 100vw;
}
.firstDisplay {
  position: relative;
  width: 100vw;
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
}
.top-image img {
  display: block;
  border-radius: 100px;
  width: 100%;
  height: 100%;
}

.image {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: movePicture infinite;
  animation-duration: 18s;
  border-radius: 10%;
  border: 8px solid rgb(22, 21, 21);
}

.image1 {
  animation-delay: 0;
  background: rgb(27, 215, 221);
}

.image2 {
  animation-delay: -3s;
  background: rgba(189, 128, 48, 0.911);
}

.image3 {
  animation-delay: -6s;
  background: rgb(92, 30, 89);
}
.image4 {
  animation-delay: -9s;

  background: rgba(0, 255, 136, 0.945);
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
}
.image6 p:last-child {
  letter-spacing: 2px;
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
}

.gameimage img {
  display: block;
  width: 100%;
  height: 100%;
  /* background: darkgreen; */
}
.gametext {
  width: 50%;
  height: 350px;
  border: 2px solid white;
  color: azure;
  /* background: darkcyan; */
}

.gametitle {
  font-size: 24px;
  padding: 40px 0;
}
.gamedescription {
  font-size: 24px;
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
