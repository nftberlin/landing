<template>
  <div class="ticket">
    <Navbar v-if="!isMobile" />
    <MenuMobile v-if="isMobile" />
    <div class="gap hideMobile"></div>
    <div
      class="container ipad-margin-top pb-5 mobile-mb-10"
      :class="{ 'mt-5': !isMobile }"
    >
      <h1
        v-if="!processCompleted"
        class="buying-title"
        :class="{ 'mb-3 pt-3': !isMobile }"
      >
        NOW BUYING...
      </h1>
      <h1
        v-if="processCompleted"
        class="buying-title"
        :class="{ 'mb-3 pt-3': !isMobile }"
      >
        SUCCESS!
      </h1>
      <div
        class="workingMessage d-flex flex-column flex-md-row flex-lg-row align-items-center pt-2 mt-5 mb-5"
        v-if="!loaded"
      >
        <i class="fas fa-spinner fa-pulse"></i>
        Loading tickets, please wait..
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
                  patron ticket
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
              </div>
              <div
                v-if="
                  (!isMobile && (account || !account)) || (isMobile && !account)
                "
                class="mt-2 mb-2"
              >
                <div v-if="boo_product === 'EARLYBIRD'">
                  <div class="ticket-text">
                    ^ 2-day admission to the unconference on May 25-26, 2022 at
                    Alte Münze, Berlin
                  </div>
                  <div class="ticket-text">
                    ^ Eligible for an NFT crypto art ticket
                  </div>
                  <div class="ticket-text">
                    ^ Admission to the NFTBERLIN After-Party
                  </div>
                </div>
                <div v-if="boo_product === 'FIRSTWAVE'">
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
                <div v-if="boo_product === 'VIP'">
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
                  <div class="ticket-text">^ Claimable official swag</div>
                  <div class="ticket-text">
                    ^ Admission to the NFTBERLIN After-Party
                  </div>
                  <div class="ticket-text">
                    ^ Admission to a private event with speakers and artists
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="
                (!isMobile && (account || !account)) || (isMobile && !account)
              "
              class="ascii-text mb-3"
            >
              //////////<br />
              ////////<br />
              //////<br />
              ////<br />
              //<br />
              /
            </div>
          </div>

          <p
            class="info-ticket"
            v-if="
              (info[boo_product] !== undefined &&
                !isMobile &&
                (account || !account)) ||
              (isMobile && !account)
            "
          >
            Ticket price is € {{ info[boo_product].price }}
          </p>
          <div v-if="!account" @click="connect()" class="btn-ticket">
            connect wallet to buy
          </div>
          <div v-if="!isMobile && account" class="btn-connected">
            connected: {{ account.substr(0, 8) + "..." + account.substr(-8) }}
          </div>
          <a v-if="!account" href="https://metamask.io" target="_blank">
            <div class="info-wallet mt-3">What is a wallet?</div></a
          >
        </div>
        <div class="col-12 col-md-12 col-lg-5 offset-lg-3">
          <div :class="{ 'mt-5': !isMobile }">
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

            <div class="buy-button ipad-margin-top">
              <div v-if="account">
                <div class="mt-4 mb-4">
                  <h5 class="mb-2">Attendee details:</h5>
                  <!-- <p class="m-0">
                    You will receive the "{{ boo_product }}" nft ticket to:
                   </p> -->
                  <p class="m-0">
                    The ticket will be sent directly to following wallet
                    address:
                  </p>
                  <div class="account">
                    {{ account.substr(0, 8) + "..." + account.substr(-8) }}
                  </div>
                </div>

                <div
                  v-if="!isWorking && !paymentCompleted && !newsletterAccepted"
                  class="mt-5 newsletter-form"
                >
                  <p>
                    You will need to generate the QR code to enter an event.
                    Enter your email address below to be notified.
                  </p>
                  <input
                    type="text"
                    placeholder="Your email"
                    style="width: 100%"
                    v-model="email_address"
                  />
                  <label class="form-control">
                    <input
                      type="checkbox"
                      name="checkbox"
                      @click="checkedNewsletter = !checkedNewsletter"
                    />
                    Add me to the email list and notify me
                  </label>
                  <div
                    v-if="checkedNewsletter && email_address.length > 0"
                    class="btn-mint mt-4"
                    @click="askPaymentDetails()"
                  >
                    CONFIRM EMAIL & PAY
                  </div>
                </div>

                <div v-if="debug">
                  paying with <b>{{ processor }}</b>
                  <span v-if="processor === 'blockchain'">
                    ({{ network }})</span
                  >
                  for it <br />using <i>{{ boo_endpoint }}</i> as payment
                  processor.
                  <div v-if="user !== undefined">
                    Using {{ user }} as predefined user for payment.
                  </div>
                  <hr />
                  <div v-if="Object.keys(payment).length > 0">
                    {{ payment }}
                    <hr />
                  </div>
                </div>

                <div v-if="!processCompleted">
                  <!-- Blockchain payment -->
                  <div
                    v-if="
                      !isWorking &&
                      Object.keys(payment).length > 0 &&
                      processor === 'blockchain'
                    "
                  >
                    Now send {{ payment.amount }} to<br />
                    {{ payment.payment_intent }}<br /><br />
                    <div class="btn-mint" @click="payWithMetamask()">
                      Pay with Metamask
                    </div>
                  </div>
                  <!-- Stripe payment -->
                  <div
                    v-show="
                      Object.keys(payment).length > 0 &&
                      processor === 'stripe' &&
                      newsletterAccepted 
                    "
                  >
                    <div id="payment-element"></div>
                    <br />
                    <div
                      v-if="!isWorking && paymentCompleted"
                      class="btn-mint"
                      @click="payWithStripe()"
                    >
                      BUY NFTBERLIN TICKET
                    </div>
                    <div
                      v-if="!isWorking && !paymentCompleted"
                      class="btn-mint-disabled"
                    >
                      DETAILS NOT COMPLETED
                    </div>
                  </div>
                  <div
                    class="workingMessage d-flex flex-column flex-md-row flex-lg-row align-items-center pt-2 mt-5 mb-5"
                    v-if="isWorking"
                  >
                    <i class="fas fa-spinner fa-pulse"></i>
                    {{ workingMessage }}
                  </div>
                </div>
                <div
                  class="workingMessage pt-2 mt-5 mb-5"
                  v-if="processErrored"
                >
                  {{ workingMessage }}
                </div>
                <div :class="{ 'mt-5': !isMobile }" v-if="processCompleted">
                  <div>
                    <div
                      class="success-section d-flex align-items-center justify-content-around"
                    >
                      <div class="horse">
                        <img src="../assets/horse.png" alt="" />
                      </div>
                      <div class="cta-text">
                        success!<br /><br />
                        see you soon in berlin
                      </div>
                    </div>
                    <div
                      :class="{ 'mt-4 mb-4': !isMobile, 'mt-2 mb-2': isMobile }"
                      v-if="txid"
                    >
                      <h5 class="m-0">Check transaction status at:</h5>
                      <a
                        :href="
                          'https://polygonscan.com/tx/' + txid.transactionHash
                        "
                        target="_blank"
                      >
                        <h5
                          class="m-0"
                          v-if="txid.transactionHash !== undefined"
                        >
                          {{
                            txid.transactionHash.substr(0, 8) +
                            "..." +
                            txid.transactionHash.substr(-8)
                          }}
                        </h5>
                      </a>
                      <a
                        :href="'https://polygonscan.com/tx/' + txid"
                        target="_blank"
                      >
                        <h5 v-if="txid.transactionHash === undefined">
                          {{ txid.substr(0, 8) + "..." + txid.substr(-8) }}
                        </h5>
                      </a>
                    </div>
                    <!-- <a href=""><div class="btn-ticket">MANAGE MY TICKETS</div></a> -->
                    <!-- <a href="/manage-ticket"
                      ><div class="btn-ticket">MANAGE MY TICKETS</div></a
                    > -->
                    <p class="mt-1 mb-1">
                      If you couldn’t find your ticket on opensea, try the
                      hidden item tab.
                    </p>
                    <a
                      href="https://opensea.io/collection/nftberlintickets"
                      target="_blank"
                      ><div class="btn-ticket">VIEW TICKET ON OPENSEA</div></a
                    >
                    <p></p>
                  </div>
                </div>
              </div>
              <div v-if="!account && loaded" :class="{ 'mt-5': !isMobile }">
                <input style="display: none" v-model="amount" />
                <p class="cta">
                  To purchase your ticket you need <br />
                  to connect your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="" :class="{ gap: isMobile }"></div> -->
    <div v-if="isMobile && loaded && !isWorking" class="btn-back">
      <a href="/ticket"
        ><div class="btn-mint square">
          <i class="fa-solid fa-arrow-left"></i></div
      ></a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuMobile from "@/components/MenuMobile.vue";
