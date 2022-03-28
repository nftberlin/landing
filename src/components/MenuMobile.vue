<template>
  <div class="menu-mobile">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <button @click="toggleMenu()" id="menu-btn">
            <!-- <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.399902 0.0400085V2.92001H19.5999V0.0400085H0.399902ZM0.399902 5.56001V8.44001H19.5999V5.56001H0.399902ZM0.399902 11.08V13.96H19.5999V11.08H0.399902Z"
                fill="#00FF00"
              />
            </svg> -->
            <div id="menu-btn_burger">
              <div class="burg"></div>
              <div class="burg"></div>
              <div class="burg"></div>
            </div>
          </button>
        </div>
        <div class="col text-center">
          <img src="../assets/logo.svg" alt="" />
        </div>
        <div class="col">
          <div class="mobile-social">
            <a href="#" target="_blank">
              <img src="../assets/icon-twitter.svg" alt="" draggable="false" />
            </a>

            <a href="#" target="_blank">
              <img src="../assets/icon-discord.svg" alt="" draggable="false" />
            </a>

            <a href="#" target="_blank">
              <img src="../assets/icon-union.svg" alt="" draggable="false" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="side-menu animate__animated animate__slideInLeft">
      <div class="container-fluid">
        <div class="mobile-links">
          <a href="#events" @click="toggleMenu()">Event</a>
          <a href="#what" @click="toggleMenu()">What/Why?</a>
          <a href="#sponsors" @click="toggleMenu()">Sponsors</a>
          <a
            href="https://www.notion.so/wearefloc/301a733ed69c4c45bfcfa9fe632f8b36?v=be21a3c063ef45d18ab9c074c5769e78"
            @click="toggleMenu()"
            target="_blank"
            >• Media Kit</a
          >
          <!-- <a href="#team" @click="toggleMenu()">Team</a> -->
        </div>

        <div class="mobile-open-social">
          <a href="https://twitter.com/NFTBERLINteam" target="_blank">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 2.8C19.2483 3.12609 18.4534 3.34166 17.64 3.44C18.4982 2.92732 19.1413 2.12078 19.45 1.17C18.6436 1.65006 17.7608 1.98829 16.84 2.17C16.2245 1.50257 15.405 1.05829 14.5098 0.906847C13.6147 0.755403 12.6945 0.905354 11.8938 1.33319C11.093 1.76102 10.4569 2.44253 10.0852 3.27083C9.71355 4.09914 9.62729 5.02739 9.84 5.91C8.20943 5.82752 6.61444 5.40295 5.15865 4.66386C3.70287 3.92477 2.41885 2.88769 1.39 1.62C1.02914 2.25016 0.839519 2.96382 0.84 3.69C0.83872 4.36438 1.00422 5.02861 1.32176 5.62356C1.63929 6.21851 2.09902 6.72571 2.66 7.1C2.00798 7.08226 1.36989 6.90729 0.8 6.59V6.64C0.804887 7.58489 1.13599 8.49909 1.73731 9.22796C2.33864 9.95683 3.17326 10.4556 4.1 10.64C3.74326 10.7486 3.37287 10.8058 3 10.81C2.74189 10.807 2.48442 10.7836 2.23 10.74C2.49391 11.5528 3.00462 12.2631 3.69107 12.7722C4.37753 13.2812 5.20558 13.5635 6.06 13.58C4.6172 14.7153 2.83588 15.3349 1 15.34C0.665735 15.3411 0.331736 15.3211 0 15.28C1.87443 16.4903 4.05881 17.1327 6.29 17.13C7.82969 17.146 9.35714 16.855 10.7831 16.2741C12.2091 15.6931 13.505 14.8339 14.5952 13.7465C15.6854 12.6591 16.548 11.3654 17.1326 9.9409C17.7172 8.51642 18.012 6.98972 18 5.45C18 5.28 18 5.1 18 4.92C18.7847 4.33481 19.4615 3.61742 20 2.8Z"
                fill="black"
              />
            </svg>
          </a>

          <a href="https://discord.gg/WDgMvADaBB" target="_blank">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.076 9C7.676 9 8.162 9.45 8.151 10C8.151 10.55 7.677 11 7.076 11C6.486 11 6 10.55 6 10C6 9.45 6.475 9 7.076 9ZM10.924 9C11.525 9 12 9.45 12 10C12 10.55 11.525 11 10.924 11C10.334 11 9.849 10.55 9.849 10C9.849 9.45 10.323 9 10.924 9ZM15.891 0C17.054 0 18 0.966 18 2.163V21L15.789 19.005L14.544 17.829L13.227 16.579L13.773 18.522H2.109C0.946 18.522 0 17.556 0 16.359V2.163C0 0.966 0.946 0 2.109 0H15.89H15.891ZM11.921 13.713C14.194 13.64 15.069 12.117 15.069 12.117C15.069 8.736 13.587 5.995 13.587 5.995C12.107 4.862 10.697 4.893 10.697 4.893L10.553 5.061C12.302 5.607 13.114 6.395 13.114 6.395C12.1591 5.85699 11.1066 5.51434 10.018 5.387C9.32744 5.309 8.62993 5.31572 7.941 5.407C7.879 5.407 7.827 5.418 7.766 5.428C7.406 5.46 6.531 5.596 5.431 6.09C5.051 6.268 4.824 6.395 4.824 6.395C4.824 6.395 5.678 5.565 7.529 5.019L7.426 4.893C7.426 4.893 6.017 4.862 4.536 5.996C4.536 5.996 3.055 8.736 3.055 12.117C3.055 12.117 3.919 13.639 6.192 13.713C6.192 13.713 6.572 13.241 6.882 12.842C5.575 12.442 5.082 11.602 5.082 11.602C5.082 11.602 5.184 11.676 5.369 11.781C5.379 11.791 5.389 11.802 5.41 11.812C5.441 11.834 5.472 11.844 5.503 11.865C5.76 12.012 6.017 12.127 6.253 12.222C6.675 12.39 7.179 12.558 7.766 12.674C8.64532 12.8464 9.54941 12.8498 10.43 12.684C10.9429 12.5925 11.4433 12.4411 11.921 12.233C12.281 12.096 12.682 11.896 13.104 11.613C13.104 11.613 12.59 12.474 11.242 12.863C11.551 13.262 11.922 13.713 11.922 13.713H11.921Z"
                fill="black"
              />
            </svg>
          </a>

          <a
            href="https://mirror.xyz/0x37AEe71F739FB44D9240CB14D41bE16Df767F79e"
            target="_blank"
          >
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.61905 0C3.41116 0 0 3.41116 0 7.61905V20H16V7.61905C16 3.41116 12.5888 0 8.38095 0H7.61905Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "MenuMobile",

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.querySelector("body").style.overflowY = "hidden";
        this.scrollPosition = window.pageYOffset;
        document.querySelector("body").style.position = "fixed";
        document.querySelector("body").style.top = `-${this.scrollPosition}px`;
        document.querySelector("body").style.width = "100%";
        document.getElementById("menu-btn").classList.add("open");
      } else {
        document.querySelector("body").style.overflowY = "scroll";
        document.querySelector("body").style.removeProperty("position");
        document.querySelector("body").style.removeProperty("top");
        document.querySelector("body").style.removeProperty("width");
        document.getElementById("menu-btn").classList.remove("open");
      }
    },
  },
};
</script>