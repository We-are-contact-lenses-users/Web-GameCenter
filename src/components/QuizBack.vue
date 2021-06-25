<template>
  <div>
    <canvas id="star" width="1200px" height="800px" class="starback"></canvas>
  </div>
</template>

<script>
export default {
  methods: {
   
    makeBack(ctx) {
      let back = ctx.createLinearGradient(400, 0, 1000, 600);
      back.addColorStop(0, "rgba(230, 250, 250, 0.7)");
      back.addColorStop(0.25, "rgba(230, 250, 250, 0.7)");
      back.addColorStop(0.3, "#f6a2e9");
      back.addColorStop(0.4, "#ffd070");
      back.addColorStop(0.5, "#8fcaff");
      back.addColorStop(0.6, "#8cff70");
      back.addColorStop(0.65, "rgba(230, 250, 250, 0.7)");
      back.addColorStop(1, "rgba(230, 250, 250, 0.7)");
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
  },
};
</script>

<style scoped>
.starback {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;  
  z-index: -3;
}

</style>
