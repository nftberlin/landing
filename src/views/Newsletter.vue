<template>
  <div id="newsletter_page">
    <div class="wrapper">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-12 col-md-12 col-lg-10">
            <div class="mb-4">
              <img class="" src="../assets/logo.svg" width="200px" alt="" />
              <h1>NEWSLETTER</h1>
            </div>
            <div>
              <h2>Successfully subscribed!</h2>
              <p>You will receive an email notification when the next wave starts.</p>
            </div>
            <a href="/"><div class="btn-mint">COME BACK TO HOME</div></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsletter",
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  #newsletter_page {
    padding: 1rem;
    .wrapper {
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 2rem;
      }
    }
  }
}
</style>
