<script setup>
import FooterSection from "../universal-sections/FooterSection.vue";
import Navbar from "../universal-sections/Navbar.vue";

import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

onMounted(() => {
  const firstRevealElements = gsap.utils.toArray(".first-reveal");
  const fadeElements = gsap.utils.toArray(".fade-in");

  firstRevealElements.forEach((el) => {
    const split = new SplitText(el, {
      type: "lines",
      linesClass: "line-child",
    });

    gsap.from(split.lines, {
      y: 200,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
    });
  });
  fadeElements.forEach((el) => {
    gsap.to(el, {
      y: -20,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
    });
  });

  const texts = ["Hello,", "नमस्ते,", "नमस्कार,"];
  const typedText = document.getElementById("typed-text");
  const cursor = document.getElementById("cursor-hello");

  let textIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (typing) {
      if (charIndex < currentText.length) {
        typedText.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150);
      } else {
        typing = false;
        setTimeout(typeEffect, 2000);
      }
    } else {
      if (charIndex > 0) {
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 80);
      } else {
        typing = true;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 300);
      }
    }
  }

  // Blinking cursor
  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  }, 500);

  typeEffect();


  const projectRows = gsap.utils.toArray(".pinned-row");

  ScrollTrigger.saveStyles(".pinned-col");

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      projectRows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 80px",
          end: () => "+=" + row.offsetHeight,
          pin: row.querySelector(".pinned-col"),
          pinSpacing: false,
        });
      });
    },
  });

});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <Navbar></Navbar>
  <div class="nav-spacer h-[130px]"></div>

  <div class="about-intro grid grid-cols-1 md:grid-cols-2 px-[7vw] mt-20 mb-20">
    <div class="desc mb-40">
      <p
        class="h2 font-bold mt-20 md:mb-0 first-reveal overflow-hidden cursor-enlarge w-fit"
        id="hello-text" 
      >
        <span id="typed-text"></span
        ><span id="cursor-hello" class="font-light">|</span>
      </p>
      <p class="h2 font-normal mb-20 first-reveal overflow-hidden">
        Nice to meet you!
      </p>
      <p class="body mb-12 fade-in opacity-0">
        I'm Nikhil, a UX professional from Pune. With a Master's degree in
        Human-Computer Interaction and a strong foundation in Computer Science
        my expertise spans the entire product lifecycle, from initial user
        research and design to development and implementation.<br /><br />
        Outside my professional life, I enjoy gaming sessions with
        friends, cooking some delicious food, and also singing!!
      </p>
      <a
        class="title-3 cursor-enlarge block fade-in opacity-0 w-fit"
        href="https://drive.google.com/file/d/177ZAAZ7WyaYhZ3LH0UuLMr3kepv8J3-E/view?usp=sharing"
        target="_blank"
        >Resume <span class="font-bold">&nbsp;↗</span></a
      >
    </div>
    <div class="img flex justify-end">
      <img
        class="w-full md:w-[25vw] md:aspect-7/12 object-cover fade-in opacity-0"
        src="/src/assets/images/Profile-Photo.jpg"
        alt=""
      />
    </div>
  </div>
  <div class="social-icons px-[7vw] flex justify-end mb-20">
    <div class="social-row flex flex-row w-40 justify-between">
      <a class="" href="https://www.linkedin.com/in/nikhilshinde0408/" target="_blank">
        <img
        src="/src/assets/icons/ri_linkedin-fill.svg"
        alt=""
        class="social-icon aspect-square w-8 cursor-link"
      />
      </a>
      <a href="https://github.com/Nuke-101" target="_blank">
        <img
        src="/src/assets/icons//mingcute_github-fill.svg"
        alt=""
        class="social-icon aspect-square w-8 cursor-link"
      />
      </a>
      <a href="https://www.behance.net/nikhilshinde" target="_blank">
        <img
        src="/src/assets/icons/simple-icons_behance.svg"
        alt=""
        class="social-icon aspect-square w-8 cursor-link"
      />
      </a>
    </div>
  </div>
  <div class="black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20">
    <div class="project-step-row pinned-row mb-20 md:mb-0">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-16">EDUCATION</h3>
      </div>
      <div class="project-step-col-2">
        <div class="education-container mb-16">
          <p class="degree title-2 mb-2 font-bold">
            Master's in Human-Computer Interaction
          </p>
          <p class="degree body">Indiana University Indianapolis</p>
          <p class="degree body font-light">Aug 22 - May 24</p>
        </div>
        <div class="education-container">
          <p class="degree title-2 mb-2 font-bold">
            Bachelor's in Computer Engineering
          </p>
          <p class="degree body">Savitribai Phule Pune University</p>
          <p class="degree body font-light">Jul 18 - May 22</p>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-20">
    <div class="project-step-row pinned-row px-[7vw] mb-8">
      <div class="project-step-col-1 pinned-col pointer-events-none">
        <h3 class="detail-name title-1 font-bold mb-16">WORK</h3>
      </div>
      <div class="project-step-col-2">
        <div class="experience-container mb-16">
          <p class="degree title-2 mb-2 font-bold">
            UX Researcher and Designer
          </p>
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
          <p class="degree title-2 mb-2 font-bold">App Development Lead</p>
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
          <p class="degree title-2 mb-2 font-bold">
            UX Designer and Front-End Developer
          </p>
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

<style scoped>
#cursor-hello {
  display: inline-block;
  margin-left: 2px;
  color: black;
}
</style>
