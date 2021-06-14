<template>
  <div class="topDisplay">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
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
.topDisplay {
  position: relative;
}

.top-menu {
  position: absolute;
  z-index: 1;
  background: rgba(97, 35, 69, 0.377);
  top: 400px;
}
</style>
