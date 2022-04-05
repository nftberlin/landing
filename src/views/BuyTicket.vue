<template>
  <div class="ticket">
    <Navbar />
    <MenuMobile class="hideDesktop" />
    <div class="gap hideMobile"></div>
    <div class="container pb-5" :class="{ 'pt-5': !isMobile }">
      <div>
        <div class="title-container mt-5">
          <h2 class="white">Buy your ticket</h2>
          <h1>One ticket for all days</h1>
          <h1>Wed, Friday 25th-27th</h1>
          <div class="d-flex align-items-center">
            <h2>May</h2>
            <a href="https://goo.gl/maps/eZZQap8PjCvQzVAM6" target="_blank">
              <div class="d-flex location">
                <i class="fa-solid fa-location-dot"></i>
                Alte Münze, Berlin
              </div></a
            >
          </div>
        </div>
        <div class="mt-1">
          <p>Have you bought your ticket yet?</p>
          <a href="/manage-ticket">
            <div class="btn-mint">MANAGE MY TICKETS</div>
          </a>
        </div>
      </div>
    </div>
    <div class="container mt-5 mb-5">
      <h3 class="mb-4">Select your ticket</h3>
      <div class="workingMessage pt-2 mt-5 mb-5" v-if="!loaded">
        <i class="fas fa-spinner fa-pulse"></i>
        Reading tickets from blockchain, please wait..
      </div>
      <div v-if="loaded" class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="ticket-card">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="white">EARLY BIRD</h5>
              <h5 class="green">{{ info["EARLYBIRD"].price }}€</h5>
            </div>
            <div class="mt-3 p-3">
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex align-items-start">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
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
              BUY TICKET
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="ticket-card">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="white">PUBLIC</h5>
              <h5 class="green">{{ info["FIRSTWAVE"].price }}€</h5>
            </div>
            <div class="mt-3 p-3">
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex align-items-start">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
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
              BUY TICKET
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="ticket-card">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="white">PATRON</h5>
              <h5 class="green">{{ info["VIP"].price }}€</h5>
            </div>
            <div class="mt-3 p-3">
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex align-items-start">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
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
              BUY TICKET
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="ticket-card">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="white">SPEAKER</h5>
              <h5 class="green">REEDEM</h5>
            </div>
            <div class="mt-3 p-3">
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div class="d-flex align-items-start">
                <div class="list-circle"></div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
            </div>
            <a href="/manage-ticket"><div class="btn-ticket">REEDEM</div></a>
          </div>
        </div>
      </div>
      <div class="" :class="{ gap: isMobile }"></div>
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
    };
  },
  mounted() {
    const app = this;
    app.getTicketsInfo();
    if (window.innerWidth < 992) {
      app.isMobile = true;
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        app.isMobile = false;
      } else {
        app.isMobile = true;
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
