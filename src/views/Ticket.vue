<template>
  <div class="ticket">
    <Navbar />
    <MenuMobile class="hideDesktop" />
    <div class="gap hideMobile"></div>
    <div class="container" :class="{ 'mt-5': !isMobile }">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-7">
          <div class="title-container mt-5">
            <h2>Buy your ticket</h2>
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
          <div class="mt-5">
            <p>Have you bought your ticket yet?</p>
            <a href="/manage-ticket">
              <div class="btn-mint">MANAGE MY TICKET</div>
            </a>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-5">
          <div class="mt-5">
            <div v-if="boo_product !== ''">
              <h5>Price</h5>
              <h4>{{ tiers[boo_product] }}€</h4>
            </div>
            <div v-if="!isSelected && loaded" class="ticket-select">
              <p>Select your ticket</p>
              <div class="dropdown">
                <div class="dropdown__face" @click="open = !open">
                  <div class="dropdown__text">
                    <div v-if="boo_product === ''">Select Ticket</div>
                    <div v-if="boo_product !== ''">{{ boo_product }}</div>
                    <i v-if="!open" class="ms-3 fa-solid fa-caret-right"></i>
                    <i v-if="open" class="ms-3 fa-solid fa-caret-down"></i>
                  </div>
                </div>
                <Transition
                  name="custom-fade"
                  enter-active-class="animate__animated animate__fadeInDown"
                  leave-active-class="animate__animated animate__fadeOutUp"
                >
                  <ul v-show="open" class="dropdown__items">
                    <li
                      @click="
                        boo_product = 'EARLYBIRD';
                        open = false;
                      "
                      v-if="
                        info['EARLYBIRD'] !== undefined &&
                        info['EARLYBIRD'].minted < info['EARLYBIRD'].limit
                      "
                    >
                      EARLYBIRD ({{ info["EARLYBIRD"].minted }} /
                      {{ info["EARLYBIRD"].limit }})
                    </li>
                    <li
                      v-if="
                        info['EARLYBIRD'] !== undefined &&
                        info['EARLYBIRD'].minted === info['EARLYBIRD'].limit
                      "
                    >
                      EARLYBIRD ({{ info["EARLYBIRD"].minted }} /
                      {{ info["EARLYBIRD"].limit }})
                    </li>
                    <li
                      @click="
                        boo_product = 'FIRSTWAVE';
                        open = false;
                      "
                      v-if="
                        info['FIRSTWAVE'] !== undefined &&
                        info['FIRSTWAVE'].minted < info['FIRSTWAVE'].limit
                      "
                    >
                      FIRSTWAVE ({{ info["FIRSTWAVE"].minted }} /
                      {{ info["FIRSTWAVE"].limit }})
                    </li>
                    <li
                      v-if="
                        info['FIRSTWAVE'] !== undefined &&
                        info['FIRSTWAVE'].minted === info['FIRSTWAVE'].limit
                      "
                    >
                      FIRSTWAVE ({{ info["FIRSTWAVE"].minted }} /
                      {{ info["FIRSTWAVE"].limit }})
                    </li>
                    <li
                      @click="
                        boo_product = 'VIP';
                        open = false;
                      "
                      v-if="
                        info['VIP'] !== undefined &&
                        info['VIP'].minted < info['VIP'].limit
                      "
                    >
                      VIP ({{ info["VIP"].minted }} / {{ info["VIP"].limit }})
                    </li>
                    <li
                      v-if="
                        info['VIP'] !== undefined &&
                        info['VIP'].minted === info['VIP'].limit
                      "
                    >
                      VIP ({{ info["VIP"].minted }} / {{ info["VIP"].limit }})
                    </li>
                  </ul>
                </Transition>
              </div>
            </div>
            <div class="workingMessage pt-2 mt-5 mb-5" v-if="!loaded">
              <i class="fas fa-spinner fa-pulse"></i>
              Reading tickets from blockchain, please wait..
            </div>
            <div v-if="boo_product === 'EARLYBIRD'">
              <BuyButton
                :stripe_key="stripe_key"
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
                :stripe_key="stripe_key"
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
                :stripe_key="stripe_key"
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
    <div class="" :class="{ gap: isMobile }"></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuMobile from "@/components/MenuMobile.vue";
import BuyButton from "@/components/BuyButton.vue";
import axios from "axios";

export default {
  name: "ticket",
  components: {
    Navbar,
    MenuMobile,
    BuyButton,
  },
  data() {
    return {
      tiers: {
        EARLYBIRD: 139,
        FIRSTWAVE: 349,
        VIP: 1119,
      },
      isMobile: false,
      open: false,
      loaded: false,
      stripe_key: "pk_test_hfFnYFjLsrdKfFw7IPEF6TzR",
      network: "rinkeby",
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
    if (window.innerWidth < 992) {
      app.isMobile = true;
    }
    if (window.location.href.indexOf("plan") !== -1) {
      let parameters = window.location.href.split("&");
      for (let k in parameters) {
        if (parameters[k].split("=")[0] === "plan") {
          console.log("FOUND PLAN:" + parameters[k].split("=")[1]);
          app.boo_product = parameters[k].split("=")[1];
        }
      }
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
</style>
