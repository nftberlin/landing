<template>
  <div class="home">
    <Navbar />
    <MenuMobile class="hideDesktop" />
    <Title />
    <Newsletter />
    <div id="events">
      <Talks />
    </div>

    <div id="what">
      <What />
      <Why />
    </div>
    <div class="marquee">
      <MarqueeText :repeat="25">
        <div class="banner-text">
          <p class="m-0">THE SPEAKERS - SPEAKERS -&nbsp;</p>
        </div>
      </MarqueeText>
    </div>
    <Speakers />

    <div id="sponsors">
      <div class="marquee">
        <MarqueeText :repeat="25">
          <div class="banner-text">
            <p class="m-0">OUR SPONSORS - OUR SPONSORS -&nbsp;</p>
          </div>
        </MarqueeText>
      </div>
      <Sponsors />
    </div>

    
    <div class="marquee">
      <MarqueeText :repeat="25">
        <div class="banner-text">
          <p class="m-0">OUR TEAM - OUR TEAM - OUR TEAM&nbsp;</p>
        </div>
      </MarqueeText>
    </div>

    <div id="team">
      <Team />
      <TeamSwiper />
    </div>

    <Events style="display: none" /><!-- NOT in phase 1 -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuMobile from "@/components/MenuMobile.vue";
import Title from "@/components/Title.vue";
import Newsletter from "@/components/Newsletter.vue";
import Talks from "@/components/Talks.vue";
import Team from "@/components/Team.vue";
import What from "@/components/What.vue";
import Sponsors from "@/components/Sponsors.vue";
import Speakers from "@/components/Speakers.vue";
import Events from "@/components/Events.vue";
import Footer from "@/components/Footer.vue";
import Why from "@/components/Why.vue";
import TeamSwiper from "../components/TeamSwiper.vue";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "Home",
  components: {
    Navbar,
    MenuMobile,
    Title,
    Newsletter,
    Talks,
    Team,
    What,
    Sponsors,
    Speakers,
    Events,
    Footer,
    Why,
    TeamSwiper,
    MarqueeText,
  },
};
</script>
