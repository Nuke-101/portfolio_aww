<script setup>
import Navbar from "../Navbar.vue";
import FooterSection from "../FooterSection.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  // Select all the project rows that have a sticky header
  const projectRows = gsap.utils.toArray(".project-step-row");

  ScrollTrigger.matchMedia({
    // A media query for screens larger than 768px
    "(min-width: 768px)": function () {
      projectRows.forEach((row, i) => {
        const header = row.querySelector(".detail-name");

        ScrollTrigger.create({
          trigger: row,
          start: "top 80px", // Pin the element 80px from the top of the viewport
          end: "bottom 120px",
          pin: row.querySelector(".project-step-col-1"),
          pinSpacing: false,
        });

        const myVideo = document.querySelector("video");
        if (myVideo) {
          myVideo.addEventListener("loadeddata", () => {
            ScrollTrigger.refresh();
            console.log("ScrollTrigger refreshed due to video load!");
          });
        }

        // A final refresh after a short delay to catch any last-minute layout changes
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 600);
      });
    },

    // A media query for smaller screens (optional)
    "(max-width: 767px)": function () {
      // You can add different behavior for mobile here, or just leave it empty to disable the effect.
    },
  });
});
</script>
<template>
  <Navbar></Navbar>
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
  <div class="project-intro mt-20 mb-40">
    <div
      class="project-overwiew grid grid-cols-1 md:grid-cols-2 px-[7vw] mb-16"
    >
      <div class="project-title">
        <p class="company body font-bold mb-2">
          IUPUI • <span class="font-thin">HCI Fall 22</span>
        </p>
        <h2 class="project-name h2 font-normal mb-4">E-TURN</h2>
        <p class="company body">3.5 minutes read</p>
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
        src="/src/assets/images/gravity-drive/gravityDrive-Banner.png"
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
          <img
            class="w-12 h-12 rounded-[50%]"
            src="/src/assets/images/e-turn/mandar-profile.jpg"
            alt=""
          /><img
            class="w-12 h-12 rounded-[50%]"
            src="/src/assets/images/e-turn/pranav-profile.jpg"
            alt=""
          /><img
            class="w-12 h-12 rounded-[50%]"
            src="/src/assets/images/e-turn/saransh-profile.jpg"
            alt=""
          />
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
        <p class="desc body mb-15">
          Electronic recycling is a major challenge, with 70% of obsolete
          electronics staying in storage. Many states lack proper legislation
          for e-waste disposal, and the rapid pace of technology development
          creates a growing problem.
        </p>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">1. accessibility gap</p>
          <p class="point-desc body">
            68% of survey respondents cited a lack of nearby recycling centers,
            and 52% found the process inconvenient.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">2. knowledge deficit</p>
          <p class="point-desc body">
            60% of participants were unclear on how to recycle electronics, and
            some were even unaware that it was an option.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">3. inconvenience</p>
          <p class="point-desc body">
            Participants desired convenient local options, feeling that sending
            electronics away was too much effort.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title title-3 font-bold mb-3">4. trust issues</p>
          <p class="point-desc body">
            Concerns about data security and the ethical practices of recycling
            companies were also a factor.
          </p>
        </div>
      </div>
    </div>
    <div class="black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20">
      <div class="project-step-row">
        <div class="project-step-col-1">
          <h3 class="detail-name title-1 font-bold mb-8">solution</h3>
        </div>
        <div class="project-step-col-2">
          <p class="desc body mb-8">
            We decided that a digital solution, specifically a website, would be
            the most effective way to address the key constraints of access and
            awareness.<br /><br />
            Our solution, "E-Turn," would focus on helping users find recycling
            centers and providing the necessary information to encourage them to
            recycle.
          </p>
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
        <div class="desc-img w-full aspect-[2/1]">
          <img
            src="/src/assets/images/gravity-drive/competitor-analysis.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="project-step-row px-[7vw] mb-10">
      <div class="project-step-col-1 flex flex-col justify-between items-start">
        <h3 class="detail-name title-2 font-bold mb-8">
          o1.2 site visits and interviews
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          We conducted 5 site visits covering various event venues and
          co-working spaces, where we interviewed venue managers and owners to
          gain firsthand knowledge of their workflows and challenges.
        </p>
      </div>
    </div>
    <div
      class="project-step-row-gallery grid grid-cols-2 gap-1 site-visits px-[7vw] mb-20"
    >
      <div class="site-1 w-full mt-20">
        <img
          class="object-fit w-full"
          src="/src/assets/images/gravity-drive/site-3.jpg"
          alt=""
        />
      </div>
      <div class="site-2 w-full">
        <img
          class="object-fit w-full"
          src="/src/assets/images/gravity-drive/site-1.jpg"
          alt=""
        />
      </div>
      <div class="site-3 w-full col-start-2 -mt-20">
        <img
          class="object-fit w-full"
          src="/src/assets/images/gravity-drive/site-2.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="black-wrapper bg-[var(--rock)] text-white px-[7vw] py-20">
      <div class="project-step-row">
        <div class="project-step-col-1">
          <h3 class="detail-name title-1 font-bold mb-8">o1.3 key insights</h3>
        </div>
        <div class="project-step-col-2">
          <div class="point-breakdown mb-8">
            <p class="point-title title-3 font-bold mb-3">
              1. decentralized management
            </p>
            <p class="point-desc font-light body">
              4 out of 5 venues visited relied on a combination of different
              programs, like Excel for booking records and email for
              communication.
            </p>
          </div>
          <div class="point-breakdown mb-8">
            <p class="point-title title-3 font-bold mb-3">
              2. communication gaps
            </p>
            <p class="point-desc font-light body">
              Long, unwieldy email threads made it difficult for organizers to
              communicate with clients and keep track of conversations.
            </p>
          </div>
          <div class="point-breakdown">
            <p class="point-title title-3 font-bold mb-3">
              3. inefficient processes
            </p>
            <p class="point-desc font-light body">
              Venue managers expressed a need for a more efficient way to manage
              resources and client needs, with 80% showing interest in a system
              that would reduce their workload.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="project-step mb-40">
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-1 font-bold mb-8">o2. analysis</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          Based on our research, we created personas for our target users: venue
          owners and managers. <br />
          <br />
        </p>
        <img src="/src/assets/images/gravity-drive/persona.png" alt="" />
        <p class="desc body">
          <br />
          <br />Due to time constraints, we narrowed our initial list of
          features to focus on three core design goals:
        </p>
      </div>
    </div>

    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">o2.1 design goals</h3>
      </div>
      <div class="project-step-col-2">
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">1. event planning</p>
          <p class="point-desc font-normal body">
            A feature for event planning and customization, including services
            like food, music, and decor, with budget visualization.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">2. task management</p>
          <p class="point-desc font-normal body">
            The ability to create event-related tasks and assign them to staff
            based on priority.
          </p>
        </div>
        <div class="point-breakdown">
          <p class="point-title body font-bold mb-3">3. communication</p>
          <p class="point-desc font-normal body">
            A dedicated channel for each event with group and private chat, as
            well as a repository for sharing files.
          </p>
        </div>
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
        <p class="desc body">
          Focusing on our 3 main design goals, for the next month and a half we
          focused solely on the design and iteration part of the product and how
          we will integrate different features.
        </p>
      </div>
    </div>
  </div>
  <div
    class="project-step-row-gallery grid grid-cols-2 md:grid-cols-4 gap-1 site-visits px-[7vw] mb-20"
  >
    <div class="site-1 w-full mt-20">
      <img
        class="object-fit w-full"
        src="/src/assets/images/gravity-drive/idea-1.JPG"
        alt=""
      />
    </div>
    <div class="site-2 w-full">
      <img
        class="object-fit w-full"
        src="/src/assets/images/gravity-drive/idea-2.png"
        alt=""
      />
    </div>
    <div class="site-3 w-full md:mt-20">
      <img
        class="object-fit w-full"
        src="/src/assets/images/gravity-drive/idea-3.JPG"
        alt=""
      />
    </div>
    <div class="site-3 w-full -mt-20 md:mt-0">
      <img
        class="object-fit w-full"
        src="/src/assets/images/gravity-drive/idea-4.png"
        alt=""
      />
    </div>
  </div>
  <div class="project-step mb-40">
    <div class="project-step-row px-[7vw]">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">
          o3.1 information architecture
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          The information architecture diagram visually represents the product's
          structure and the relationships between its key pages. We used this to
          organize our ideas and ensure the user flow was logical and intuitive.
        </p>
        <img
          src="/src/assets/images/gravity-drive/information-arc.png"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="project-step mb-40">
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-1 font-bold mb-8">
          o4. prototyping and testing
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body">
          We created a high-fidelity prototype and conducted five test sessions
          with venue owners and managers using a task-based scenario.
        </p>
      </div>
    </div>

    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">
          o4.1 testing scenario
        </h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body mb-8">
          "You are Sam Reynolds, an event manager for the Holiday Event Center.
          Holiday Event Center has recently updated its venue management process
          to use a new event management application. <br /><br />The hope is
          that this system will improve the workflow of the event center and
          make everyone’s jobs a little bit easier. The owner has added some
          information to the new system and has asked you to test it out and
          familiarize yourself with how it functions."
        </p>
        <div class="video-container relative w-full aspect-[20/13]">
          <video
            class="w-full h-full object-cover video"
            src="/src/assets/images/gravity-drive/prototype.mp4"
            autoplay
            loop
          ></video>
        </div>
      </div>
    </div>
  </div>

  <div class="project-step mb-20">
    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-1 font-bold mb-8">o5. learnings</h3>
      </div>
      <div class="project-step-col-2">
        <p class="desc body">
          We created a high-fidelity prototype and conducted five test sessions
          with venue owners and managers using a task-based scenario.
        </p>
      </div>
    </div>

    <div class="project-step-row px-[7vw] mb-20">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">o5.1 what we learned</h3>
      </div>
      <div class="project-step-col-2">
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">1. navigation issues</p>
          <p class="point-desc font-normal body">
            Users confused contacts with messaging features.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">2. information overload</p>
          <p class="point-desc font-normal body">
            The integrated messaging and files section felt overwhelming to some
            users.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">
            3. need for universal search
          </p>
          <p class="point-desc font-normal body">
            Users found the application intuitive and easier to learn than
            similar tools they've used before.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">4. event association</p>
          <p class="point-desc font-normal body">
            Users sometimes struggled to associate a person with a specific
            event in contacts.
          </p>
        </div>
      </div>
    </div>
    <div class="project-step-row px-[7vw]">
      <div class="project-step-col-1">
        <h3 class="detail-name title-2 font-bold mb-8">
          o5.2 what users liked
        </h3>
      </div>
      <div class="project-step-col-2">
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">
            1. all-inclusive solution
          </p>
          <p class="point-desc font-normal body">
            Users were enthusiastic about a single system for all their needs.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">2. ease of use</p>
          <p class="point-desc font-normal body">
            They found the application less complex and easier to learn than
            similar tools they had used before.
          </p>
        </div>
        <div class="point-breakdown mb-8">
          <p class="point-title body font-bold mb-3">
            3. customization options
          </p>
          <p class="point-desc font-normal body">
            Users were impressed by the detailed customization options for food,
            decor, and other event elements.
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
      <div class="project-step-col-1">
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
              src="/src/assets/images/E-turn.png"
              alt=""
              class="cover-image"
            />
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
      </div>
    </div>
  </div>
  <FooterSection></FooterSection>
</template>
