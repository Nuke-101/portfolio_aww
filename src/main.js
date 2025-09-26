import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";
import { router } from "./composables/routes";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.use(router);
app.mount("#app");

// Setup Lenis after router is ready
router.isReady().then(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Expose Lenis globally
  app.config.globalProperties.$lenis = () => lenis;

  router.afterEach(() => {
  lenis.scrollTo(0, {
      offset: 0,
      duration: 0,
      easing: (t) => t,
    });
});
});

