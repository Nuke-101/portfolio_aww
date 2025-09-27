<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

const track = ref(null);

onMounted(() => {
  const wrapper = track.value;
  const items = wrapper.querySelectorAll(".img-wrapper");

  const itemWidth = items[0].offsetWidth + 16;
  const totalWidth = itemWidth * items.length;
  const containerWidth = wrapper.parentElement.offsetWidth;
  const minX = -(totalWidth - containerWidth - 16);

  const draggable = Draggable.create(wrapper, {
    type: "x",
    inertia: true,
    bounds: { minX, maxX: 0 },
    edgeResistance: 0.9,
    snap: (endValue) => Math.round(endValue / itemWidth) * itemWidth,
    onDrag: updateParallax,
    onThrowUpdate: updateParallax,
  })[0];

  // initialize parallax
  updateParallax.call(draggable);

  function updateParallax() {
    const containerRect = wrapper.parentElement.getBoundingClientRect();

    items.forEach((item, i) => {
      const img = item.querySelector("img");
      const wrapperRect = item.getBoundingClientRect();
      const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;

      let distanceFromCenter = wrapperCenter - containerCenter;
      let progress = distanceFromCenter / containerRect.width;

      // Clamp progress for first and last slides to avoid gaps
      if (i === 0) progress = Math.max(progress, 0); // first slide cannot move right
      if (i === items.length - 1) progress = Math.min(progress, 0); // last slide cannot move left

      progress = gsap.utils.clamp(-1, 1, progress);

      gsap.set(img, {
        xPercent: Math.round(-10 * progress * 100) / 100,
      });
    });
  }
});
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <div ref="track" class="flex gap-x-[16px] h-full w-full">
      <div
        class="img-wrapper w-[80%] h-full flex-shrink-0 relative overflow-hidden"
      >
        <img
          class="w-[120%] h-full object-cover absolute"
          src="/src/assets/images/e-turn/optimized/site-visit-1.webp"
          alt=""
        />
      </div>
      <div
        class="img-wrapper w-[80%] h-full flex-shrink-0 relative overflow-hidden"
      >
        <img
          class="w-[120%] h-full object-cover absolute"
          src="/src/assets/images/e-turn/optimized/site-visit-2.webp"
          alt=""
        />
      </div>
      <div
        class="img-wrapper w-[80%] h-full flex-shrink-0 relative overflow-hidden"
      >
        <img
          class="w-[120%] h-full object-cover absolute"
          src="/src/assets/images/e-turn/optimized/site-visit-3.webp"
          alt=""
        />
      </div>
      <div
        class="img-wrapper w-[80%] h-full flex-shrink-0 relative overflow-hidden"
      >
        <img
          class="w-[120%] h-full object-cover absolute"
          src="/src/assets/images/e-turn/optimized/site-visit-4.webp"
          alt=""
        />
      </div>
      <div
        class="img-wrapper w-[80%] h-full flex-shrink-0 relative overflow-hidden"
      >
        <img
          class="w-[120%] h-full object-cover absolute"
          src="/src/assets/images/e-turn/optimized/site-visit-5.webp"
          alt=""
        />
      </div>
      <div
        class="img-wrapper w-[80%] h-full flex-shrink-0 relative overflow-hidden"
      >
        <img
          class="w-[120%] h-full object-cover absolute"
          src="/src/assets/images/e-turn/optimized/site-visit-6.webp"
          alt=""
        />
      </div>
      <div
        class="img-wrapper w-[80%] h-full flex-shrink-0 relative overflow-hidden"
      >
        <img
          class="w-[120%] h-full object-cover absolute"
          src="/src/assets/images/e-turn/optimized/site-visit-7.webp"
          alt=""
        />
      </div>
      <div
        class="img-wrapper w-[80%] h-full flex-shrink-0 relative overflow-hidden"
      >
        <img
          class="w-[120%] h-full object-cover absolute"
          src="/src/assets/images/e-turn/optimized/site-visit-8.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
