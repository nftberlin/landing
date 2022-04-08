<template>
  <div class="speakers">
    <div class="container-fluid">
      <div class="speakers-title pad-x">
        <!--  <h1 class="title-dbw">The <span>Speakers</span></h1> -->
      </div>


      <SpeakersSwiper />
      <!--  <div class="swiper-btn-wrapper">
        <button class="prev-el">
          <img
            src="../assets/icon-prev.svg"
            alt="prev button"
            draggable="false"
          />
        </button>
        <button class="next-el">
          <img
            src="../assets/icon-next.svg"
            alt="next button"
            draggable="false"
          />
        </button>
      </div> -->
      
    </div>
  </div>
</template>

<script>
import SpeakersSwiper from "@/components/SpeakersSwiper.vue";

export default {
  name: "Speakers",

  components: {
    SpeakersSwiper,
  },


};
</script>

<style>
</style>