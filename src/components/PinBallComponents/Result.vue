<template>
  <div class="descriptionBox">
    <h1>ランキング上位</h1>
    <table class="result">
      <tr v-for="(record, index) in displayResult" :key="index">
        <td>第 {{ 1 + index }} 位</td>
        <td>{{ record.name }}</td>
        <td>{{ record.score }} pt</td>
      </tr>
    </table>
    <button @click="active">戻る</button>
  </div>
</template>

<script>
export default {
  props: ["PinBallScore"],
  methods: {
    active() {
      this.$emit("back");
    },
  },
  computed: {
    displayResult() {
      return this.PinBallScore.slice(0, 5)
    }
  }
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
table {
  margin-top: 20px;
  width: 100%;
}
tr {
  display: flex;
  justify-content: space-between;
}
td {
  width: 30%;
  font-size: 24px;
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
