<script setup></script>

<template>
  <section
    class="hero-section w-screen flex-col justify-center items-center mt-[12vh]"
  >
    <h1
      class="role design-engineer text-[15vw] md:text-[11.35vw] font-saans leading-none md:leading-[.80] px-[7vw] md:px-0 font-bold bg-[var(--pearl)] overflow-hidden"
    >
      DESIGN ENGINEER
    </h1>
    <h1
      class="role-inverted hidden md:block text-[11.35vw] font-saans font-bold leading-none -my-[1.23vw] overflow-hidden"
    >
      DESIGN ENGINEER
    </h1>
    <div
      class="location text-right title-2 mt-7 font-satoshi font-[400] px-[7vw] overflow-hidden"
    >
      BASED IN PUNE, INDIA
    </div>
    <div class="technologies-list">
      <ul
        class="work-roles-ul font-saans font-[500] title-2 space-y-2 md:space-y-3 flex-col w-screen px-[7vw] mt-[15vh] md:mt-[20vh]"
        ref="skillsList"
      >
        <li class="work-roles overflow-hidden">UX RESEARCH</li>
        <li class="work-roles overflow-hidden">UX DESIGN</li>
        <li class="work-roles overflow-hidden">WEB/APP DEVELOPMENT</li>
      </ul>
    </div>
  </section>
</template>
