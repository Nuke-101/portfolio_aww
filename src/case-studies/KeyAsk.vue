<script setup>
import Navbar from "../universal-sections/Navbar.vue";
import FooterSection from "../universal-sections/FooterSection.vue";

import ScrollToTopButton from "../components/ScrollToTopButton.vue";

import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  const projectRows = gsap.utils.toArray(".pinned-row");

  ScrollTrigger.saveStyles(".pinned-col");

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      projectRows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 80px",
          end: () => "+=" + row.offsetHeight,
          pin: row.querySelector(".pinned-col"),
          pinSpacing: false,
        });
      });
    },
  });

  const refreshAfterMedia = () => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  };

  window.addEventListener("load", refreshAfterMedia);
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <ScrollToTopButton></ScrollToTopButton>
  <Navbar></Navbar>
  <div class="nav-spacer h-[130px]"></div>
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
          Here we addressed a common pain point of after-hours service for
          apartment residents and property managers.
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
      <div class="project-step-row pinned-row px-[7vw] mb-20">
        <div class="project-step-col-1 pinned-col">
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
            ❝As a <span class="font-black">resident</span>, when I lock myself
            out, I want an alternative access method so I can gain access to the
            building/my unit without needing assistance from property staff.❞
          </p>
        </div>
      </div>
      <div class="black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20">
        <div class="project-step-row pinned-row">
          <div class="project-step-col-1 pinned-col">
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
  </div>
  <div class="project-step mb-20">
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-8">project kick-off</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body">
          We started with a kick-off meeting with the Zentra team to understand
          their product and the smart-home market.<br /><br />
          We were provided with the current pricing plans and three user groups
          (residents, property managers/owners and property maintenance
          staff).<br /><br />
          We also got a pre-problem statement from the partner -<br /><br />
          <span
            class="title-3 font-bold text-[var(--keyask-accent)] block bg-[var(--keyask-accent-light)] p-7 rounded-2xl"
            >❝How might we unlock additional value for our personas to generate
            recurring revenue above and beyond our current hardware sales and
            paid access subscription model?❞</span
          >
        </p>
      </div>
    </div>
  </div>
  <div class="project-step mb-20">
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-8">o1. research</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          Given our objective to establish a new revenue stream, we began by
          examining the smart-home lock landscape within the security and
          multifamily unit markets.
        </p>
      </div>
    </div>

    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-2 font-bold mb-8">o1.1 market analysis</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          We found the global property management software market is booming,
          projected to grow from $22.05 billion in 2023 to $42.89 billion by
          2030. <br /><br />Multifamily properties are looking for solutions
          that cater to a diverse community and a changing work environment,
          while also keeping costs down. The market is driven by a desire for
          convenience, security, and affordability.
        </p>
        <img src="/src/assets/images/keyask/market-graph.png" alt="" />
      </div>
    </div>
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-2 font-bold mb-8">
          o1.2 competitor analysis
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-16">
          We analyzed seven competitor companies in the smart-lock space to
          identify key trends and opportunities for Zentra.
        </p>
        <img src="/src/assets/images/keyask/logos.png" alt="" />
      </div>
    </div>
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-2 font-bold mb-8">
          o1.3 surveys and interviews
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body">
          Our research employed a mixed-method approach to gain a comprehensive
          understanding of our target audience.<br /><br />
          We conducted 17 interviews and surveys with 10 residents, 4 property
          managers, and 3 maintenance staff to gain a comprehensive
          understanding of our target audience.
        </p>
      </div>
    </div>
    <div class="black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20">
      <div class="project-step-row pinned-row">
        <div class="project-step-col-1 pinned-col">
          <h3 class="detail-name title-1 font-bold mb-8">o1.2 key insights</h3>
        </div>
        <div class="project-step-col-2">
          <div class="point-breakdown mb-8">
            <p class="point-title title-3 font-bold mb-3">
              1. after hours issues
            </p>
            <p class="point-desc font-light body">
              6 out of 8 residents complained about getting locked after office
              hours and calling emergency number and waiting to get into their
              apartment.
            </p>
          </div>
          <div class="point-breakdown mb-8">
            <p class="point-title title-3 font-bold mb-3">
              2. data privacy and safety
            </p>
            <p class="point-desc font-light body">
              50% Residents were concerned about the potential misuse of their
              access data by property management or third-party providers.
            </p>
          </div>
          <div class="point-breakdown">
            <p class="point-title title-3 font-bold mb-3">
              3. reliability concerns
            </p>
            <p class="point-desc font-light body">
              Property managers reported resident complaints about the
              reliability of key-less entry systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="project-step mb-20">
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-8">
          o2. defining the problem
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body">
          We grouped, sorted, and analyzed the survey and interview responses
          via affinity mapping to create personas.
        </p>
      </div>
    </div>
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-2 font-bold mb-8">o2.1 personas</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          As we interviewed all three user groups we decided to make a persona
          for each of them to help us move to the next phase of our project.
        </p>
        <img
          class="mb-8"
          src="/src/assets/images/keyask/manager-persona.png"
          alt=""
        />
        <img
          class="mb-8"
          src="/src/assets/images/keyask/resident-persona.png"
          alt=""
        />
        <img src="/src/assets/images/keyask/maintenance-persona.png" alt="" />
      </div>
    </div>
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-2 font-bold mb-8">
          o2.2 problem statement
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          We did a brainstorming exercise and narrowed our focus to problems
          faced by residents. This decision combines the needs of residents and
          property managers, addressing a broader issue with a single
          solution.<br /><br />
          Additionally, residents form the largest user group within our
          apartments, and we have extensive resident research to support our
          solution development.<br /><br />
          <span
            class="title-3 block bg-[var(--keyask-accent-light)] p-7 rounded-2xl"
            >❝As a
            <span class="font-bold text-[var(--keyask-accent)]">
              resident,</span
            >
            <br />When
            <span class="font-bold text-[var(--keyask-accent)]">
              I lock myself out,</span
            >
            <br />
            I want an
            <span class="font-bold text-[var(--keyask-accent)]">
              alternative access method,</span
            >
            <br />
            So
            <span class="font-bold text-[var(--keyask-accent)]">
              I can gain access to the building/my unit</span
            >
            without needing assistance from property staff, <br />
            But
            <span class="font-bold text-[var(--keyask-accent)]">
              there is currently no self-service method</span
            >
            in place to regain access.❞</span
          >
        </p>
      </div>
    </div>
    <div class="img px-[7vw] mb-40">
      <img
        src="/src/assets/images/keyask/optimized/problem-statements.webp"
        alt=""
      />
    </div>
  </div>
  <div class="project-step mb-16">
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-8">o3. design</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          We began our design process by brainstorming and sketching ideas using
          methods like Crazy 8s. We presented three potential solutions to the
          Zentra team:
        </p>
        <div class="process-row grid grid-cols-3 gap-5 mb-16">
          <div class="process-step">
            <img src="/src/assets/images/keyask/design-1.jpg" alt="" />
          </div>
          <div class="process-step">
            <img src="/src/assets/images/keyask/design-2.jpg" alt="" />
          </div>
          <div class="process-step">
            <img src="/src/assets/images/keyask/design-3.jpg" alt="" />
          </div>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            1. self service key vending machines
          </p>
          <p class="point-desc body">
            To serve as a terminals for retrieving backup keys.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            2. keypads with passcode entry
          </p>
          <p class="point-desc body">
            An alternative access method paired with regular access method.
          </p>
        </div>
        <div class="point-breakdown mb-16">
          <p class="point-title title-3 font-bold mb-3">3. nfc for access</p>
          <p class="point-desc body">
            Remotely programmable and disposable NFC tags for alternate access.
          </p>
        </div>
        <p class="desc body">
          The Zentra team was intrigued by the idea of combining the vending
          machine and NFC tag concepts, leading to our final design goal:<br /><br />
          <span class="title-2 font-bold"
            >❝A kiosk that dispenses NFC tags for temporary access.❞</span
          >
        </p>
      </div>
    </div>
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-2 font-bold mb-8">o3.1 prototyping</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          We created the low-fidelity version of our application for testing
          using figma collaborating individually through in-person sessions and
          remote working sessions.<br /><br />
          Screens for the NFC Kiosk Hub, the “request access” screen that would
          be included in Zentra's access management application for residents,
          and the “access management” screens that property managers would be
          able to see within their system.
        </p>
      </div>
    </div>
    <div class="img px-[7vw] mb-40">
      <img
        src="/src/assets/images/keyask/optimized/low-fi-prototype.webp"
        alt=""
      />
    </div>
  </div>
  <div class="project-step mb-20">
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-8">
          o4. testing and results
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          After creating a lo-fi working prototype we started user testing and
          refining our design along the way. To thoroughly evaluate our
          prototype, we employed a multi-faceted approach to usability
          testing.<br /><br />
          This included:
        </p>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            1. think-aloud protocol
          </p>
          <p class="point-desc body">
            Asked users to verbalize their thoughts and thought process while
            interacting with the prototype, providing valuable insights into
            their decision-making.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            2. pre and post task questionnaire
          </p>
          <p class="point-desc body">
            These questionnaires helped us understand user expectations before
            the test and gauge their satisfaction and experience afterward.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            3. likert scale usability rating
          </p>
          <p class="point-desc body">
            Users rated the prototype's overall usability on a standardized
            scale, offering a quantitative measure of satisfaction.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            4. hierarchical task analysis (HTA)
          </p>
          <p class="point-desc body">
            We created 2 HTA's to deconstruct the tasks users performed during
            the study. This breakdown allowed us to analyze task complexity and
            accurately assign completion levels for each task.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="hta-image-container">
            <img
              src="/src/assets/images/keyask/optimized/lockout-access-hta.webp"
              alt=""
            />
            <p class="caption font-bold text-center">Lockout access HTA</p>
          </div>
          <div class="hta-image-container">
            <img
              src="/src/assets/images/keyask/optimized/guest-access-hta.webp"
              alt=""
            />
            <p class="caption font-bold text-center">Guest access HTA</p>
          </div>
        </div>
      </div>
    </div>
    <div class="project-step-row pinned-row px-[7vw] mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-2 font-bold mb-8">o2.1 what we learned</h3>
      </div>
      <div class="project-step-col-2">
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">1. convenience</p>
          <p class="point-desc body">
            90% participants said that having a kiosk would be very convenient
            and would simplify guest access to their apartment.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">2. confusion</p>
          <p class="point-desc body">
            83% of participants felt that app wording was a bit confusing.<br />
            Ex. What is Guest ID in the request section?
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">3. acceptance</p>
          <p class="point-desc body">
            Both property managers said that having a kiosk on site would help
            them generate additional revenue.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="case-footer black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20"
  >
    <div class="project-step-row pinned-row mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-8">
          o5. zentra team feedback
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          The Zentra team provided insightful feedback on the final version of
          KeyAsk and the research behind it. Their input helped us identify key
          areas for further development and refine our design process.<br /><br />
          Here are some key takeaways:
        </p>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            1. expanding identity verification
          </p>
          <p class="point-desc font-light body">
            We discussed exploring alternative methods for resident
            identification that wouldn't require a phone.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            2. monetize guest access
          </p>
          <p class="point-desc font-light body">
            The team encouraged us to delve deeper into the potential for
            monetizing guest access and parking.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            3. pricing exploration
          </p>
          <p class="point-desc font-light body">
            Developing a robust pricing model for guest access would be crucial
            if we decide to pursue monetization.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            4. more usability tests
          </p>
          <p class="point-desc font-light body">
            Additional rounds of user testing would validate the effectiveness
            of any changes made to KeyAsk.
          </p>
        </div>
      </div>
    </div>
    <div class="project-step-row pinned-row mb-20">
      <div class="project-step-col-1 pinned-col">
        <h3 class="detail-name title-1 font-bold mb-8">learning outcomes</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body">
          This project taught me the importance of business viability in product
          design. It highlighted that users are willing to pay for convenience,
          as long as there's a right balance.<br /><br />
          I learnt that there is always something we can improve if not create
          from scratch, it is the small increments that makes a product useful.
          I got to learn so much from this project specially in terms of
          business aspect and exploration of a new vertical in design.
        </p>
      </div>
    </div>
    <div class="h-[4px] bg-white w-full rounded-xl mb-20"></div>
    <div class="project-step-row pinned-row">
      <div class="project-step-col-1 pinned-col pointer-events-none">
        <h3 class="detail-name title-1 font-bold mb-8">upnext</h3>
      </div>
      <div class="project-step-col-2">
        <router-link
          to="/gravityDrive"
          ref="project1"
          class="project-tile relative row-span-2 row-start-1"
        >
          <div class="image-wrapper relative overflow-hidden aspect-[56/67]">
            <img
              src="/src/assets/images/gravity-drive/optimized/project-tile-120.webp"
              alt=""
              class="cover-image"
            />
          </div>
          <div class="project-info">
            <h3 class="project-company body font-light mt-7">GRAVITY DRIVE</h3>
            <h2 class="project-title title-2 font-bold mt-1 tracking-wide">
              EVENTFLOW
            </h2>
            <p class="project-desc body mt-4">
              An integrated platform that streamlines event planning and
              execution for venues and corporations.
            </p>
          </div>
        </router-link>
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
