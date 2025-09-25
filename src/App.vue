<script setup>
import { CustomCursor } from "./composables/customCursor";
import { router } from "./composables/routes";

CustomCursor(router);
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <RouterView></RouterView>
    </div>
  </div>
  <div id="cursor-ring"></div>
  <div id="cursor-pointer">
    <span class="cursor-text" id="cursor-label"></span>
  </div>
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
  pointer-events: none;
  transform: translate(-50%, -50%);
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
  pointer-events: none;
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
