<template>
  <div class="marquee-container w-[150%] overflow-hidden whitespace-nowrap py-4 z-1">
    <!-- Wrap two copies of the text -->
    <div ref="marqueeWrapper" class="marquee-wrapper inline-block">
      <div class="marquee-text font-saans font-bold text-4xl inline-block">
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
      </div>
      <!-- Duplicate copy for seamless loop -->
      <div class="marquee-text font-saans font-bold text-4xl inline-block">
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
        <span class="mr-12">COMING SOON</span>
        <span class="mr-12">⁕</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

const marqueeWrapper = ref(null);

onMounted(() => {
  const wrapper = marqueeWrapper.value;
  const textWidth = wrapper.offsetWidth / 2; // half, since we duplicated

  gsap.to(wrapper, {
    x: `-${textWidth}px`, // shift by one copy’s width
    duration: 10, // adjust speed
    ease: "none",
    repeat: -1,
  });
});
</script>

<style scoped>
.marquee-container {
  background-color: var(--rock);
  color: var(--pearl);
  transform: rotate(15deg);
  position: relative;
  left: -10%;
  border: 2px solid var(--pearl);
}

.marquee-wrapper {
  display: inline-block;
  white-space: nowrap;
}
</style>
