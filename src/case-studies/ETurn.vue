<script setup>
import { onMounted, onUnmounted } from "vue";
import Navbar from "../universal-sections/Navbar.vue";
import FooterSection from "../universal-sections/FooterSection.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "../components/Carousel.vue";
import DragTip from "../components/DragTip.vue";
import ScrollToTopButton from "../components/ScrollToTopButton.vue"

onMounted(() => {
  const projectRows = gsap.utils.toArray(".project-step-row");

  // Save original styles so GSAP can restore them cleanly
  ScrollTrigger.saveStyles(".project-step-col-1");

  // Create triggers for desktop only
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      projectRows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 80px",
          // unpin when this row finishes, not beyond
          end: () => "+=" + row.offsetHeight,
          pin: row.querySelector(".project-step-col-1"),
          pinSpacing: false,
        });
      });
    },
  });

  // Refresh only once after media is ready
  const refreshAfterMedia = () => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  };

  // Refresh after images load
  window.addEventListener("load", refreshAfterMedia);

  // Refresh after videos load
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("loadeddata", refreshAfterMedia);
  });
});

// Clean up when component is destroyed
onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
<template>
  <!--
  figma spacing conversion
  10 -> mb-2
  15 -> mb-3
  20 -> mb-4
  30 -> mb-8
  50 -> mb-16
  100 -> mb-20
  150 -> mb-40
