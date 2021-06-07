<template>
  <div>
    <component
      :is="currentComponent[currentNumber]"
      :point="point"
      :recordAll="recordAll"
      :collideCount="collideCount"
      :bonusPoint="bonusPoint"
      :currentPlusPoint="currentPlusPoint"
      @next="addCurrentNumber"
      @back="backCurrentNumber"
      @minus10="minus10"
      @plus10="plus10"
      @plus20="plus20"
      @plus30="plus30"
      @plusRandom="plusRandom"
      @record="record"
    ></component>
  </div>
</template>

<script>
import Home from "@/components/PinBallComponents/PinballHome.vue";
import IsPlaying from "@/components/PinBallComponents/PinballIsPlaying.vue";
import Final from "@/components/PinBallComponents/PinballFinal.vue";
// import firebase from "firebase";

export default {
  data() {
    return {
      currentComponent: ["Home", "IsPlaying", "Final"],
      currentNumber: 0,
      point: 0,
      currentPlusPoint: 0,
      recordAll: [],
      collideCount: 0,
      bonusPoint: 0,
    };
  },
  components: {
    Home,
    IsPlaying,
    Final,
  },
  // mounted() {
  //   firebase
  //     .firestore()
  //     .collection("results")
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.docs.forEach((doc) => {
  //         this.resultAll.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });
  //     });
  // },
  methods: {
    // DisplayResult() {
    //   firebase
    //     .firestore()
    //     .collection("results")
    //     .doc("point")
    //     .set({
    //       result: this.recordAll,
    //     });
    // },
    addCurrentNumber() {
      this.currentNumber++;
      if (this.currentNumber === 1) {
        this.point = 0;
        this.currentPlusPoint = 0;
        this.collideCount = 0;
      }
      if (this.currentNumber === 3) {
        this.currentNumber = 0;
      }
    },
    backCurrentNumber() {
      this.currentNumber--;
      if (this.currentNumber === 1) {
        this.point = 0;
        this.currentPlusPoint = 0;
        this.collideCount = 0;
      }
    },
    minus10() {
      this.currentPlusPoint = Number(-10);
      this.point += this.currentPlusPoint;
      this.collideCount++;
      console.log(this.point);
      this._bonus();
    },
    plus10() {
      this.currentPlusPoint = 10;
      this.point += this.currentPlusPoint;
      this.collideCount++;
      this._bonus();
      console.log(this.point);
    },
    plus20() {
      this.currentPlusPoint = 20;
      this.point += this.currentPlusPoint;
      this.collideCount++;
      this._bonus();
      console.log(this.point);
    },
    plus30() {
      this.currentPlusPoint = 30;
      this.point += this.currentPlusPoint;
      this.collideCount++;
      this._bonus();
      console.log(this.point);
    },
    plusRandom() {
      this.currentPlusPoint = Math.floor(Math.random() * 60) - 30;
      this.collideCount++;
      this.point += this.currentPlusPoint;
      this._bonus();
      console.log(this.point);
    },
    _bonus() {
      if (this.collideCount % 5 === 0) {
        this.bonusPoint += 10;
        this.point += this.bonusPoint;
      }
    },
    record() {
      // if (this.recordAll.length === 0) {
      //   this.recordAll.push(this.point);
      // } else if (this.recordAll.length < 5) {
      //   for (let i = 0; i < this.recordAll.length; i++) {
      //     if (i === 0 && this.recordAll[i] <= this.point) {
      //       this.recordAll.unshift(this.point);
      //       this.DisplayResult();
      //     } else if (this.recordAll[i] <= this.point) {
      //       this.recordAll.splice(i, 0, this.point);
      //       this.DisplayResult();
      //     }
      //   }
      // } else {
      for (let i = 0; i < this.recordAll.length; i++) {
        if (i === 0 && this.recordAll[i] <= this.point) {
          this.recordAll.unshift(this.point);
          this.recordAll.pop();
          // this.DisplayResult();
          return;
        }
        if (this.recordAll[i] <= this.point) {
          this.recordAll.pop();
          this.recordAll.splice(i, 0, this.point);
          // this.DisplayResult();
          return;
        }
      }
    },
  },
  // },
};
</script>

<style>
* {
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
}
button {
  display: block;
  width: 20%;
  height: 15%;
}
</style>
