<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const allchars = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";

onMounted(() => {
  const tl = gsap.timeline();

  //Name scramble animation
  tl.to(".scramblename", {
    duration: 3,
    scrambleText: { text: "{original}", speed: 1, chars: allchars },
  });

  //Line animation
  tl.to(".line", {
    scaleX: 1, // Animate the width from 0 to 1
    duration: 1.5,
    delay: -1,
    ease: "power3.in",
  });

  //Wiper
  tl.to(".wiper", {
    scaleX: 1,
    duration: 1,
    delay: 0,
    ease: "power3.inout",
  });
});
</script>

<template>
  <div class="loading-container">
    <div class="main-cont">
      <div class="line" ref="lineElement"></div>
      <h1 class="scramblename major-mono-display text-9xl text-center">
        NIKHIL
      </h1>
      <h1 class="scramblename major-mono-display text-9xl text-center">
        SHINDE
      </h1>
      <div class="wiper"></div>
    </div>
  </div>
</template>
