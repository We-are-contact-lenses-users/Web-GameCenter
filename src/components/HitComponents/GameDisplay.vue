<template>
  <canvas class="item item1" id="canvas2" width="500px" height="500px"></canvas>
</template>

<script>
export default {
  props: ["point"],
  data() {
    return {
      circle: [
        {
          x: 50,
          y: 50,
          r: 10,
          color: "red",
          speed: 20,
        },
        {
          x: 100,
          y: 100,
          r: 15,
          color: "blue",
          speed: 15,
        },
        {
          x: 150,
          y: 150,
          r: 20,
          color: "yellow",
          speed: 10,
        },
        {
          x: 200,
          y: 200,
          r: 25,
          color: "green",
          speed: 5,
        },
      ],
      gun: {
        x: 235,
        y: 440,
        tate: 60,
        yoko: 30,
      },
      ball: {
        x: 250,
        y: 430,
        r: 10,
        speed: 30,
      },
      speed: 100,
      isHited: false,
    };
  },
  methods: {
    makeGun(ctx2) {
      ctx2.fillStyle = "black";
      ctx2.fillRect(this.gun.x, this.gun.y, this.gun.yoko, this.gun.tate);
    },
    drawBall(ctx2) {
      ctx2.beginPath();
      let gladation = ctx2.createRadialGradient(
        this.ball.x,
        this.ball.y,
        0,
        this.ball.x,
        this.ball.y,
        this.ball.r
      );
      gladation.addColorStop(0, "white");
      gladation.addColorStop(1, "black");
      ctx2.fillStyle = gladation;
      ctx2.arc(
        this.ball.x,
        this.ball.y,
        this.ball.r,
        (Math.PI * 0) / 180,
        (Math.PI * 360) / 180
      );
      ctx2.fill();
    },
    drawCircle(ctx2) {
      for (let i = 0; i < this.circle.length; i++) {
        ctx2.strokeStyle = this.circle[i].color;
        let gladation = ctx2.createRadialGradient(
          this.circle[i].x,
          this.circle[i].y,
          0,
          this.circle[i].x,
          this.circle[i].y,
          this.circle[i].r
        );
        gladation.addColorStop(0, "white");
        gladation.addColorStop(1, this.circle[i].color);
        ctx2.fillStyle = gladation;
        ctx2.beginPath();
        ctx2.arc(
          this.circle[i].x,
          this.circle[i].y,
          this.circle[i].r,
          (0 / 180) * Math.PI,
          (360 / 180) * Math.PI
        );
        ctx2.stroke();
        ctx2.fill();
      }
    },

    // collideCircle(ctx2) {
    //   if (true) {
    //     this.isHited = true;
    //   }
    // },

    reset(ctx2) {
      // this.speedごとに再描画
      ctx2.clearRect(0, 0, 800, 500);
      this.makeGun(ctx2);
      this.drawBall(ctx2);
      this.drawCircle(ctx2);
    },
    load(ctx2) {
      // 当たり判定
      // this.collideCircle(ctx2);
      for (let i = 0; i < this.circle.length; i++) {
        if (this.circle[i].x > 470 || this.circle[i].x < 30) {
          this.circle[i].speed *= -1;
        }
        this.circle[i].x += this.circle[i].speed;
      }

      // 押したときに始まるようにする
      // this.ball.y = this.ball.speed;

      // 何もない場合繰り返し
      this.reset(ctx2);

      // ボール動かす
      let move = setTimeout(() => {
        this.load(ctx2);
      }, this.speed);

      // 終わり判定
      if (this.isHited) {
        // this.$emit("finish");
        clearTimeout(move);
      }
    },
  },
  mounted() {
    let canvas2 = document.getElementById("canvas2");
    let ctx2 = canvas2.getContext("2d");
    ctx2.strokeStyle = "black";
    this.reset(ctx2);
    this.load(ctx2);
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
  z-index: 20;
  background: rgba(169, 245, 82, 0.3);
}
</style>
