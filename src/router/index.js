import Vue from "vue";
import VueRouter from "vue-router";
import TypingGame from "../views/Typing.vue";
import PuzzleGame from "../views/Puzzle.vue";
import PinBallGame from "../views/PinBall.vue";

Vue.use(VueRouter);

const routes = [
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
