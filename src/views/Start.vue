<template>
  <div id="app">
    <transition mode="out-in">
      <div class="loadingDisplay" v-show="isLoading" name="fade">
        <div v-for="(n, index) in 6" :key="index" class="loadingflower">
          <div class="loadingcircle" v-for="(n, index) in 4" :key="index"></div>
        </div>
        <div class="centerloadingflower">
          <div class="loadingcircle" v-for="(n, index) in 4" :key="index"></div>
        </div>
        <div class="loadingtext">
          <div class="textbox">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="maindisplay" v-show="!isLoading">
        <StarBackGround></StarBackGround>
        <div class="flex">
          <canvas
            class="flex-item flex-item1"
            width="600px"
            height="400px"
            id="canvas"
          ></canvas>
          <div class="flex-item flex-item2">
            <button @click="signin" class="signin">Signin</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import StarBackGround from "@/components/StarBackGround.vue";
import firebase from "firebase";

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    StarBackGround,
  },
  methods: {
    signin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push("selectgame");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    drawTitle(ctx) {
      ctx.shadowColor = "white";
      ctx.shadowOffsetX = 10;
      ctx.shadowOffsetY = 20;
      ctx.shadowBlur = 5;
      ctx.strokeStyle = "#FFFF66";
      ctx.font = "bold 80px serif";
      ctx.strokeText("Web", 200, 170);
      ctx.strokeText("Game Center", 50, 260);
    },
  },
  created() {
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 4000);
  },
  mounted() {
    let canvas = document.getElementById("canvas");
    if (!canvas) return;
    let ctx = canvas.getContext("2d");
    this.drawTitle(ctx);
  },
};
</script>
<style scoped>
#app {
  background: cornsilk;
}

.loadingDisplay {
  width: 100vw;
  height: 100vh;
  max-width: 800px;
  position: relative;
}

.loadingcircle {
  position: absolute;
  width: 35px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid white;
  animation: spin 3s linear infinite;
}

.loadingcircle:nth-child(2) {
  animation-delay: -1s;
}
.loadingcircle:nth-child(3) {
  animation-delay: -2s;
}

.loadingflower:nth-child(1) .loadingcircle {
  top: 20%;
  left: 15%;
  border-color: greenyellow;
}
.loadingflower:nth-child(2) .loadingcircle {
  top: 20%;
  right: 15%;
  border-color: greenyellow;
  animation-direction: reverse;
}
.loadingflower:nth-child(3) .loadingcircle {
  top: 50%;
  left: 10%;
  border-color: yellow;
}
.loadingflower:nth-child(4) .loadingcircle {
  top: 50%;
  right: 10%;
  border-color: yellow;
  animation-direction: reverse;
}
.loadingflower:nth-child(5) .loadingcircle {
  top: 75%;
  left: 30%;
  border-color: skyblue;
}
.loadingflower:nth-child(6) .loadingcircle {
  top: 75%;
  right: 30%;
  border-color: skyblue;
  animation-direction: reverse;
}

.centerloadingflower .loadingcircle {
  border: 10px solid firebrick;
  top: 10%;
  left: 0;
  right: 0;
  width: 100px;
  height: 30px;
  animation-duration: 8s;
}

.centerloadingflower .loadingcircle:nth-child(1) {
  animation-delay: -1s;
}
.centerloadingflower .loadingcircle:nth-child(2) {
  animation-delay: -2s;
}
.centerloadingflower .loadingcircle:nth-child(3) {
  animation-delay: -3s;
}
.centerloadingflower .loadingcircle:nth-child(4) {
  animation-delay: -4s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loadingtext {
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
}
.textbox {
  position: relative;
  width: 250px;
  height: 50px;
}
span {
  position: absolute;
  animation: jump 1.5s infinite;
  color: black;
  z-index: 1;
  font-family: "IM Fell DW Pica SC", serif;
  font-size: 40px;
}
span:nth-child(1) {
  left: 0%;
  animation-delay: -1.5s;
}
span:nth-child(2) {
  left: 10%;
  animation-delay: -1.4s;
}
span:nth-child(3) {
  left: 20%;
  animation-delay: -1.3s;
}
span:nth-child(4) {
  left: 30%;
  animation-delay: -1.2s;
}
span:nth-child(5) {
  left: 42%;
  animation-delay: -1.1s;
}
span:nth-child(6) {
  left: 50%;
  animation-delay: -1s;
}
span:nth-child(7) {
  left: 60%;
  animation-delay: -0.9s;
}
span:nth-child(8) {
  left: 70%;
  animation-delay: -0.8s;
}
span:nth-child(9) {
  left: 80%;
  animation-delay: -0.7s;
}
span:nth-child(10) {
  left: 90%;
  animation-delay: -0.6s;
}
@keyframes jump {
  0% {
    opacity: 0;
  }
  20% {
    transform: translateY(-16px);
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
}

.maindisplay {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.flex {
  display: flex;
  width: 90%;
  align-items: center;
  text-align: center;
  position: absolute;
  z-index: 1;
  left: 5%;
}
.flex-item {
  height: 100vh;
}
.flex-item1 {
  width: 600px;
  height: 400px;
  max-width: 100%;
}
.flex-item2 {
  flex: 1;
  padding-top: 200px;
}
.signin {
  color: white;
  font-size: 40px;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-family: "IM Fell DW Pica SC", serif;
  opacity: 0.7;
  transform: scale(1);
  transition-duration: 1s;
  width: 100%;
  background: transparent;
  border: none;
}
.signin:hover {
  color: yellow;
  transform: scale(1.3);
  transition-duration: 1s;
  opacity: 1;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 3s;
}
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 800px) {
  .flex {
    flex-direction: column;
  }
  .flex-item1 {
    height: 40%;
  }
  .flex-item2 {
    height: 30%;
    padding: 40px 0 80px;
  }
}
</style>
