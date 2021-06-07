<template>
  <div class="flex">
    <div
      class="backgroundBlock"
      v-bind:style="{ backgroundColor: color[randomNumber()] }"
      v-for="n in 300"
      :key="n"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: [
        "Tomato",
        "Maroon",
        "Chocolate",
        "SaddleBrown",
        "RosyBrown",
        "SandyBrown",
      ]
    }
  },
  methods: {
    randomNumber() {
      return Math.floor(Math.random() * 6)
    }
  }
}
</script>


<style scoped>
.flex {
  display: flex;
  flex-direction: initial;
  flex-wrap: wrap;
  flex-shrink: 0;
}
.backgroundBlock {
  margin: 0;
  display: inline-block;
  height: 45px;
  width: 11%;
  opacity: 0.5;
  border-radius: 5px;
  margin: 0.7px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0.3px 0.3px 5px rgba(0, 0, 0, 0.3);
}
.backgroundBlock:nth-child(2n) {
  width: 10%;
}
.backgroundBlock:nth-child(3n) {
  width: 16%;
}
.backgroundBlock:nth-child(5n) {
  width: 7%;
}
.backgroundBlock:nth-child(5n+1) {
  flex: 1;
}
.backgroundBlock:nth-child(6n) {
  width: 13%;
}
.backgroundBlock:nth-child(7n) {
  width: 15%;
}
</style>
