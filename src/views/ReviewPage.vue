<template>
  <div id="app">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
      <h1 class="title">ReviewPage</h1>
      <div class="reviewBox">
        <router-link to="/reviewpost" class="reviewpost">投稿</router-link>
        <div v-for="(review, index) in reviews" :key="index" class="review">
          <div class="flex">
            <img :src="review.picture" alt="" class="reviewPicture" />
            <div class="reviewPerson">{{ review.person }}</div>
          </div>
          <div class="textbox">
            <div class="textinbox">
              {{ review.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarBackGround from "@/components/StarBackGround.vue";
import firebase from "firebase";

export default {
  data() {
    return {
      reviews: [],
    };
  },
  created() {
    firebase
      .firestore()
      .collection("reviews")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.reviews.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
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
  height: 40px;
  line-height: 40px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding-left: 30px;
  color: aliceblue;
  display: inline-block;
  transform: translateY(-10px);
}
.reviewPicture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.textbox {
  margin-bottom: 20px;
  font-size: 20px;
  width: 100%;
  display: inline-block;
  text-align: left;
}
.textinbox {
  border-radius: 30px;
  padding: 10px 20px;
  margin-left: 30px;
  background: rgba(208, 245, 148, 0.842);
  display: inline-block;
  max-width: 90%;
  overflow-wrap: break-word;
}
.flex {
  margin-left: 0;
  text-align: left;
  padding-left: 30px;
}
</style>
