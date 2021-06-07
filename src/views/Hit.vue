<template>
  <div class="frame">
    <component
      :is="currentComponent[currentNumber]"
      @next="addCurrentNumber"
      @again="minusCurrentNumber"
    ></component>
  </div>
</template>

<script>
import Home from "@/components/HitComponents/Home.vue";
import IsPlaying from "@/components/HitComponents/IsPlaying.vue";
import Result from "@/components/HitComponents/Result.vue";

export default {
  data() {
    return {
      currentComponent: ["Home", "IsPlaying", "Result"],
      currentNumber: 0,
    };
  },
  components: {
    Home,
    IsPlaying,
    Result,
  },
  methods: {
    addCurrentNumber() {
      this.currentNumber++;
      if (this.currentNumber === this.currentComponent.length) {
        this.currentNumber = 0;
      }
    },
    minusCurrentNumber() {
      this.currentNumber--;
    },
  },
};
</script>

<style>
* {
  margin: 0 auto;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
}
.frame {
  width: 100vw;
  height: 100vh;
}
</style>
