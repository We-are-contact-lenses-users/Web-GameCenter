<template>
  <div id="app">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
      <h1 class="title">ReviewPage</h1>
      <ul class="buttons">
        <li @click="displayText(collectionName[0])" class="isselected">Total</li>
        <li @click="displayText(collectionName[1])">Pinballgame</li>
        <li @click="displayText(collectionName[2])">Typinggame</li>
        <li @click="displayText(collectionName[3])">Puzzlegame</li>
        <li @click="displayText(collectionName[4])">Quizgame</li>
        <li @click="displayText(collectionName[5])">Snipergame</li>
      </ul>
      <div class="reviewBox">
        <router-link to="/reviewpost" class="reviewpost">投稿</router-link>
        <transition-group name="fade">
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
        </transition-group>
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
      collectionName: [
        "reviewTotal",
        "reviewPinballGame",
        "reviewTypingGame",
        "reviewPuzzleGame",
        "reviewQuizGame",
        "reviewSniperGame",
      ],
    };
  },
  methods: {
    displayText(collectionName) {
      this.reviews = [];
      firebase
        .firestore()
        .collection(collectionName)
        .orderBy("createdAt")
        .limitToLast(50)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.reviews.unshift({
              id: doc.id,
              ...doc.data(),
            });
          });
        });
    },
  },
  created() {
    firebase
      .firestore()
      .collection("reviewTotal")
      .orderBy("createdAt")
      .limitToLast(50)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.reviews.unshift({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
  },
  components: {
    StarBackGround,
  },
  mounted() {
    let buttons = document.querySelectorAll('li') 
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if(button.classList.contains('isselected')) {
          return
        } else {
          buttons.forEach((button) => {
            if(button.classList.contains('isselected')) {
              button.classList.remove('isselected')
            }
          })
          button.classList.add('isselected')
        }
      })
    })
  }
};
</script>
<style scoped>
#app {
  position: relative;
  font-family: 'Dancing Script', monospace;
  letter-spacing: 1px;
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
.buttons {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.buttons li {
  width: 30%;
  margin-bottom: 20px;
  color: white;
  font-size: 20px;
  padding: 10px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  background: rgba(233, 232, 245, 0.178);
  transition: all 0.7s;
}
.buttons li:hover {
  color: yellow;
  background: rgba(233, 232, 245, 0.6);
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
  background: rgba(233, 232, 245, 0.4);
  border-radius: 30px;
  text-align: left;
  margin-bottom: 200px;
  transition: all 1s;
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
  font-family: cursive, monospace;
}
.flex {
  margin-left: 0;
  text-align: left;
  padding-left: 30px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-leave-to {
  opacity: 0;
}
.fade-move {
  transition: transform 3s;
}
.isselected {
  background: rgba(241, 119, 38, 0.788) !important;
  color: white !important;
}
</style>
