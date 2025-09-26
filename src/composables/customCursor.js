import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { router } from "./routes";

export function CustomCursor(router) {
  let mouseMoveHandler, mouseOverHandler, mouseOutHandler;

  const attachEventListeners = () => {
    const cursorRing = document.getElementById("cursor-ring");
    const cursorPointer = document.getElementById("cursor-pointer");
    const cursorLabel = document.getElementById("cursor-label");

    if (!cursorRing || !cursorPointer || !cursorLabel) return;

    // Cursor follow
    mouseMoveHandler = (e) => {
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
    };

    // Hover enlarge
    mouseOverHandler = (e) => {
      if (e.target.closest(".cursor-enlarge")) {
        gsap.to(cursorRing, { scale: 3 });
        gsap.to(cursorPointer, { scale: 9 });
      }

      if (e.target.closest(".project-tile")) {
        gsap.to(cursorRing, { scale: 3 });
        gsap.to(cursorPointer, {
          scale: 9,
          mixBlendMode: "normal",
          backgroundColor: "var(--rock-light)",
        });
        gsap.to(cursorLabel, { opacity: 1, duration: 0.2 });
        cursorLabel.textContent = "View Project ↗";
      }

       if (e.target.closest(".cursor-ring-enlarge")) {
        gsap.to(cursorRing, { scale: 2 });
      }
    };

    // Hover out reset
    mouseOutHandler = (e) => {
      if (e.target.closest(".cursor-enlarge")) {
        gsap.to(cursorRing, { scale: 1 });
        gsap.to(cursorPointer, { scale: 1 });
      }

      if (e.target.closest(".project-tile")) {
        gsap.to(cursorRing, { scale: 1 });
        gsap.to(cursorPointer, {
          scale: 1,
          mixBlendMode: "difference",
          backgroundColor: "var(--pearl)",
        });
        gsap.to(cursorLabel, { opacity: 0, duration: 0.2 });
        cursorLabel.textContent = "";
      }

      if (e.target.closest(".cursor-ring-enlarge")) {
        gsap.to(cursorRing, { scale: 1 });
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseover", mouseOverHandler);
    document.addEventListener("mouseout", mouseOutHandler);
  };

  const resetCursor = () => {
    const cursorRing = document.getElementById("cursor-ring");
    const cursorPointer = document.getElementById("cursor-pointer");
    const cursorLabel = document.getElementById("cursor-label");

    if (!cursorRing || !cursorPointer || !cursorLabel) return;

    gsap.to(cursorRing, { scale: 1 });
    gsap.to(cursorPointer, {
      scale: 1,
      mixBlendMode: "difference",
      backgroundColor: "var(--pearl)",
    });
    gsap.to(cursorLabel, { opacity: 0, duration: 0.2 });
    cursorLabel.textContent = "";
  };

  onMounted(() => {
    attachEventListeners();

    if (router) {
      router.afterEach(() => {
        resetCursor();
      });
    }
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseover", mouseOverHandler);
    document.removeEventListener("mouseout", mouseOutHandler);
  });
}
