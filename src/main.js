import { createApp } from "vue";
import { router } from "./composables/routes";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import App from "./App.vue";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.use(router);

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

app.config.globalProperties.$lenis = lenis;
window.lenis = lenis;

app.mount("#app");

router.afterEach(() => {
  lenis.scrollTo(0, { offset: 0, duration: 0, easing: (t) => t });
  ScrollTrigger.refresh();
});

window.addEventListener("load", () => {
  lenis.scrollTo(lenis.scroll, { immediate: true });
  ScrollTrigger.refresh(true);
});
