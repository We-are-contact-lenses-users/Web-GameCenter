<template>
  <div class="descriptionBox">
    <h1>ゲームの説明</h1>
    <div class="text">
      <p>
        このゲームは矢印キーを使ってボールをはじいて得点するゲームです！<br />得点を獲得するとボールの角度が変わるのに気を付けて！<br />失敗するまで終わらないのでどんどん得点を重ねていこう！
      </p>
    </div>
    <button @click="active">戻る</button>
  </div>
</template>

<script>
export default {
  methods: {
    active() {
      this.$emit("back");
    },
  },
};
</script>

<style scoped>
.descriptionBox {
  position: absolute;
  top: 20%;
  right: 0;
  left: 0;
  width: 80%;
  max-width: 600px;
  background-color: snow;
  border-radius: 20px;
  border: 10px solid black;
  opacity: 1;
  transition: opacity linear;
  transition-duration: 0.5s;
  z-index: 3;
}
h1 {
  margin-top: 30px;
  font-size: 28px;
}
.text {
  width: 80%;
  line-height: 1.7;
  padding-top: 30px;
}
button {
  display: inline-block;
  font-size: 20px;
  line-height: 2;
  height: 50px;
  opacity: 1;
  margin: 20px auto;
  width: 150px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
  background-color: rgba(255, 255, 255, 0.6);
}
button:hover {
  cursor: pointer;
  opacity: 0.8;
}
button:active {
  box-shadow: none;
  transform: translateY(2px);
}
</style>
