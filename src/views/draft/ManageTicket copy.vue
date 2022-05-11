<template>
  <div class="ticket manage-tickets">
    <Navbar />
    <MenuMobile class="hideDesktop" />
    <div class="gap hideMobile"></div>
    <div class="container mb-5" :class="{ 'mt-5': !isMobile }">
      <div class="title-container pt-3 pb-3">
        <h1 class="green_inactive">MY ACCOUNT</h1>
        <div v-if="!processCompleted">
          <h2 class="green">nftberlin</h2>
          <!-- SUCCES CLAIMING -->
          <div
            class="specs-location d-flex align-items-start"
            :class="{ 'mt-2': !isMobile, 'mt-2': isMobile }"
          >
            <h4>27th - 28th May</h4>
            <a href="https://goo.gl/maps/eZZQap8PjCvQzVAM6" target="_blank">
              <div class="d-flex align-items-center location">
                <i class="fa-solid fa-location-dot"></i>
                <p>Alte Münze, Berlin</p>
              </div></a
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-12 col-lg-7">
          <div v-if="!account" class="mt-5">
            <div class="btn-mint" @click="connect()">Connect Wallet</div>
          </div>
          <!-- SUCCES CLAIMING -->
          <Transition
            name="custom-fade"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div
              v-if="
                !isClaiming &&
                processCompleted &&
                selected.metadata !== undefined &&
                claimed.qr !== undefined
              "
              class="claim-tickets mt-5"
            >
              <div class="title-container pb-4">
                <h2 class="green m-0">success!</h2>
              </div>
              <div
                class="d-flex align-items-center ticket-select b-bottom b-top py-5"
              >
                <div class="ticket-box-container">
                  <div class="ticket-box m-0">
                    <div>
                      <img
                        :src="
                          selected.metadata.image.replace(
                            'ar://',
                            'https://arweave.net/'
                          )
                        "
                        alt="ticket NFT Berlin"
                      />
                    </div>
                  </div>
                </div>
                <div class="ml-5 pl-5">
                  <h4 class="green">
                    see you <br />
                    in berlin.<br /><br />

                    /////<br />
                    ////<br />
                    ///<br />
                    //
                  </h4>
                </div>
              </div>
              <!-- TODO: insert this when layout complete:   v-if="claimed.qr !== undefined" -->
              <div
                v-if="claimed.qr !== undefined"
                class="d-flex flex-column flex-md-row align-items-center qr-generated mt-5"
              >
                <div :class="{ 'text-center': isMobile }" style="">
                  <div class="qr-code">
                    <img :src="claimed.qr" />
                    <div class="qr-code-under"></div>
                  </div>
                </div>
                <div :class="{ 'ml-5': !isMobile }">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                  <h3 class="mt-3 white">Wait for your QR-Code:</h3>
                  <h3 class="grey">
                    A QR code will be sent directly to your email address. Make
                    sure you have it with you (either in digital form or printed
                    out) to guarantee admission to an event.
                  </h3>
                  <h3 class="red">
                    * if you sell this NFT the claiming will be rejected
                  </h3>
                </div>
              </div>
            </div>
          </Transition>
          <!-- END SUCCESS CLAIMING -->

          <!-- SUCCES TRANSFERING -->
          <Transition
            name="custom-fade"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div
              v-if="
                !isSending &&
                processCompleted &&
                transfered &&
                selected.metadata !== undefined &&
                pending !== undefined &&
                pending !== ''
              "
              class="claim-tickets mt-5"
            >
              <div class="title-container pb-4">
                <h2 class="green m-0">success!</h2>
              </div>
              <div
                class="d-flex align-items-center ticket-select b-bottom b-top py-5"
              >
                <div class="ticket-box-container">
                  <div class="ticket-box m-0">
                    <div>
                      <img
                        :src="
                          selected.metadata.image.replace(
                            'ar://',
                            'https://arweave.net/'
                          )
                        "
                        alt="ticket NFT Berlin"
                      />
                    </div>
                  </div>
                </div>
                <div class="ml-5 pl-5">
                  <h4 class="green">
                    Ticket transfered <br />
                    correctly.<br /><br />

                    /////<br />
                    ////<br />
                    ///<br />
                    //
                  </h4>
                </div>
              </div>
              <div
                v-if="pending !== undefined"
                class="d-flex flex-column flex-md-row align-items-center qr-generated mt-5"
              >
                <div :class="{ 'ml-5': !isMobile }">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                  <h3 class="mt-3 white">Transaction details:</h3>
                  <h3 class="grey">
                    The ticket NFT will be sent directly to ETH address typed.
                  </h3>
                  <h3 class="green" v-if="pending">
                    Your transaction was submitted at:
                  </h3>
                  <a
                    class="green"
                    v-if="explorerUrl !== undefined"
                    :href="explorerUrl + pending"
                    target="_blank"
                    >{{ pending }}</a
                  >
                  <p v-if="explorerUrl === undefined">{{ pending }}</p>
                </div>
              </div>
            </div>
          </Transition>
          <!-- END SUCCESS TRANSFERING -->

          <div v-if="account && !isClaiming && !processCompleted && !isWorking">
            <Transition
              name="custom-fade"
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
            >
              <div v-if="nfts.length > 0 && !isClaiming">
                <!-- ALL OWNED NFTS -->
                <div class="ticket-select mt-3">
                  <h5 class="green">1. Choose an NFT ticket to entry</h5>
                  <p>
                    Select an NFT ticket in your web3 wallet that you would
                    like<br />
                    to use to enter an NFTBERLIN event.
                  </p>
                  <div class="ticket-box-container">
                    <div
                      v-for="(ticket, index) in nfts"
                      :key="index"
                      class="ticket-box"
                      @click="selectTicket(ticket)"
                    >
                      <div>
                        <img
                          :src="
                            ticket.metadata.image.replace(
                              'ar://',
                              'https://arweave.net/'
                            )
                          "
                          alt="ticket NFT Berlin"
                          :class="{
                            'ticket-selected':
                              tokenId === ticket.tokenId &&
                              tokenId !== undefined,
                          }"
                        />
                      </div>
                      <div class="text-center" v-if="ticket.claim !== null">
                        <p class="green mt-1">{{ ticket.claim }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END ALL OWNED NFTS -->

                <!-- SELECT AN ACTION -->
                <Transition
                  name="custom-fade"
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut"
                >
                  <div
                    v-if="
                      tokenId !== null &&
                      tokenId !== undefined &&
                      ticketSelection === true
                    "
                    class="mt-5"
                  >
                    <div
                      class="btn-mint mb-3"
                      @click="
                        initClaimProcess = true;
                        initSendProcess = false;
                      "
                    >
                      GENERATE QR CODE
                    </div>
                    <br />
                    <div
                      @click="
                        initSendProcess = true;
                        initClaimProcess = false;
                      "
                      class="btn-mint mb-3"
                    >
                      TRANSFER NFT
                    </div>
                  </div>
                </Transition>
                <!-- SELECT AN ACTION -->
              </div>
            </Transition>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-4 offset-lg-1">
          <div
            v-if="
              processCompleted &&
              (claimed.qr !== undefined || pending !== undefined)
            "
            class="d-flex justify-content-end"
          >
            <div
              class="sqr-btn"
              @click="
                tokenId = '';
                selected = {};
                initClaimProcess = false;
                initSendProcess = false;
                ticketSelection = false;
                processCompleted = false;
                connect();
              "
            >
              <i class="fa-solid fa-arrow-left"></i>
            </div>
          </div>
          <!-- CLAIM PROCESS FUNCTIONS -->
          <Transition
            name="custom-fade"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div
              v-if="
                account &&
                initClaimProcess &&
                !isClaiming &&
                !processCompleted &&
                !isWorking &&
                tokenId !== undefined &&
                tokenId !== ''
              "
            >
              <div
                v-if="tokenId !== '' && initClaimProcess && !isClaiming"
                class="claim-tickets mt-5"
              >
                <div
                  class="title-container d-flex justify-content-between align-items-end b-bottom pb-4"
                >
                  <h2 class="green m-0">
                    enter <br />
                    your email:
                  </h2>
                  <div
                    class="sqr-btn"
                    @click="
                      tokenId = '';
                      selected = '';
                      initClaimProcess = false;
                      ticketSelection = false;
                    "
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </div>
                <p class="white mt-4">
                  A QR code will be sent directly to your email address. Make
                  sure you have it with you (either in digital form or printed
                  out) to guarantee admission to an event.
                </p>
                <div>
                  <input
                    type="text"
                    v-model="email"
                    placeholder="Type your e-mail here.."
                  />
                  <div class="btn-mint mt-4" @click="claim()">GENERATE</div>
                </div>
                <p class="mt-1 red" v-if="mailError.length > 0">
                  {{ mailError }}
                </p>
              </div>
            </div>
          </Transition>
          <!-- END CLAIM PROCESS FUNCTIONS -->

          <!-- SENDING PROCESS FUNCTIONS -->
          <Transition
            name="custom-fade"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div
              v-if="
                account &&
                initSendProcess &&
                !isSending &&
                !processCompleted &&
                !isWorking &&
                tokenId !== undefined &&
                tokenId !== ''
              "
            >
              <div
                v-if="tokenId !== '' && initSendProcess && !isSending"
                class="claim-tickets mt-5"
              >
                <div
                  class="title-container d-flex justify-content-between align-items-end b-bottom pb-4"
                >
                  <h2 class="green m-0">
                    enter <br />
                    ETH address
                  </h2>
                  <div
                    class="sqr-btn"
                    @click="
                      tokenId = '';
                      selected = '';
                      initSendProcess = false;
                      ticketSelection = false;
                    "
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </div>
                <p class="white mt-4">
                  Send the Ticket NFT to your friend! Please make sure that the
                  ETH address you are entering is correct. We cannot refund or
                  recover your ticket if you send it to a non-existent or
                  incorrect address.
                </p>
                <div>
                  <input
                    type="text"
                    v-model="receiver"
                    placeholder="Type ETH address here..."
                  />
                  <div class="btn-mint mt-4" @click="send()">SEND</div>
                </div>
                <p class="mt-1 red" v-if="mailError.length > 0">
                  {{ mailError }}
                </p>
              </div>
            </div>
          </Transition>
          <!-- END SENDING PROCESS FUNCTIONS -->
        </div>
      </div>
    </div>
    <!-- WORKING MESSAGE AND ERRORS -->
    <div
      class="container-workingMessage"
      v-if="account && nfts.length === 0 && noNfts"
    >
      <div class="mt-5 text-center">
        <p class="red">You don't have NFTs</p>
        <a href="/ticket">
          <div class="btn-mint">Buy your Tickets</div>
        </a>
      </div>
    </div>
    <div class="container-workingMessage" v-if="isWorking">
      <div class="workingMessage">
        <i class="fas fa-spinner fa-pulse"></i>
        {{ workingMessage }}...
      </div>
    </div>
    <!-- END WORKING MESSAGE AND ERRORS -->
    <!-- <div class="gap hideMobile"></div> -->
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
      ABI: [
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      networks: {
        ethereum: 1,
        rinkeby: 4,
        polygon: 137,
        mumbai: 80001,
        ganache: 5777,
      },
      network: "polygon",
      method: "safeTransferFrom",
      contract: "0xadae0946994ed88ea2ef3a95adbf771b61b5e738",
      explorerUrl: "https://polygonscan.com/tx/",
      pending: "",
      receiver: "",
      isMobile: false,
      isDebug: true,
      mailError: "",
      selected: {},
      ticketSelection: false,
      initClaimProcess: false,
      initSendProcess: false,
      processCompleted: false,
      transfered: false,
      infuraId: "57d9ea9ca92a4449933c2b7d7145187d",
      balance: 0,
      nfts: [],
      account: "",
      email: "",
      claimed: {},
      isWorking: false,
      isClaiming: false,
      isSending: false,
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
      const netId = await app.web3.eth.net.getId();
      if (parseInt(netId) !== app.networks[app.network]) {
        alert("Switch to " + app.network + " network!");
      } else {
        const accounts = await app.web3.eth.getAccounts();
        if (accounts.length > 0) {
          app.account = accounts[0];
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
          if (this.isDebug === true) {
            console.log("My owned Tickets are:", owned.data);
            console.log("My address", app.account);
          }
        }
      }
    },
    async claim() {
      const app = this;
      if (app.email.length > 0) {
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
            app.claimed = claimed.data;
            if (app.claimed.error === true) {
              app.isWorking = true;
              app.workingMessage = app.claimed.message;
              app.isClaiming = false;
              setTimeout(function () {
                window.location.reload();
              }, 3000);
            } else {
              app.isWorking = false;
              app.workingMessage = "";
              app.processCompleted = true;
            }
            console.log(app.claimed);
          }, 2000);
          app.isClaiming = false;
        } catch (e) {
          alert(e.message);
          app.isWorking = true;
          app.workingMessage = e.message;
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        }
      } else {
        app.mailError = "Insert an e-mail address please";
        setTimeout(function () {
          app.mailError = "";
        }, 4000);
      }
    },
    async send() {
      const app = this;
      if (!app.isSending) {
        app.isSending = true;
        app.isWorking = true;
        app.workingMessage = "Transfering Ticket NFT, please wait...";

        const accounts = await app.web3.eth.getAccounts();
        if (accounts.length > 0) {
          app.account = accounts[0];
          try {
            console.log("this is token ID", this.tokenId);
            console.log("this is FROM account", app.account);
            console.log("this is RECEIVIER account", app.receiver);

            const nftContract = new app.web3.eth.Contract(
              app.ABI,
              app.contract
            );
            const estimated = await nftContract.methods
              .safeTransferFrom(app.account, app.receiver, app.tokenId)
              .estimateGas({
                from: app.account,
              });
            const gasLimit = parseInt(estimated * 1.2).toString();
            console.log("This is gasLimit", gasLimit);
            const gasPrice = await app.web3.eth.getGasPrice();
            await nftContract.methods
              .safeTransferFrom(app.account, app.receiver, app.tokenId)
              .send({
                gasPrice: gasPrice,
                gasLimit: gasLimit,
                from: app.account,
              })
              .on("transactionHash", (pending) => {
                app.workingMessage = "Waiting for confirmation at: " + pending;
                app.pending = pending;
              });
            app.isSending = false;
            app.isWorking = false;
            app.workingMessage = "";
            app.processCompleted = true;
            app.transfered = true;
          } catch (e) {
            alert(e.message);
            app.isSending = false;
            app.workingMessage = "Transfer failed, please retry...";
            setTimeout(function () {
              app.workingMessage = "";
              app.isWorking = false;
            }, 3000);
          }
        }
      }
    },
    selectTicket(ticket) {
      const app = this;
      app.selected = ticket;
      app.tokenId = app.selected.tokenId;
      app.ticketSelection = true;
      if (app.isDebug === true) {
        console.log("I have selected the ticket:", app.selected);
        console.log(
          "The token ID of selected ticket is:",
          app.selected.tokenId
        );
        console.log(app.selected.metadata.image);
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
