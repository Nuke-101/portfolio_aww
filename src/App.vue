<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { router } from "./routes/routes";

const attachEventListeners = () => {
  const cursorRing = document.getElementById("cursor-ring");
  const cursorPointer = document.getElementById("cursor-pointer");
  const cursorLabel = document.getElementById("cursor-label");

  // Cursor follow
  window.addEventListener("mousemove", (e) => {
    gsap.to(cursorRing, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(cursorPointer, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  //Enlarge cursor on link hover
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(".cursor-enlarge")) {
      gsap.to(cursorRing, { scale: 3 });
      gsap.to(cursorPointer, { scale: 9 });
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(".cursor-enlarge")) {
      gsap.to(cursorRing, { scale: 1 });
      gsap.to(cursorPointer, { scale: 1 });
    }
  });

  //Case-Study Cursor Animations
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(".project-tile")) {
      gsap.to(cursorRing, { scale: 3 });
      gsap.to(cursorPointer, { scale: 9 });
      gsap.to(cursorPointer, {
        mixBlendMode: "normal",
        backgroundColor: "var(--rock)",
      });
      gsap.to(cursorLabel, { opacity: 1, duration: 0.2 });
      cursorLabel.textContent = "View Project";
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(".project-tile")) {
      gsap.to(cursorRing, { scale: 1 });
      gsap.to(cursorPointer, { scale: 1 });
      gsap.to(cursorPointer, {
        mixBlendMode: "difference",
        backgroundColor: "var(--pearl)",
      });
      gsap.to(cursorLabel, { opacity: 0, duration: 0.2 });
      cursorLabel.textContent = "";
    }
  });
};

onMounted(() => {
  attachEventListeners();

  // Reset cursor on every route change
  router.afterEach(() => {
    const cursorRing = document.getElementById("cursor-ring");
    const cursorPointer = document.getElementById("cursor-pointer");
    const cursorLabel = document.getElementById("cursor-label");
    gsap.to(cursorRing, { scale: 1 });
    gsap.to(cursorPointer, {
      scale: 1,
    });
    gsap.to(cursorPointer, {
      mixBlendMode: "difference",
      backgroundColor: "var(--pearl)",
    });
    gsap.to(cursorLabel, { opacity: 0, duration: 0.2 });
    cursorLabel.textContent = "";
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
  <div id="cursor-ring"></div>
  <div id="cursor-pointer"><span id="cursor-label"></span></div>
</template>

<style scoped>
#cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 3vw;
  height: 3vw;
  border: 1px solid var(--pearl);
  border-radius: 50%;
  pointer-events: none; /* Crucial: allows clicks to pass through the cursor */
  transform: translate(-50%, -50%); /* Centers the cursor div */
  z-index: 9997;
  overflow: hidden;
  mix-blend-mode: difference;
}

#cursor-pointer {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 1vw;
  height: 1vw;
  transform: translate(-50%, -50%);
  background-color: var(--pearl);
  border-radius: 50%;
  pointer-events: none; /* Crucial: allows clicks to pass through the cursor */
  z-index: 9998;
  overflow: hidden;
  mix-blend-mode: difference;
}

#cursor-label {
  color: var(--pearl);
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.1rem;
  width: 100%;
  text-align: center;
  opacity: 0;
  z-index: 9999;
  mix-blend-mode: difference;
}
.inverted {
  mix-blend-mode: difference;
}
</style>
