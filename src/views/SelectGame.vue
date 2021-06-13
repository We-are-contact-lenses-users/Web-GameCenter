<template>
  <div class="topDisplay">
    <StarBackGround></StarBackGround>
    <transition name="fade" mode="out-in">
      <Header v-if="displayNav" @changeNav="changeDisplayNav"></Header>
      <nav class="menuButton" v-else>
        <div @click="changeDisplayNav">Menu</div>
      </nav>
    </transition>
    <!-- <nav class="header">
      <div class="batu">
        <span class="batu-first"></span>
        <span class="batu-second"></span>
      </div>
      <router-link to="/reviewpage" class="linkitem">ReviewPage</router-link> 
      <router-link to="/ranking" class="linkitem">Ranking</router-link> 
      <router-link to="/signup" class="linkitem">SignUp</router-link> 
    </nav> -->
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
import Header from "@/components/Header.vue";

export default {
  components: {
    StarBackGround,
    Header,
  },
  data() {
    return {
      displayNav: true,
    };
  },
  methods: {
    changeDisplayNav() {
      this.displayNav = !this.displayNav;
    },
  },
};
</script>
<style scoped>
.topDisplay {
  position: relative;
}
.menuButton {
  position: absolute;
  left: 100px;
  z-index: 100;
  top: 100px;
  color: white;
  transition: color 1s, font-size 1s;
}
.menuButton:hover {
  color: rgba(252, 252, 130, 0.822);
  font-size: 40px;
}
.top-menu {
  position: absolute;
  z-index: 1;
  background: rgba(97, 35, 69, 0.377);
  top: 400px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
