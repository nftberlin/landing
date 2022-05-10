<template>
  <div class="talks-page">
    <Navbar />
    <MenuMobile class="hideDesktop" />
    <div class="schedule-content">
      <div class="talk-scheduling">
        <h1>Talk<br />scheduling</h1>
        <div class="tags">
          <div class="tag" @click="dayOne()">DAY 1</div>
          <div class="tag"  @click="dayTwo()">DAY 2</div>
        </div>
      </div>
      <div class="room-a">
        <div class="rooms">
          <h1>MAIN STAGE:<br />THE LOFT</h1>
          <div class="container-fluid">
            <div class="row greenrow">
              <div class="col">
                <h2>TIME SLOT</h2>
              </div>
              <div class="col">
                <h2>SPEAKER</h2>
              </div>
              <div class="col">
                <h2>TRACK</h2>
              </div>
              <div class="col">
                <h2>TITLE</h2>
              </div>
              <div class="col">
                <h2>DESCRIPTION</h2>
              </div>
            </div>
            <div class="schedule-program">
              <div class="row programrow">
                <div class="col schedule-hours"><p>10:30 - 11:30</p></div>
                <div class="col">
                  <p>
                    Stani Kulechov - Founder,<br />
                    Lens & Aave Protocols
                  </p>
                </div>
                <div class="col">
                  <p>
                    1: Art,<br />
                    Collectibles & Society
                  </p>
                </div>
                <div class="col">
                  <p>
                    Fashion 3.0:<br />
                    Avatars, Metaverse, <br />Freedom, Sustainability
                  </p>
                </div>
                <div class="col">
                  <p>
                    lorem ipsum dolor sit amet adipiscing sed equam sit ipsum
                    amet lorem ipsum
                  </p>
                </div>
              </div>
              <div class="row programrow">
                <div class="col schedule-hours"><p>11:30 - 12:30</p></div>
                <div class="col">
                  <p>
                    Justin Sun - Founder,<br />
                    Tron
                  </p>
                </div>
                <div class="col">
                  <p>
                    1: Art,<br />
                    Collectibles & Society
                  </p>
                </div>
                <div class="col">
                  <p>
                    Fashion 3.0:<br />
                    Avatars, Metaverse, <br />Freedom, Sustainability
                  </p>
                </div>
                <div class="col">
                  <p>
                    lorem ipsum dolor sit amet adipiscing sed equam sit ipsum
                    amet lorem ipsum
                  </p>
                </div>
              </div>
              <div class="row programrow">
                <div class="col schedule-hours"><p>12:30 - 13:30</p></div>
                <div class="col">
                  <p>
                    MC: Anika Meier: Writer and <br />Curator <br />Simon Denny:
                    Artist <br />Sarah Friend: Artist <br />Harm van den Dorpel: Artist<br /> Johanna Neuschäfer: Co-founder
                  </p>
                </div>
                <div class="col">
                  <p>
                    1: Art,<br />
                    Collectibles & Society
                  </p>
                </div>
                <div class="col">
                  <p>
                    Fashion 3.0:<br />
                    Avatars, Metaverse, <br />
                    Freedom, Sustainability
                  </p>
                </div>
                <div class="col">
                  <p>
                    lorem ipsum dolor sit amet adipiscing sed equam sit ipsum
                    amet lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="schedule-divider"></div>
        <div class="rooms">
          <h1>
            SIDE STAGE #1:<br />
            1ST FLOOR RIGHT SIDE
          </h1>
          <div class="container-fluid">
            <div class="row greenrow">
              <div class="col">
                <h2>TIME SLOT</h2>
              </div>
              <div class="col">
                <h2>SPEAKER</h2>
              </div>
              <div class="col">
                <h2>TRACK</h2>
              </div>
              <div class="col">
                <h2>TITLE</h2>
              </div>
              <div class="col">
                <h2>DESCRIPTION</h2>
              </div>
            </div>
            <div class="schedule-program">
              <div class="row programrow">
                <div class="col schedule-hours"><p>10:30 - 11:30</p></div>
                <div class="col">
                  <p>
                    Stani Kulechov - Founder,<br />
                    Lens & Aave Protocols
                  </p>
                </div>
                <div class="col">
                  <p>
                    1: Art,<br />
                    Collectibles & Society
                  </p>
                </div>
                <div class="col">
                  <p>
                    Fashion 3.0:<br />
                    Avatars, Metaverse, <br />Freedom, Sustainability
                  </p>
                </div>
                <div class="col">
                  <p>
                    lorem ipsum dolor sit amet adipiscing sed equam sit ipsum
                    amet lorem ipsum
                  </p>
                </div>
              </div>
              <div class="row programrow">
                <div class="col schedule-hours"><p>11:30 - 12:30</p></div>
                <div class="col">
                  <p>
                    Justin Sun - Founder,<br />
                    Tron
                  </p>
                </div>
                <div class="col">
                  <p>
                    1: Art,<br />
                    Collectibles & Society
                  </p>
                </div>
                <div class="col">
                  <p>
                    Fashion 3.0:<br />
                    Avatars, Metaverse, <br />Freedom, Sustainability
                  </p>
                </div>
                <div class="col">
                  <p>
                    lorem ipsum dolor sit amet adipiscing sed equam sit ipsum
                    amet lorem ipsum
                  </p>
                </div>
              </div>
              <div class="row programrow">
                <div class="col schedule-hours"><p>12:30 - 13:30</p></div>
                <div class="col">
                  <p>
                    MC: Anika Meier - Writer and Curator<br />
                    Simon Denny - Artist <br />
                    Sarah Friend - Artist <br />
                    Harm van den Dorpel - Artist <br />
                    Johanna Neuschäfer - Co-founder
                  </p>
                </div>
                <div class="col">
                  <p>
                    1: Art,<br />
                    Collectibles & Society
                  </p>
                </div>
                <div class="col">
                  <p>
                    Fashion 3.0:<br />
                    Avatars, Metaverse, <br />Freedom, Sustainability
                  </p>
                </div>
                <div class="col">
                  <p>
                    lorem ipsum dolor sit amet adipiscing sed equam sit ipsum
                    amet lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuMobile from "@/components/MenuMobile.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "TalksPage",

  components: {
    Navbar,
    MenuMobile,
    Footer,
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {},
};
</script>

<style>
</style>