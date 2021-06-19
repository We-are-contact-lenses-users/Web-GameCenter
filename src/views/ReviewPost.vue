<template>
  <div id="app">
    <StarBackGround></StarBackGround>
    <div class="top-menu">
      <h1 class="title">Post your message</h1>
      <div class="postBox">
        <form class="form">
          <label for="text">投稿内容</label>
          <textarea id="text" cols="30" rows="10" v-model="reviewText" placeholder="Write your comment!"></textarea>
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
import firebase from "firebase"

export default {
  components: {
    StarBackGround,
  },
  data() {
    return {
      reviewText: ''
    }
  },
  methods: {
    sendMessage() {
      firebase.firestore().collection("reviews").add({
        picture: this.$auth.currentUser.photoURL,
        person: this.$auth.currentUser.displayName,
        text: this.reviewText
      });
      this.reviewText = ""
    }
  }
};
</script>
<style scoped>
#app {
  position: relative;
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
.button {
  display: inline-block;
  text-decoration: none;
  border: none;
  background: none;
  font-size: 24px;
  width: 250px;
  margin: 30px;
  color: antiquewhite;
  transition: all 1s;
}
.button:hover {
  color: yellow;
  font-size: 30px;
}

</style>
