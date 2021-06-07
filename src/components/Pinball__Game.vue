<template>
  <div>
    <canvas id="mycanvas" width="500" height="520"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ball: {
        x: 120,
        y: 200,
        r: 10,
        dx: 5,
        dy: 10,
      },
      bar: {
        x: 220,
        y: 450,
        dx: 15,
      },
      pin: [
        {
          x: 100,
          y: 55,
          r: 5,
        },
        {
          x: 200,
          y: 55,
          r: 5,
        },
        {
          x: 300,
          y: 55,
          r: 5,
        },
        {
          x: 400,
          y: 55,
          r: 5,
        },
        {
          x: 205,
          y: 65,
          r: 5,
        },
        {
          x: 295,
          y: 65,
          r: 5,
        },
        {
          x: 80,
          y: 110,
          r: 5,
        },
        {
          x: 250,
          y: 130,
          r: 5,
        },
        {
          x: 420,
          y: 110,
          r: 5,
        },
        {
          x: 10,
          y: 210,
          r: 5,
        },
        {
          x: 25,
          y: 230,
          r: 5,
        },
        {
          x: 175,
          y: 200,
          r: 5,
        },
        {
          x: 325,
          y: 200,
          r: 5,
        },
        {
          x: 475,
          y: 230,
          r: 5,
        },
        {
          x: 490,
          y: 210,
          r: 5,
        },
        {
          x: 100,
          y: 280,
          r: 5,
        },
        {
          x: 250,
          y: 300,
          r: 5,
        },
        {
          x: 400,
          y: 280,
          r: 5,
        },
        {
          x: 50,
          y: 360,
          r: 5,
        },
        {
          x: 175,
          y: 380,
          r: 5,
        },
        {
          x: 325,
          y: 380,
          r: 5,
        },
        {
          x: 450,
          y: 360,
          r: 5,
        },
      ],
      lineLength: 60,
      point: 0,
      speed: 60,
    };
  },
  methods: {
    drawLine(ctx) {
      ctx.lineCap = "round";
      ctx.lineWidth = 1;
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.moveTo(100 * i, 0);
        ctx.lineTo(100 * i, this.lineLength);
        ctx.closePath();
        ctx.stroke();
      }
    },
    drawText(ctx) {
      let text = ["10", "-10", "30", "???", "20"];
      ctx.font = "italic bold 20px sans-serif";
      for (let i = 0; i <= 4; i++) {
        if (i === 0) {
          ctx.fillStyle = "#006400";
        } else if (i === 2) {
          ctx.fillStyle = "#FF0461";
        } else if (i === 4) {
          ctx.fillStyle = "#136FFF";
        } else {
          ctx.fillStyle = "black";
        }
        ctx.fillText(text[i], 35 + i * 100, 40, 60);
      }
    },
    drawBall(ctx) {
      ctx.beginPath();
      let gladation = ctx.createRadialGradient(
        this.ball.x,
        this.ball.y,
        0,
        this.ball.x,
        this.ball.y,
        this.ball.r
      );
      gladation.addColorStop(0, "gray");
      gladation.addColorStop(1, "black");
      ctx.fillStyle = gladation;
      ctx.arc(
        this.ball.x,
        this.ball.y,
        this.ball.r,
        (Math.PI * 0) / 180,
        (Math.PI * 360) / 180
      );
      ctx.fill();
    },
    drawCircle(ctx) {
      for (let i = 0; i < this.pin.length; i++) {
        ctx.beginPath();
        let gladation = ctx.createRadialGradient(
          this.pin[i].x,
          this.pin[i].y,
          0,
          this.pin[i].x,
          this.pin[i].y,
          this.pin[i].r
        );
        gladation.addColorStop(0, "white");
        gladation.addColorStop(1, "black");
        ctx.fillStyle = gladation;
        ctx.arc(
          this.pin[i].x,
          this.pin[i].y,
          this.pin[i].r,
          (Math.PI * 0) / 180,
          (Math.PI * 360) / 180
        );
        ctx.fill();
      }
    },
    drawUnderbar(ctx) {
      ctx.lineWidth = 7;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(this.bar.x, this.bar.y);
      ctx.lineTo(this.bar.x + 80, this.bar.y);
      ctx.closePath();
      ctx.stroke();
    },
    collideBar() {
      if (this.ball.y + this.ball.r === this.bar.y) {
        if (this.ball.x > this.bar.x - 20 && this.ball.x <= this.bar.x) {
          if (this.ball.dx < 0) {
            return;
          }
          this.ball.dx += -5 + Math.floor(Math.random() * 10);
          this.ball.dx *= -1;
          this.ball.dy *= -1;
          console.log("hitLeft");
        }
        if (this.ball.x > this.bar.x && this.ball.x <= this.bar.x + 80) {
          this.ball.dy *= -1;
        }
        if (this.ball.x > this.bar.x + 80 && this.ball.x <= this.bar.x + 100) {
          if (this.ball.dx > 0) {
            return;
          }
          this.ball.dx += -5 + Math.floor(Math.random() * 10);
          this.ball.dx *= -1;
          this.ball.dy *= -1;
          console.log("hitRight");
        }
      }
    },
    collideCircle() {
      // ピンのあたり方による跳ね返り方設定
      for (let i = 0; i < this.pin.length; i++) {
        if (
          Math.pow(this.ball.x - this.pin[i].x, 2) +
            Math.pow(this.ball.y - this.pin[i].y, 2) <=
          Math.pow(this.ball.r + this.pin[i].r, 2)
        ) {
          if (
            Math.abs(this.ball.x - this.pin[i].x) >= this.pin[i].r
          ) {
            if(this.ball.x < this.pin[i].x && this.ball.dx > 0) {
              this.ball.dx -= 2
              this.ball.dx *= -1;
            }
            if(this.ball.x > this.pin[i].x && this.ball.dx < 0) {
              this.ball.dx += 2
              this.ball.dx *= -1;
            }
          } 
          if (
            Math.abs(this.ball.y - this.pin[i].y) >= this.pin[i].r
          ) {
            if(this.ball.y < this.pin[i].y && this.ball.dy > 0) {
              this.ball.dy *= -1;
            }
            if(this.ball.y > this.pin[i].y && this.ball.dy < 0) {
              this.ball.dy *= -1;
            }
          } 
        }
      }
    },
    collideBorder() {
      // 跳ね返す設定
      if (this.ball.x + this.ball.r > 500 && this.ball.dx > 0) {
        this.ball.dx *= -1;
      }
      if (this.ball.x < this.ball.r && this.ball.dx < 0) {
        this.ball.dx *= -1;
      }
      if (this.ball.y + this.ball.r === 500 || this.ball.y === this.ball.r) {
        this.ball.dy *= -1;
        console.log("bounce");
      }
      if (this.ball.y < this.lineLength) {
        for (let i = 1; i <= 4; i++) {
          if (this.ball.x + this.ball.r > i * 100 && this.ball.x < i * 100) {
            this.ball.dx *= -1;
          }
          if (this.ball.x - this.ball.r < i * 100 && this.ball.x > i * 100) {
            this.ball.dx *= -1;
          }
        }
      }
    },
    pointCheck() {
      if (this.ball.y - this.ball.r !== 0) {
        return;
      }
      console.log("ポイント追加");
      this.ball.dx =
        (Math.floor(Math.random() * 7) + 5) *
        Math.pow(-1, Math.floor(Math.random() * 2));
      if (this.ball.x > 0 && this.ball.x <= 100) {
        this.$emit("plus10");
      }
      if (this.ball.x > 100 && this.ball.x <= 200) {
        this.$emit("minus10");
      }
      if (this.ball.x > 200 && this.ball.x <= 300) {
        this.ball.dx =
          (Math.floor(Math.random() * 10) + 3) *
          Math.pow(-1, Math.floor(Math.random() * 2));
        this.$emit("plus30");
      }
      if (this.ball.x > 300 && this.ball.x <= 400) {
        for(let i = 6; i < this.pin.length; i++) {
          this.pin[i].r++
        }
        this.$emit("plusRandom");
      }
      if (this.ball.x > 400 && this.ball.x < 500) {
        this.$emit("plus20");
      }
    },
    reset(ctx) {
      ctx.clearRect(0, 0, 500, 500);
      this.drawLine(ctx);
      this.drawText(ctx);
      this.drawCircle(ctx);
      this.drawBall(ctx);
      this.drawUnderbar(ctx);
    },
    load(ctx) {
      this.collideCircle();
      this.collideBorder();
      this.pointCheck();
      this.collideBar(ctx);
      this.ball.x += this.ball.dx;
      this.ball.y += this.ball.dy;
      this.reset(ctx);

      // ボールを動かす
      let move = setTimeout(() => {
        this.load(ctx);
      }, this.speed);

      // 終わり判定
      if (this.ball.y + this.ball.r > 480) {
        this.$emit("finish");
        clearTimeout(move);
      }
    },
  },
  watch: {
    bar: {
      handler: function() {
        let canvas = document.getElementById("mycanvas");
        let ctx = canvas.getContext("2d");
        this.reset(ctx);
      },
      deep: true,
    },
  },
  mounted() {
    let canvas = document.getElementById("mycanvas");
    if (!canvas) return;
    let ctx = canvas.getContext("2d");
    let isStart = false;
    this.reset(ctx);
    // バーを動かす設定
    window.addEventListener("keydown", (e) => {
      if (this.bar.x < 400 && e.key === "ArrowRight") {
        this.bar.x += this.bar.dx;
      }
    });
    window.addEventListener("keydown", (e) => {
      if (this.bar.x > 0 && e.key === "ArrowLeft") {
        this.bar.x -= this.bar.dx;
      }
    });
    // ここまで
    window.addEventListener("keydown", (e) => {
      if (isStart === true) {
        return;
      }
      if (e.key === "Enter") {
        // loadは繰り返し判定
        this.load(ctx);
        isStart = !isStart;
      }
    });
  },
};
</script>
