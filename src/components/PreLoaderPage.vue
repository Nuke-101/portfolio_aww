<script setup>
import { onMounted, defineEmits } from "vue";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin, SplitText);

const allchars = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
const emits = defineEmits(["animation-complete"]);

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      // <-- This callback runs when all animations are finished
      emits("animation-complete"); // <-- Emit the event to the parent
    },
  });

  //Split the name into characters
  const splitName = new SplitText(".scramblename", {
    type: "chars",
    linesClass: "char-child",
  });

  //Animate
  gsap.from(splitName.chars, {
    duration: 0.6,
    yPercent: 100, // Start below the mask
    scrambleText: {
      text: "{original}", // Scramble to the original text
      chars: allchars,
      speed: 1,
      ease: "power4.out",
    },
    stagger: 0.1, // Animate each line one after the other
  });

  tl.to(".line", {
    scaleX: 1, // Animate the width from 0 to 1
    duration: 1.5,
    delay: 1.4,
    ease: "power3.in",
  });

  //Wiper
  tl.to(".wiper", {
    scaleX: 1,
    duration: 1,
    delay: 0,
    ease: "power3.out",
  });
});
</script>

<template>
  <div class="loading-container">
    <div class="main-cont">
      <div class="line" ref="lineElement"></div>
      <h1
        class="scramblename major-mono-display text-9xl text-center overflow-hidden"
      >
        NIKHIL
      </h1>
      <h1
        class="scramblename major-mono-display text-9xl text-center overflow-hidden"
      >
        SHINDE
      </h1>
      <div class="wiper">
        <div class="blackline"></div>
      </div>
    </div>
  </div>
</template>