-->
  <ScrollToTopButton></ScrollToTopButton>
  <Navbar></Navbar>
  <div class="nav-spacer h-[130px]"></div>
  <div class="project-intro mt-20 mb-40">
    <div
      class="project-overwiew grid grid-cols-1 md:grid-cols-2 px-[7vw] mb-16"
    >
      <div class="project-title">
        <p class="company body font-bold mb-2">
          IUPUI • <span class="font-thin">HCI Fall 22</span>
        </p>
        <h2 class="project-name h2 font-normal mb-4">E-TURN</h2>
        <p class="company body">3.5 minute read</p>
      </div>
      <div class="project-overview mt-10 md:mt-0">
        <h3 class="detail-name title-1 font-bold mb-8">overview</h3>
        <p class="desc body">
          This project, developed as part of an Interaction Design Practice
          course, tackles a significant environmental issue: the low rate of
          electronic recycling in the United States.
          <br /><br />Our goal was to understand the public's perception of
          e-waste and design a digital solution to increase recycling literacy
          and effort.
        </p>
      </div>
    </div>
    <div class="project-banner col-span-2 mb-16">
      <img
        src="/src/assets/images/e-turn/banner.png"
        alt=""
        class="banner-im w-full object-cover aspect-[2/1]"
      />
    </div>
    <div
      class="project-details-container grid grid-cols-2 md:grid-cols-4 px-[7vw] mb-16"
    >
      <div class="project-details">
        <div class="project-detail font-bold mb-2">project type</div>
        <div class="project-detail mt-6">Course Project HCI (Fall 22)</div>
      </div>
      <div class="project-details">
        <div class="project-detail font-bold mb-2">role</div>
        <div class="project-detail mt-6">UX Researcher and Designer</div>
      </div>
      <div class="project-details">
        <div class="project-detail font-bold mb-2 mt-10 md:mt-0">duration</div>
        <div class="project-detail mt-6">Sept 22 - Oct 22</div>
      </div>
      <div class="project-details">
        <div class="project-desc font-bold mb-2 mt-10 md:mt-0">
          collaborators
        </div>
        <div class="project-detail flex justify-start gap-2">
          <a href="https://www.linkedin.com/in/bhoyarm/" target="_blank"><img
            class="w-12 h-12 rounded-[50%] cursor-link"
            src="/src/assets/images/e-turn/mandar-profile.jpg"
            alt=""
          /></a><a href="https://www.linkedin.com/in/pranavmirkad/" target="_blank"><img
            class="w-12 h-12 rounded-[50%] cursor-link"
            src="/src/assets/images/e-turn/pranav-profile.jpg"
            alt=""
          /></a><a href="https://www.linkedin.com/in/gsaransh/" target="_blank"><img
            class="w-12 h-12 rounded-[50%] cursor-link"
            src="/src/assets/images/e-turn/saransh-profile.jpg"
            alt=""
          /></a>
        </div>
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
          Electronic recycling is a major challenge, with 70% of obsolete
          electronics staying in storage. Many states lack proper legislation
          for e-waste disposal, and the rapid pace of technology development
          creates a growing problem.
        </p>
      </div>
    </div>
    <div class="black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20">
      <div class="project-step-row">
        <div class="project-step-col-1">
          <h3 class="detail-name title-1 font-bold mb-8">solution</h3>
        </div>
        <div class="project-step-col-2">
          <p class="desc body mb-16">
            We decided that a digital solution, specifically a website, would be
            the most effective way to address the key constraints of access and
            awareness.<br /><br />
            Our solution, "E-Turn," would focus on helping users find recycling
            centers and providing the necessary information to encourage them to
            recycle.
          </p>
        </div>
      </div>
      <div class="video-container relative w-full aspect-[16/9]">
            <video
              class="w-full h-full object-cover video"
              src="/src/assets/images/e-turn/prototype.mp4"
              autoplay
              loop
            ></video>
          </div>
    </div>
  </div>
  <div class="process-row px-[7vw] mb-40 grid grid-cols-3 md:grid-cols-5 gap-3">
    <div class="process-step aspect-square">
      <img src="/src/assets/images/e-turn/process-1.png" alt="" />
    </div>
    <div class="process-step aspect-square">
      <img src="/src/assets/images/e-turn/process-2.png" alt="" />
    </div>
    <div class="process-step aspect-square">
      <img src="/src/assets/images/e-turn/process-3.png" alt="" />
    </div>
    <div class="process-step aspect-square">
      <img src="/src/assets/images/e-turn/process-4.png" alt="" />
    </div>
    <div class="process-step aspect-square">
      <img src="/src/assets/images/e-turn/process-5.png" alt="" />
    </div>
  </div>

  <div class="project-step mb-40">
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-1 font-bold mb-8">o1. data collection</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-16">
          Our data collection focused on understanding two key areas:
        </p>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">
            1. public perception of e-waste
          </p>
          <p class="point-desc font-normal body">
            We aimed to understand people's awareness, opinions, and motivations
            regarding recycling electronics. This included identifying
            <br /><br />
          </p>
          <p class="body font-light">• Where they recycle electronics?</p>
          <p class="body font-light">
            • What factors encourage or discourage recycling ?
          </p>
          <p class="body font-light">
            • Their knowledge and concerns about e-waste
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">
            2. e-waste recycling landscape
          </p>
          <p class="point-desc font-normal body">
            We investigated the current state of electronics recycling,
            including
            <br /><br />
          </p>
          <p class="body font-light">
            • Availability and accessibility of recycling programs
          </p>
          <p class="body font-light">• Public awareness of existing options</p>
          <p class="body font-light">
            • Potential challenges faced by the recycling industry
          </p>
        </div>
      </div>
    </div>

    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">
          o1.1 site visits, surveys and interviews
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          We began by conducting surveys with 76 participants and
          semi-structured interviews with 8 Indianapolis residents from
          different age groups to understand public perception and recycling
          habits. <br /><br />We also performed site visits to local recycling
          centers to understand the process firsthand.
        </p>
        <DragTip></DragTip>
        <div class="desc-img w-full aspect-[4/3]"><Carousel></Carousel></div>
      </div>
    </div>

    <div class="black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20">
      <div class="project-step-row">
        <div class="project-step-col-1">
          <h3 class="detail-name title-1 font-bold mb-8">o1.2 key insights</h3>
        </div>
        <div class="project-step-col-2">
          <div class="point-breakdown mb-8">
            <p class="point-title title-3 font-bold mb-3">
              1. knowledge deficit
            </p>
            <p class="point-desc font-light body">
              A significant portion of younger respondents (students) were
              unaware of e-waste recycling options.<br /><br />
              60% of participants lacked clarity on recycling (2 participants
              didn't even know that they could recycle electronics)
            </p>
          </div>
          <div class="point-breakdown mb-8">
            <p class="point-title title-3 font-bold mb-3">
              2. accessibility and inconvenience
            </p>
            <p class="point-desc font-light body">
              68% of respondents cited a scarcity of nearby recycling centers
              and 52% found the process inconvenient.Participants desired convenient local options, 
              feeling that sending electronics away was too much effort.
            </p>
          </div>
          <div class="point-breakdown mb-8">
            <p class="point-title title-3 font-bold mb-3">
              3. need for comprehensive information
            </p>
            <p class="point-desc font-light body">
              There's a strong desire for readily available information and the
              environmental impact of e-waste recycling. Also integration with
              existing platforms like google maps.
            </p>
          </div>
          <div class="point-breakdown">
          <p class="point-title title-3 font-bold mb-3">4. data and privacy concerns</p>
          <p class="point-desc font-light body">
            Concerns about data security and the ethical practices of recycling
            companies were also a factor.
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>

  <div class="project-step mb-40">
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-1 font-bold mb-8">
          o2. analysis and synthesis
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          Now that we had all the data we moved forward with creating an
          affinity map and a thematic network to group the data.
        </p>
      </div>
    </div>

    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">
          o2.1 affinity mapping
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          To make sense of the vast amount of data, we used an affinity diagram
          to group our findings into key themes like "Awareness,"
          "Accessibility," "Education," "Motivations" and things that are
          keeping people from recycling.
        </p>
        <div class="process-row grid grid-cols-3 gap-8 gap-y-8">
          <div class="process-step">
            <img src="/src/assets/images/e-turn/affinity-1.png" alt="" />
          </div>
          <div class="process-step">
            <img src="/src/assets/images/e-turn/affinity-2.png" alt="" />
          </div>
          <div class="process-step">
            <img src="/src/assets/images/e-turn/affinity-3.png" alt="" />
          </div>
          <div class="process-step">
            <img src="/src/assets/images/e-turn/affinity-4.png" alt="" />
          </div>
          <div class="process-step">
            <img src="/src/assets/images/e-turn/affinity-5.png" alt="" />
          </div>
          <div class="process-step">
            <img src="/src/assets/images/e-turn/affinity-6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">
          o2.2 thematic network
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          We then created a thematic network to transform these insights into
          four core user pain points: limited access, lack of awareness,
          inadequate programs, and confusion over proper handling.
        </p>
        <img src="/src/assets/images/e-turn/thematic-network.png" alt="" />
      </div>
    </div>
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">o2.3 personas</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          We then created a thematic network to transform these insights into
          four core user pain points: limited access, lack of awareness,
          inadequate programs, and confusion over proper handling.
        </p>
        <img
          class="mb-8"
          src="/src/assets/images/e-turn/persona-elizabeth.png"
          alt=""
        />
        <img src="/src/assets/images/e-turn/persona-jacob.png" alt="" />
      </div>
    </div>
  </div>

  <div class="project-step mb-16">
    <div class="project-step-row px-[7vw]">
      <div class="project-step-col-1">
        <h3 class="detail-name title-1 font-bold mb-8">
          o3. ideation and design
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          Using the insights from our analysis, we conducted several ideation
          sessions, including the Crazy 8s method, to generate solutions. We
          ultimately focused on three core ideas to address key problems:
        </p>
        <div class="process-row grid grid-cols-3 gap-5 mb-16">
          <div class="process-step">
            <img src="/src/assets/images/e-turn/idea-1.png" alt="" />
          </div>
          <div class="process-step">
            <img src="/src/assets/images/e-turn/idea-2.png" alt="" />
          </div>
          <div class="process-step">
            <img src="/src/assets/images/e-turn/idea-3.png" alt="" />
          </div>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            1. information section
          </p>
          <p class="point-desc body">
            A feature to provide necessary information on how to start
            recycling.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            2. community discussion platform
          </p>
          <p class="point-desc body">
            A space to spark conversations about upcycling and extending the
            lifespan of electronics.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">
            3. incentive and reward system
          </p>
          <p class="point-desc body">
            A feature to motivate users by highlighting the environmental
            benefits of their actions.
          </p>
        </div>
      </div>
    </div>
  </div>

  <
  <div class="project-step mb-40">
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-1 font-bold mb-8">
          o4. design and prototyping
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body">
          We moved into the design phase by creating storyboards to visualize
          how users would interact with our product in real-life scenarios.
          <br /><br />This was followed by creating rough wireframes of all
          major screens to outline the application's structure.
        </p>
      </div>
    </div>
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">o4.1 storyboards</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-16">
          We created multiple storyboards to convey our ideas and get feedback
          from peers, here are a few based on our 3 core ideas.
        </p>
        <div
          class="story-container relative flex gap-1 w-full p-8 pt-10 border-2 border-[var(--feather-light)] mb-16"
        >
          <div
            class="story-label absolute top-0 left-3 -translate-y-[50%] bg-[var(--pearl)] px-5 font-bold body"
          >
            DOUBT??
          </div>
          <div class="story-board">
            <img src="../assets/images/e-turn/story-board-1.png" alt="" />
          </div>
        </div>
        <div
          class="story-container relative flex gap-1 w-full p-8 pt-10 border-2 border-[var(--feather-light)] mb-16"
        >
          <div
            class="story-label absolute top-0 left-3 -translate-y-[50%] bg-[var(--pearl)] px-5 font-bold body"
          >
            INFLUENCE!!
          </div>
          <div class="story-board">
            <img src="../assets/images/e-turn/story-board-2.png" alt="" />
          </div>
        </div>
        <div
          class="story-container relative flex gap-1 w-full p-8 pt-10 border-2 border-[var(--feather-light)] mb-16"
        >
          <div
            class="story-label absolute top-0 left-3 -translate-y-[50%] bg-[var(--pearl)] px-5 font-bold body"
          >
            REWARDS!!
          </div>
          <div class="story-board">
            <img src="../assets/images/e-turn/story-board-3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">o4.2 wireframes</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-16">
          A final wireframe before hopping into hi-fi designs to make sure
          everything looks good.
        </p>
        <img
          class="cursor-magnify"
          src="../assets/images/e-turn/wireframe-1.png"
          alt=""
        />
        <img
          class="cursor-magnify"
          src="../assets/images/e-turn/wireframe-2.png"
          alt=""
        />
      </div>
    </div>

    <div class="project-step-row px-[7vw] mb-16">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">o4.3 live prototype</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body ">
          Using XD to prototype our final design, we created a mvp, it contains
          fewer screens and not all concepts that were highlighted in our
          brainstorming. <br /><br />Other ideas like rewards and discussion
          forums were reserved for future scope.
        </p>
        
      </div>
    </div>
    <div class="video-container relative w-full px-[7vw] py-16 bg-[var(--rock)]">
          <iframe
            class="aspect-[16/9]"
            width="100%"
            src="https://xd.adobe.com/embed/e2b967bd-24c5-4546-a14d-054b240602cd-b7ea/?fullscreen"
          ></iframe>
        </div>
  </div>

  <div class="project-step mb-20">
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-1 font-bold mb-8">
          o5. usability testing
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body">
          We conducted usability testing with 6 participants using think-aloud
          sessions and cognitive walk-throughs to gather feedback on our design.
        </p>
      </div>
    </div>

    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">o5.1 what we learned</h3>
      </div>
      <div class="project-step-col-2">
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">
            1. comprehensive and wider search
          </p>
          <p class="point-desc font-normal body">
            Users requested the ability to search by city name instead of just a
            zip code and also a larger search radius.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">2. information overload</p>
          <p class="point-desc font-normal body">
            The final information page felt overwhelming, consider ways to
            simplify the information presentation.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">3. more filters needed</p>
          <p class="point-desc font-normal body">
            There was a desire for more filters to search for specific
            electronics.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="case-footer black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20"
  >
    <div class="project-step-row mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-1 font-bold mb-8">learning outcomes</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body">
          This project underscored the importance of thorough research and
          iteration. <br /><br />
          We spent a significant amount of time in the research and ideation
          phases, ensuring a solid foundation for our features. <br /><br />
          By "getting in the shoes of the user" through field research, we were
          able to pinpoint the root causes of the issues and build a solution
          that genuinely addresses their needs.
        </p>
      </div>
    </div>
    <div class="h-[4px] bg-white w-full rounded-xl mb-20"></div>
    <div class="project-step-row">
      <div class="project-step-col-1 pointer-events-none">
        <h3 class="detail-name title-1 font-bold mb-8">upnext</h3>
      </div>
      <div class="project-step-col-2">
        <router-link
          to="/keyask"
          ref="project1"
          class="project-tile relative row-span-2 row-start-1"
        >
          <div class="image-wrapper relative overflow-hidden aspect-[56/67]">
            <img
              src="/src/assets/images/Zentra.png"
              alt=""
              class="cover-image"
            />
          </div>
          <div class="project-info">
            <h3 class="project-company body font-light mt-7">ALLEGION</h3>
            <h2 class="project-title title-2 font-bold mt-1 tracking-wide">
              KEYASK
            </h2>
            <p class="project-desc body mt-4">
              A new product that expands the Zentra smart lock ecosystem,
            increasing revenue and delivering value to customers.
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <FooterSection></FooterSection>
</template>