import axios from "axios";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
const Stripe = window.Stripe;

export default {
  name: "buy",
  components: {
    Navbar,
    MenuMobile,
  },
  data() {
    return {
      isMobile: false,
      paymentCompleted: false,
      hideDetailsTicket: false,
      newsletterAccepted: false,
      checkedNewsletter: false,
      email_address: "",
      open: false,
      loaded: false,
      network: "ethereum",
      boo_product: "",
      boo_endpoint: process.env.VUE_APP_API_URL,
      infuraId: "57d9ea9ca92a4449933c2b7d7145187d",
      processor: "stripe",
      debug: false,
      isSelected: false,
      info: {},
      axios: axios,
      stripe: {},
      account: "",
      txid: "",
      balance: 0,
      amount: 1,
      total: 0,
      isWorking: false,
      processCompleted: false,
      processErrored: false,
      web3: "",
      workingMessage: "",
      payment: {},
      stripeElements: {},
      networks: {
        ethereum: 1,
        rinkeby: 4,
        polygon: 137,
        mumbai: 80001,
        ganache: 5777,
      },
    };
  },
  async mounted() {
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
    let stripe_boo;
    while (stripe_boo === undefined) {
      console.log("ASKING FOR STRIPE KEY");
      try {
        stripe_boo = await app.axios.get(app.boo_endpoint + "/stripe");
        if (stripe_boo.data.stripe_pubkey !== undefined) {
          app.stripe = Stripe(stripe_boo.data.stripe_pubkey);
          if (app.debug) {
            console.log(
              "STRIPE LOADED WITH KEY:",
              stripe_boo.data.stripe_pubkey
            );
          }
        }
      } catch (e) {
        console.log("API ERRORED, RETRY");
      }
    }

    // Check if exists stripe callback
    if (
      window.location.href.indexOf("?uuid") !== -1 &&
      window.location.href.indexOf("payment_intent_client_secret") !== -1
    ) {
      let parameters = window.location.href.split("?")[1].split("&");
      for (let k in parameters) {
        if (parameters[k].split("=")[0] === "uuid") {
          console.log("FOUND UUID:" + parameters[k].split("=")[1]);
          app.$emit("selected", true);
          app.getPayment(parameters[k].split("=")[1]);
        }
        if (parameters[k].split("=")[0] === "account") {
          console.log("FOUND ACCOUNT:" + parameters[k].split("=")[1]);
          app.account = parameters[k].split("=")[1];
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
    async connect() {
      const app = this;
      let providerOptions = {};
      if (app.infuraId !== undefined) {
        providerOptions = {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: app.infuraId,
            },
          },
        };
      }
      // Instantiating Web3Modal
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions: providerOptions,
      });
      const provider = await web3Modal.connect();
      app.web3 = await new Web3(provider);
      const accounts = await app.web3.eth.getAccounts();
      if (accounts.length > 0) {
        app.account = accounts[0];
        // app.askPaymentDetails();
      }
    },

    async askPaymentDetails() {
      const app = this;
      app.newsletterAccepted = true;
      if (!app.isWorking) {
        this.$emit("selected", true);
        app.isWorking = true;
        app.workingMessage = "Asking for payment details, please wait..";
        try {
          let processor = app.processor;
          if (processor === "blockchain") {
            processor = app.network;
          }
          const payment_details = await app.axios.post(
            app.boo_endpoint + "/payments",
            {
              processor: processor,
              amount: app.amount,
              identifier: app.boo_product,
              address: app.account,
              newsletter: {
                name: "-",
                surname: "-",
                email: app.email_address,
              },
            }
          );
          if (app.debug) {
            console.log("PAYMENT DETAILS", payment_details.data);
          }
          console.log("Payment response is:", payment_details.data);
          if (!payment_details.data.error) {
            app.payment = payment_details.data.payment;
            // Automatically init Stripe Payment
            if (
              app.processor === "stripe" &&
              app.payment.stripePayment !== undefined
            ) {
              app.isWorking = false;
              app.workingMessage = "";
              app.initStripeElements();
            }
          } else if (payment_details.data.payment !== undefined) {
            app.workingMessage = "Payment exists yet, restoring flow..";
            app.payment = payment_details.data.payment;
            const check = await app.axios.post(
              app.boo_endpoint + "/payments/check",
              {
                payment_id: payment_details.data.payment.paymentId,
              }
            );
            console.log("Checked payment response is:", check.data);
            if (check.data.error === true) {
              app.isWorking = false;
              app.workingMessage = "";
              app.initStripeElements();
            } else {
              setTimeout(function () {
                app.isWorking = false;
                app.workingMessage = "";
                app.payment = payment_details.data.payment;
                app.checkPayment();
              }, 4000);
            }
          } else {
            app.isWorking = false;
            app.account = "";
            app.workingMessage = "";
            alert(payment_details.data.message);
          }
        } catch (e) {
          if (app.debug) {
            console.log("REQUEST PAYMENT FAILED");
            console.log(e.message);
          }
          app.isWorking = false;
          app.workingMessage = "";
        }
      }
    },
    async getPayment(uuid) {
      const app = this;
      if (uuid !== undefined) {
        if (app.debug) {
          console.log("GETTING PAYMENT: " + uuid);
        }
        const payment = await app.axios.get(
          app.boo_endpoint + "/payments/" + uuid
        );
        if (app.debug) {
          console.log(payment.data);
        }
        if (payment.data.error === false) {
          app.payment = payment.data.payment;
          app.account = app.payment.purchase_address;
          app.checkPayment();
        } else {
          app.isWorking = false;
          app.processErrored = true;
          app.workingMessage = payment.data.message;
        }
      }
    },
    async initStripeElements() {
      const app = this;
      const appearance = {
        theme: "night",
      };
      app.stripeElements = app.stripe.elements({
        clientSecret: app.payment.stripePayment.client_secret,
        appearance,
      });
      const paymentElement = app.stripeElements.create("payment");
      paymentElement.mount("#payment-element");
      paymentElement.on("change", function (event) {
        if (event.complete) {
          app.paymentCompleted = true;
        }
      });
    },
    async payWithMetamask() {
      // const app = this;
      // TODO: Process metamask payment
    },
    async payWithStripe() {
      const app = this;
      if (!app.isWorking) {
        app.isWorking = true;
        app.workingMessage = "Processing payment..";
        const { error } = await app.stripe.confirmPayment({
          elements: app.stripeElements,
          confirmParams: {
            return_url:
              window.location.href +
              "?uuid=" +
              app.payment.paymentId +
              "&plan=" +
              app.boo_product +
              "&account=" +
              app.account,
          },
        });
        if (error && app.debug) {
          console.log("STRIPE ERROR");
          console.log(error);
        }
        app.isWorking = false;
        if (
          error.payment_intent !== undefined &&
          error.payment_intent.status === "succeeded"
        ) {
          app.checkPayment();
        } else {
          alert("Stripe payment failed, please retry!");
        }
      }
    },
    async checkPayment() {
      const app = this;
      if (!app.isWorking) {
        app.isWorking = true;
        app.workingMessage = "Checking payment status..";
        const checkInterval = setInterval(async function () {
          try {
            const check = await app.axios.post(
              app.boo_endpoint + "/payments/check",
              {
                payment_id: app.payment.paymentId,
              }
            );
            if (app.debug) {
              console.log(check.data);
            }
            if (!check.data.error) {
              if (app.debug) {
                console.log("PAYMENT WAS PAID, GOING TO MINT FUNCTION");
              }
              clearInterval(checkInterval);
              app.isWorking = false;
              app.workingMessage = "";
              app.mintNft();
            } else {
              app.isWorking = false;
              app.processErrored = true;
              app.workingMessage = check.data.message;
            }
          } catch (e) {
            if (app.debug) {
              console.log("PAYMENT CHECK FAILED");
              console.log(e.message);
            }
            app.isWorking = false;
            app.workingMessage = "";
          }
        }, 5000);
      }
    },
    async mintNft() {
      const app = this;
      if (!app.isWorking) {
        app.isWorking = true;
        app.workingMessage = "Checking nft..";
        const mintInterval = setInterval(async function () {
          try {
            const mint = await app.axios.post(app.boo_endpoint + "/nfts/mint", {
              payment_id: app.payment.paymentId,
            });
            if (app.debug) {
              console.log(mint.data);
            }
            if (!mint.data.error || mint.data.transaction !== undefined) {
              if (app.debug) {
                console.log("PAYMENT WAS PAID, GOING TO MINT FUNCTION");
              }
              clearInterval(mintInterval);
              app.isWorking = false;
              app.workingMessage = "";
              app.processCompleted = true;
              if (mint.data.transaction !== undefined) {
                app.txid = mint.data.transaction;
              }
            } else {
              app.isWorking = false;
              app.processErrored = true;
              app.workingMessage = mint.data.message;
            }
          } catch (e) {
            if (app.debug) {
              console.log("PAYMENT CHECK FAILED");
              console.log(e.message);
            }
            app.isWorking = false;
            app.workingMessage = "";
          }
        }, 5000);
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
