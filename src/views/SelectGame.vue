<template>
  <div id="app">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
      <router-link to="/reviewpage">ReviewPage</router-link> |
      <router-link to="/ranking">Ranking</router-link> |
      <router-link to="/signup">SignUp</router-link> |
      <router-link to="/typinggame">TypingGame</router-link> |
      <router-link to="/puzzlegame">PuzzleGame</router-link> |
      <router-link to="/pinballgame">PinBallGame</router-link> |
      <router-link to="/hitgame">HitGame</router-link> |
      <router-link to="/quizgame">QuizGame</router-link> |
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
