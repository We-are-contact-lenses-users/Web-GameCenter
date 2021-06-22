<template>
  <canvas class="item item1" id="canvas2" width="500px" height="500px"></canvas>
</template>

<script>
export default {
  props: ["goNext", "playCount"],
  data() {
    return {
      circle: [
        {
          x: 300,
          y: 50,
          r: 10,
          color: "red",
          speed: 10,
        },
        {
          x: 80,
          y: 100,
          r: 15,
          color: "blue",
          speed: 8,
        },
        {
          x: 400,
          y: 150,
          r: 20,
          color: "yellow",
          speed: 6,
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
        dx: 0,
        tate: 60,
        yoko: 30,
      },
      ball: {
        x: 250,
        y: 430,
        r: 10,
        speed: 0,
        changeSpeed: 10,
        dx: 0,
      },
      speed: 25,
      isHited: false,
      isPlaying: true,
    };
  },
  watch: {
    goNext() {
      if (this.goNext) {
        this.isHited = !this.isHited;
        // this.$emit("restartGame");
        let canvas2 = document.getElementById("canvas2");
        let ctx2 = canvas2.getContext("2d");
        ctx2.strokeStyle = "black";
        this.retryReset();
        this.$emit("finish");
        this.reset(ctx2);
        this.load(ctx2);
      }
    },
    playCount() {
      switch (this.playCount) {
        case 0:
          this.ball.dx = 0;
          this.gun.dx = 0;
          this.speed = 25;
          this.ball.changeSpeed = 30
          break
        case 1:
          this.ball.dx = 2;
          this.gun.dx = 2;
          this.speed = 25
          this.ball.changeSpeed = 10
          break;
        case 2:
          this.ball.dx = -3;
          this.gun.dx = -3;
          this.speed = 25
          this.ball.changeSpeed = 10
          break;
        default:
          this.ball.dx = -3;
          this.gun.dx = -3;
          this.speed = 15;
          this.ball.changeSpeed = 6 
          break;
      }
    },
  },
  methods: {
    retryReset() {
      this.ball.speed = 0;
      this.isPlaying = true;
      this.ball.x = 250;
      this.ball.y = 430;
      this.gun.x = 235;
    },
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

    collideCircle() {
      if (this.ball.y < 30) {
        this.isHited = !this.isHited;
        this.$emit("mistake");
      }
      for (let i = 0; i < this.circle.length; i++) {
        if (
          Math.abs(this.circle[i].y - this.ball.y) <
          this.circle[i].r + this.ball.r
        ) {
          if (
            Math.abs(this.circle[i].x - this.ball.x) <
            this.circle[i].r + this.ball.r
          ) {
            this.isHited = !this.isHited;
            if (i === 0) {
              this.$emit("plusPoint50");
            } else if (i === 1) {
              this.$emit("plusPoint30");
            } else if (i === 2) {
              this.$emit("plusPoint20");
            } else if (i === 3) {
              this.$emit("plusPoint10");
            }
          }
        }
      }
    },

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
        if (i < 2) {
          if (this.circle[i].x === 160 || this.circle[i].x === 320) {
            this.circle[i].speed *= Math.pow(
              -1,
              Math.floor(Math.random() * 1.5)
            );
          }
        }
        if (this.circle[i].x > 470 || this.circle[i].x < 30) {
          this.circle[i].speed *= -1;
        }
        this.circle[i].x += this.circle[i].speed;
      }
      if (this.ball.x > 400 || this.ball.x < 100) {
        this.ball.dx *= -1;
        this.gun.dx *= -1;
      }
      this.ball.x += this.ball.dx;
      this.gun.x += this.gun.dx;
      this.collideCircle();
      // 押したときに始まるようにする
      this.ball.y -= this.ball.speed;

      // 何もない場合繰り返し
      this.reset(ctx2);

      // ボール動かす
      let move = setTimeout(() => {
        this.load(ctx2);
      }, this.speed);

      // 終わり判定
      if (this.isHited) {
        this.$emit("finish");
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

    window.addEventListener("keydown", (e) => {
      if (this.isPlaying === false) {
        return;
      }
      if (e.key === "Enter") {
        this.ball.speed = this.ball.changeSpeed;
        this.isPlaying = false;
        this.ball.dx = 0;
      }
    });
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
