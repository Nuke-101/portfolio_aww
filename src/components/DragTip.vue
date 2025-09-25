<template>
  <div class="drag-indicator-container w-full flex items-center justify-end pointer-events-none mt-3">
    
   <span class="arrow caption mr-[5px]">←</span> <p class="indicator-text caption mr-[20px]"> DRAG</p>
    <div class="circle-container relative"> 
    <div class="bouncing-circle absolute right-0 top-50% translate-y-[-50%] w-[14px] h-[14px] bg-[var(--rock-xlight)] rounded-[50%]"></div>
    <div class="bouncing-circle-2 absolute right-0 top-50% translate-y-[-50%] w-[14px] h-[14px] bg-[var(--rock-light)] rounded-[50%]"></div>
    <div class="bouncing-circle-3 absolute right-0  top-50% translate-y-[-50%] w-[14px] h-[14px] bg-[var(--rock)] rounded-[50%]"></div>
  </div>
   

  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: {
      duration: 1.5,
      ease: "power2.inOut",
    },
  });

  tl.to(".bouncing-circle-3", { x: -30 }) // Moves the first circle 30px
    .to(
      ".bouncing-circle-2",
      { x: -20, opacity: .5 }, // Moves the second circle 20px
      "<" // Start at the same time as the previous animation
    )
    .to(
      ".bouncing-circle",
      { x: -10, opacity: .3 }, // Moves the third circle 10px
      "<" // Start at the same time as the previous animation
    ).to(
      ".indicator-text",
      { x: -40 }, // Moves the text 40px and fades it out
      "<" // Start at the same time as the previous animation
    ).to(
      ".arrow",
      { x: -50 }, // Moves the text 40px and fades it out
      "<" // Start at the same time as the previous animation
    );
});
</script>

<style scoped>

</style>