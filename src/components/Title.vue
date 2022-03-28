<template>
  <div class="title">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-lg-6">
          <div class="title-content">
            <h3>The New Gestalt</h3>
            <h1>The Whole</h1>
            <h1>Is Greater than</h1>
            <h1>the Sum of Its Parts</h1>
            <div>
              <p>
                Denying and pushing back against NFTs and crypto is basically
                saying, “We’re not going to have a collectively owned future.
                We’re going to have a corporate-owned future, and we’re going to
                have a government-owned future.
              </p>
              <p>— Naval Ravikant</p>
            </div>
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

<style>
</style>