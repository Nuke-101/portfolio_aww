import { createRouter, createMemoryHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import LoadingPage from "../components/LoadingPage.vue";
import GravityDrive from "../case-studies/GravityDrive.vue";
import ETurn from "../case-studies/ETurn.vue";
import KeyAsk from "../case-studies/KeyAsk.vue";

import Lenis from "lenis";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const routes = [
  { path: "/", component: LoadingPage },
  { path: "/home", component: HomePage },
  { path: "/gravityDrive", component: GravityDrive },
  { path: "/eTurn", component: ETurn },
  { path: "/keyAsk", component: KeyAsk },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior() {
    return false; // Let Lenis handle scrolling
  },
});
