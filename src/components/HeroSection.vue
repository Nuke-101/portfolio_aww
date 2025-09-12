<script setup>
import { onMounted } from "vue";
import { SplitText } from "gsap/SplitText";

import { gsap } from "gsap";

gsap.registerPlugin(SplitText);

const allchars = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";

onMounted(() => {
  const heroTimeLine = gsap.timeline();

  const splitRole = new SplitText(".role", {
    type: "lines, words",
    linesClass: "line-child",
    wordsClass: "word-child",
    autoSplit: true,
    onSplit: (self) => {
      return gsap.from(self.lines, {
        duration: 1,
        yPercent: 100,
        stagger: 0.3,
      });
    },
  });

  const splitFields = new SplitText(".work-roles", {
    type: "chars",
    linesClass: "char-child",
  });

  const splitRoleInverted = new SplitText(".role-inverted", {
    type: "lines",
    linesClass: "line-child",
  });
  const splitLocation = new SplitText(".location", {
    type: "lines",
    linesClass: "line-child",
  });

  heroTimeLine
    .from(splitRole.lines, {
      duration: 1,
      yPercent: 100,
      stagger: 0.3,
    })
    .from(splitRoleInverted.lines, {
      duration: 1,
      yPercent: 100,
      stagger: 0.3,
      delay: -0.75,
    })
    .from(splitLocation.lines, {
      duration: 1,
      yPercent: 100,
      delay: -0.8,
    })
    .from(splitFields.chars, {
      duration: 0.2,
      yPercent: 100,
      scrambleText: {
        text: "{original}",
        chars: allchars,
        speed: 1,
        ease: "power4.out",
      },
      stagger: 0.1,
    });
});
</script>

<template>
  <section
    class="hero-section w-screen flex-col justify-center items-center mt-[12vh]"
  >
    <h1
      class="role design-engineer text-[15vw] md:text-[11.35vw] font-saans leading-none md:leading-[.80] px-[7vw] md:px-0 font-bold bg-[var(--pearl)] overflow-hidden"
    >
      DESIGN ENGINEER
    </h1>
    <h1
      class="role-inverted hidden md:block text-[11.35vw] font-saans font-bold leading-none -my-[1.23vw] overflow-hidden"
    >
      DESIGN ENGINEER
    </h1>
    <div
      class="location text-right text-[4vw] md:text-2xl mt-7 font-satoshi font-[400] px-[7vw] overflow-hidden"
    >
      BASED IN PUNE, INDIA
    </div>
    <div class="technologies-list">
      <ul
        class="work-roles-ul font-saans font-[500] text-xl md:text-3xl space-y-2 md:space-y-3.5 flex-col w-screen px-[7vw] mt-[15vh] md:mt-[20vh]"
        ref="skillsList"
      >
        <li class="work-roles overflow-hidden">UX RESEARCH</li>
        <li class="work-roles overflow-hidden">UX DESIGN</li>
        <li class="work-roles overflow-hidden">WEB/APP DEVELOPMENT</li>
      </ul>
    </div>
  </section>
</template>
