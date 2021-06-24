<template>
  <div class="descriptionBox">
    <h1>Rules</h1>
    <div class="text">
      <p>
        タイミングを合わせて的に当てるゲームだよ！<br />的の点数は奥に行くにつれて高くなるよ！<br />5回の合計で高得点を目指そう！
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
  top: 15%;
  right: 0;
  left: 0;
  width: 80%;
  max-width: 600px;
  color: white;
  background-color: rgba(24, 21, 21, 0.336);
  border-radius: 20px;
  border: 10px solid rgba(255, 255, 255, 0.918);
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
.text p {
  text-align: left;
  font-size: 24px;
} 
button {
  display: inline-block;
  font-size: 20px;
  line-height: 2;
  height: 50px;
  opacity: 1;
  margin: 30px auto;
  width: 150px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
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
