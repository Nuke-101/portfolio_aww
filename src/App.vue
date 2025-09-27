<script setup>
import { CustomCursor } from "./composables/customCursor";
import { router } from "./composables/routes";
import { SpeedInsights } from '@vercel/speed-insights/vue';

CustomCursor(router);
</script>

<template>
  <div id="app-scroll">
    <RouterView />
  </div>

  <!-- Custom cursors -->
  <div id="cursor-ring"></div>
  <div id="cursor-pointer">
    <span class="cursor-text" id="cursor-label"></span>
    <span class="cursor-link-text" id="cursor-link-label"></span>
  </div>

  <SpeedInsights />
</template>

<style scoped>
#app-scroll {
  overflow: hidden; /* Optional: ensures Lenis controls scroll */
}

#cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 3vw;
  height: 3vw;
  border: 1px solid var(--pearl);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9997;
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
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: difference;
}

#cursor-label {
  color: var(--pearl);
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  opacity: 0;
  z-index: 9999;
  mix-blend-mode: difference;
}

#cursor-link-label {
  color: var(--pearl);
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
