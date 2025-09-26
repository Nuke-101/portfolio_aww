<template>
  <button
    ref="scrollToTopBtn"
    @click="scrollToTop"
    class="fixed bottom-5 right-5 w-20 h-20 rounded-full bg-white text-black flex items-center mix-blend-difference justify-center opacity-0 pointer-events-none z-40 cursor-enlarge"
  >
    <span>↑</span>
  </button>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollToTopBtn = ref(null);

// Access Lenis instance from Vue's globalProperties
const { appContext } = getCurrentInstance();
const lenis = appContext.config.globalProperties.$lenis?.();

const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0, {
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // same easing as main.js
    });
  }
};

onMounted(() => {
  ScrollTrigger.create({
    trigger: document.body,
    start: "top -200px", // show button after scrolling 200px
    onEnter: () => {
      gsap.to(scrollToTopBtn.value, { yPercent:0, opacity: 1, pointerEvents: "auto" });
    },
    onLeaveBack: () => {
      gsap.to(scrollToTopBtn.value, { yPercent:100, opacity: 0, pointerEvents: "none" });
    },
  });
});
</script>
