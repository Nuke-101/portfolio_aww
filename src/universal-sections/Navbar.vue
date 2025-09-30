<script setup>
import { onMounted, onUnmounted, ref, getCurrentInstance } from "vue";
import { gsap } from "gsap";

const navbar = ref(null);

let scrollHandler;
let ctx;
let idleTimeout = null;

onMounted(() => {
  const { appContext } = getCurrentInstance();
  const lenis = appContext.config.globalProperties.$lenis;

  if (!lenis) return;

  const hideNavbar = () => {
    gsap.to(navbar.value, {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const showNavbar = () => {
    gsap.to(navbar.value, {
      yPercent: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const resetIdleTimer = (scrollY) => {
    if (idleTimeout) clearTimeout(idleTimeout);

    idleTimeout = setTimeout(() => {
      if (scrollY > 0) {
        hideNavbar();
      }
    }, 2000);
  };

  scrollHandler = ({ scroll, direction }) => {
    if (direction === 1) {
      hideNavbar();
    } else if (direction === -1) {
      showNavbar();
    }
    resetIdleTimer(scroll);
  };

  lenis.on("scroll", scrollHandler);

  ctx = gsap.context(() => {
    gsap.from(".navlink", {
      yPercent: 100,
      duration: 1,
      ease: "power4.out",
    });
  }, navbar.value);
});

onUnmounted(() => {
  const { appContext } = getCurrentInstance();
  const lenis = appContext.config.globalProperties.$lenis;

  if (lenis && scrollHandler) {
    lenis.off("scroll", scrollHandler);
  }
  if (ctx) ctx.revert();
  if (idleTimeout) clearTimeout(idleTimeout);
});
</script>

<template>
  <nav
    ref="navbar"
    class="navbar fixed top-0 left-0 w-full flex justify-between items-center px-[7vw] py-[40px] bg-[var(--pearl)] z-50"
  >
    <router-link to="/home" class="logo overflow-hidden">
      <img
        src="/src/assets/icons/Nikhil Logo PNG.png"
        alt="Site Logo"
        class="logo-img navlink aspect-[1.1/1] h-[50px] md:h-[60px] overflow-hidden cursor-enlarge"
      />
    </router-link>

    <div class="flex space-x-10 md:space-x-20 title-3">
      <router-link
        to="/about"
        class="navlink font-saans font-normal overflow-hidden cursor-enlarge"
        active-class="active-link"
      >
        about
      </router-link>
      <a
        href="https://drive.google.com/file/d/177ZAAZ7WyaYhZ3LH0UuLMr3kepv8J3-E/view?usp=sharing"
        target="_blank"
        class="navlink font-saans font-normal overflow-hidden cursor-enlarge"
      >
        resume
      </a>
    </div>
  </nav>
</template>

<style scoped>
.active-link {
  font-weight: bold;
  color: var(--accent-color); /* replace with your highlight color */
  transition: all 0.2s ease-in-out;
}
</style>
