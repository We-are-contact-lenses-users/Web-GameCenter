<template>
  <div class="descriptionBox">
    <h1>Top players</h1>
    <table class="result">
      <tr v-for="(record, index) in HitScore" :key="index">
        <td>第 {{ 1 + index }} 位</td>
        <td>{{ record.name }} </td>
        <td>{{ record.score }} pt</td>
      </tr>
    </table>
    <button @click="active">戻る</button>
  </div>
</template>

<script>
export default {
  props: ["HitScore"],
  methods: {
    active() {
      this.$emit("back");
    },
  },
  mounted() {
    console.log(this.HitScore);
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
  background-color: rgba(24, 21, 21, 0.336);
  color: white;
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
table {
  margin-top: 20px;
  width: 100%;
}
tr {
  display: flex;
  justify-content: space-between;
}
tr + tr {
  padding-top: 10px;
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
  background-color: rgba(255, 255, 255, 0.6);border-radius: 5px;
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
