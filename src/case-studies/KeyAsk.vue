<script setup>
import Navbar from "../universal-sections/Navbar.vue";
import FooterSection from "../universal-sections/FooterSection.vue";

import ScrollToTopButton from "../components/ScrollToTopButton.vue";

import { onMounted } from "vue";
import ComingSoon from "../components/ComingSoon.vue";

onMounted(() => {});
</script>

<template>
  <ScrollToTopButton></ScrollToTopButton>
  <Navbar></Navbar>
  <!-- <div class="nav-spacer h-[130px]"></div> -->
  <div class="project-intro mt-20 mb-20">
    <div
      class="project-overwiew grid grid-cols-1 md:grid-cols-2 px-[7vw] mb-16"
    >
      <div class="project-title">
        <p class="company body font-bold mb-2">
          ALLEGION • <span class="font-thin">HCI Fall 23</span>
        </p>
        <h2 class="project-name h2 font-normal mb-4">KEYASK</h2>
        <p class="company body">1 minute read</p>
      </div>
      <div class="project-overview mt-10 md:mt-0">
        <h3 class="detail-name title-1 font-bold mb-8">overview</h3>
        <p class="desc body">
          This project, a collaboration with Allegion's Zentra team, addresses a
          common pain point for apartment residents and property managers: a
          lack of after-hours service.
          <br /><br />Our primary goal was to find a new revenue stream for
          Zentra's multi-family property management product that also provides
          value to customers.
        </p>
      </div>
    </div>
    <div class="project-banner col-span-2 mb-16">
      <img
        src="/src/assets/images/keyask/optimized/banner.webp"
        alt=""
        class="banner-im w-full object-cover aspect-[2/1]"
      />
    </div>
    <div
      class="project-details-container grid grid-cols-2 md:grid-cols-4 px-[7vw] mb-20"
    >
      <div class="project-details">
        <div class="project-detail font-bold mb-2">project type</div>
        <div class="project-detail mt-6">Industry Partner Project</div>
      </div>
      <div class="project-details">
        <div class="project-detail font-bold mb-2">role</div>
        <div class="project-detail mt-6">UX Researcher</div>
      </div>
      <div class="project-details">
        <div class="project-detail font-bold mb-2 mt-10 md:mt-0">duration</div>
        <div class="project-detail mt-6">Sept 23 - Oct 23</div>
      </div>
      <div class="project-details">
        <div class="project-desc font-bold mb-2 mt-10 md:mt-0">
          collaborators
        </div>
        <div class="project-detail flex justify-start gap-2">
          <a href="https://www.linkedin.com/in/accoon/" target="_blank"
            ><img
              class="w-12 h-12 rounded-[50%] cursor-link"
              src="/src/assets/images/keyask/austin-profile.jpg"
              alt=""
          /></a>
          <a href="https://www.linkedin.com/in/noyonika-saha/" target="_blank"
            ><img
              class="w-12 h-12 rounded-[50%] cursor-link"
              src="/src/assets/images/keyask/noyonika-profile.jpg"
              alt=""
          /></a>

          <a href="https://www.linkedin.com/in/shmishkat/" target="_blank"
            ><img
              class="w-12 h-12 rounded-[50%] cursor-link"
              src="/src/assets/images/keyask/sarowar-profile.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    <div class="project-step mb-20">
      <div class="project-step-row px-[7vw] mb-20">
        <div class="project-step-col-1">
          <h3 class="detail-name title-1 font-bold mb-8">challenge</h3>
        </div>
        <div class="project-step-col-2">
          <p class="desc body">
            Our initial research revealed that residents frequently face issues
            with gaining access to their apartments after office hours when they
            lose or misplace their keys. This problem created a clear
            opportunity for a self-service solution.
            <br /><br />We defined our problem statement as: <br />
            <br />
          </p>
          <p class="body">
            "As a <span class="font-black">resident</span>, when I lock myself
            out, I want an alternative access method so I can gain access to the
            building/my unit without needing assistance from property staff".
          </p>
        </div>
      </div>
      <div class="black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20">
        <div class="project-step-row">
          <div class="project-step-col-1">
            <h3 class="detail-name title-1 font-bold mb-8">solution</h3>
          </div>
          <div class="project-step-col-2">
            <p class="desc body mb-15">
              We developed KeyAsk, a self-service kiosk with a pay-per-use
              business model. The kiosk dispenses NFC-based access tags to
              residents who are locked out after office hours.
              <br /><br />KeyAsk also includes solutions for two additional
              access issues:
            </p>
            <div class="point-breakdown mb-8">
              <p class="point-title title-3 font-bold mb-3">1. guest parking</p>
              <p class="point-desc body font-light">
                Guests can use the mobile app and kiosk to receive temporary
                access for parking.
              </p>
            </div>
            <div class="point-breakdown">
              <p class="point-title title-3 font-bold mb-3">
                2. facility access
              </p>
              <p class="point-desc body font-light">
                The kiosk can provide temporary access to various building
                amenities for guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ComingSoon></ComingSoon>

    <div class="ghost-loader relative z-0">
      <div class="project-step-row px-[7vw] mb-10 gap-10">
        <div class="project-step-col-1">
          <div
            class="header-detail bg-[var(--feather-xlight)] overflow-hidden relative"
          >
            <h3 class="detail-name title-1 h-20 font-bold mb-8 opacity-0">
              o1. research
            </h3>
            <div class="shine-l"></div>
          </div>
        </div>
        <div
          class="project-step-col-2 bg-[var(--feather-xlight)] overflow-hidden relative"
        >
          <p class="desc body opacity-0">
            Our literature review showed that while technology in event
            management exists, persistent problems remain.
            <br /><br />We found that integrating a comprehensive solution can
            help venues save time and resources, directly leading to increased
            revenue.Our literature review showed that while technology in event
            management exists, persistent problems remain. <br /><br />We found
            that integrating a comprehensive solution can help venues save time
            and resources, directly leading to increased revenue.
          </p>
          <div class="shine-r"></div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection></FooterSection>
</template>

<style scoped>
.shine-l {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    /* The white shine */ transparent
  );
  animation: shine-animation 1.5s infinite;
}
.shine-r {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    /* The white shine */ transparent
  );
  animation: shine-animation 1.5s infinite 0.55s;
}

@keyframes shine-animation {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>
