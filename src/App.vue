<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { router } from "./routes/routes";

onMounted(() => {
  const cursor = document.getElementById("custom-cursor");

  // Cursor follow
  window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  // Event delegation for all links (works after route change too)
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a")) {
      gsap.to(cursor, { scale: 3 });
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a")) {
      gsap.to(cursor, { scale: 1 });
    }
  });

  // Reset cursor on every route change
  router.afterEach(() => {
    gsap.to(cursor, { scale: 1 });
  });
});

onUnmounted(() => {
  // Clean up listeners to avoid duplicates
  document.removeEventListener("mouseover", () => {});
  document.removeEventListener("mouseout", () => {});
});
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <RouterView></RouterView>
    </div>
  </div>
  <div id="custom-cursor"></div>
</template>

<style scoped>
#custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 3vw;
  height: 3vw;
  background-color: var(--rock);
  border-radius: 50%;
  pointer-events: none; /* Crucial: allows clicks to pass through the cursor */
  transform: translate(-50%, -50%); /* Centers the cursor div */
  z-index: 9999;
  overflow: hidden;
}

#cursor-label {
  color: var(--pearl);
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.5rem;
  width: 100%;
  text-align: center;
}
</style>
