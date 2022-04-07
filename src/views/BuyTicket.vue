<template>
  <div class="ticket">
    <Navbar />
    <MenuMobile class="hideDesktop" />
    <div class="gap hideMobile"></div>
    <div class="container mb-5" :class="{ 'pt-5': !isMobile }">
      <div>
        <div class="title-container" :class="{ 'mt-5': !isMobile }">
          <h1 class="m-0">2-DAY</h1>
          <h2 class="m-0">ticket</h2>
          <h3 class="m-0">nftberlin</h3>
          <h3 class="m-0">uncoference</h3>
          <div class="specs-location d-flex align-items-start mt-4">
            <h4>25 -- 26 May, 2022</h4>
            <a href="https://goo.gl/maps/eZZQap8PjCvQzVAM6" target="_blank">
              <div class="d-flex align-items-center location">
                <i class="fa-solid fa-location-dot"></i>
                <p>Alte Münze, Berlin</p>
              </div></a
            >
          </div>
        </div>
        <div class="cta-section mt-5">
          <div class="row justify-content-center align-items-center">
            <div class="col-12 col-md-2 col-lg-2">
              <div class="cat hideMobile">
                <img src="../assets/cat.png" alt="" />
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-4">
              <div class="cta-text">
                money can’t buy happiness but it can buy nftberlin tickets
              </div>
            </div>
            <div class="col-12 col-md-2 col-lg-2">
              <div class="cat hideMobile">
                <img src="../assets/cat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-5">
      <div class="workingMessage pt-2 mt-5 mb-5" v-if="!loaded">
        <i class="fas fa-spinner fa-pulse"></i>
        Loading ticket informations, please wait..
      </div>
      <div v-if="loaded" class="row">
        <div class="col-12 col-md-12 col-lg-4">
          <div class="ticket-card">
            <div>
              <div>
                <div :class="{ 'd-flex': isMobile }">
                  <div
                    class="ticket-title"
                    :class="{
                      green: info['EARLYBIRD'].active === true,
                      green_inactive: info['EARLYBIRD'].active === false,
                    }"
                  >
                    Bird / 2-day admission/
                  </div>
                  <div class="ticket-title red">-60% discount LFG!!!</div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div
                    class="ticket-price"
                    :class="{
                      green: info['EARLYBIRD'].active === true,
                      green_inactive: info['EARLYBIRD'].active === false,
                    }"
                  >
                    {{ info["EARLYBIRD"].price }}€
                  </div>
                  <div
                    v-if="isMobile"
                    class="ticket-details"
                    @click="openDetails1 = !openDetails1"
                  >
                    details <span v-if="openDetails1">+</span>
                    <span v-if="!openDetails1">-</span>
                  </div>
                </div>
              </div>
              <Transition name="slide">
                <div
                  v-if="openDetails1"
                  class="mt-3 p-3"
                  :class="{
                    white: info['EARLYBIRD'].active === true,
                    white_inactive: info['EARLYBIRD'].active === false,
                  }"
                >
                  <div class="ticket-text">
                    ^ 2-day admission to the unconference on May 25-26, 2022 at
                    Alte Münze, Berlin
                  </div>

                  <div class="ticket-text">
                    ^ Eligible for an NFT crypto art ticket
                  </div>

                  <div class="ticket-text">^ Claimable official swag</div>

                  <div class="ticket-text">
                    ^ Admission to the NFTBERLIN After-Party
                  </div>
                </div>
              </Transition>
            </div>
            <a href="/ticket/earlybird"
              ><div
                v-if="
                  info['EARLYBIRD'] !== undefined &&
                  info['EARLYBIRD'].minted < info['EARLYBIRD'].limit &&
                  info['EARLYBIRD'].active === true
                "
                class="btn-ticket"
              >
                BUY TICKET
              </div></a
            >
            <div
              v-if="
                info['EARLYBIRD'] !== undefined &&
                (info['EARLYBIRD'].minted === info['EARLYBIRD'].limit ||
                  info['EARLYBIRD'].active === false)
              "
              class="btn-ticket btn-disabled"
            >
              COMING SOON
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-4" :class="{ 'mt-5': isMobile }">
          <div class="ticket-card">
            <div>
              <div
                :class="{
                  green: info['FIRSTWAVE'].active === true,
                  green_inactive: info['FIRSTWAVE'].active === false,
                }"
              >
                <div class="ticket-title">Public / 2-day admission/</div>
                <div class="d-flex align-items-center justify-content-between">
                  <div
                    class="ticket-price"
                    :class="{
                      green: info['FIRSTWAVE'].active === true,
                      green_inactive: info['FIRSTWAVE'].active === false,
                    }"
                  >
                    {{ info["FIRSTWAVE"].price }}€
                  </div>
                  <div
                    v-if="isMobile"
                    class="ticket-details"
                    @click="openDetails2 = !openDetails2"
                  >
                    details <span v-if="openDetails2">+</span>
                    <span v-if="!openDetails2">-</span>
                  </div>
                </div>
              </div>

              <Transition name="slide">
                <div
                  v-if="openDetails2"
                  class="mt-3 p-3"
                  :class="{
                    white: info['FIRSTWAVE'].active === true,
                    white_inactive: info['FIRSTWAVE'].active === false,
                  }"
                >
                  <div class="ticket-text">
                    ^ 2-day admission to the unconference on May 25-26, 2022 at
                    Alte Münze, Berlin
                  </div>

                  <div class="ticket-text">
                    ^ Eligible for an NFT crypto art ticket
                  </div>

                  <div class="ticket-text">^ Claimable official swag</div>

                  <div class="ticket-text">
                    ^ Admission to the NFTBERLIN After-Party
                  </div>
                </div>
              </Transition>
            </div>
            <a href="/ticket/public"
              ><div
                v-if="
                  info['FIRSTWAVE'] !== undefined &&
                  info['FIRSTWAVE'].minted < info['FIRSTWAVE'].limit &&
                  info['FIRSTWAVE'].active === true
                "
                class="btn-ticket"
              >
                BUY TICKET
              </div></a
            >
            <div
              v-if="
                info['FIRSTWAVE'] !== undefined &&
                (info['FIRSTWAVE'].minted === info['FIRSTWAVE'].limit ||
                  info['FIRSTWAVE'].active === false)
              "
              class="btn-ticket btn-disabled"
            >
              COOMING SOON
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-4" :class="{ 'mt-5': isMobile }">
          <div class="ticket-card">
            <div>
              <div
                :class="{
                  green: info['VIP'].active === true,
                  green_inactive: info['VIP'].active === false,
                }"
              >
                <div class="d-flex flex-row flex-md-column flex-lg-column">
                  <div class="ticket-title">Patron / 2-day admission</div>
                  <div class="ticket-title" :class="{ 'mx-2': isMobile }">
                    + Private event
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div
                    class="ticket-price"
                    :class="{
                      green: info['VIP'].active === true,
                      green_inactive: info['VIP'].active === false,
                    }"
                  >
                    {{ info["VIP"].price }}€
                  </div>
                  <div
                    v-if="isMobile"
                    class="ticket-details"
                    @click="openDetails3 = !openDetails3"
                  >
                    details <span v-if="openDetails3">+</span>
                    <span v-if="!openDetails3">-</span>
                  </div>
                </div>
              </div>
              <Transition name="slide">
                <div
                  v-if="openDetails3"
                  class="mt-3 p-3"
                  :class="{
                    white: info['VIP'].active === true,
                    white_inactive: info['VIP'].active === false,
                  }"
                >
                  <div class="ticket-text">
                    ^ 2-day admission to the unconference on May 25-26, 2022 at
                    Alte Münze, Berlin
                  </div>
                  <div class="ticket-text">
                    ^ Eligible for an NFT crypto art ticket
                  </div>
                  <div class="ticket-text">
                    ^ Eligible for rare NFT crypto art collectibles
                  </div>
                  <div class="ticket-text">
                    ^ Admission to the NFTBERLIN After-Party
                  </div>
                  <div class="ticket-text">
                    ^ Admission to a private event with speakers and artists
                  </div>
                </div>
              </Transition>
            </div>
            <a href="/ticket/patron"
              ><div
                v-if="
                  info['VIP'] !== undefined &&
                  info['VIP'].minted < info['VIP'].limit &&
                  info['VIP'].active === true
                "
                class="btn-ticket"
              >
                BUY TICKET
              </div></a
            >
            <div
              v-if="
                info['VIP'] !== undefined &&
                (info['VIP'].minted === info['VIP'].limit ||
                  info['VIP'].active === false)
              "
              class="btn-ticket btn-disabled"
            >
              COMING SOON
            </div>
          </div>
        </div>
      </div>
      <div class="gap"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuMobile from "@/components/MenuMobile.vue";
