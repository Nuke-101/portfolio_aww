
<script setup>
import { onMounted } from "vue";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";


gsap.registerPlugin(SplitText, ScrollTrigger);

const allchars = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";


onMounted(() => {


const heroTimeLine = gsap.timeline();

  const splitRole = new SplitText(".role", {
    type: "lines",
    linesClass: "line-child",
    // You may need to add a ref and an overflow hidden container for this to work
  });

  const splitRoleInverted = new SplitText(".role-inverted", {
    type: "lines",
    linesClass: "line-child",
    // You may need to add a ref and an overflow hidden container for this to work
  });

  heroTimeLine.from(splitRole.lines, {
    duration: 1,
    yPercent: 100,
    stagger: 0.3,
    delay:.5,
  });

  heroTimeLine.from(splitRoleInverted.lines, {
    duration: 1,
    yPercent: 100,
    stagger: 0.3,
    delay:-.75,
  });

  const roleTimeLine = gsap.timeline();
  roleTimeLine.from(".work-roles", {
    yPercent: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".work-roles-ul",
      start: "top bottom",
      end: "top 20%",
      toggleActions: "play reverse play reverse",
      markers: true
    },
  });


});
</script>

<template>
  <section
    class="hero-section h-screen w-screen flex-col justify-center items-center mt-[15vh]"
  >
    <div class="relative">
      <h1
        class="role text-[11.35vw] font-saans font-bold leading-[0.80] overflow-hidden bg-[var(--pearl)]"
      >
        DESIGN ENGINEER
      </h1>
      <h1
          class="role-inverted absolute text-[11.35vw] font-saans font-bold leading-none -my-[1.23vw] overflow-hidden"
      >
        DESIGN ENGINEER
      </h1>
    </div>
    <div class="role text-right text-xl md:text-3xl mt-[14vw] font-satoshi px-[7vw] overflow-hidden">BASED IN PUNE, INDIA</div>
    <div class="technologies-list ">
      <ul class="work-roles-ul font-saans font-medium text-xl md:text-4xl md:space-y-5 flex-col w-screen px-[7vw] mt-30" ref="skillsList">
        <li class="work-roles overflow-hidden">UX RESEARCH</li>
        <li class="work-roles overflow-hidden">UX DESIGN</li>
        <li class="work-roles overflow-hidden">WEB/APP DEVELOPMENT</li>
      </ul>


    </div>
  </section>
</template>

