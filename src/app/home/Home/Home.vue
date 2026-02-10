<!-- Home.vue -->
<template>
  <div>
    <stage :disable-particles="disableParticles" />

    <home-section id="about" image="firmware.svg" alternative>
      <a name="about"></a>
      <div :class="$style.about" ref="about">
        <span :class="$style.bigspan">About Us</span>
        <!-- <span :class="$style.smallspan">About Us</span> -->
      </div>
      <vue-headline level="3">Who We Are</vue-headline>
      <p :class="$style.aboutpara">
        SUTD Organization of Autonomous Robotics (SOAR) focuses on autonomous robotics platforms, as well as AI and
        machine learning frameworks.
      </p>
      <br />
      <p :class="$style.aboutpara">
        We aim to nurture a committed robotics community through impactful projects and member development. The club
        adopts Robot Operating System (ROS) as the main robotics middleware framework to keep pace with industry demands
        as well as to ensure that our projects are cross-compatible and hardware-agnostic.
      </p>
      <br />
      <p :class="$style.aboutpara">
        SOAR has grown rapidly in the 5 short years, gaining industry recognition in the form of a sponsorship from
        Lionsbot in 2018. We aim to groom and nurture young robotics engineers who are well-rounded and can tackle a
        variety of real-world robotics challenges. On top of this, SOAR is active in keeping pace with the industry's
        appetite through our involvement in events such as Makerfaire Singapore and Singapore Robo Expo. Our members
        find part-time employment with industry too!
      </p>
      <br />
      <p :class="$style.aboutpara">
        While we are a very niche club, we welcome people of any background to come and join us on this journey. We
        believe that robotics should be accessible to everyone and host regular workshops to impart skills and
        knowledge. In addition, we take on a variety of robotics projects to build our members' skills and club
        capabilities.
      </p>
      <br />
      <p :class="$style.aboutpara">
        Interested in joining SOAR? Drop us an email
        <a href="mailto:soar@club.sutd.edu.sg">here</a> and we will be in touch!
      </p>
    </home-section>

    <div :class="$style.vision" ref="vision" id="vision">
      <a name="vision"></a>
      <span :class="$style.bigspan">Vision</span>
      <!-- <span :class="$style.smallspan">vision</span> -->
      <p>
        To Nurture A Committed Robotics Community
        <br />Through Impactful Projects and Member Development
      </p>
    </div>

    <div :class="$style.title" ref="events" id="events">
      <a name="events"></a>
      <span :class="$style.bigspan">Events</span>
      <!-- <span :class="$style.smallspan">vision</span> -->
    </div>
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="soarchallenge.jpg" title="Soar Challenge">
            <p>
              SOAR Challenge aims to introduce robotics in a fun and engaging way.
              Participants will hone their basic robotics skills in a series of workshops, build a robot, and face-off in a challenge. 
            </p>
          </project-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="roboclash24.JPG" title="Roboclash 2024">
            <p>
              ROBOCLASH 2024 is making a comeback! 
              Get ready for another round of intense robot battles and exiting challenges! 
              Whether you're a novice or a pro, this head-to-head competition is your chance to showcase your skills. 
              Take on the challenge, build a robot, and watch it battle it out in the ultimate ROBOCLASH!
              <br />
              <br /> Registration starts on 27 Oct 2023 till 15 Nov 2023! What are you waiting for? Go click on the link now!
            </p>
          </project-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="roboclash25.jpg" title="Roboclash 2025">
            <p>
              ROBOCLASH 2025: ROBOT BATTLES?!
              Build your robot, step into the arena, and compete for glory in the ultimate showdown!
              <br />
              <br /> Registration opens on 20 Feb 2025 — don't miss out! Click the link and join the action now!
            </p>
          </project-card>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
    <div :class="$style.title" ref="projects" id="projects">
      <a name="projects"></a>
      <span :class="$style.bigspan">Projects</span>
      <!-- <span :class="$style.smallspan">projects</span> -->
    </div>
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="scrt.JPG" title="SCRT(VEX)">
            <p>
              SOAR’s competitive robotics team participating in the <a href="https://www.vexrobotics.com/v5/competition/vrc-current-game">VEX Robotics</a> Competition series. 
              2024 Asia-Pacific Regional Champions 
              Focusing on integrating hardware and software to create robots that compete against robots from other universities.
              <br />
              <br />Project Lead: Wen Xuan, @xennwuann
            </p>
          </project-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="MOMObot.JPG" title="MOMObot">
            <p>
              <a href="https://github.com/methylDragon/momobot">MOMObot</a> was our first foray into autonomous service
              robots 5 years ago and it has become an icon of SOAR. MOMObot is a modular and mobile service ground robot
              that is capable of autonomous localisation, even in crowded environments! Developed to carry payloads of
              up to 50kg, it is a stable autonomous platform for us to develop novel applications for autonomous ground
              robots.
              <br />
              <br />Project Lead: Vincent,  @Vincent_ho_darkmidget
            </p>
          </project-card>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="beach.jpg" title="Sand-E">
           <p>
            <a href="https://www.straitstimes.com/singapore/environment/meet-sand-e-the-trash-picking-robot-developed-by-sutd-students-that-can-walk-on-sand">Sand-E</a>, the beach cleaning robot, maintains beach cleanliness by removing surface level pollutants near the shoreline.
            
            <br>
            <br>
            Source:
            Lim, Zachary. 
            “Meet Sand-E the Robot, Developed by SUTD Students to ‘Walk’ on Sand and Pick up Trash.” 
            The Straits Times, 23 Jan. 2025, 
            www.straitstimes.com/singapore/environment/meet-sand-e-the-trash-picking-robot-developed-by-sutd-students-that-can-walk-on-sand.
            </br>
            <br />Catch us in action on 22 January 2025 @Pasir Ris Beach
            <br />
            <br />Project Lead: Vincent,  @Vincent_ho_darkmidget
           </p>
          </project-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <project-card :class="$style.cardsize" image="UWU.JPG" title="Under Water Unit [UWU]">
           <p>
            UnderWater Unit (UWU) participates in Singapore Autonomous Underwater Vehicle Challenge (SAUVC) annually. 
            In 2024, the team excelled at the qualifiers and advanced to the SAUVC Finals Round. 
            The team works together to incrementally build an AUV together. 
            This involves watertight hardware, electrical engineering, and Robot Operating System (ROS). 
            <br />The team is currently working towards a marine simulator & distillation-based vision algorithm for underwater object localization
            <br />
            <br />Project Lead: Xin Yang, @gxy812
           </p>
          </project-card>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>

    <div :class="$style.title" ref="team" id="team">
      <a name="team"></a>
      <span :class="$style.bigspan">The Team</span>
      <!-- <span :class="$style.smallspan">the team</span> -->
    </div>
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="Sri.jpg"
            title="Sri"
            info="President"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="Bryan.jpg"
            title="Bryan Lim"
            info="Vice-President[Tech]"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="Raeanne.jpg"
            title="Raeanne Wee"
            info="Vice-President[Admin]"
          ></team-card>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <team-card image="Vera.jpg" 
          title="Vera" 
          info="Treasurer" 
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="Bryan_Wilson.jpg"
            title="Bryan Wilson"
            info="Secretary"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="Bimon.jpg"
            title="Bimon"
            info="Project Director"
          ></team-card>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="Wen_Xuan.png"
            title="Wen Xuan"
            info="Logistics Director"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card
            image="Yujie.jpg"
            title="Yu Jie"
            info="Publicity Director"
          ></team-card>
        </vue-grid-item>
        <vue-grid-item :class="$style.centeritem">
          <team-card image="Joel.jpg" 
          title="Joel" 
          info="Training Director" 
          ></team-card>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>

    <div :class="$style.title" ref="family" id="family">
      <span :class="$style.bigspan">The Family</span>
      <!-- <span :class="$style.smallspan">the family</span> -->
    </div>
    <div :class="$style.family">
    <img :src="getStaticImageUrl('roboclash23.png')" alt="EXCO" />
    </div>

    <home-section image="hangout.svg" flip>
      <vue-headline level="3" id="contact">Join Us!</vue-headline>
      <br />
      <div :class="$style.socialIcons">
        <a :class="$style.social" href="mailto:soar@club.sutd.edu.sg" target="_blank" rel="noopener">
          <vue-icon-email />
        </a>
        <a :class="$style.social" href="https://github.com/sutd-robotics" target="_blank" rel="noopener">
          <vue-icon-github />
        </a>
        <a
          :class="$style.social"
          href="https://www.linkedin.com/company/sutd-organisation-of-autonomous-robotics"
          target="_blank"
          rel="noopener"
        >
          <vue-icon-linkedin />
        </a>
        <a :class="$style.social" href="https://instagram.com/sutdsoar" target="_blank" rel="noopener">
          <vue-icon-instagram />
        </a>
        <a :class="$style.social" href="https://www.facebook.com/SUTDRobotics" target="_blank" rel="noopener">
          <vue-icon-facebook />
        </a>
      </div>
      <br />
    </home-section>
  </div>
