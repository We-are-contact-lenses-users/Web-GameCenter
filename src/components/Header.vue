<template>
  <nav class="header">
    <div class="batu" id="closeButton">
      <span class="batu-first"></span>
      <span class="batu-second"></span>
    </div>
    <router-link to="/selectgame" class="linkitem">SelectGame</router-link>
    <router-link to="/reviewpage" class="linkitem">ReviewPage</router-link>
    <router-link to="/ranking" class="linkitem">Ranking</router-link>
    <router-link to="/signup" class="linkitem">SignUp</router-link>
  </nav>
</template>

<script>
export default {
  mounted() {
    let closeButton = document.getElementById("closeButton");
    let links = document.querySelectorAll('.linkitem')
    closeButton.addEventListener("click", () => {
      this.$emit("changeNav");
    });
    links.forEach((link) => {
      link.addEventListener('click', () => {
        this.$emit("changeNav");
      })
    })
  },
};
</script>

<style scoped>
.header {
  position: absolute;
  height: 100vh;
  line-height: 60px;
  background: rgba(70, 39, 56, 0.651);
  width: 100vw;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.header .linkitem {
  color: rgba(218, 236, 136, 0.815);
  text-decoration: none;
  margin-right: 100px;
  margin-top: 20px;
  transition: color 1s, font-size 1s;
}

.header .linkitem:hover {
  font-size: 34px;
  color: rgba(248, 248, 78, 0.822);
}

.batu {
  width: 60px;
  height: 60px;
  margin-right: 100px;
  margin-top: 10px;
}
.batu span {
  display: block;
  width: 50px;
  height: 3px;
  background: rgba(240, 240, 145, 0.808);
}
.batu-first {
  margin-top: 20px;
  transform: translateY(10px) rotate(45deg);
}
.batu-second {
  transform: translateY(-13px) rotate(-45deg);
  margin-top: 20px;
}
</style>
