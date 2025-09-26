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

router.isReady().then(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  });
  // Kick Lenis a few times instantly
for (let i = 0; i < 5; i++) {
  lenis.raf(performance.now());
}

  // ✅ Force Lenis to start in sync
  lenis.scrollTo(window.scrollY || 0, { immediate: true });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  app.config.globalProperties.$lenis = () => lenis;
  window.lenis = lenis;

  router.afterEach(() => {
    lenis.scrollTo(0, {
      offset: 0,
      duration: 0,
      easing: (t) => t,
    });
    ScrollTrigger.refresh();
  });

  // ✅ Sync again after all assets load
  window.addEventListener("load", () => {
    lenis.scrollTo(lenis.scroll, { immediate: true });
    ScrollTrigger.refresh(true);
  });
});
