<template>
  <div class="frame">
    <component
      :is="currentComponent[currentNumber]"
      :point="point"
      @next="addCurrentNumber"
      @again="minusCurrentNumber"
      @plusPoint10="plusPoint10"
      @plusPoint20="plusPoint20"
      @plusPoint30="plusPoint30"
      @plusPoint50="plusPoint50"
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
      currentNumber: 1,
      point: 0,
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
    plusPoint10() {
      this.point += 10 
      console.log(this.point)
    },
    plusPoint20() {
      this.point += 20 
      console.log(this.point)
    },
    plusPoint30() {
      this.point += 30 
      console.log(this.point)
    },
    plusPoint50() {
      this.point += 50 
      console.log(this.point)
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