import axios from "axios";

export default {
  name: "buy",
  components: {
    Navbar,
    MenuMobile,
  },
  data() {
    return {
      isMobile: false,
      open: false,
      loaded: false,
      info: {},
      openDetails1: false,
      openDetails2: false,
      openDetails3: false,
    };
  },
  mounted() {
    const app = this;
    app.getTicketsInfo();
    if (window.innerWidth < 992) {
      app.isMobile = true;
      app.openDetails1 = false;
      app.openDetails2 = false;
      app.openDetails3 = false;
    } else {
      app.openDetails1 = true;
      app.openDetails2 = true;
      app.openDetails3 = true;
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        app.isMobile = false;
        app.openDetails1 = true;
        app.openDetails2 = true;
        app.openDetails3 = true;
      } else {
        app.isMobile = true;
        app.openDetails1 = false;
        app.openDetails2 = false;
        app.openDetails3 = false;
      }
    });
  },
  methods: {
    async getTicketsInfo() {
      const app = this;
      const info = await axios.get(
        process.env.VUE_APP_API_URL + "/nfts/minted"
      );
      app.info = info.data.minted;
      app.loaded = true;
      console.log(app.info);
      console.log("FIRSTWAVE", app.info["FIRSTWAVE"].active);
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.animate__animated.animate__fadeInDown {
  animation-duration: 0.3s;
}

.animate__animated.animate__fadeOutUp {
  animation-duration: 0.3s;
}
a {
  text-decoration: none !important;
}

@media (min-width: 1400px) {
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1440px;
  }
}
</style>
