<template>
  <div class="base">
    <div class="circleOut">
      <div class="center">
        <div class="standard">
          <span v-for="n in 12" :key="n" class="scale"></span>
          <span v-for="n in 3" :key="n + 12" class="needle"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
* {
  text-align: center;
  margin: 0 auto;
  font-family: "Squada One", cursive;
  letter-spacing: 2px;
}
body {
  margin: 0 !important;
}
h1 {
  padding: 15vh 0 10vh;
  font-size: 60px;
}
button:hover {
  opacity: 0.8;
}
button:active {
  box-shadow: none !important;
  transform: translateY(3px);
}
.notButton {
  display: none;
}
.circleOut {
  background-color: #fff;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 10px solid burlywood;
  box-shadow: 3px 3px 5px rgba(82, 88, 54, 0.644);
  position: relative;
}
.center {
  position: absolute;
  top: calc(50% - 5px);
  left: calc(50% - 5px);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
}
.standard {
  position: relative;
}
.needle {
  position: absolute;
  width: 195px;
  height: 5px;
  border-radius: 30%;
  top: 4px;
  transform-origin: left;
  background-color: rgba(0, 0, 0, 0.7);
  animation: second infinite linear;
}
.needle:nth-child(13) {
  height: 2px;
  animation-duration: 60s;
  animation-delay: -20s;
}
.needle:nth-child(14) {
  width: 110px;
  animation-duration: 3600s;
  animation-delay: -3100s;
}
.needle:nth-child(15) {
  animation-duration: 86400s;
  animation-delay: -40000s;
}
.scale {
  position: absolute;
  width: 20px;
  height: 4px;
  top: 3px;
  transform-origin: left;
  background-color: burlywood;
}
.scale:nth-child(1) {
  transform: rotate(0deg) translateY(3px) translateX(170px);
}
.scale:nth-child(2) {
  transform: rotate(30deg) translateY(3px) translateX(170px);
}
.scale:nth-child(3) {
  transform: rotate(60deg) translateY(3px) translateX(170px);
}
.scale:nth-child(4) {
  transform: rotate(90deg) translateY(3px) translateX(170px);
}
.scale:nth-child(5) {
  transform: rotate(120deg) translateY(3px) translateX(170px);
}
.scale:nth-child(6) {
  transform: rotate(150deg) translateY(3px) translateX(170px);
}
.scale:nth-child(7) {
  transform: rotate(180deg) translateY(3px) translateX(170px);
}
.scale:nth-child(8) {
  transform: rotate(210deg) translateY(3px) translateX(170px);
}
.scale:nth-child(9) {
  transform: rotate(240deg) translateY(3px) translateX(170px);
}
.scale:nth-child(10) {
  transform: rotate(270deg) translateY(3px) translateX(170px);
}
.scale:nth-child(11) {
  transform: rotate(300deg) translateY(3px) translateX(170px);
}
.scale:nth-child(12) {
  transform: rotate(330deg) translateY(3px) translateX(170px);
}
@keyframes second {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
