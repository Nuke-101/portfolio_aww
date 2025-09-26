import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";

const HomePage = () => import("../pages/HomePage.vue");
const GravityDrive = () => import("../case-studies/GravityDrive.vue");
const ETurn = () => import("../case-studies/ETurn.vue");
const KeyAsk = () => import("../case-studies/KeyAsk.vue");
const LoadingPage = () => import("../components/LoadingPage.vue");


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
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return false; // Lenis handles scrolling
  },
});
