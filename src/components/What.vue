<template>
  <div class="what" id="what">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="pad-x">
            <button class="hideIpad">
              <div class="btn-what" @click="toWhat()" :style="bgWhat">
                <p :style="txtWhat">What is</p>
              </div>
              <div class="btn-why" @click="toWhy()" :style="bgWhy">
                <p :style="txtWhy">Why</p>
              </div>
            </button>

            <div class="what-title">
              <h1>{{ question }}</h1>
              <h1>Nft Berlin?</h1>
            </div>

            <div class="what-text">
              <p v-html="text1">
                {{ text1 }}
              </p>

              <p v-html="text2">{{ text2 }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 hideIpad">
          <!-- <img src="../assets/img-artwork.png" alt="" /> -->
          <div id="img-art"></div>

          <div id="img-graf"></div>
        </div>
        <div class="col-lg-6 hideDesktop">
          <img src="../assets/img-artwork.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "What",

  data() {
    return {
      /* image: { backgroundImage: "url('../assets/img-artwork.png')" }, */
      image: "../assets/img-artwork.png",
      question: "What is",
      text1: `<span>NFTBERLIN</span> is the people’s platform. We see
                ourselves as the public good of the metaverse, accelerating the
                democratisation of culture through creativity and technology.`,
      text2: `<span>NFTBERLIN</span> is a non-profit annual unconference on
                NFTs. Inspired by the community of passionate NFT artists and
                technologists, we provide an open, chain-agnostic platform for
                learning, exchanging ideas and sharing experiences.`,
      txtWhy: { color: "#00FF00" },
      txtWhat: { color: "black" },
      bgWhy: { backgroundColor: "black" },
      bgWhat: { backgroundColor: "#00FF00" },
    };
  },

  methods: {
    toWhy() {
      /* this.image.backgroundImage = `url('../assets/img-graffiti.png')`; */
      this.question = "Why";
      this.txtWhy.color = "black";
      this.txtWhat.color = "#00FF00";
      this.bgWhy.backgroundColor = "#00FF00";
      this.bgWhat.backgroundColor = "black";
      this.text1 = `We aim to foster, to the greatest possible extent, meaningful connections between the participants and to drive this movement forward by providing an IRL space to level the playing field between indie NFT makers and established companies entering the market. Our ambition is to become the most extensive IRL platform for NFT builders and creators in Europe.`;
      this.text2 = "";
      document.getElementById("img-art").style.display = "none";
      document.getElementById("img-graf").style.display = "block";
    },
    toWhat() {
      /* this.image.backgroundImage = `url('../assets/img-artwork.png')`; */
      this.question = "What is";
      this.txtWhy.color = "#00FF00";
      this.txtWhat.color = "black";
      this.bgWhy.backgroundColor = "black";
      this.bgWhat.backgroundColor = "#00FF00";
      this.text1 = `<span>NFTBERLIN</span> is the people’s platform. We see
                ourselves as the public good of the metaverse, accelerating the
                democratisation of culture through creativity and technology.`;
      this.text2 = `<span>NFTBERLIN</span> is a non-profit annual unconference on
                NFTs. Inspired by the community of passionate NFT artists and
                technologists, we provide an open, chain-agnostic platform for
                learning, exchanging ideas and sharing experiences.`;
      document.getElementById("img-art").style.display = "block";
      document.getElementById("img-graf").style.display = "none";
    },
  },
};
</script>

<style>
</style>