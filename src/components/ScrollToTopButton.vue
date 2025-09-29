<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollToTopBtn = ref(null);
const { appContext } = getCurrentInstance();
const lenis = appContext.config.globalProperties.$lenis?.();

const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0, {
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }
};

let st; // We'll store the ScrollTrigger instance here

onMounted(() => {
  st = ScrollTrigger.create({
    trigger: document.body,
    start: "top -240px",
    onEnter: () => {
      gsap.to(scrollToTopBtn.value, {
        yPercent: 0,
        opacity: 1,
        pointerEvents: "auto",
      });
    },
    onLeaveBack: () => {
      gsap.to(scrollToTopBtn.value, {
        yPercent: 100,
        opacity: 0,
        pointerEvents: "none",
      });
    },
  });
});

onUnmounted(() => {
  if (st) {
    st.kill();
  }
});
</script>
<template>
  <button
    ref="scrollToTopBtn"
    @click="scrollToTop"
    class="fixed bottom-5 right-5 w-20 h-20 rounded-full bg-white text-black flex items-center mix-blend-difference justify-center opacity-0 pointer-events-none z-40 cursor-enlarge"
  >
    <span>↑</span>
  </button>
</template>