</template>

<script lang="ts">
import { getStaticImageUrl } from '@/app/shared/utils/staticImages';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { type IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import ProjectCard from '@/app/home/components/ProjectCard/ProjectCard.vue';
import TeamCard from '@/app/home/components/TeamCard/TeamCard.vue';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueIconEmail from '@components/icons/VueIconEmail/VueIconEmail.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconLinkedin from '@components/icons/VueIconLinkedin/VueIconLinkedin.vue';
import VueIconInstagram from '@components/icons/VueIconInstagram/VueIconInstagram.vue';
import VueIconFacebook from '@components/icons/VueIconFacebook/VueIconFacebook.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  metaInfo: {
    title: 'SUTD Organisation of Autonomous Robotics',
    meta: [
      {
        name: 'description',
        content: 'SOAR Website',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
      },
      { name: 'image', content: 'https://soar.opensutd.org/logo-colored.svg' },

      { name: 'og:url', content: 'https://soar.opensutd.org/' },
      { name: 'og:site_name', content: 'sutdsoar' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content: 'SUTD Organisation of Autonomous Robotics',
      },
      {
        name: 'og:description',
        content: 'SOAR Website',
      },
      { name: 'og:image', content: 'https://soar.opensutd.org/logo-colored.svg' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@jamestiotio' },
      {
        name: 'twitter:title',
        content: 'SUTD Organisation of Autonomous Robotics',
      },
      { name: 'twitter:url', content: 'https://soar.opensutd.org' },
      { name: 'twitter:image', content: 'https://soar.opensutd.org/logo-colored.svg' },
      {
        name: 'twitter:description',
        content: 'SOAR Website',
      },

      { name: 'application-name', content: 'SUTD Organisation of Autonomous Robotics Website' },
      { name: 'apple-mobile-web-app-title', content: 'SUTD Organisation of Autonomous Robotics Website' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: 'https://soar.opensutd.org/icon-144x144.png' },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
    ProjectCard,
    TeamCard,
    VueGrid,
    VueGridRow,
    VueGridItem,
    VueIconEmail,
    VueIconGithub,
    VueIconLinkedin,
    VueIconInstagram,
    VueIconFacebook,
  },
  methods: {
    getStaticImageUrl,
  },
  computed: {
    disableParticles(): boolean {
      const state = this.$store.state as IState;
      return (state.app?.config?.features?.disableParticles) || false;
    },
  },
});
</script>

