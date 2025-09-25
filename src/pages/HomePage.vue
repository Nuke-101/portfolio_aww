<script setup>
import Navbar from "../universal-sections/Navbar.vue";
import FooterSection from "../universal-sections/FooterSection.vue";

import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

onMounted(() => {
  const splitRole = new SplitText(".role", {
    type: "lines",
    linesClass: "line-child",
  });
  const splitRoleInverted = new SplitText(".role-inverted", {
    type: "lines",
    linesClass: "line-child",
  });

  const splitLocation = new SplitText(".location", {
    type: "lines",
    linesClass: "line-child",
  });

  const splitDescription = new SplitText(".about-description", {
    type: "lines",
    linesClass: "line-child",
  });

  gsap.from(splitRole.lines, {
    yPercent: 100,
    duration: 1.5,
    ease: "power4.out",
  });
  gsap.fromTo(
    splitRoleInverted.lines,
    { yPercent: 100 },
    {
      yPercent: 10.5,
      duration: 1.6,
      ease: "power4.out",
    }
  );
  gsap.from(splitLocation.lines, {
    yPercent: 100,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".work-roles-inner", {
    y: 100,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".work-roles-ul",
      start: "center 100%",
      scrub: true,
    },
    stagger: 0.3,
  });

  gsap.from(".about-text-inner", {
    y: 150,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 100%", // This is the key part
      scrub: true,
    },
    stagger: 0.3,
  });

  gsap.from(splitDescription.lines, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".about-description-container",
      start: "top 100%", // This is the key part
      scrub: true,
      end: "center 70%",
    },
    stagger: 0.5,
  });

  gsap.from(".work-header-text", {
    y: 150,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".work-header-text",
      start: "top 80%", // This is the key part
      scrub: true,
    },
    stagger: 0.3,
  });
});

onUnmounted(() => {
  // Refresh ScrollTrigger after scroll finishes
  ScrollTrigger.refresh();
});
</script>
<template>
  <Navbar></Navbar>
  <section class="hero w-screen flex-col justify-center items-center mt-[12vh]">
    <h1
      class="role design-engineer text-[15vw] md:text-[11.35vw] font-saans leading-none md:leading-[.80] px-[7vw] md:px-0 font-bold bg-[var(--pearl)] overflow-hidden"
    >
      DESIGN ENGINEER
    </h1>
    <h1
      class="role-inverted hidden md:block text-[11.35vw] font-saans font-bold leading-none overflow-hidden"
    >
      DESIGN ENGINEER
    </h1>
    <div
      class="location text-right title-2 mt-7 font-satoshi font-[400] px-[7vw] overflow-hidden"
    >
      BASED IN PUNE, INDIA
    </div>
    <div class="technologies-list">
      <ul
        class="work-roles-ul font-satoshi font-[500] title-2 space-y-2 md:space-y-2 flex-col w-screen px-[7vw] mt-[15vh] md:mt-[20vh] overflow-hidden"
        ref="skillsList"
      >
        <li class="work-roles overflow-hidden">
          <div class="work-roles-inner">UX RESEARCH</div>
        </li>
        <li class="work-roles overflow-hidden">
          <div class="work-roles-inner">UX DESIGN</div>
        </li>
        <li class="work-roles overflow-hidden">
          <div class="work-roles-inner">WEB/APP DEVELOPMENT</div>
        </li>
      </ul>
    </div>
  </section>
  <section
    class="about grid cols-1 md:grid-cols-2 gap-7 px-[7vw] mt-[200px] md:mt-[15vw]"
  >
    <div class="profile-pic relative">
      <div
        class="image-wrapper flex md:justify-center justify-end items-center"
      >
        <img
          class="w-[65%] md:w-[75%] h-auto object-contain"
          src="../assets/images/Profile-Photo.jpg"
          alt=""
        />
      </div>
      <h1
        class="absolute text-[12vw] md:text-[6vw] left-0 top-[15%] font-saans font-bold leading-none overflow-hidden"
      >
        <div class="about-text overflow-hidden">
          <div class="about-text-inner">ABO</div>
        </div>
        <div class="about-text overflow-hidden">
          <div class="about-text-inner">UT</div>
        </div>
        <div class="about-text overflow-hidden">
          <div class="about-text-inner">ME.</div>
        </div>
      </h1>
    </div>
    <div class="about-description-container self-end overflow-hidden">
      <h3
        class="name font-saans title-1 font-light leading-none mt-10 md:mt-0 cursor-enlarge"
      >
        NIKHIL SHINDE
      </h3>
      <p
        class="about-description line-height-150 font-satoshi body line-h pt-7 w-[100%] md:w-[80%] pb-15"
      >
        I am a UX professional with a Master's degree in Human-Computer
        Interaction and a strong foundation in Computer Science. My expertise
        spans the entire product lifecycle, from initial user research and
        design to development and implementation.
      </p>
    </div>
  </section>
  <section
    class="work relative px-[7vw] mt-[100px] pt-[100px] pb-[100px] md:mt-[10vw] bg-[var(--rock)] text-[var(--pearl)] dark-background"
  >
    <h2 class="text-[12vw] md:text-[6vw] font-saans font-bold leading-none">
      <div class="work-header overflow-hidden">
        <div class="work-header-text">FEATURED</div>
      </div>
      <div class="work-header overflow-hidden">
        <div class="work-header-text">WORK</div>
      </div>
    </h2>
    <div
      class="parent relative grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-15 mt-25"
    >
      <router-link
        to="/gravityDrive"
        ref="project1"
        class="project-tile relative row-span-2 row-start-1"
      >
        <div class="image-wrapper relative overflow-hidden aspect-[56/67]">
          <img
            src="../assets/images/GravityDrive.png"
            alt=""
            class="cover-image"
          />
        </div>
        <div class="project-info">
          <h3 class="project-company body font-light mt-7">GRAVITY DRIVE</h3>
          <h2 class="project-title title-2 font-bold mt-1 tracking-wide">
            EVENTFLOW (SAAS)
          </h2>
          <p class="project-desc body mt-4">
            An integrated platform that streamlines event planning and execution
            for venues and corporations.
          </p>
        </div>
      </router-link>
      <router-link
        to="/eTurn"
        ref="project2"
        class="project-tile relative md:row-span-2 md:row-start-2"
      >
        <div class="image-wrapper relative overflow-hidden aspect-[56/67]">
          <img src="../assets/images/E-turn.png" alt="" class="cover-image" />
        </div>
        <div class="project-info">
          <h3 class="project-company body font-light mt-7">IUPUI</h3>
          <h2 class="project-title title-2 font-bold mt-1 tracking-wide">
            E-TURN
          </h2>
          <p class="project-desc body mt-4">
            A design prototype that simplifies e-waste recycling by helping
            users find local drop-off points and learn about proper disposal.
          </p>
        </div>
      </router-link>
      <div
        ref="project3"
        class="project-tile relative md:row-span-2 md:row-start-4"
      >
        <div class="image-wrapper relative overflow-hidden aspect-[56/67]">
          <img src="../assets/images/Zentra.png" alt="" class="cover-image" />
        </div>
        <div class="project-info">
          <h3 class="project-company body font-light mt-7">ZENTRA, ALLEGION</h3>
          <h2 class="project-title title-2 font-bold mt-1 tracking-wide">
            KEYASK
          </h2>
          <p class="project-desc body mt-4">
            A new product that expands the Zentra smart lock ecosystem,
            increasing revenue and delivering value to customers.
          </p>
        </div>
      </div>
    </div>
  </section>
  <FooterSection></FooterSection>
</template>
