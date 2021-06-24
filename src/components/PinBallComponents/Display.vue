<template>
  <div class="flex">
    <Game
      class="display"
      @minus10="$emit('minus10')"
      @plus10="$emit('plus10')"
      @plus20="$emit('plus20')"
      @plus30="$emit('plus30')"
      @plusRandom="$emit('plusRandom')"
      @finish="$emit('finish')"
    ></Game>
    <div class="side-menu">
      <h3 v-if="currentPlusPoint !== 0" class="side-menu-item item1">
        {{ currentPlusPoint }}pt!
      </h3>
      <p class="side-menu-item hit-count" v-if="collideCount !== 0">
        {{ collideCount }} hit!
      </p>
      <div
        v-if="collideCount % 5 === 0 && this.collideCount !== 0"
        class="side-menu-item bonus"
      >
        <p>{{ collideCount }}連チャン！</p>
        <p>ボーナス</p>
        <p>{{ bonusPoint }}pt</p>
      </div>
      <div class="side-menu-item item2">
        <p>現在のスコア</p>
        <h2>{{ point }}pt</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Game from "./Game.vue";
export default {
  components: { Game },
  props: ["point", "currentPlusPoint", "collideCount", "bonusPoint"],
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  width: 625px;
  height: 90%;
  border: 10px solid rgba(0, 0, 0, 0.7);
  border-radius: 10px;
}
.display {
  width: 500px;
  background-color: rgba(241, 234, 243, 0.404);
}
.side-menu {
  color: white;
  background: rgba(7, 6, 6, 0.76);
  border-left: 3px solid rgba(0, 0, 0, 0.7);
  width: 125px;
  height: 100%;
  position: relative;
}
.side-menu h2 {
  font-size: 28px;
  padding-top: 15px;
}
.side-menu h3 {
  font-size: 24px;
}
.side-menu p {
  font-size: 15px;
  padding: 2px;
}
.side-menu-item {
  position: absolute;
  left: 0;
  right: 0;
}
.item1 {
  top: 30px;
}
.item2 {
  bottom: 30px;
}
.bonus {
  color: gold;
  top: 300px;
  font-size: 12px;
}
.bonus h3:first-child {
  padding-bottom: 10px;
}
.hit-count {
  top: 250px;
}
</style>
