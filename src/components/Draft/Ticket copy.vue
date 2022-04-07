<template>
  <div class="ticket">
    <Navbar />
    <MenuMobile class="hideDesktop" />
    <div class="gap hideMobile"></div>
    <div class="container pb-5" :class="{ 'mt-5': !isMobile }">
      <h1 class="buying-title mb-3 pt-3">NOW BUYING...</h1>
      <div class="workingMessage pt-2 mt-5 mb-5" v-if="!loaded">
        <i class="fas fa-spinner fa-pulse"></i>
        Reading tickets from blockchain, please wait..
      </div>
      <div class="row">
        <div
          v-if="loaded && boo_product !== undefined"
          class="col-12 col-md-12 col-lg-4"
        >
          <div class="ticket-checkout-specs">
            <div>
              <div>
                <div
                  v-if="boo_product === 'EARLYBIRD'"
                  class="checkout-ticket-title"
                >
                  bird ticket
                </div>
                <div
                  v-if="boo_product === 'FIRSTWAVE'"
                  class="checkout-ticket-title"
                >
                  public ticket
                </div>
                <div v-if="boo_product === 'VIP'" class="checkout-ticket-title">
                  public ticket
                </div>
                <div class="specs-location d-flex align-items-center mt-2">
                  <h4 class="m-0">25 -- 26 May, 2022</h4>
                  <a
                    href="https://goo.gl/maps/eZZQap8PjCvQzVAM6"
                    target="_blank"
                  >
                    <div class="d-flex align-items-center location">
                      <i class="fa-solid fa-location-dot"></i>
                      <p>Alte Münze, Berlin</p>
                    </div></a
                  >
                </div>

                <div class="d-flex align-items-center justify-content-end">
                  <div
                    v-if="isMobile"
                    class="ticket-details"
                    @click="openDetails = !openDetails"
                  >
                    details <span v-if="openDetails">+</span>
                    <span v-if="!openDetails">-</span>
                  </div>
                </div>
              </div>
              <Transition name="slide">
                <div v-if="openDetails" class="mt-2 mb-2">
                  <div v-if="boo_product === 'EARLYBIRD'">
                    <div class="ticket-text">
                      ^ 2-day admission to the unconference on May 25-26, 2022
                      at Alte Münze, Berlin
                    </div>

                    <div class="ticket-text">
                      ^ Eligible for an NFT crypto art ticket
                    </div>

                    <div class="ticket-text">^ Claimable official swag</div>

                    <div class="ticket-text">
                      ^ Admission to the NFTBERLIN After-Party
                    </div>
                  </div>
                  <div v-if="boo_product === 'FIRSTWAVE'">
                    <div class="ticket-text">
                      ^ 2-day admission to the unconference on May 25-26, 2022
                      at Alte Münze, Berlin
                    </div>

                    <div class="ticket-text">
                      ^ Eligible for an NFT crypto art ticket
                    </div>

                    <div class="ticket-text">^ Claimable official swag</div>

                    <div class="ticket-text">
                      ^ Admission to the NFTBERLIN After-Party
                    </div>
                  </div>
                  <div v-if="boo_product === 'VIP'">
                    <div class="ticket-text">
                      ^ 2-day admission to the unconference on May 25-26, 2022
                      at Alte Münze, Berlin
                    </div>
                    <div class="ticket-text">
                      ^ Eligible for an NFT crypto art ticket
                    </div>
                    <div class="ticket-text">
                      ^ Eligible for rare NFT crypto art collectibles
                    </div>
                    <div class="ticket-text">^ Claimable official swag</div>
                    <div class="ticket-text">
                      ^ Admission to the NFTBERLIN After-Party
                    </div>
                    <div class="ticket-text">
                      ^ Admission to a private event with speakers and artists
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
          <div class="ascii-text mb-3 hideMobile">
            //////////<br />
            ////////<br />
            //////<br />
            ////<br />
            //<br />
            /
          </div>
          <p class="info-ticket" v-if="info[boo_product] !== undefined">
            Ticket price is € {{ info[boo_product].price }}
          </p>
          <div class="btn-ticket">connect wallet to buy</div>
          <a href="https://metamask.io" target="_blank">
            <div class="info-wallet mt-3">What is a wallet?</div></a
          >
        </div>
        <div class="col-12 col-md-12 col-lg-5 offset-lg-3">
          <div class="mt-5">
            <div
              v-if="
                info[boo_product] !== undefined &&
                info[boo_product].active === false
              "
            >
              <h5>
                The sale of this ticket is not active at the moment, please
                retry later.
              </h5>
            </div>
            <!-- <div v-if="!isSelected && loaded" class="ticket-select"> -->

            <div
              v-if="
                info[boo_product] !== undefined &&
                info[boo_product].active === true
              "
            >
              <div v-if="boo_product === 'EARLYBIRD'">
                <BuyButton
                  :network="network"
                  boo_product="EARLYBIRD"
                  :boo_endpoint="boo_endpoint"
                  :infuraId="infuraId"
                  :processor="processor"
                  v-on:selected="isSelected = true"
                />
              </div>
              <div v-if="boo_product === 'FIRSTWAVE'">
                <BuyButton
                  :network="network"
                  boo_product="FIRSTWAVE"
                  :boo_endpoint="boo_endpoint"
                  :infuraId="infuraId"
                  :processor="processor"
                  v-on:selected="isSelected = true"
                />
              </div>
              <div v-if="boo_product === 'VIP'">
                <BuyButton
                  :network="network"
                  boo_product="VIP"
                  :boo_endpoint="boo_endpoint"
                  :infuraId="infuraId"
                  :processor="processor"
                  v-on:selected="isSelected = true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="" :class="{ gap: isMobile }"></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuMobile from "@/components/MenuMobile.vue";
import BuyButton from "@/components/BuyButton.vue";
import axios from "axios";

export default {
  name: "buy",
  components: {
    Navbar,
    MenuMobile,
    BuyButton,
  },
  data() {
    return {
      isMobile: false,
      openDetails: false,
      open: false,
      loaded: false,
      network: "ethereum",
      boo_product: "",
      boo_endpoint: process.env.VUE_APP_API_URL,
      infuraId: "57d9ea9ca92a4449933c2b7d7145187d",
      processor: "stripe",
      debug: true,
      isSelected: false,
      info: {},
    };
  },
  mounted() {
    const app = this;
    app.getTicketsInfo();

    if (window.location.href.indexOf("plan") !== -1) {
      let parameters = window.location.href.split("&");
      for (let k in parameters) {
        if (parameters[k].split("=")[0] === "plan") {
          console.log("FOUND PLAN:" + parameters[k].split("=")[1]);
          app.boo_product = parameters[k].split("=")[1];
        }
      }
    }

    if (window.innerWidth < 992) {
      app.isMobile = true;
      app.openDetails = false;
    } else {
      app.openDetails = true;
      app.isMobile = false;
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        app.isMobile = false;
        app.openDetails = true;
      } else {
        app.isMobile = true;
        app.openDetails = false;
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
      if (app.$route.params.id === "earlybird") {
        app.boo_product = "EARLYBIRD";
        console.log("slug", app.$route.params.id);
      }
      if (app.$route.params.id === "public") {
        app.boo_product = "FIRSTWAVE";
        console.log("slug", app.$route.params.id);
      }
      if (app.$route.params.id === "patron") {
        app.boo_product = "VIP";
        console.log("slug", app.$route.params.id);
      }
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
