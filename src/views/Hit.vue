<template>
  <div class="frame">
    <component
      :is="currentComponent[currentNumber]"
      :point="point"
      :getPoint="getPoint"
      :HitScore="HitScore"
      @next="addCurrentNumber"
      @again="minusCurrentNumber"
      @mistake="mistake"
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
      getPoint: 0,
      point: 0,
      HitScore: [],
    };
  },
  created() {
    firebase
      .firestore()
      .collection("Score")
      .doc("HitTop5")
      .get()
      .then((doc) => {
        doc.data().Top5.forEach((Top5) => {
          this.HitScore.push({
            ...Top5,
          });
        });
      });
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
        this.getPoint = 0;
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
        this.getPoint = 0;
      }
      this.currentNumber--;
    },
    mistake() {
      this.getPoint = 0
    },
    plusPoint10() {
      this.getPoint = 10
      this.point += this.getPoint;
    },
    plusPoint20() {
      this.getPoint = 20
      this.point += this.getPoint;
    },
    plusPoint30() {
      this.getPoint = 30
      this.point += this.getPoint;
    },
    plusPoint50() {
      this.getPoint = 50
      this.point += this.getPoint;
    },
    ranking() {
      this.HitScore.push({ score: this.point, name: this.$auth.currentUser.displayName });

      this.HitScore.sort((a, b) => {
        return b.score - a.score;
      });
      this.HitScore.splice(5, 1);

      firebase
        .firestore()
        .collection("Score")
        .doc("HitTop5")
        .set({ Top5: this.HitScore });
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
