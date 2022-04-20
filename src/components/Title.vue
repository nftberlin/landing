<template>
  <div class="title">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-lg-6">
          <div class="title-content">
            <h3>The New Gestalt</h3>
            <h1>The Whole</h1>
            <h1>Is Greater than the Sum</h1>
            <h1>of Its Parts</h1>
            <div>
              <p>
                Limited number of Bird tickets is now on sale<br />Full
                unconference admission + NFT crypto art ticket + After-party
              </p>
              <button>
                <router-link to="/ticket/"> BUY NOW</router-link>
              </button>
            </div>
            <!-- <div>
              <p>
                Our first wave of tickets is sold out :(<br />
                Drop your email address below to be notified when the next wave
                starts.
              </p>
              <div class="row">
                <div class="col-12 col-md-10 col-lg-9">
                  Begin Mailchimp Signup Form
                  <link
                    href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
                    rel="stylesheet"
                    type="text/css"
                  />
                  <div id="mc_embed_signup">
                    <form
                      action="https://nftberlin.us14.list-manage.com/subscribe/post?u=5119122cc2aa09cca81c8d473&amp;id=3ea0e50e7a"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      class="validate"
                      target="_blank"
                      novalidate
                    >
                      <div id="mc_embed_signup_scroll">
                        <div class="mc-field-group">
                          <input
                            type="email"
                            value=""
                            name="EMAIL"
                            class="required email"
                            id="mce-EMAIL"
                            placeholder="Your Email"
                          />
                        </div>
                        <div id="mce-responses" class="clear">
                          <div
                            class="response"
                            id="mce-error-response"
                            style="display: none"
                          ></div>
                          <div
                            class="response"
                            id="mce-success-response"
                            style="display: none"
                          ></div>
                        </div>
                        <div
                          style="position: absolute; left: -5000px"
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_5119122cc2aa09cca81c8d473_3ea0e50e7a"
                            tabindex="-1"
                            value=""
                          />
                        </div>
                        <div class="clear">
                          <input
                            type="submit"
                            value="Subscribe to our newsletter"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="button"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  End mc_embed_signup
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      v-model="checked"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div class="col-sm-12 col-lg-6">
          <!--    <img src="../assets/img-cube.png" alt="cube gif" draggable="false" /> -->
          <video preload="auto" autoplay loop muted playsinline defaultMuted>
            <source
              src="../assets/videos/berlin-cube.mp4"
              type="video/mp4"
              class="nftvid"
            />
            <source
              src="../assets/videos/berlin-cube.ogg"
              type="video/ogg"
              class="nftvid"
            />
            <source
              src="../assets/videos/berlin-cube.webm"
              type="video/webm"
              class="nftvid"
            />
          </video>
          <div class="gradient-black"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",

};
</script>

<style></style>
