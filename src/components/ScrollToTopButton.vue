<template>
  <button
    ref="scrollToTopBtn"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center opacity-0 pointer-events-none z-40"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollToTopBtn = ref(null);

const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    ease: "power2.inOut",
  });
};

onMounted(() => {
  ScrollTrigger.create({
    trigger: document.body,
    start: "top -200px", // Show the button after scrolling down 200px
    onEnter: () => {
      gsap.to(scrollToTopBtn.value, { opacity: 1, pointerEvents: "auto" });
    },
    onLeaveBack: () => {
      gsap.to(scrollToTopBtn.value, { opacity: 0, pointerEvents: "none" });
    },
  });
});
</script>
