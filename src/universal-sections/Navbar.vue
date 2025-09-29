<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const navbar = ref(null);

onMounted(() => {
  gsap.from(".navlink", {
    yPercent: 100,
    duration: 1,
    ease: "power4.out",
  });
});
</script>

<template>
  <nav
    ref="navbar"
    class="navbar w-full flex justify-between items-center px-[7vw] py-[40px] bg-[var(--pearl)] z-50"
  >
    <router-link to="/home" class="logo overflow-hidden">
      <img
        src="../assets/logos/Nikhil Logo PNG.png"
        alt="Site Logo"
        class="logo-img navlink aspect-[1.1/1] h-[50px] md:h-[60px] overflow-hidden cursor-enlarge"
      />
    </router-link>

    <div class="flex space-x-10 md:space-x-20 title-3">
      <router-link
        to="/about"
        class="navlink font-saans font-normal overflow-hidden cursor-enlarge"
      >
        about
      </router-link>
      <a
        href="https://drive.google.com/file/d/177ZAAZ7WyaYhZ3LH0UuLMr3kepv8J3-E/view?usp=sharing"
        target="_blank"
        class="navlink font-saans font-normal overflow-hidden cursor-enlarge"
        >resume</a
      >
    </div>
  </nav>
</template>
<style scoped></style>
