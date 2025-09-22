<script setup></script>
<template>
  <div
    class="work relative px-[7vw] mt-[100px] pt-[100px] pb-[100px] md:mt-[10vw] bg-[var(--rock)] text-[var(--pearl)]"
  >
    <h2 class="text-[12vw] md:text-[6vw] font-saans font-bold leading-none">
      FEATURED <br />WORK
    </h2>
    <div
      class="parent relative grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-15 mt-25"
    >
      <router-link
        to="/gravityDrive"
        ref="project1"
        class="project-tile relative row-span-2 row-start-1"
      >
        <div class="image-wrapper relative overflow-hidden aspect-[56/67]">
          <img
            src="../assets/images/GravityDrive.png"
            alt=""
            class="cover-image"
          />
        </div>
        <div class="project-info">
          <h3 class="project-company body font-light mt-7">GRAVITY DRIVE</h3>
          <h2 class="project-title title-2 font-bold mt-1 tracking-wide">
            EVENTFLOW (SAAS)
          </h2>
          <p class="project-desc body mt-4">
            An integrated platform that streamlines event planning and execution
            for venues and corporations.
          </p>
        </div>
      </router-link>
      <router-link
        to="/eTurn"
        ref="project2"
        class="project-tile relative md:row-span-2 md:row-start-2"
      >
        <div class="image-wrapper relative overflow-hidden aspect-[56/67]">
          <img src="../assets/images/E-turn.png" alt="" class="cover-image" />
        </div>
        <div class="project-info">
          <h3 class="project-company body font-light mt-7">IUPUI</h3>
          <h2 class="project-title title-2 font-bold mt-1 tracking-wide">
            E-TURN
          </h2>
          <p class="project-desc body mt-4">
            A design prototype that simplifies e-waste recycling by helping
            users find local drop-off points and learn about proper disposal.
          </p>
        </div>
      </router-link>
      <div
        ref="project3"
        class="project-tile relative md:row-span-2 md:row-start-4"
      >
        <div class="image-wrapper relative overflow-hidden aspect-[56/67]">
          <img src="../assets/images/Zentra.png" alt="" class="cover-image" />
        </div>
        <div class="project-info">
          <h3 class="project-company body font-light mt-7">ZENTRA, ALLEGION</h3>
          <h2 class="project-title title-2 font-bold mt-1 tracking-wide">
            KEYASK
          </h2>
          <p class="project-desc body mt-4">
            A new product that expands the Zentra smart lock ecosystem,
            increasing revenue and delivering value to customers.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
