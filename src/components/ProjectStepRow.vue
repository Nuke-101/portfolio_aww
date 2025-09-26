<template>
  <div class="project-step-row px-[7vw] mb-20">
    <div class="project-step-col-1">
      <h3 class="detail-name title-1 font-bold mb-8">{{ data.title }}</h3>
    </div>
    <div class="project-step-col-2">
      <p v-if="data.description" class="desc body mb-8">
        {{ data.description }}
      </p>

      <div v-if="data.points" class="point-breakdown mb-8">
        <div v-for="point in data.points" :key="point.title">
          <p class="point-title title-3 font-bold mb-3">{{ point.title }}</p>
          <p class="point-desc body font-light mb-8">{{ point.desc }}</p>
        </div>
      </div>

      <div v-if="data.media" class="media-container w-full aspect-[4/3]">
        <img
          v-if="data.media.type === 'image'"
          :src="data.media.src"
          alt=""
          class="w-full h-full object-cover"
        />
        <video
          v-if="data.media.type === 'video'"
          :src="data.media.src"
          autoplay
          loop
          muted
          class="w-full h-full object-cover"
        ></video>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
