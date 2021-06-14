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
import Home from "@/components/PinBallComponents/Home.vue";
import IsPlaying from "@/components/PinBallComponents/IsPlaying.vue";
import Final from "@/components/PinBallComponents/Final.vue";

export default {
  data() {
    return {
      currentComponent: ["Home", "IsPlaying", "Final"],
      currentNumber: 0,
      point: 0,
      currentPlusPoint: 0,
      recordAll: [0, 0, 0, 0, 0],
      collideCount: 0,
      bonusPoint: 0,
    };
  },
  components: {
    Home,
    IsPlaying,
    Final,
  },
  methods: {
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
      this.currentPlusPoint = Math.floor(Math.random() * 60) - 10;
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
      let changeRecordAll = false;
      for (let i = 0; i < this.recordAll.length; i++) {
        if (i === 0 && this.recordAll[i] <= this.point) {
          changeRecordAll = true;
          this.recordAll.unshift(this.point);
          this.recordAll.pop();
        }
        if (this.recordAll[i] <= this.point && changeRecordAll === false) {
          changeRecordAll = true;
          this.recordAll.pop();
          this.recordAll.splice(i, 0, this.point);
        }
      }
    },
  },
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
