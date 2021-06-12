<template>
  <div id="app">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
      <div>Ranking</div>
      <router-link to="/selectgame">SelectGame</router-link>
    </div>
  </div>
</template>
<script>
import StarBackGround from "@/components/StarBackGround.vue";

export default {
  components: {
    StarBackGround,
  },
};
</script>
<style scoped>
#app {
  position: relative;
}
.top-menu {
  position: absolute;
  z-index: 1;
  background: rgba(97, 35, 69, 0.377);
}
</style>
