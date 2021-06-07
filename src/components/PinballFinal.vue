<template>
  <div class="box">
    <BlockBack />
    <h1>最終結果 <br> {{point}}pt</h1>
    <div class="buttonBox">
      <button @click="playAgain">もう一度遊ぶ</button>
      <button @click="back">もとに戻る</button>
    </div>
  </div>
</template>

<script>
import BlockBack from "./Pinball_BlockBack.vue";
export default {
  components: {
    BlockBack,
  },
  props: ['point'],
  methods: {
    back() {
      this.$emit("next");
    },
    playAgain() {
      this.$emit("back");
    },
  },
};
</script>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
}
.buttonBox {
  display: flex;
  width: 90%;
  max-width: 800px;
  height: 300px;
  position: absolute;
  top: 60%;
  left: 0;
  right: 0;
}
h1, button{
  display: inline-block;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 5px solid rgb(98, 119, 119);
  top: 20%;
  left: 0;
  right: 0;
}
h1 {
  padding: 5px;
  font-size: 40px;
  width: 500px;
  position: absolute;
  margin-top: 30px;
}

button {
  font-size: 20px;
  line-height: 2;
  height: 50px;
  opacity: 1;
  margin: 0 auto 20px;
  width: 250px;
}
button:hover {
  cursor: pointer;
  opacity: 0.8;
}
button:active {
  box-shadow: none;
  transform: translateY(3px);
}
@media(max-width: 700px) {
  .buttonBox {
    flex-direction: column;
  }
  button {
    margin-bottom: 40px;
  }
}
</style>

