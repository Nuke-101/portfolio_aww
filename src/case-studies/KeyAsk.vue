<script setup>
import Navbar from "../universal-sections/Navbar.vue";
import FooterSection from "../universal-sections/FooterSection.vue";
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.to(".coming-soon", {
    scale: 1.1, // Scales the element to 120%
    duration: 0.9, // The animation takes 0.8 seconds to complete
    yoyo: true, // Animates back to the original state
    repeat: -1, // Repeats the animation infinitely
    ease: "power1.inOut",
  });
});
</script>

<template>
  <Navbar></Navbar>
  <div class="project-intro mt-20 mb-20">
    <div
      class="project-overwiew grid grid-cols-1 md:grid-cols-2 px-[7vw] mb-16"
    >
      <div class="project-title">
        <p class="company body font-bold mb-2">
          IUPUI • <span class="font-thin">HCI Fall 22</span>
        </p>
        <h2 class="project-name h2 font-normal mb-4">E-TURN</h2>
        <p class="company body">3.5 minutes read</p>
      </div>
      <div class="project-overview mt-10 md:mt-0">
        <h3 class="detail-name title-1 font-bold mb-8">overview</h3>
        <p class="desc body">
          This project, developed as part of an Interaction Design Practice
          course, tackles a significant environmental issue: the low rate of
          electronic recycling in the United States.
          <br /><br />Our goal was to understand the public's perception of
          e-waste and design a digital solution to increase recycling literacy
          and effort.
        </p>
      </div>
    </div>
    <div class="project-banner col-span-2 mb-16">
      <img
        src="/src/assets/images/e-turn/banner.png"
        alt=""
        class="banner-im w-full object-cover aspect-[2/1]"
      />
    </div>
    <div
      class="project-details-container grid grid-cols-2 md:grid-cols-4 px-[7vw] mb-20"
    >
      <div class="project-details">
        <div class="project-detail font-bold mb-2">project type</div>
        <div class="project-detail mt-6">Course Project HCI (Fall 22)</div>
      </div>
      <div class="project-details">
        <div class="project-detail font-bold mb-2">role</div>
        <div class="project-detail mt-6">UX Researcher and Designer</div>
      </div>
      <div class="project-details">
        <div class="project-detail font-bold mb-2 mt-10 md:mt-0">duration</div>
        <div class="project-detail mt-6">Sept 22 - Oct 22</div>
      </div>
      <div class="project-details">
        <div class="project-desc font-bold mb-2 mt-10 md:mt-0">
          collaborators
        </div>
        <div class="project-detail flex justify-start gap-2">
          <img
            class="w-12 h-12 rounded-[50%]"
            src="/src/assets/images/e-turn/mandar-profile.jpg"
            alt=""
          /><img
            class="w-12 h-12 rounded-[50%]"
            src="/src/assets/images/e-turn/pranav-profile.jpg"
            alt=""
          /><img
            class="w-12 h-12 rounded-[50%]"
            src="/src/assets/images/e-turn/saransh-profile.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="coming-soon h2 font-bold px-[7vw] text-center">
      COMING SOON !!
    </div>
  </div>
  <FooterSection></FooterSection>
</template>
