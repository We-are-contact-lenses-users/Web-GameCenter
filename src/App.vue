<template>
  <div id="app">
    <div :class="{ displayMenuButton: isSigned }">
      <transition name="fade" mode="out-in">
        <Header v-if="displayNav" @changeNav="changeDisplayNav"></Header>
        <nav class="menuButton" v-else>
          <div @click="changeDisplayNav">Menu</div>
        </nav>
      </transition>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      displayNav: false,
      isSigned: true,
    };
  },
  methods: {
    changeDisplayNav() {
      this.displayNav = !this.displayNav;
    },
    displayMenu() {
      this.isSigned = !this.isSigned;
    },
  },
  created() {
    this.displayMenu()
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: black;
}

#nav a {
  font-weight: bold;
  color: aliceblue;
}

#nav a.router-link-exact-active {
  color: antiquewhite;
}
.menuButton {
  position: absolute;
  right: 60px;
  z-index: 100;
  top: 30px;
  color: white;
  transition: color 1s, font-size 1s;
  cursor: pointer;
}
.menuButton:hover {
  color: rgba(248, 248, 159, 0.932);
  font-size: 40px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
.displayMenuButton {
  display: none;
}
</style>
