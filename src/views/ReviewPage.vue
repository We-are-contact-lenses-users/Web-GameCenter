<template>
  <div id="app">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
      <h1 class="title">ReviewPage</h1>
      <div class="reviewBox">
      <router-link to="/reviewpost" class="reviewpost">投稿</router-link>
        <div v-for="(review, index) in reviews" :key="index" class="review">
          <div class="reviewPerson">{{ review.person }}</div>
          <div class="textbox">{{ review.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarBackGround from "@/components/StarBackGround.vue";

export default {
  data() {
    return {
      // ここのデータをfirebaseでやり取りする
      reviews: [
        {
          person: "一人目",
          text: "楽しいな",
        },
        {
          person: "二人目",
          text: "難しいな",
        },
        {
          person: "三人目",
          text: "やっとできた",
        },
        {
          person: "四人目",
          text: "ゲーセンいいね",
        },
      ],
    };
  },
  components: {
    StarBackGround,
  },
};
</script>
<style scoped>
#app {
  position: relative;
}
.top-menu {
  position: absolute;
  left: 5%;
  width: 90%;
  z-index: 1;
}
.title {
  padding: 140px 0 100px;
  color: aliceblue;
}
.reviewpost {
  display: block;
  color: black;
  width: 80px;
  height: 40px;
  font-size: 20px;
  line-height: 2;
  margin-right: 40px;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 5px;
  background: rgba(233, 232, 245, 0.781);
  box-shadow: 0 2px 2px black;
}
.reviewpost:hover {
  opacity: 0.7;
}
.reviewpost:active {
  opacity: 0.7;
  box-shadow: none;
  transform: translateY(2px);
}
.review {
  display: left;
  max-width: 800px;
}
.reviewBox {
  width: 100%;
  padding: 30px;
  background: rgba(233, 232, 245, 0.178);
  border-radius: 30px;
  text-align: left;
  margin-bottom: 200px;
}
.reviewPerson {
  text-align: left;
  font-size: 18px;
  padding-left: 40px;
  color: aliceblue;
}
.textbox {
  background: rgba(208, 245, 148, 0.842);
  padding: 5px 20px;
  margin-left: 0;
  margin-bottom: 20px;
  border-radius: 30px;
  font-size: 20px;
}
</style>
