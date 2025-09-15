<template>
  <div class="footer px-[7vw] pt-[100px] pb-[100px]">
    <h2 class="text-[12vw] md:text-[6vw] font-saans font-bold leading-none">
      LET'S TALK
    </h2>
    <div class="contact-info mt-10">
      <p class="body font-satoshi font-[400] w-[100%] md:w-[65%]">
        I'm currently open to new opportunities and collaborations. Whether
        you're interested in working together, have a project in mind, or just
        want to say hello, feel free to reach out!
      </p>
    </div>
    <a
      href="mailto:nikhilshinde0408@gmail.com"
      class="inline-block mt-20 body font-satoshi font-[400] no-underline"
      >mailto: nikhilshinde0408@gmail.com</a
    >
    <div class="email-input mt-6 flex space-x-5 justify-between">
      <input
        class="email-message bg-[var(--input-background)] w-[100%] h-15 rounded-full body px-5 outline-0"
        type="text"
        placeholder="Message me here..."
      /><button
        class="send-btn px-10 bg-[var(--rock)] rounded-full text-[var(--pearl)] body font-saans font-[500]"
        actions="submit"
      >
        SEND
      </button>
    </div>
    <div class="footer-links-container grid grid-cols-1 md:grid-cols-2 mt-20">
      <div class="nav-links">
        <p class="link-header title-1 font-bold font-saans mb-6">navigation</p>
        <p class="footer-links title-3 mb-3">about</p>
        <p class="footer-links title-3 mb-3">resume</p>
      </div>
      <div class="social-links mt-10 md:mt-0">
        <p class="link-header title-1 font-bold font-saans mb-6">social</p>
        <p class="footer-links title-3 mb-3">linkedin</p>
        <p class="footer-links title-3 mb-3">github</p>
        <p class="footer-links title-3 mb-3">behance</p>
      </div>
    </div>
  </div>
</template>
