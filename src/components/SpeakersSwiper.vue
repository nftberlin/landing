<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="speaker">
        <div class="speaker-img-wrapper">
          <div class="speaker-bg"></div>
          <div class="speaker-img">
            <img
              src="../assets/img-speakers-1.jpg"
              alt="speakers photo"
              draggable="false"
            />
          </div>
        </div>
        <h1>
          The Metaverse 2022:<br />
          Rekts and Opportunities
        </h1>
        <p>Julien Bouteloup, Founder of Stake Capital and BlackPool</p>
        <p>Twitter @bneiluj</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="speaker">
        <div class="speaker-img-wrapper">
          <div class="speaker-bg"></div>
          <div class="speaker-img">
            <img
              src="../assets/img-speakers-2.png"
              alt="speakers photo"
              draggable="false"
            />
          </div>
        </div>
        <h1>Web3 Social - Live Footage of the Lens Protocol</h1>
        <p>
          Stani Kulechov, Founder of AAVE and Lens Protocol
        </p>
        <p>Twitter @StaniKulechov</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="speaker">
        <div class="speaker-img-wrapper">
          <div class="speaker-bg"></div>
          <div class="speaker-img">
            <img
              src="../assets/img-speakers-3.png"
              alt="speakers photo"
              draggable="false"
            />
          </div>
        </div>
        <h1>Stephen Young</h1>
        <p>Founder of NFTfi</p>
        <p>Twitter: @stephen_yo</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="speaker">
        <div class="speaker-img-wrapper">
          <div class="speaker-bg"></div>
          <div class="speaker-img">
            <img
              src="../assets/img-speakers-4.png"
              alt="speakers photo"
              draggable="false"
            />
          </div>
        </div>
        <h1>Founder of Fractional.Art</h1>
        <p></p>
        <p>Twitter: @andy8052</p>
      </div>
    </swiper-slide>

    <!-- <swiper-slide>
      <div class="speaker">
        <div class="speaker-img-wrapper">
          <div class="speaker-bg"></div>
          <div class="speaker-img">
            
          </div>
        </div>
        <h1>Name + Surname</h1>
        <p>Short description of the rapporteur</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="speaker">
        <div class="speaker-img-wrapper">
          <div class="speaker-bg"></div>
          <div class="speaker-img"></div>
        </div>
        <h1>Name + Surname</h1>
        <p>Short description of the rapporteur</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="speaker">
        <div class="speaker-img-wrapper">
          <div class="speaker-bg"></div>
          <div class="speaker-img"></div>
        </div>
        <h1>Name + Surname</h1>
        <p>Short description of the rapporteur</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="speaker">
        <div class="speaker-img-wrapper">
          <div class="speaker-bg"></div>
          <div class="speaker-img"></div>
        </div>
        <h1>Name + Surname</h1>
        <p>Short description of the rapporteur</p>
      </div>
    </swiper-slide> -->

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  name: "swiper-example-centered-slides",
  title: "Centered slides",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3.5,
        spaceBetween: 50,
        centeredSlides: false,
        loop: true,

        navigation: {
          nextEl: ".next-el",
          prevEl: ".prev-el",
        },

        breakpoints: {
          2560: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
};
</script>