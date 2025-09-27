

<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import { gsap } from "gsap";

const navbar = ref(null);

onMounted(() => {
  const { appContext } = getCurrentInstance();
  const lenis = appContext.config.globalProperties.$lenis?.();

  if (!lenis) return;

  let lastScroll = 0;

  lenis.on("scroll", ({ scroll }) => {
    if (scroll > lastScroll) {
      // scrolling down → hide navbar
      gsap.to(navbar.value, { y: -130, duration: 1, ease: "power4.out"});
    } else {
      // scrolling up → show navbar
      gsap.to(navbar.value, { y: 0, duration: 1, ease: "power4.out" });
    }
    lastScroll = scroll;
  });

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
    class="navbar fixed top-0 left-0 w-full flex justify-between items-center px-[7vw] py-[30px] bg-[var(--pearl)] z-50"
  >
    <router-link to="/home" class="logo overflow-hidden">
      <img
        src="../assets/logos/Nikhil Logo PNG.png"
        alt="Site Logo"
        class="logo-img navlink aspect-[1.1/1] h-[50px] md:h-[70px] overflow-hidden cursor-enlarge"
      />
    </router-link>

    <div class="flex space-x-10 md:space-x-20 title-3">
      <p
        to="/about"
        class="navlink font-saans font-normal overflow-hidden cursor-enlarge"
        >about</p
      >
      <a
        href="https://drive.google.com/file/d/177ZAAZ7WyaYhZ3LH0UuLMr3kepv8J3-E/view?usp=sharing" target="_blank"
        class="navlink font-saans font-normal overflow-hidden cursor-enlarge"
        >resume</a
      >
    </div>
  </nav>
</template>
<style scoped> 

</style>