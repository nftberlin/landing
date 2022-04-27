<template>
  <div id="hackathon">
    <Navbar v-if="!isMobile" />
    <MenuMobile v-if="isMobile" />
    <div class="gap hideMobile"></div>
    <div class="container">
      <div class="title-container pt-5 pb-5" :class="{ 'mt-5': !isMobile }">
        <h1 class="m-0 green_inactive">nftberlin</h1>
        <h2 class="m-0 white_inactive">hackathon</h2>
        <div class="specs-location d-flex align-items-start mt-4">
          <h4>26th - 28th May</h4>
          <a href="https://goo.gl/maps/eZZQap8PjCvQzVAM6" target="_blank">
            <div class="d-flex align-items-center location">
              <i class="fa-solid fa-location-dot"></i>
              <p>Alte Münze, Berlin</p>
            </div></a
          >
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="number green">1 + 1</div>
        <div class="number white mx-4">></div>
        <div class="number green">2</div>
      </div>
      <div class="mt-4 mb-4">
        <p>
          NFTBERLIN Hackathon fosters synergy and innovation by providing irl
          platform for builders and artists to learn and create together.
          <br /><br />

          Builders have set the foundations of Web3 landscape and unraveled the
          power of communities and creatives. We believe NFTs will play a major
          role in deconstructing the current status quo of centralized ownership
          and want to explore the potential of the technology through intensive
          cooperation and learning. We encourage all blockchain-agnostic devs,
          designers and digital artists to meet together in Berlin and design
          the next generation of digital assets.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import MenuMobile from "@/components/MenuMobile.vue";

export default {
  name: "Hackaton",
  components: {
    Navbar,
    Footer,
    MenuMobile,
  },
  data() {
    return {
      isMobile: "false",
    };
  },
  mounted() {
    const app = this;
    if (window.innerWidth < 992) {
      app.isMobile = true;
    } else {
      app.isMobile = false;
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        app.isMobile = false;
      } else {
        app.isMobile = true;
      }
    });
  },
};
</script>
