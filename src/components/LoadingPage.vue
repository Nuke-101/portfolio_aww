<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin, SplitText);

const allchars = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
const router = useRouter();

onMounted(() => {
  const Loadingtimeline = gsap.timeline({
    onComplete: () => {
      router.push("/home");
    },
  });
  
  const splitName = new SplitText(".scramblename", {
    type: "chars",
    linesClass: "char-child",
  });


  Loadingtimeline.from(splitName.chars, {
    duration: 0.6,
    yPercent: 100,
    scrambleText: {
      text: "{original}",
      chars: allchars,
      speed: 1,
      ease: "power4.out",
    },
    stagger: 0.1,
  }).to(".line", {
    scaleX: 1,
    duration: 1.5,
    delay: -.1,
    ease: "power3.in",
  }).to(".wiper", {
    scaleX: 1,
    duration: 1,
    delay: 0,
    ease: "power3.out",
  });

});
</script>

<template>
  <div
    class="loading-container fixed w-screen h-screen flex items-center justify-center top-0 left-0 z-1000 text-[var(--pearl)] bg-[var(--rock)]"
  >
    <div class="main-cont">
      <div class="line absolute w-screen top-[50%] left-0 bg-[var(--pearl)]"></div>
      <h1 class="scramblename major-mono-display text-center overflow-hidden md:text-9xl text-5xl">
        NIKHIL
      </h1>
      <h1 class="scramblename major-mono-display text-center overflow-hidden md:text-9xl text-5xl">
        SHINDE
      </h1>
      <div class="wiper absolute w-screen h-screen top-0 left-0 bg-[var(--pearl)]"></div>
    </div>
  </div>
</template>
