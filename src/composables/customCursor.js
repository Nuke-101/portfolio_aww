import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { router } from "./routes";

export function CustomCursor(router) {
  let mouseMoveHandler, mouseOverHandler, mouseOutHandler;
  const duration = 0.3;
  const textRevealDuration = 0.4;
  const textHideDuration = 0.2;
  const maxFontSize = "0.8rem";
  const minFontSize = "0rem";

  

  const attachEventListeners = () => {
    const cursorRing = document.getElementById("cursor-ring");
    const cursorPointer = document.getElementById("cursor-pointer");
    const cursorLabel = document.getElementById("cursor-label");
    const cursorLinkLabel = document.getElementById("cursor-link-label");


    if (!cursorRing || !cursorPointer || !cursorLabel || !cursorLinkLabel) return;

    // Cursor follow
    mouseMoveHandler = (e) => {
      gsap.to(cursorRing, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(cursorPointer, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Hover enlarge
    mouseOverHandler = (e) => {
      if (e.target.closest(".cursor-enlarge")) {
        gsap.to(cursorRing, { width: "9vw", height: "9vw", duration: duration });
        gsap.to(cursorPointer, { width: "9vw", height: "9vw", duration: duration });
      }

      if (e.target.closest(".project-tile")) {
        gsap.to(cursorRing, { width: "9vw", height: "9vw", duration: duration });
        gsap.to(cursorPointer, {
          width: "9vw", 
          height: "9vw", 
          duration: duration,
          mixBlendMode: "normal",
          backgroundColor: "var(--rock-light)",
        });
        gsap.to(cursorLabel, { opacity: 1, duration: textRevealDuration, fontSize: maxFontSize });
        cursorLabel.textContent = "View Project ↗";
      }

       if (e.target.closest(".cursor-link")) {
        gsap.to(cursorRing, { width: "6vw", height: "6vw", duration: duration });
         gsap.to(cursorPointer, {
          width: "2vw", 
          height: "2vw", 
          duration: duration,
          mixBlendMode: "normal",
          backgroundColor: "var(--rock-light)",
        });
        gsap.to(cursorLinkLabel, { opacity: 1, duration: textRevealDuration, fontSize: maxFontSize, });
        cursorLinkLabel.textContent = "↗";
      }
    };

    // Hover out reset
    mouseOutHandler = (e) => {
      if (e.target.closest(".cursor-enlarge")) {
        gsap.to(cursorRing, { width: "3vw", height: "3vw", duration: duration });
        gsap.to(cursorPointer, { width: "1vw", height: "1vw", duration:duration  });
      }

      if (e.target.closest(".project-tile")) {
        gsap.to(cursorRing, { width: "3vw", height: "3vw", duration: duration});
        gsap.to(cursorPointer, {
          width: "1vw", 
          height: "1vw", 
          duration: duration,
          mixBlendMode: "difference",
          backgroundColor: "var(--pearl)",
        });
        gsap.to(cursorLabel, { opacity: 0, duration: textHideDuration, fontSize: minFontSize, });
        cursorLabel.textContent = "";
      }

      if (e.target.closest(".cursor-link")) {
        gsap.to(cursorRing, { width: "3vw", height: "3vw", duration: duration });
        gsap.to(cursorPointer, {
          width: "1vw", 
          height: "1vw", 
          duration: duration,
          mixBlendMode: "difference",
          backgroundColor: "var(--pearl)",
        });
        gsap.to(cursorLinkLabel, { opacity: 0, duration: textHideDuration, fontSize: minFontSize, });
        cursorLinkLabel.textContent = "";
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
    const cursorLinkLabel = document.getElementById("cursor-link-label");


    if (!cursorRing || !cursorPointer || !cursorLabel) return;

    gsap.to(cursorRing, { width: "3vw", height: "3vw", duration: duration });
    gsap.to(cursorPointer, {
      width: "1vw", 
      height: "1vw", 
      duration: duration,
      mixBlendMode: "difference",
      backgroundColor: "var(--pearl)",
    });
    gsap.to(cursorLabel, { opacity: 0, duration: textHideDuration, fontSize: minFontSize, });
    gsap.to(cursorLinkLabel, { opacity: 0, duration: textHideDuration, fontSize: minFontSize, });
    cursorLabel.textContent = "";
    cursorLinkLabel.textContent = "";

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
