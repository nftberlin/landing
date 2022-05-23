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

    <div class="afterparty">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="pad-x">
              <div class="what-title">
                <h1>
                  NFTBERLIN Afterparty x Mempool Club:<br /><br />
                  NFTBonding Curve & Discipline
                </h1>
              </div>

              <div class="what-text">
                <p>
                  NFTBERLIN x Mempool Club present NFTBonding Curve and
                  Discipline, a crypto afterparty night you'll never forget at
                  the legendary KitKat Club. Get ready for Berlin's sick DJ
                  lineup and performances. <br /><br />Dress code: Black or
                  White BDSM, (if you can not find the right outfit, remember
                  that clothing is optional only).
                </p>
                <p>
                  <span>Admission:</span> NFTBERLIN unconference ticket holders
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 hideIpad">
            <div class="img-art"></div>
          </div>
          <div class="col-lg-6 hideDesktop" style="padding:0">
            <img src="../assets/placeholder.jpg" draggable="false" />
          </div>
        </div>
      </div>
    </div>

    <div id="partners">
      <div class="marquee-green">
        <MarqueeText :repeat="25">
          <div class="banner-text">
            <p class="m-0">OUR PARTNERS - OUR PARTNERS -&nbsp;</p>
          </div>
        </MarqueeText>
      </div>
      <Partners />
    </div>

    <div class="gestalt">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 hideIpad">
            
              <video width="100%" height="100%" controls loop mute autoplay>
                <source src="../media/afterparty.mp4" type="video/mp4" />
                <source src="../media/afterparty.ogg" type="video/ogg" />
                <source src="../media/afterparty.webm" type="video/webm" />
              </video>
            
          </div>
          <div class="col-lg-6 hideDesktop">
            <video width="100%" height="100%" controls loop mute autoplay>
              <source src="../media/afterparty.mp4" type="video/mp4" />
              <source src="../media/afterparty.ogg" type="video/ogg" />
              <source src="../media/afterparty.webm" type="video/webm" />
            </video>
          </div>

          <div class="col-lg-6">
            <div class="pad-x">
              <div class="what-title">
                <h1>
                  NFTBERLIN x BLNFT:<br /><br />
                  The New Gestalt: The Whole Is Greater than the Sum of Its
                  Parts.
                </h1>
              </div>

              <div class="what-text">
                <p>
                  The Whole Is Greater than the Sum of Its Parts", exclusive NFT
                  collections and events<br />24 May - 3 June at POP KUDAMM.
                </p>
                <p>
                  Before, during and after NFTBERLIN & BLNFT will hijack West
                  Berlin and present digital art at POP Ku'Damm in a series of
                  side events. Each of these events will have a different theme.
                  Look forward to exciting surprises, cuting-edge art, fun and
                  awe! Do not miss this!
                </p>
                <p><span>Admission:</span> Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
import Partners from "@/components/Partners.vue";
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
    Partners,
    Speakers,
    Events,
    Footer,
    Why,
    TeamSwiper,
    MarqueeText,
  },
};
</script>
