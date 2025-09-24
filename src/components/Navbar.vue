<script setup></script>

<template>
  <nav
    class="navbar w-full flex justify-between items-center px-[7vw] py-[60px]"
  >
    <router-link to="/home" class="logo overflow-hidden">
      <img
        src="../assets/logos/Nikhil Logo PNG.png"
        alt="Site Logo"
        class="logo-img aspect-[1.1/1] h-[50px] md:h-[70px] overflow-hidden cursor-enlarge"
      />
    </router-link>

    <div class="flex space-x-10 md:space-x-20 title-3">
      <router-link
        to="/about"
        class="navlink font-saans font-normal overflow-hidden cursor-enlarge"
        >about</router-link
      >
      <router-link
        to="/resume"
        class="navlink font-saans font-normal overflow-hidden cursor-enlarge"
        >resume</router-link
      >
    </div>
  </nav>
</template>
