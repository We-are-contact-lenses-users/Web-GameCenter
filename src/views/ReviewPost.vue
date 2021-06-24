<template>
  <div id="app">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
      <h1 class="title">Post your message</h1>
      <div class="postBox">
        <form class="form">
          <div
            :class="{
              sendOK: displaySendMessage,
              notSend: !displaySendMessage,
            }"
          >
            Complete!
          </div>
          <label for="text">投稿内容</label>
          <textarea
            id="text"
            cols="30"
            rows="10"
            v-model="reviewText"
            placeholder="Write your comment!"
          ></textarea>
          <div class="radiobox">
            <div class="flexitem">
              <input
                value="Total"
                v-model="reviewType"
                name="type"
                type="radio"
                id="total"
              />
              <label class="label" for="total">Total</label>
            </div>
            <div class="flexitem">
              <input
                value="PinballGame"
                v-model="reviewType"
                name="type"
                type="radio"
                id="pinball"
              />
              <label class="label" for="pinball">PinballGame</label>
            </div>
            <div class="flexitem">
              <input
                value="PuzzleGame"
                v-model="reviewType"
                name="type"
                type="radio"
                id="puzzle"
              />
              <label class="label" for="puzzle">PuzzleGame</label>
            </div>
            <div class="flexitem">
              <input
                value="TypingGame"
                v-model="reviewType"
                name="type"
                type="radio"
                id="typing"
              />
              <label class="label" for="typing">TypingGame</label>
            </div>
            <div class="flexitem">
              <input
                value="QuizGame"
                v-model="reviewType"
                name="type"
                type="radio"
                id="quiz"
              />
              <label class="label" for="quiz">QuizGame</label>
            </div>
            <div class="flexitem">
              <input
                value="SniperGame"
                v-model="reviewType"
                name="type"
                type="radio"
                id="sniper"
              />
              <label class="label" for="sniper">SniperGame</label>
            </div>
          </div>
        </form>
        <button class="button" @click="sendMessage">Send message</button>
        <router-link to="/reviewpage" class="button">Review Page</router-link>
      </div>
    </div>
    <router-view />
    <div>Review Post</div>
  </div>
</template>
<script>
import StarBackGround from "@/components/StarBackGround.vue";
import firebase from "firebase";

export default {
  components: {
    StarBackGround,
  },
  data() {
    return {
      displaySendMessage: false,
      reviewText: "",
      reviewType: "",
      firebaseDatas: [
        {
          topic: "Total",
          collection: "reviewTotal",
        },
        {
          topic: "PinballGame",
          collection: "reviewPinballGame",
        },
        {
          topic: "PuzzleGame",
          collection: "reviewPuzzleGame",
        },
        {
          topic: "TypingGame",
          collection: "reviewTypingGame",
        },
        {
          topic: "QuizGame",
          collection: "reviewQuizGame",
        },
        {
          topic: "SniperGame",
          collection: "reviewSniperGame",
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      if (!this.reviewText || !this.reviewType) {
        return;
      }
      this.firebaseDatas.forEach((firebaseData) => {
        if (this.reviewType === firebaseData.topic) {
          firebase.firestore().collection(firebaseData.collection).add({
            picture: this.$auth.currentUser.photoURL,
            person: this.$auth.currentUser.displayName,
            text: this.reviewText,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
          this.reviewType = "";
        }
      });
      this.displaySendMessage = true;
      this.reviewText = "";
    },
  },
  mounted() {
    window.addEventListener("keydown", () => {
      this.displaySendMessage = false;
    });
  },
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
  width: 90%;
  left: 5%;
  z-index: 2;
}
.title {
  font-size: 30px;
  padding: 140px 0 100px;
  color: antiquewhite;
}
.postBox {
  background: rgba(233, 232, 245, 0.178);
  border-radius: 30px;
  max-width: 750px;
  margin-bottom: 200px;
}
.form {
  display: flex;
  flex-direction: column;
  position: relative;
}
.sendOK {
  position: absolute;
  top: 40%;
  color: rgba(253, 174, 55, 0.904);
  transition: all 0.5s;
  letter-spacing: 1px;
  font-size: 40px;
}
.notSend {
  position: absolute;
  top: 40%;
  opacity: 0;
  transition: all 0.5s;
  letter-spacing: 1px;
  font-size: 40px;
}
.form label {
  font-size: 20px;
  padding: 35px 0 15px;
  margin-left: 20%;
  color: aliceblue;
  letter-spacing: 3px;
}
.form textarea {
  width: 80%;
  margin-bottom: 30px;
  background: rgba(238, 237, 240, 0.596);
  border: 1px solid black;
  border-radius: 10px;
  color: aliceblue;
  text-align: left;
  padding: 30px;
  font-size: 20px;
}
.radiobox {
  width: 80%;
  max-width: 750px;
  display: flex;
  flex-wrap: wrap;
}
.flexitem {
  width: 40%;
}
.form input {
  display: inline-block;
  width: 20px;
  margin: 0;
}
.form .label {
  margin: 0;
  padding: 0;
  display: inline-block;
  width: 80%;
  font-size: 18px;
  transition: all 1s;
}
.form .label:hover {
  color: yellow;
  font-size: 18px;
}
.button {
  display: inline-block;
  text-decoration: none;
  border: none;
  background: none;
  font-size: 30px;
  width: 250px;
  margin: 30px;
  color: antiquewhite;
  transition: all 1s;
  font-family: "Dancing Script", monospace;
}
.button:hover {
  color: yellow;
  font-size: 36px;
}
</style>
