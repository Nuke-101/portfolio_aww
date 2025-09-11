<script setup>
import { onMounted } from "vue";
import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";

gsap.registerPlugin(SplitText);

onMounted(() => {
  const splitNav = new SplitText(".navlink", {
    type: "words",
    linesClass: "word-child",
    // You may need to add a ref and an overflow hidden container for this to work
  });

  gsap.from(splitNav.words, {
    duration: 1,
    yPercent: 100,
    stagger: 0.3,
  });

  gsap.from(".logo-img", {
    duration: 1,
    yPercent: 100,
    stagger: 0.1,
  });
});
</script>

<template>
  <nav
    class="navbar fixed w-full flex justify-between items-center px-[7vw] py-[60px]"
  >
    <div class="logo overflow-hidden">
      <img
        src="../assets/logos/Nikhil Logo PNG.png"
        alt="Site Logo"
        class="logo-img overflow-hidden"
      />
    </div>

    <div class="flex space-x-15 md:space-x-40">
      <router-link
        to="/about"
        class="navlink font-saans font-normal overflow-hidden"
        >about</router-link
      >
      <router-link
        to="/resume"
        class="navlink font-saans font-normal overflow-hidden"
        >resume</router-link
      >
    </div>
  </nav>
</template>
