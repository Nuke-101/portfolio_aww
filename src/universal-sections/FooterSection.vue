<script setup></script>

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
      class="inline-block mt-20 body font-satoshi font-[400] no-underline cursor-enlarge"
    >
      mailto: nikhilshinde0408@gmail.com
  </a>
    <form action="https://api.web3forms.com/submit" method="POST" class="email-input mt-6 flex space-x-5 justify-between">
      <input type="hidden" name="access_key" value="29b26841-0e2e-4600-b850-09bc93708bc4">

      <div class="inputs w-[100%]">
        <input
          class="email bg-[var(--input-background)] w-[75%] md:w-[50%] h-15 rounded-full body font-bold px-5 outline-0 mb-3"
          type="email"
          placeholder="Your email"
          name="email"
          required
        />
        <input
          class="email-message bg-[var(--input-background)] w-[100%] h-15 rounded-full body px-5 outline-0"
          type="text"
          placeholder="Message for me..."
          name="message"
          required
        />
      </div>
      
      <button
        type="submit"
        class="send-btn px-10 bg-[var(--rock)] rounded-[30%] text-[var(--pearl)] body font-saans font-[500] cursor-enlarge"
      >
        SEND
      </button>
    </form>
    <div class="footer-links-container grid grid-cols-1 md:grid-cols-2 mt-20">
      <div class="nav-links">
        <p class="link-header title-1 font-bold font-saans mb-6">navigation</p>
        <p class="footer-links title-3 mb-3 cursor-enlarge w-fit">about</p>
        <a class="footer-links title-3 mb-3 cursor-enlarge w-fit" href="https://drive.google.com/file/d/177ZAAZ7WyaYhZ3LH0UuLMr3kepv8J3-E/view?usp=sharing" target="_blank">resume</a>
      </div>
      <div class="social-links mt-10 md:mt-0">
        <p class="link-header title-1 font-bold font-saans mb-6">social</p>
        <a class="footer-links title-3 mb-3 cursor-link block w-fit" href="https://www.linkedin.com/in/nikhilshinde0408/" target="_blank">linkedin</a>
        <a class="footer-links title-3 mb-3 cursor-link block w-fit" href="https://github.com/Nuke-101" target="_blank">github</a>
        <a class="footer-links title-3 mb-3 cursor-link block w-fit" href="https://www.behance.net/nikhilshinde" target="_blank">behance</a>
      </div>
    </div>
  </div>
</template>
