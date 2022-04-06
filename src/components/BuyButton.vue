<template>
  <div class="buy-button">
    <div class="fadeIn" v-if="account">
      <div class="mt-4 mb-4" :class="{ 'mb-4': isMobile }">
        <h5 class="mb-2">Hello!</h5>
        <p class="m-0">
          You will receive the "{{ boo_product }}" nft ticket to:
        </p>
        <div class="account">
          {{ account }}
        </div>
      </div>
      <div v-if="debug">
        paying with <b>{{ processor }}</b>
        <span v-if="processor === 'blockchain'"> ({{ network }})</span> for it
        <br />using <i>{{ boo_endpoint }}</i> as payment processor.
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
        <div v-show="Object.keys(payment).length > 0 && processor === 'stripe'">
          <div id="payment-element"></div>
          <br />
          <div v-if="!isWorking" class="btn-mint" @click="payWithStripe()">
            Confirm payment
          </div>
        </div>
        <div class="workingMessage pt-2 mt-5 mb-5" v-if="isWorking">
          <i class="fas fa-spinner fa-pulse"></i>
          {{ workingMessage }}
        </div>
      </div>
      <div class="mt-5" v-if="processCompleted">
        <div>
          <h2>Congratulations!</h2>
          <h5>You have purchased your ticket!</h5>
          <div class="mt-4 mb-4" v-if="txid">
            <h5 class="m-0">Check transaction status at:</h5>
            <a
              :href="'https://polygonscan.com/tx/' + txid.transactionHash"
              target="_blank"
            >
              <h5 class="m-0" v-if="txid.transactionHash !== undefined">
                {{
                  txid.transactionHash.substr(0, 8) +
                  "..." +
                  txid.transactionHash.substr(-8)
                }}
              </h5>
            </a>
            <a
              :href="'https://mumbai.polygonscan.com/tx/' + txid"
              target="_blank"
            >
              <h5 v-if="txid.transactionHash === undefined">
                {{ txid.substr(0, 8) + "..." + txid.substr(-8) }}
              </h5>
            </a>
          </div>
          <h5>We look forward to seeing you at the event!</h5>
        </div>
      </div>
    </div>
    <div class="mt-5" v-if="!account">
      <p class="cta">
        To purchase your ticket you need to connect your wallet.
      </p>
      <input v-model="amount" />
      <div class="btn-mint" @click="connect()">Connect Wallet</div>
    </div>
  </div>
</template>
<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import axios from "axios";
const Stripe = window.Stripe;

export default {
  props: [
    "infuraId",
    "explorerUrl",
    "network",
    "boo_endpoint",
    "boo_product",
    "processor",
    "debug",
    "user",
  ],
  name: "BuyButton",
  data() {
    return {
      isMobile: false,
      axios: axios,
      stripe: {},
      account: "",
      txid: "",
      balance: 0,
      amount: 1,
      total: 0,
      isWorking: false,
      processCompleted: false,
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
    const stripe_boo = await app.axios.get(
      app.boo_endpoint + "/stripe");
    if (stripe_boo.data.stripe_pubkey !== undefined) {
      app.stripe = Stripe(stripe_boo.data.stripe_pubkey);
      if (app.debug) {
        console.log("STRIPE LOADED WITH KEY:", stripe_boo.data.stripe_pubkey);
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

    //check mobile frontend
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
        app.askPaymentDetails()
      }
    },
    async askPaymentDetails() {
      const app = this;
      if (
        !app.isWorking
      ) {
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
        }
      }
    },
    async initStripeElements() {
      const app = this;
      app.stripeElements = app.stripe.elements({
        clientSecret: app.payment.stripePayment.client_secret,
      });
      const paymentElement = app.stripeElements.create("payment");
      paymentElement.mount("#payment-element");
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
