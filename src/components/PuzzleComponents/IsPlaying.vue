<template>
  <div class="display">
    <!-- ここからゲーム本体 -->
    <transition name="fade" mode="out-in">
      <div v-if="isPlaying">
        <p class="backHome" @click="back">home</p>
        <h1>Let's Puzzle!</h1>
        <div class="border animate__animated animate__fadeIn">
          <div class="container" key="1">
            <div
              v-for="(block, index) in newblocks"
              :key="index"
              :class="[
                'game',
                'game' + block.id,
                'row' + block.row + 'col' + block.col,
                className.block,
              ]"
              @click="moveBlock(block.id, index)"
            ></div>
          </div>
        </div>
      </div>
      <!-- ここまで -->
      <div v-else key="2">
        <h2 class="title">Clear!!</h2>
        <button v-button @click="next">result</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      className: {
        block: "",
      },
      isPlaying: false,
      newblocks: [],
      idChecker: [],
      blocks: [
        {
          id: 1,
          row: 1,
          col: 1,
        },
        {
          id: 2,
          row: 1,
          col: 2,
        },
        {
          id: 3,
          row: 1,
          col: 3,
        },
        {
          id: 4,
          row: 2,
          col: 1,
        },
        {
          id: 5,
          row: 2,
          col: 2,
        },
        {
          id: 6,
          row: 2,
          col: 3,
        },
        {
          id: 7,
          row: 3,
          col: 1,
        },
        {
          id: 8,
          row: 3,
          col: 2,
        },
        {
          id: 9,
          row: 3,
          col: 3,
        },
      ],
    };
  },
  methods: {
    back() {
      this.$emit("back");
    },
    next() {
      this.$emit("toResult");
    },
    _shuffle() {
      let blocksLength = this.blocks.length;
      this.newblocks = [];
      this.idChecker = [];
      // 配列シャッフル
      for (let i = 0; i < blocksLength; i++) {
        let shuffleNumber = Math.floor(Math.random() * this.blocks.length);
        this.newblocks.push(this.blocks[shuffleNumber]);
        this.idChecker.push(this.blocks[shuffleNumber].id);
        this.blocks.splice(shuffleNumber, 1);
      }
      // 元の配列に配列を入れる
      for (let j = 0; j < blocksLength; j++) {
        this.blocks.push(this.newblocks[j]);
      }
    },
    moveBlock(a, b) {
      // a:クリックしたもののid, b:クリックしたものの配列の順番
      let nineNumberPlace = this.newblocks.findIndex((block) => block.id === 9);
      // 上下左右のみ動く様にする
      if (nineNumberPlace % 3 === 0) {
        if (b !== nineNumberPlace + 1 && Math.abs(b - nineNumberPlace) !== 3) {
          return;
        }
      }
      if (nineNumberPlace % 3 === 1) {
        if (
          Math.abs(b - nineNumberPlace) !== 1 &&
          Math.abs(b - nineNumberPlace) !== 3
        ) {
          return;
        }
      }
      if (nineNumberPlace % 3 === 2) {
        if (b !== nineNumberPlace - 1 && Math.abs(b - nineNumberPlace) !== 3) {
          return;
        }
      }
      // ここまで
      let stayBlock = this.newblocks.find((block) => block.id === 9);
      let savePlace = this.newblocks[b];
      this.newblocks.splice(b, 1, stayBlock);
      this.newblocks.splice(nineNumberPlace, 1, savePlace);
      this._check();
    },
    _check() {
      if (
        this.newblocks.filter((block, index) => {
          return block.id !== index + 1;
        }).length === 0
      ) {
        this.className.block = "clear";
        this.isPlaying = false;
      }
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
  box-sizing: border-box;
}
body {
  margin: 0;
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
.backHome {
  margin: 20px 40px;
  padding: 10px;
  cursor: pointer;
  float: right;
}

.backHome:hover {
  opacity: 0.7;
}

.title {
  font-size: 50px;
  color: rgba(255, 0, 0, 0.7);
  padding-top: 20vh;
}

.display {
  background-color: rgba(240, 180, 180, 0.3);
  height: 100vh;
  width: 100vw;
}

.border {
  width: 350px;
  height: 350px;
  background-color: rgba(200, 100, 180, 0.7);
  box-shadow: 5px 5px 10px rgba(220, 180, 180, 1);
  border-radius: 10px;
}

.container {
  display: flex;
  width: 300px;
  height: 300px;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  transform: translateY(25px);
}

.game {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-image: url("../../assets/C33TOxdB_400x400.jpg");
  background-repeat: no-repeat;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.game1 {
  background-position: top left;
}
.game2 {
  background-position: top center;
}
.game3 {
  background-position: top right;
}
.game4 {
  background-position: center left;
}
.game5 {
  background-position: center center;
}
.game6 {
  background-position: center right;
}
.game7 {
  background-position: bottom left;
}
.game8 {
  background-position: bottom center;
}
.game9 {
  background-image: none;
  background-color: black;
  opacity: 0.6;
}
.clear {
  border: none;
}
</style>