<style lang="scss" module>
@import '@/app/shared/design-system';

.vision {
  width: 100%;
  min-height: 35vh;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1923.617" height="584" viewBox="0 0 1923.617 584"><path id="Path_1160" data-name="Path 1160" d="M0,0S-70.5,3.529,411.016,64.927c458.3,59.788,645.477,12.188,901.414,0s-97.969,101.263,67.376,87.382S1920,0,1920,0V584H0Z" transform="translate(3.617)" fill="%23980031"/></svg>');
  background-size: cover;
  background-color: #000;

  text-align: center;

  padding: 8rem 1rem 4rem;
  margin-bottom: 6rem;

  display: flex;
  flex-flow: column;
  align-items: center;

  .bigspan {
    font-size: clamp(2rem, 8vw, 3.5rem);
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    opacity: $header-background-ghost-opacity;
    word-break: break-word;
  }
  .smallspan {
    margin-top: -1.5rem;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    z-index: 2;
  }
  p {
    font-size: 1.25rem;
    margin-top: 2rem;
    line-height: 2.2rem;
    max-width: 800px;
  }
}

@media (max-width: 650px) {
  .vision {
    margin-bottom: 10rem;
    padding-top: 4rem;
  }
}

.about {
  width: 100%;
  min-height: 20vh;
  background-size: cover;
  background-color: #000;

  text-align: left;

  padding: 2rem 1rem;

  display: flex;
  flex-flow: column;
  color: #ffffff;

  .bigspan {
    font-size: clamp(3rem, 15vw, 6rem);
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    opacity: $header-background-ghost-opacity;
    word-break: break-word;
  }
  .smallspan {
    margin-top: -1.5rem;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    z-index: 2;
  }
}

.aboutpara {
  text-align: justify;
  color: #ffffff;
  padding: 0 1rem;
}

.title {
  width: 100%;
  height: auto;
  background-size: cover;
  background-color: #000;

  text-align: center;

  padding: 4rem 1rem 1rem;
  margin-bottom: 3rem;

  display: flex;
  flex-flow: column;
  align-items: center;

  .bigspan {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    opacity: $header-background-ghost-opacity;
    word-break: break-word;
  }
  .smallspan {
    margin-top: -1.5rem;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    z-index: 2;
  }
}

.family img {
  object-fit: contain;
  width: 100%;
  max-width: 875px;
  height: auto;
  margin: 0 auto;
  border: none;
}

a {
  color: $footer-link-color;
  font-weight: $footer-link-font-weight;

  &:hover {
    color: $footer-link-hover-color;
  }
}

.centeritem {
  text-align: center;
}

.cardsize {
  max-width: 32rem;
  width: 100%;
  height: 28rem !important;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .centeritem {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
}

@media (max-width: 505px) {
  .cardsize {
    height: 36rem !important;
    max-width: 22rem;
  }
}

.socialIcons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  background: transparent;
  transition: $button-transition;
  transition-property: opacity, transform;
  color: #f5f5f5;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
  i {
    display: inline-block;
    height: 2rem;
    width: 2rem;
    color: #f5f5f5;
  }
  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: #f5f5f5 !important;
  }
  path {
    fill: #f5f5f5 !important;
  }
}
</style>
