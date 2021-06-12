<template>
    <canvas id="star" width="1200px" height="800px" class="starback"></canvas>
</template>

<script>
export default {
  methods: {
    makeStar(ctx) {
      for (let i = 0; i < 300; i++) {
        let x = Math.floor(Math.random() * 1200);
        let y = Math.floor(Math.random() * 800);
        let r = Math.random() * 2 + 0.3;
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x, y, r, (Math.PI * 0) / 180, (Math.PI * 360) / 180);
        ctx.fill();
      }
    },
    makeBack(ctx) {
      let back = ctx.createLinearGradient(0, 0, 1000, 600);
      back.addColorStop(0, "black");
      back.addColorStop(0.5, "#000033");
      back.addColorStop(1, "#336699");
      ctx.fillStyle = back;
      ctx.fillRect(0, 0, 1200, 800);
      ctx.fill();
    },
  },
  mounted() {
    let star = document.getElementById("star");
    if (!star) return;
    let ctx2 = star.getContext("2d");
    this.makeBack(ctx2);
    this.makeStar(ctx2);
  }
};
</script>

<style scoped>
.starback {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
}
</style>
