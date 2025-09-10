<script setup>
import { ref } from "vue";
import PreLoaderPage from "./components/PreLoaderPage.vue";
import HomePage from "./components/HomePage.vue";

const isLoaded = ref(false);

const handleAnimationComplete = () => {
  isLoaded.value = true;
};
</script>

<template>
  <HomePage v-if="isLoaded"></HomePage>
  <PreLoaderPage
    v-if="!isLoaded"
    @animation-complete="handleAnimationComplete"
  ></PreLoaderPage>
</template>
