<template>
  <div class="ticket">
    <Navbar />
    <MenuMobile class="hideDesktop" />
    <div class="gap hideMobile"></div>
    <div class="container" :class="{ 'mt-5': !isMobile }">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-7 mt-5">
          <div class="title-container">
            <h2 class="white">Manage tickets</h2>
            <h1>Claim your Ticket now</h1>
            <h1>You can claim it up to 24H before the event</h1>
          </div>
          <div v-if="!account" class="mt-5">
            <div class="btn-mint" @click="connect()">Connect Wallet</div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-4 offset-lg-1 mt-5">
          <div class="workingMessage" v-if="isWorking">
            <i class="fas fa-spinner fa-pulse"></i>
            {{ workingMessage }}...
          </div>
          <div v-if="account">
            <div v-if="nfts.length > 0 && !isClaiming">
              <div class="ticket-select">
                <p>Select ticket to claim:</p>
                <div class="dropdown">
                  <div class="dropdown__face" @click="open = !open">
                    <div class="dropdown__text">
                      <div v-if="tokenName.length === 0">Select Ticket</div>
                      <div v-if="tokenName.length > 0">{{ tokenName }}</div>
                      <i v-if="!open" class="ms-3 fa-solid fa-caret-right"></i>
                      <i v-if="open" class="ms-3 fa-solid fa-caret-down"></i>
                    </div>
                  </div>
                  <Transition name="slide">
                    <ul v-show="open" class="dropdown__items">
                      <li
                        v-for="nft in nfts"
                        v-bind:key="nft.tokenId"
                        @click="
                          open = false;
                          tokenId = nft.tokenId;
                          tokenName = nft.metadata.name;
                        "
                      >
                        {{ nft.metadata.name }}
                      </li>
                    </ul>
                  </Transition>
                </div>
              </div>
              <div class="row"></div>
              <div class="mt-5">
                <div class="label mx-2 my-2">E-mail</div>
                <div
                  class="d-flex align-items-center flex-column flex-md-row flex-lg-row"
                >
                  <input
                    type="text"
                    v-model="email"
                    placeholder="Type your e-mail here.."
                  />
                  <div
                    class="btn-mint mx-3"
                    style="padding: 11px 16px"
                    @click="claim()"
                  >
                    CLAIM
                  </div>
                </div>
              </div>
            </div>
            <div v-if="claimed.qr !== undefined" class="mb-5">
              <img class="bordered" :src="claimed.qr" />
              <div class="mb-3 mt-3">
                <p>
                  Congratulations you have claimed your nft. You'll receive this
                  qr-code at your e-mail. <br /><br />Pay attention, you have to
                  save this qr-code in a safe place. If you lost it you'll can't
                  enter at the event. <br /><br />
                </p>
                <h5>IF YOU SELL THIS NFT THE CLAIMING WILL BE REJECTED</h5>
              </div>
            </div>
            <div v-if="nfts.length === 0 && noNfts">You don't have NFTs</div>
          </div>
        </div>
      </div>
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

export default {
  name: "ManageTicket",
  components: {
    Navbar,
    MenuMobile,
  },
  data() {
    return {
      isMobile: false,
      infuraId: "57d9ea9ca92a4449933c2b7d7145187d",
      balance: 0,
      nfts: [],
      account: "",
      email: "",
      claimed: {},
      isWorking: false,
      isClaiming: false,
      workingMessage: "",
      noNfts: false,
      tokenId: "",
      tokenName: "",
      open: false,
    };
  },
  mounted() {
    const app = this;
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
    app.connect();
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

      // Checking if networkId matches
      const accounts = await app.web3.eth.getAccounts();
      if (accounts.length > 0) {
        app.account = accounts[0];
      }
      // Checking nfts owned
      app.isWorking = true;
      app.workingMessage = "Checking your NFTs";
      const owned = await axios.get(
        process.env.VUE_APP_API_URL + "/nfts/owned/" + app.account
      );
      app.nfts = owned.data.owned;
      app.isWorking = false;
      if (app.nfts.length === 0) {
        app.noNfts = true;
      }
      console.log(owned.data);
      console.log("my address", app.account);
    },
    async claim() {
      const app = this;
      try {
        app.isWorking = true;
        app.isClaiming = true;
        app.workingMessage = "Sign message on your wallet";
        const signature = await app.web3.eth.personal.sign(
          "Claiming token " + app.tokenId + " for NftBerlin entrance.",
          app.account
        );
        const claimed = await axios.post(
          process.env.VUE_APP_API_URL + "/nfts/claim",
          {
            signature,
            tokenId: app.tokenId,
            email: app.email,
          }
        );
        app.workingMessage = "Claiming your NFT";
        console.log(signature);
        setTimeout(function () {
          app.isWorking = false;
          app.workingMessage = "";
          app.claimed = claimed.data;
        }, 2000);
      } catch (e) {
        alert(e.message);
        app.isWorking = false;
        app.workingMessage = "";
        window.location.reload();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
