<template>
  <canvas class="item item1" id="canvas1"></canvas>
</template>

<script>
export default {
  data() {
    return {
      x: -100,
      y: -100,
      r: 30,
      color: 0,
    };
  },
  methods: {
    next() {
      this.$emit("next");
    },
    makeCircle(ctx) {
      ctx.fillStyle = `hsl(${this.RandomNumber()}, 70%, ${this.RandomNumber2()}%)`;
      ctx.beginPath();
      ctx.arc(
        this.x,
        this.y,
        this.r,
        (0 / 180) * Math.PI,
        (360 / 180) * Math.PI
      );
      ctx.stroke();
      ctx.fill();
    },
    RandomNumber() {
      this.color = Math.floor(Math.random() * 360);
      return this.color;
    },
    RandomNumber2() {
      return Math.floor(Math.random() * 10) + 20;
    },
  },
  mounted() {
    // 背景
    let canvas1 = document.getElementById("canvas1");
    let ctx1 = canvas1.getContext("2d");
    ctx1.globalCompositeOperation = "lighter";
    ctx1.strokeStyle = "black";
    ctx1.globalAlpha = 0.4;
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        if (i % 2 === 0) {
          this.x = 30.1 * j;
          this.y = 26.3 * i - 26.3;
        } else {
          this.x = 30.1 * j - 15;
          this.y = 26.3 * i - 26.3;
        }
        this.makeCircle(ctx1);
      }
    }
  },
};
</script>

<style scoped>
.item {
  position: absolute;
}
.item1 {
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
