<script setup>
import FooterSection from "../universal-sections/FooterSection.vue";
import Navbar from "../universal-sections/Navbar.vue";

import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

onMounted(() => {
  const words = ["Hello,", "नमस्ते,", "नमस्कार,"];

  const tl = gsap.timeline({
    repeat: -1, // Loop infinitely
    defaults: {
      duration: 1.5,
      ease: "power2.inOut",
    },
  });

  words.forEach((word) => {
    tl.to("#hello-text", {
      scrambleText: word,
    }).to(
      {},
      {
        duration: 1,
      }
    );
  });
});
</script>

<template>
  <Navbar></Navbar>
  <div class="nav-spacer h-[130px]"></div>

  <div class="about-intro grid grid-cols-1 md:grid-cols-2 px-[7vw] mt-20 mb-20">
    <div class="desc mb-40">
      <p class="h2 font-bold mt-20 md:mb-0" id="hello-text">Hello,</p>
      <p class="h2 font-normal mb-20">Nice to meet you!</p>
      <p class="body mb-12">
        I’m Nikhil, a UX professional from Pune. With a Master's degree in
        Human-Computer Interaction and a strong foundation in Computer Science
        my expertise spans the entire product lifecycle, from initial user
        research and design to development and implementation.<br /><br />
        Outside my professional life, I enjoy putting on a gaming session with
        friends, and cooking some delicious food, also singing!!
      </p>
      <a class="title-3 cursor-enlarge block" href=""
        >Resume <span class="font-bold">&nbsp;↗</span></a
      >
    </div>
    <div class="img flex justify-end">
      <img
        class="w-full md:w-[25vw] md:aspect-7/12 object-cover"
        src="/src/assets/images/Profile-Photo.jpg"
        alt=""
      />
    </div>
  </div>
  <div class="social-icons px-[7vw] flex justify-end mb-20">
    <div class="social-row flex flex-row w-24 justify-between">
      <img
        src="/src/assets/icons/ri_linkedin-fill.svg"
        alt=""
        class="social-icon aspect-square w-6 cursor-link"
      />
      <img
        src="/src/assets/icons/mingcute_github-fill.svg"
        alt=""
        class="social-icon aspect-square w-6 cursor-link"
      />
      <img
        src="/src/assets/icons/simple-icons_behance.svg"
        alt=""
        class="social-icon aspect-square w-6 cursor-link"
      />
    </div>
  </div>
  <div class="black-wrapper bg-[var(--rock)] text-white py-20">
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name h2 font-bold mb-8">EDUCATION</h3>
      </div>
      <div class="project-step-col-2">
        <div class="education-container mb-16">
          <p class="degree title-2 mb-2">
            Master's in Human-Computer Interaction
          </p>
          <p class="degree body">Indiana University Indianapolis</p>
          <p class="degree body font-light">Aug 22 - May 24</p>
        </div>
        <div class="education-container">
          <p class="degree title-2 mb-2">Bachelor's in Computer Engineering</p>
          <p class="degree body">Savitribai Phule Pune University</p>
          <p class="degree body font-light">Jul 18 - May 22</p>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-20">
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name h2 font-bold mb-8">WORK</h3>
      </div>
      <div class="project-step-col-2">
        <div class="experience-container mb-16">
          <p class="degree title-2 mb-2">UX Researcher and Designer</p>
          <p class="degree body">Gravity Drive, Indianapolis</p>
          <p class="degree body font-light mb-8">Aug 23 - Jun 25</p>
          <p class="desc">
            Translated critical user insights into a design strategy, evolving
            an event management product from a concept to a functional solution.
            <br />
            <span class="block spacer h-3"></span>
            Also volunteered at a local church in Indianapolis to redesign
            signage, applying design principles to improve navigation and
            clarity.
          </p>
        </div>
        <div class="experience-container mb-16">
          <p class="degree title-2 mb-2">App Development Lead</p>
          <p class="degree body">Savitribai Phule Pune University</p>
          <p class="degree body font-light mb-8">Aug 22 - May 24</p>
          <p class="desc">
            I led a cross-functional team of four, managing end-to-end
            lifecycles of web, mobile, and research projects. My work included
            developing dynamic, responsive websites and web apps using
            WordPress, HTML5, CSS3, Flutter and PHP.<br /><span
              class="block spacer h-3"
            ></span>
            I also advocated and helped for a strategic shift toward the Flutter
            framework, reducing development time and efforts.
          </p>
        </div>
        <div class="experience-container">
          <p class="degree title-2 mb-2">UX Designer and Front-End Developer</p>
          <p class="degree body">Greensat, Mumbai</p>
          <p class="degree body font-light mb-8">Oct 20 - Mar 21</p>
          <p class="desc">
            I Led the front-end design and development of a farmer-centric
            Flutter application which has over 5000 downloads on the Play
            Store.<br /><span class="block spacer h-3"></span>
            Conducted extensive user research using a mixed-methods approach
            with over 50 participants to inform design decisions.
          </p>
        </div>
      </div>
    </div>
  </div>
  <FooterSection></FooterSection>
</template>
