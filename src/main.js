import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";
import { router } from "./routes/routes";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
console.log("ScrollSmoother:", ScrollSmoother);
let smoother;

const app = createApp(App);

app.use(router);

app.mount("#app");

router.isReady().then(() => {
  if (!ScrollSmoother.get()) {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });
  } else {
    smoother = ScrollSmoother.get();
    smoother.refresh();
  }
});

// make it globally accessible if needed
app.config.globalProperties.$smoother = () => ScrollSmoother.get();
