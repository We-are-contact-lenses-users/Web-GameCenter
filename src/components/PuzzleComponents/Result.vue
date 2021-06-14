<template>
  <div>
    <h1>Result</h1>
    <h2 class="animate__animated animate__fadeInUp">記録 {{ beforeTime }}</h2>
    <button v-button @click="next">Back to Start Display</button>
    <button v-button @click="nextGame">Again</button>
  </div>
</template>

<script>
export default {
  props: ["beforeTime"],
  methods: {
    next() {
      this.$emit("toStart");
    },
    nextGame() {
      this.$emit("Again");
    },
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
h2 {
  margin-bottom: 20px;
}
button {
  display: inline-block;
  font-size: 18px;
  width: 300px;
  height: 50px;
  margin: 10px !important;
  padding: 0 !important;
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
.animate__animated.animate__fadeInUp {
  --animate-duration: 1.5s;
}
</style>
