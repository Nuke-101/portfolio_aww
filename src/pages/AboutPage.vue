<script setup>
import { onMounted, onUnmounted } from "vue";

import FooterSection from "../universal-sections/FooterSection.vue";
import ScrollToTopButton from "../components/ScrollToTopButton.vue";
import Navbar from "../universal-sections/Navbar.vue";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  const projectRows = gsap.utils.toArray(".pinned-row");

  // Save original styles so GSAP can restore them cleanly
  ScrollTrigger.saveStyles(".pinned-col");

  // Create triggers for desktop only
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      projectRows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 80px",
          // unpin when this row finishes, not beyond
          end: () => "+=" + row.offsetHeight,
          pin: row.querySelector(".pinned-col"),
          pinSpacing: false,
        });
      });
    },
  });

  // Refresh only once after media is ready
  const refreshAfterMedia = () => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  };

  // Refresh after images load
  window.addEventListener("load", refreshAfterMedia);

  // Refresh after videos load
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("loadeddata", refreshAfterMedia);
  });
});

// Clean up when component is destroyed
onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <ScrollToTopButton></ScrollToTopButton>
  <Navbar></Navbar>
  <div class="nav-spacer h-[130px]"></div>
  <section class="about-row px-[7vw] mt-20 mb-20 md:mb-40">
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
        class="absolute text-[12vw] md:text-[5vw] left-0 top-[15%] font-saans font-bold leading-none"
      >
        ABO<br />UT<br />ME.
      </h1>
    </div>
    <div class="about-description-container self-end">
      <h3
        class="name font-saans title-1 font-light leading-none mt-10 md:mt-0 cursor-enlarge w-fit"
      >
        NIKHIL SHINDE
      </h3>
      <p
        class="about-description line-height-150 font-satoshi body line-h pt-7 w-[100%] md:w-[70%] pb-15"
      >
        I am a UX professional with a Master's degree in Human-Computer
        Interaction and a strong foundation in Computer Science. My expertise
        spans the entire product lifecycle, from initial user research and
        design to development and implementation.
      </p>
      <a
        class="block title-2 mb-3 cursor-enlarge w-fit"
        href="https://drive.google.com/file/d/177ZAAZ7WyaYhZ3LH0UuLMr3kepv8J3-E/view?usp=sharing"
        target="_blank"
        >• resume <span class="body">↗</span></a
      >
    </div>
  </section>
  <div class="black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20">
    <div class="about-row pinned-row">
      <div class="about-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-8">education</h3>
      </div>
      <div class="about-col-2">
        <div class="education-row mb-20">
          <div class="r1 flex justify-between gap-x-2">
            <p class="title-3 mb-1 font-bold">
              Master's in Human-Computer Interaction
            </p>
            <p class="body">2022 - 24</p>
          </div>
          <div class="r1">
            <p class="body font-light">
              Indiana University, Indianapolis • 3.9<span
                class="caption font-normal"
                >/ 4 GPA</span
              >
            </p>
          </div>
        </div>
        <div class="education-row">
          <div class="r1 flex justify-between gap-x-2">
            <p class="title-3 mb-1 font-bold">
              Bachelor's in Computer Engineering
            </p>
            <p class="body">2018 - 22</p>
          </div>
          <div class="r1">
            <p class="body font-light">
              Pune University • 9.02<span class="caption font-normal"
                >/ 10 GPA</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-[7vw] py-20">
    <div class="about-row pinned-row">
      <div class="about-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-8">work</h3>
      </div>
      <div class="about-col-2">
        <div class="education-row mb-20">
          <div class="r1 flex justify-between gap-x-2">
            <p class="title-3 mb-1 font-bold">UX Researcher and Designer</p>
            <p class="body">Aug 23 - Jun 25</p>
          </div>
          <div class="r1 mb-8">
            <p class="body font-light">Gravity Drive • Indianapolis</p>
          </div>
          <div class="desc">
            <p class="body">
              Translated critical user insights into a design strategy, evolving
              an event management product from a concept to a functional
              solution. By conducting on-site visits and interviews with
              professionals, delivering a final design with an 80% user
              satisfaction rate that streamlined operations and reduced
              communication time by 50%.<br /><br />
              Also volunteered to redesign a local church's signage, applying
              design principles to improve clarity and visual appeal for the
              local community.
            </p>
          </div>
        </div>
        <div class="education-row mb-20">
          <div class="r1 flex justify-between gap-x-2">
            <p class="title-3 mb-1 font-bold">App Development Lead</p>
            <p class="body">Aug 22 - May 24</p>
          </div>
          <div class="r1 mb-8">
            <p class="body font-light">Indiana University • Indianapolis</p>
          </div>
          <div class="desc">
            <p class="body">
              I led a cross-functional team of four, managing end-to-end
              lifecycles of web, mobile, and research projects with a strong
              focus on collaboration and timely delivery. My work includes
              developing dynamic, responsive websites using WordPress, HTML5,
              CSS3, and PHP, all tailored for seamless user experiences.<br /><br />
              I also advocated and helped for a strategic shift toward the
              Flutter framework reducing development time by more than 50%.
            </p>
          </div>
        </div>
        <div class="education-row">
          <div class="r1 flex justify-between gap-x-2">
            <p class="title-3 mb-1 font-bold">
              UX Designer and Front-End Developer
            </p>
            <p class="body">Oct 20 - Mar 21</p>
          </div>
          <div class="r1 mb-8">
            <p class="body font-light">Greensat • Mumbai</p>
          </div>
          <div class="desc">
            <p class="body">
              Led the front-end design and development of a farmer-centric
              Flutter application with over 5K Play Store downloads. Conducted
              extensive user research using a mixed-methods approach with over
              50 participants to inform design decisions. <br /><br />
              I utilized the Google Maps API for innovative graphical farm
              representation based on location coordinates, highlighting the
              affected area on the map while also leveraging Firebase's
              real-time database and implementing the MVC architecture to design
              a scalable and robust backend and state management solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection></FooterSection>
</template>
