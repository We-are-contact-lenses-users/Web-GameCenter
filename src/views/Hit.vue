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
import firebase from "firebase";

export default {
  data() {
    return {
      currentComponent: ["Home", "IsPlaying", "Result"],
      currentNumber: 0,
      point: 0,
      recordAll: [0, 0, 0, 0, 0],
      HitScore: [],
    };
  },
  components: {
    Home,
    IsPlaying,
    Result,
  },
  methods: {
    addCurrentNumber() {
      if (this.currentNumber === 2) {
        this.point = 0;
      }
      this.currentNumber++;
      if (this.currentNumber === this.currentComponent.length) {
        this.currentNumber = 0;
      }
      if (this.currentNumber === 2) {
        this.ranking();
      }
    },
    minusCurrentNumber() {
      if (this.currentNumber === 2) {
        this.point = 0;
      }
      this.currentNumber--;
    },
    plusPoint10() {
      this.point += 10;
    },
    plusPoint20() {
      this.point += 20;
    },
    plusPoint30() {
      this.point += 30;
    },
    plusPoint50() {
      this.point += 50;
    },
    ranking() {
      let changeRanking = false;
      for (let i = 0; i < this.recordAll.length; i++) {
        if (i === 0 && this.recordAll[i] <= this.point) {
          this.changeRanking = true;
          this.recordAll.unshift(this.point);
          this.recordAll.pop();
        }
        if (this.recordAll[i] <= this.point && changeRanking === true) {
          this.changeRanking = true;
          this.recordAll.pop();
          this.recordAll.splice(i, 0, this.point);
        }
      }
      console.log(this.recordAll);
      firebase.firestore().collection("HitScore").add({ score: this.point });
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
