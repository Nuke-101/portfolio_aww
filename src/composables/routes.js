import { createRouter, createMemoryHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import LoadingPage from "../components/LoadingPage.vue";
import GravityDrive from "../case-studies/GravityDrive.vue";
import ETurn from "../case-studies/ETurn.vue";
import KeyAsk from "../case-studies/KeyAsk.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const routes = [
  { path: "/", component: LoadingPage },
  { path: "/home", component: HomePage },
  {
    path: "/gravityDrive",
    component: GravityDrive,
  },
  {
    path: "/eTurn",
    component: ETurn,
  },
  {
    path: "/keyAsk",
    component: KeyAsk,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior() {
    return false;
  },
});

// After every route navigation
router.afterEach(() => {
  // Smooth scroll to top with GSAP
  gsap.to(window, {
    scrollTo: 0,
    duration: 0.6,
    ease: "power2.out",
    onComplete: () => {
      // Refresh ScrollTrigger after scroll finishes
      ScrollTrigger.refresh();
    },
  });
});
