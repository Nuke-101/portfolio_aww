<template>
  <div class="marquee-container w-[120%] whitespace-nowrap py-4 z-1 mt-[100px]
md:mt-[10vw]">
    <!-- Wrap two copies of the text -->
    <div ref="marqueeWrapper" class="marquee-wrapper inline-block">
      <div class="marquee-text font-saans font-bold text-4xl inline-block">
        <span class="mr-12">UI/UX DESIGN</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">USER RESEARCH</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">PROTOTYPING</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">FIGMA</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">FRONT-END DEV</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">FLUTTER</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">DART</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">VUE</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">REACT</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">GSAP</span>
        <span class="mr-12">⁕</span>
       
      </div>
      <!-- Duplicate copy for seamless loop -->
      <div class="marquee-text font-saans font-bold text-4xl inline-block">
        <span class="mr-12">UI/UX DESIGN</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">USER RESEARCH</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">PROTOTYPING</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">FIGMA</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">FRONT-END DEV</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">FLUTTER</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">DART</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">VUE</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">REACT</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">GSAP</span>
        <span class="mr-12">⁕</span>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const marqueeWrapper = ref(null);

onMounted(() => {
  const wrapper = marqueeWrapper.value;
  const textWidth = wrapper.offsetWidth / 2;

  gsap.to(wrapper, {
    x: `-${textWidth}px`,
    duration: 20,
    ease: "none",
    repeat: -1,
  });

  // Create a ScrollTrigger that listens to the page scroll
  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      // The direction is 1 when scrolling down, -1 when scrolling up
      const direction = self.direction;
      const skew = direction === 1 ? -10 : 10; // Apply a subtle rotation
      gsap.to(".marquee-text", {
        skew:skew,
        ease: "power2.out",
        duration: 0.5,
      });
    },
  });
});

</script>

<style scoped>
.marquee-container {
  background-color: var(--pearl);
  color: var(--rock);
  position: relative;
  left: -10%;
  border: 4px solid var(--pearl);
}

.marquee-wrapper {
  display: inline-block;
  white-space: nowrap;
}
</style>
