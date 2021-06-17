// import Vue from "vue"
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCyBH3PKugNuENk08AjaI_Qef17ltEc87E",
  authDomain: "web-gamecenter.firebaseapp.com",
  projectId: "web-gamecenter",
  storageBucket: "web-gamecenter.appspot.com",
  messagingSenderId: "785918387491",
  appId: "1:785918387491:web:1a16a209b0d33dad1f5896",
  measurementId: "G-J7LQDTJ6YP",
};

firebase.initializeApp(firebaseConfig);

/**
 * Vue.observable を使って、firebase.auth()をVueアプリ全体に共有する。
 * this.$authがアプリ全体でアクセスできる様になる。
 * @example
 * firebase.auth().currentUser.displayにアクセスする例。任意のコンポーネントで以下の様に記述できる。
 * ```js
 * this.$auth.currentUser.displayName // "displayName" or ""
 * ```
 */

//  const initialUserState = {
//   uid: "",
//   displayName: "",
//   photoURL: "",
// }
// const $auth = Vue.observable({
//   currentUser: { ...initialUserState },
// })
// firebase.auth().onAuthStateChanged((user) => {
//   let state
//   if (user) {
//     const { uid, displayName, photoURL } = user
//     state = {
//       uid,
//       displayName,
//       photoURL,
//     }
//   } else {
//     state = initialUserState
//   }
//   Object.assign($auth.currentUser, state)
// })
// Vue.prototype.$auth = $auth