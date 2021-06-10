import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../views/Start.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Ranking from "../views/Ranking.vue";
import ReviewPage from "../views/ReviewPage.vue";
import ReviewPost from "../views/ReviewPost.vue";
import SelectGame from "../views/SelectGame.vue";
import TypingGame from "../views/Typing.vue";
import PuzzleGame from "../views/Puzzle.vue";
import PinBallGame from "../views/PinBall.vue";
import HitGame from "../views/Hit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/selectgame",
    name: "SelectGame",
    component: SelectGame,
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: Ranking,
  },
  {
    path: "/reviewpage",
    name: "ReviewPage",
    component: ReviewPage,
  },
  {
    path: "/reviewpost",
    name: "ReviewPost",
    component: ReviewPost,
  },
  {
    path: "/typinggame",
    name: "TypingGame",
    component: TypingGame,
  },
  {
    path: "/puzzlegame",
    name: "PuzzleGame",
    component: PuzzleGame,
  },
  {
    path: "/pinballgame",
    name: "PinballGame",
    component: PinBallGame,
  },
  {
    path: "/hitgame",
    name: "HitGame",
    component: HitGame,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
