<template>
  <div id="hackathon">
    <Navbar v-if="!isMobile" />
    <MenuMobile v-if="isMobile" />
    <div class="gap hideMobile"></div>
    <div class="container">
      <div class="title-container pt-5 pb-5" :class="{ 'mt-5': !isMobile }">
        <h1 class="m-0 green_inactive">nftberlin & encode club</h1>
        <h2 class="m-0 white_inactive">hackathon</h2>
        <div
          class="specs-location d-flex align-items-start"
          :class="{ 'mt-4': !isMobile, 'mt-2': isMobile }"
        >
          <h4>27th - 28th May</h4>
          <a href="https://goo.gl/maps/eZZQap8PjCvQzVAM6" target="_blank">
            <div class="d-flex align-items-center location">
              <i class="fa-solid fa-location-dot"></i>
              <p>Alte Münze, Berlin</p>
            </div></a
          >
        </div>
        <div class="mt-3">
          <a
            href="https://mnl3tahqrcu.typeform.com/nftberlin-hack"
            target="_blank"
          >
            <div class="btn-apply">
              Apply to hack
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2314 10.9514L11.3164 0.683838C8.74514 0.708838 3.62009 0.743837 1.04889 0.768835L1.02764 2.05383C3.3414 2.03133 6.41132 2.01258 9.11276 1.98758L0.683957 10.4164L1.58271 11.3151L10.0115 2.88633L9.93901 10.9651L11.2315 10.9501L11.2314 10.9514Z"
                  fill="#00FF00"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="number green">1 + 1</div>
        <div class="number white mx-4">></div>
        <div class="number green">2</div>
      </div>
      <div class="mt-4 mb-4">
        <p>
          The NFTBERLIN & Encode Club Hackathon fosters synergy and innovation
          by providing an irl platform for builders and artists to learn and
          create together.
          <br /><br />

          Builders have set the foundations of the Web3 landscape and unraveled
          the power of communities and creatives. We believe NFTs will play a
          major role in deconstructing the current status quo of centralized
          ownership and want to explore the potential of the technology through
          intensive cooperation and learning.<br /><br />
          We want to accelerate progress and provide creative solutions to real
          (NFT) world problems. Therefore, we welcome hackers, both programmers
          and non-programmers, who are familiar with all feasible technical
          solutions and not necessarily tied to a specific blockchain.
          <br /><br />
          The event is organised in partnership with
          <a href="https://www.encode.club/" class="green" target="_blank"
            >Encode Club</a
          >, a web3 education community.
        </p>
      </div>

      <!-- PRIZES BY -->
      <div class="sponsors mt-5 mb-5 no-padding-top">
        <div class="title-section mb-3" :class="{ 'mt-3': isMobile }">
          Prizes by
        </div>
        <div class="row epic no-margin-top">
          <div class="col-6 no-margin-top">
            <a href="/">
              <div>
                <img src="../assets/logo.svg" alt="" /></div
            ></a>
          </div>
          <div class="col-6 no-margin-top">
            <a href="https://www.arweave.org/" target="_blank">
              <div>
                <svg
                  width="306"
                  height="73"
                  viewBox="0 0 306 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M126.27 47.2883C126.099 46.9502 125.965 46.5948 125.87 46.2283C125.749 45.8122 125.656 45.3886 125.59 44.9603C125.218 45.3632 124.806 45.7283 124.36 46.05C123.867 46.3994 123.341 46.7013 122.79 46.9515C122.195 47.2135 121.571 47.4063 120.93 47.5261C120.202 47.6859 119.457 47.7623 118.71 47.7539C117.497 47.7693 116.29 47.5818 115.14 47.1992C114.125 46.8591 113.182 46.3351 112.36 45.6538C111.598 45.0012 110.981 44.1982 110.55 43.2961C110.116 42.3647 109.894 41.35 109.9 40.3241C109.845 39.1409 110.09 37.9627 110.614 36.8981C111.139 35.8334 111.925 34.9165 112.9 34.2317C114.9 32.7721 117.86 32.0456 121.78 32.0522H125.38V30.5663C125.407 30.0361 125.314 29.5069 125.108 29.0168C124.902 28.5268 124.588 28.0882 124.19 27.733C123.224 26.9604 121.999 26.5782 120.76 26.6631C119.723 26.5752 118.69 26.8796 117.87 27.5151C117.564 27.801 117.325 28.1491 117.167 28.5356C117.01 28.9221 116.94 29.3378 116.96 29.754H110.47C110.473 28.7235 110.712 27.7072 111.17 26.7821C111.673 25.8053 112.383 24.9471 113.25 24.2658C114.25 23.5022 115.382 22.9249 116.59 22.5619C118.055 22.1046 119.585 21.8838 121.12 21.9081C122.553 21.8976 123.98 22.0843 125.36 22.4628C126.597 22.7955 127.76 23.3532 128.79 24.1073C129.752 24.8362 130.526 25.7798 131.05 26.8613C131.616 28.0529 131.893 29.3589 131.86 30.6753V41.3148C131.839 42.43 131.926 43.5447 132.12 44.6433C132.261 45.4264 132.51 46.1865 132.86 46.902V47.2982H126.3L126.27 47.2883ZM120.08 42.7809C120.694 42.7844 121.306 42.7078 121.9 42.5531C122.428 42.4111 122.937 42.2117 123.42 41.9587C123.842 41.7277 124.235 41.4484 124.59 41.1265C124.891 40.8347 125.147 40.501 125.35 40.1359V35.8365H122.04C121.167 35.8175 120.295 35.9209 119.45 36.1436C118.815 36.2829 118.218 36.5567 117.7 36.946C117.266 37.2675 116.922 37.6938 116.7 38.1843C116.476 38.6794 116.363 39.2169 116.37 39.7595C116.361 40.1625 116.436 40.5631 116.593 40.9352C116.75 41.3073 116.984 41.6425 117.28 41.919C118.073 42.5418 119.071 42.8492 120.08 42.7809V42.7809Z"
                    fill="#00FF00"
                  ></path>
                  <path
                    d="M157.31 21.7991C158.215 21.7931 159.118 21.8628 160.01 22.0071C160.687 22.094 161.356 22.2331 162.01 22.4232L161.01 28.8228C160.144 28.6222 159.265 28.4766 158.38 28.3869C157.538 28.2777 156.69 28.2247 155.84 28.2284C154.31 28.1562 152.791 28.517 151.46 29.2685C150.352 29.9808 149.498 31.0206 149.02 32.2404V47.2586H142.53V22.2944H148.53L148.84 26.3858C149.807 25.0234 151.063 23.8872 152.52 23.0572C153.969 22.207 155.627 21.7714 157.31 21.7991Z"
                    fill="#00FF00"
                  ></path>
                  <path
                    d="M184.01 39.452L186.21 22.2842H192.15L187.62 47.2781H181.93L178.62 31.4278L175.43 47.2781H169.73L165.21 22.2842H171.13L173.32 39.5214L176.49 22.2842H180.82L184.01 39.452Z"
                    fill="#00FF00"
                  ></path>
                  <path
                    d="M208.8 47.7539C206.986 47.7659 205.186 47.4295 203.5 46.7633C201.988 46.178 200.603 45.3103 199.42 44.2074C198.29 43.1159 197.395 41.8082 196.79 40.3637C196.182 38.8581 195.873 37.2502 195.88 35.6285V34.7072C195.86 32.9265 196.168 31.1572 196.79 29.4865C197.354 27.9689 198.217 26.5779 199.33 25.3951C200.421 24.2477 201.743 23.3398 203.21 22.7303C204.748 22.0732 206.406 21.7361 208.08 21.7396C209.74 21.7108 211.387 22.0211 212.92 22.651C214.299 23.203 215.535 24.0524 216.54 25.1375C217.565 26.2684 218.336 27.6023 218.8 29.0506C219.329 30.6691 219.589 32.3621 219.57 34.0632V36.7974H202.45C202.571 37.6087 202.824 38.395 203.2 39.1254C203.579 39.8051 204.073 40.4151 204.66 40.9284C205.251 41.4354 205.929 41.8346 206.66 42.1072C207.46 42.3857 208.302 42.5264 209.15 42.5233C209.785 42.5238 210.418 42.4641 211.04 42.345C211.662 42.222 212.271 42.043 212.86 41.8101C213.428 41.5665 213.967 41.2643 214.47 40.9085C214.965 40.56 215.403 40.1392 215.77 39.6604L219.02 43.1276C218.562 43.7512 218.028 44.3167 217.43 44.8117C216.735 45.3902 215.969 45.8795 215.15 46.2679C214.216 46.7029 213.237 47.0351 212.23 47.2586C211.111 47.5599 209.96 47.7262 208.8 47.7539V47.7539ZM208.03 27.0297C207.343 27.0242 206.662 27.1591 206.03 27.4259C205.424 27.6752 204.875 28.0462 204.42 28.5157C203.947 29.0167 203.562 29.5926 203.28 30.2195C202.952 30.93 202.717 31.679 202.58 32.4485H213.21V31.9333C213.187 31.2782 213.051 30.6319 212.81 30.0214C212.594 29.4378 212.253 28.9073 211.81 28.4661C211.355 28.0095 210.806 27.6548 210.2 27.4259C209.511 27.1513 208.773 27.0166 208.03 27.0297V27.0297Z"
                    fill="#00FF00"
                  ></path>
                  <path
                    d="M241 47.2886C240.833 46.9487 240.699 46.5937 240.6 46.2286C240.5 45.8323 240.4 45.3965 240.33 44.9606C239.952 45.3612 239.537 45.726 239.09 46.0503C238.601 46.3997 238.078 46.7016 237.53 46.9518C236.932 47.2152 236.304 47.408 235.66 47.5263C234.935 47.6867 234.193 47.7632 233.45 47.7542C232.237 47.7712 231.03 47.5836 229.88 47.1995C228.864 46.8618 227.921 46.3375 227.1 45.6541C226.335 45.0019 225.715 44.1989 225.28 43.2963C224.592 41.7415 224.445 40.0039 224.863 38.3574C225.282 36.7109 226.241 35.249 227.59 34.2023C229.59 32.7427 232.554 32.0162 236.48 32.0228H240.09V30.5369C240.117 30.0067 240.024 29.4774 239.818 28.9874C239.612 28.4973 239.299 28.0588 238.9 27.7036C237.934 26.931 236.709 26.5488 235.47 26.6337C234.433 26.5427 233.399 26.8474 232.58 27.4857C232.273 27.771 232.032 28.1189 231.873 28.5053C231.714 28.8918 231.642 29.3077 231.66 29.7245H225.19C225.193 28.6941 225.432 27.6777 225.89 26.7526C226.394 25.7758 227.103 24.9177 227.97 24.2364C228.968 23.4688 230.1 22.8911 231.31 22.5325C232.772 22.0758 234.298 21.8551 235.83 21.8787C237.266 21.8683 238.696 22.055 240.08 22.4334C241.314 22.7724 242.476 23.3295 243.51 24.0779C244.475 24.804 245.25 25.7484 245.77 26.8319C246.336 28.0235 246.613 29.3294 246.58 30.6458V41.3151C246.564 42.4301 246.651 43.5443 246.84 44.6436C246.989 45.426 247.241 46.1855 247.59 46.9023V47.2985H241V47.2886ZM234.82 42.7812C235.434 42.7836 236.046 42.7071 236.64 42.5534C237.162 42.4149 237.666 42.2153 238.14 41.9589C238.567 41.7354 238.96 41.4555 239.31 41.1268C239.611 40.8323 239.87 40.4991 240.08 40.1362V35.8368H236.76C235.887 35.8185 235.015 35.9219 234.17 36.1439C233.535 36.2832 232.938 36.557 232.42 36.9463C231.984 37.2659 231.639 37.6927 231.42 38.1846C231.196 38.6797 231.084 39.2172 231.09 39.7597C231.081 40.1628 231.157 40.5634 231.313 40.9355C231.47 41.3075 231.704 41.6428 232 41.9193C232.803 42.5367 233.806 42.8431 234.82 42.7812V42.7812Z"
                    fill="#00FF00"
                  ></path>
                  <path
                    d="M264.64 39.8783L264.98 41.6714L265.31 39.9378L270.85 22.2944H277.62L268.04 47.2883H261.96L252.38 22.2944H259.15L264.64 39.8783Z"
                    fill="#00FF00"
                  ></path>
                  <path
                    d="M294.85 47.7539C293.038 47.7658 291.242 47.4294 289.56 46.7633C288.045 46.1756 286.658 45.3083 285.47 44.2074C284.339 43.1138 283.442 41.8068 282.83 40.3637C282.222 38.8581 281.913 37.2502 281.92 35.6285V34.7072C281.9 32.9265 282.208 31.1572 282.83 29.4865C283.397 27.9707 284.26 26.5805 285.37 25.3951C286.461 24.2477 287.783 23.3398 289.25 22.7303C290.788 22.0732 292.445 21.7361 294.12 21.7396C295.779 21.7108 297.427 22.0211 298.96 22.651C300.341 23.1985 301.578 24.0486 302.58 25.1375C303.605 26.2684 304.375 27.6023 304.84 29.0506C305.374 30.668 305.634 32.3617 305.61 34.0632V36.7974H288.49C288.61 37.6087 288.864 38.395 289.24 39.1254C289.618 39.8051 290.112 40.4151 290.7 40.9284C291.29 41.4366 291.967 41.8359 292.7 42.1072C293.503 42.3864 294.349 42.5271 295.2 42.5233C295.831 42.5243 296.461 42.4646 297.08 42.345C297.702 42.222 298.311 42.043 298.9 41.8101C299.467 41.5665 300.007 41.2643 300.51 40.9085C301.008 40.5608 301.45 40.1399 301.82 39.6604L305.05 43.1276C304.591 43.7512 304.057 44.3167 303.46 44.8117C302.765 45.3902 301.999 45.8795 301.18 46.2679C299.195 47.2078 297.02 47.6888 294.82 47.6746L294.85 47.7539ZM294.08 27.0297C293.393 27.0242 292.712 27.1591 292.08 27.4259C291.474 27.6777 290.927 28.0484 290.47 28.5157C290.018 29.0228 289.65 29.5979 289.38 30.2195C289.052 30.93 288.817 31.679 288.68 32.4485H299.31V31.9333C299.286 31.2782 299.151 30.6319 298.91 30.0214C298.69 29.4394 298.349 28.9096 297.91 28.4661C297.449 28.0116 296.897 27.6573 296.29 27.4259C295.588 27.146 294.836 27.0112 294.08 27.0297V27.0297Z"
                    fill="#00FF00"
                  ></path>
                  <path
                    d="M37.2303 72.4803C28.8231 72.4809 20.6758 69.5938 14.1765 64.3109C7.67716 59.0279 3.22791 51.676 1.58682 43.5077C-0.0542717 35.3394 1.2143 26.8601 5.17642 19.5145C9.13854 12.1688 15.549 6.41137 23.3158 3.22298C31.0825 0.0345924 39.7249 -0.387464 47.7705 2.02875C55.8161 4.44497 62.7671 9.54993 67.4393 16.4739C72.1115 23.3979 74.2158 31.7125 73.3936 40.0011C72.5714 48.2896 68.8736 56.0395 62.9303 61.93C59.5638 65.2851 55.5589 67.9451 51.1474 69.7561C46.7359 71.5671 42.0055 72.4931 37.2303 72.4803V72.4803ZM37.2303 6.10729C30.1417 6.10008 23.27 8.5279 17.7858 12.977C12.3016 17.4262 8.54422 23.6214 7.1539 30.5072C5.76357 37.393 6.82634 44.5433 10.161 50.7399C13.4957 56.9365 18.8961 61.796 25.442 64.4905C31.9879 67.185 39.2744 67.5477 46.06 65.5168C52.8456 63.486 58.7105 59.1872 62.6554 53.353C66.6004 47.5187 68.3813 40.5099 67.6947 33.5208C67.0082 26.5316 63.8967 19.9944 58.8903 15.0231C56.0532 12.1949 52.6779 9.95244 48.9599 8.42542C45.2419 6.89841 41.2551 6.11722 37.2303 6.12713V6.10729Z"
                    fill="#00FF00"
                  ></path>
                  <path
                    d="M43.4802 48.4577C43.3099 48.1009 43.1727 47.7296 43.0702 47.3482C42.9602 46.9321 42.8702 46.4864 42.7802 46.0208C42.3844 46.4406 41.9491 46.822 41.4802 47.16C40.9672 47.5226 40.4215 47.8377 39.8502 48.1011C39.209 48.3754 38.5379 48.5749 37.8502 48.6955C37.088 48.8592 36.31 48.9389 35.5302 48.9333C34.2666 48.9484 33.0092 48.7542 31.8102 48.3587C30.7452 48.0044 29.7577 47.453 28.9002 46.734C28.0953 46.0566 27.4473 45.2152 27.0002 44.2673C26.28 42.641 26.1269 40.8234 26.5651 39.1014C27.0033 37.3794 28.0078 35.8509 29.4202 34.7572C31.5002 33.2382 34.5969 32.4787 38.7102 32.4787H42.5002V30.9234C42.5288 30.367 42.4314 29.8113 42.2151 29.2971C41.9988 28.7829 41.6691 28.3231 41.2502 27.9515C40.2338 27.1535 38.9544 26.7581 37.6602 26.842C36.5828 26.7569 35.5124 27.075 34.6602 27.7335C34.3411 28.0344 34.091 28.3998 33.9271 28.8049C33.7632 29.21 33.6892 29.6454 33.7102 30.0813H26.9302C26.9253 28.9832 27.1751 27.8986 27.6602 26.9112C28.1877 25.8854 28.9311 24.9834 29.8402 24.2662C30.8832 23.4704 32.0618 22.8664 33.3202 22.4831C34.8498 22.0063 36.4468 21.7755 38.0502 21.7996C39.55 21.7854 41.0444 21.9788 42.4902 22.3741C43.7815 22.726 44.9978 23.3066 46.0802 24.0879C47.0867 24.8482 47.8985 25.8323 48.4502 26.9608C49.0367 28.1996 49.3275 29.5554 49.3002 30.9234V42.1375C49.2861 43.3022 49.3765 44.4657 49.5702 45.6146C49.7163 46.435 49.9754 47.2316 50.3402 47.9822V48.3884H43.4802V48.4577ZM37.0202 43.7522C37.6615 43.7582 38.3006 43.6782 38.9202 43.5144C39.4715 43.3642 40.0047 43.155 40.5102 42.8903C40.9518 42.6511 41.3616 42.3582 41.7302 42.0185C42.0411 41.7233 42.3132 41.3905 42.5402 41.0279V36.5304H39.0702C38.1564 36.5107 37.2442 36.6175 36.3602 36.8474C35.6959 36.9992 35.0721 37.2896 34.5302 37.6994C34.0921 38.0418 33.7481 38.4881 33.5302 38.9971C33.2969 39.514 33.1808 40.0754 33.1902 40.6416C33.1868 41.0637 33.2742 41.4817 33.4467 41.8677C33.6191 42.2538 33.8726 42.599 34.1902 42.8805C34.9939 43.5045 36.0009 43.8147 37.0202 43.7522V43.7522Z"
                    fill="#00FF00"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div class="col-6 no-margin-top">
            <a href="https://livepeer.org/" target="_blank">
              <div>
                <svg
                  width="203"
                  height="57"
                  viewBox="0 0 203 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1205_5835)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.44634 0.507812H0V44.1549H5.44634V0.507812ZM71.6276 11.8725C69.2193 11.833 66.842 12.4196 64.7296 13.5747C62.6172 14.7299 60.8424 16.4137 59.5797 18.4608C57.8187 21.5086 56.9603 24.9925 57.1041 28.5078C56.9964 32.7508 58.3999 36.8944 61.065 40.2019C63.3595 42.7861 66.5199 44.4462 69.9534 44.8707C73.3869 45.2952 76.8576 44.4551 79.7146 42.5078C81.022 41.6191 82.1349 40.4748 82.986 39.1441C83.8371 37.8135 84.4086 36.3242 84.6659 34.7666H79.3845C79.1623 36.0825 78.5265 37.2938 77.5691 38.2255C75.9432 39.6834 73.8118 40.4515 71.6276 40.3666C70.5551 40.4209 69.4835 40.2429 68.4864 39.8449C67.4894 39.4468 66.5904 38.8382 65.8512 38.0608C63.8462 35.9132 62.7264 33.0901 62.7154 30.1549H85.326V27.0255C85.4347 22.9526 83.9556 18.9965 81.2 15.9902C80.0245 14.621 78.5509 13.5382 76.8919 12.8245C75.2328 12.1109 73.4322 11.7852 71.6276 11.8725V11.8725ZM62.8805 25.5431C63.0455 20.9313 65.8512 16.3196 71.6276 16.3196C72.8178 16.278 74.0016 16.5087 75.0887 16.994C76.1757 17.4793 77.1371 18.2064 77.8992 19.1196C79.2385 20.9905 79.9334 23.2445 79.8797 25.5431H62.8805ZM103.976 12.2019C102.098 12.1871 100.245 12.6294 98.5767 13.4904C96.9088 14.3513 95.4763 15.6051 94.4033 17.1431L93.413 13.0255H89.287V56.5078H94.5683V40.696C96.2187 43.496 100.345 45.1431 103.811 45.1431C107.007 45.1759 110.11 44.0658 112.558 42.0137C115.859 39.049 117.344 34.1078 117.344 28.6725C117.344 23.5666 115.859 18.6255 112.723 15.6608C110.907 13.3549 107.937 12.2019 103.976 12.2019ZM103.15 40.696C101.23 40.6791 99.3925 39.9102 98.0341 38.5549C95.3935 36.249 94.4033 32.4608 94.4033 28.5078C94.4033 24.5549 95.2285 20.7666 98.0341 18.4608C99.3925 17.1054 101.23 16.3365 103.15 16.3196C110.247 16.3196 112.063 22.5784 112.063 28.3431C112.063 34.4372 110.247 40.696 103.15 40.696ZM123.78 18.4608C125.043 16.4137 126.818 14.7299 128.93 13.5747C131.043 12.4196 133.42 11.833 135.828 11.8725C137.639 11.8127 139.441 12.1337 141.119 12.8148C142.796 13.4958 144.312 14.5216 145.566 15.8255C148.27 18.8632 149.741 22.798 149.692 26.8608V29.9902H126.916C126.927 32.9254 128.047 35.7485 130.052 37.896C130.811 38.6472 131.713 39.2385 132.706 39.6346C133.698 40.0307 134.76 40.2237 135.828 40.2019C136.914 40.282 138.004 40.1327 139.028 39.7637C140.052 39.3948 140.986 38.8145 141.77 38.0608C142.727 37.1291 143.363 35.9178 143.585 34.6019H148.867C148.609 36.1595 148.038 37.6488 147.187 38.9794C146.336 40.3101 145.223 41.4544 143.915 42.3431C141.511 43.9202 138.705 44.7775 135.828 44.8137C133.817 44.895 131.813 44.5054 129.979 43.676C128.145 42.8467 126.531 41.6005 125.266 40.0372C122.577 36.7425 121.171 32.59 121.305 28.3431C121.182 24.8821 122.04 21.4567 123.78 18.4608V18.4608ZM135.828 16.3196C130.052 16.3196 127.246 20.9313 127.081 25.5431H144.08C144.134 23.2445 143.439 20.9905 142.1 19.1196C141.338 18.2064 140.377 17.4793 139.289 16.994C138.202 16.5087 137.019 16.278 135.828 16.3196V16.3196ZM167.681 11.8725C165.269 11.813 162.885 12.3911 160.769 13.5481C158.653 14.7052 156.881 16.4 155.633 18.4608C153.872 21.5086 153.014 24.9925 153.158 28.5078C153.05 32.7508 154.454 36.8944 157.119 40.2019C159.413 42.7861 162.574 44.4462 166.007 44.8707C169.441 45.2952 172.911 44.4551 175.768 42.5078C177.076 41.6191 178.189 40.4748 179.04 39.1441C179.891 37.8135 180.462 36.3242 180.72 34.7666H175.438C175.216 36.0825 174.58 37.2938 173.623 38.2255C171.997 39.6834 169.865 40.4515 167.681 40.3666C166.609 40.4209 165.537 40.2429 164.54 39.8449C163.543 39.4468 162.644 38.8382 161.905 38.0608C159.9 35.9132 158.78 33.0901 158.769 30.1549H181.545V27.0255C181.653 22.9526 180.174 18.9965 177.419 15.9902C176.198 14.6323 174.693 13.5594 173.01 12.8477C171.327 12.136 169.508 11.8031 167.681 11.8725ZM158.934 25.5431C159.099 20.9313 161.905 16.3196 167.681 16.3196C168.871 16.278 170.055 16.5087 171.142 16.994C172.229 17.4793 173.191 18.2064 173.953 19.1196C175.292 20.9905 175.987 23.2445 175.933 25.5431H158.934ZM203 16.8137L201.845 13.0255L190.622 16.9784L189.632 12.8608H185.506V44.3196H190.787V21.9196L203 16.8137ZM10.8927 12.696H16.339V44.1549H10.8927V12.696ZM16.9992 0.507812H10.8927V6.43722H16.9992V0.507812Z"
                      fill="#00FF00"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.7271 12.6963H21.6206V18.6257H27.7271V12.6963ZM41.7556 12.6963H35.6491V18.6257H41.7556V12.6963ZM41.7556 38.5551H35.6491V44.4845H41.7556V38.5551ZM49.5125 12.6963H55.619V18.6257H49.5125V12.6963ZM42.7458 25.7081H48.8523V31.6375H42.7458V25.7081ZM34.8239 25.7081H28.7174V31.6375H34.8239V25.7081Z"
                      fill="#00FF00"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1205_5835">
                      <rect
                        width="203"
                        height="56"
                        fill="white"
                        transform="translate(0 0.507812)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
          <div class="col-6 no-margin-top">
            <a href="https://urbit.org/" target="_blank">
              <div>
                <img src="../assets/sponsor/epic_1.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="schedule mt-5 mb-5 pt-5 pb-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-3">
            <div class="d-flex">
              <h3 class="green">Friday</h3>
              <h4 class="green">*</h4>
            </div>
            <h4 class="green_inactive">27th May</h4>
            <ul class="px-3">
              <li>8-9.30am: Registration</li>
              <li>9.30-12pm: Workshops</li>
              <li>12am-12pm: Hacking!</li>
              <li>Venue not open overnight</li>
            </ul>
          </div>
          <div class="col-12 col-md-3">
            <div class="d-flex">
              <h3 class="green">Saturday</h3>
              <h4 class="green">*</h4>
            </div>
            <h4 class="green_inactive">28th May</h4>
            <ul class="px-3">
              <li>8am: Doors open</li>
              <li>10am: Submissions</li>
              <li>10-12pm: Judging</li>
              <li>1-2pm: Pitch finale and prizegiving</li>
              <li>3pm: Finish</li>
            </ul>
            <p class="green">*Food available!</p>
          </div>
        </div>
      </div>

      <!-- JUDGES -->
      <!-- <div class="judges pb-5">
        <div class="speakers-new">
          <div class="title-section" :class="{ 'mb-3': !isMobile }">Judges</div>
          <div class="row">
            <div class="col-sm-6 col-lg-4 col-xl-2">
              <div class="speaker">
                <div class="speaker-img-wrapper">
                  <div class="speaker-bg"></div>
                  <div class="speaker-img">
                    <img
                      src="../assets/speakers/image6.png"
                      alt="speakers photo"
                      draggable="false"
                    />
                  </div>
                </div>
                <h3>Kristin Watson</h3>
                <a href="" target="_blank">
                  <div class="d-flex align-items-center">
                    <i class="fa-brands fa-twitter green"></i>
                    <p class="mx-2">@nicktwitter</p>
                  </div></a
                >

                <p class="mt-1">
                  Consectetur adipiscing elit duis tristique sollicitudin nibh
                  sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
                  cursus vitae congue
                </p>
                <a
                  href="https://twitter.com/foresightinst"
                  class="tw-handle"
                  target="_blank"
                ></a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-2">
              <div class="speaker">
                <div class="speaker-img-wrapper">
                  <div class="speaker-bg"></div>
                  <div class="speaker-img">
                    <img
                      src="../assets/speakers/image6.png"
                      alt="speakers photo"
                      draggable="false"
                    />
                  </div>
                </div>
                <h3>Kristin Watson</h3>
                <a href="" target="_blank">
                  <div class="d-flex align-items-center">
                    <i class="fa-brands fa-twitter green"></i>
                    <p class="mx-2">@nicktwitter</p>
                  </div></a
                >

                <p class="mt-1">
                  Consectetur adipiscing elit duis tristique sollicitudin nibh
                  sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
                  cursus vitae congue
                </p>
                <a
                  href="https://twitter.com/foresightinst"
                  class="tw-handle"
                  target="_blank"
                ></a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-2">
              <div class="speaker">
                <div class="speaker-img-wrapper">
                  <div class="speaker-bg"></div>
                  <div class="speaker-img">
                    <img
                      src="../assets/speakers/image6.png"
                      alt="speakers photo"
                      draggable="false"
                    />
                  </div>
                </div>
                <h3>Kristin Watson</h3>
                <a href="" target="_blank">
                  <div class="d-flex align-items-center">
                    <i class="fa-brands fa-twitter green"></i>
                    <p class="mx-2">@nicktwitter</p>
                  </div></a
                >

                <p class="mt-1">
                  Consectetur adipiscing elit duis tristique sollicitudin nibh
                  sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
                  cursus vitae congue
                </p>
                <a
                  href="https://twitter.com/foresightinst"
                  class="tw-handle"
                  target="_blank"
                ></a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-2">
              <div class="speaker">
                <div class="speaker-img-wrapper">
                  <div class="speaker-bg"></div>
                  <div class="speaker-img">
                    <img
                      src="../assets/speakers/image6.png"
                      alt="speakers photo"
                      draggable="false"
                    />
                  </div>
                </div>
                <h3>Kristin Watson</h3>
                <a href="" target="_blank">
                  <div class="d-flex align-items-center">
                    <i class="fa-brands fa-twitter green"></i>
                    <p class="mx-2">@nicktwitter</p>
                  </div></a
                >

                <p class="mt-1">
                  Consectetur adipiscing elit duis tristique sollicitudin nibh
                  sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
                  cursus vitae congue
                </p>
                <a
                  href="https://twitter.com/foresightinst"
                  class="tw-handle"
                  target="_blank"
                ></a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-2">
              <div class="speaker">
                <div class="speaker-img-wrapper">
                  <div class="speaker-bg"></div>
                  <div class="speaker-img">
                    <img
                      src="../assets/speakers/image6.png"
                      alt="speakers photo"
                      draggable="false"
                    />
                  </div>
                </div>
                <h3>Kristin Watson</h3>
                <a href="" target="_blank">
                  <div class="d-flex align-items-center">
                    <i class="fa-brands fa-twitter green"></i>
                    <p class="mx-2">@nicktwitter</p>
                  </div></a
                >

                <p class="mt-1">
                  Consectetur adipiscing elit duis tristique sollicitudin nibh
                  sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
                  cursus vitae congue
                </p>
                <a
                  href="https://twitter.com/foresightinst"
                  class="tw-handle"
                  target="_blank"
                ></a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-2">
              <div class="speaker">
                <div class="speaker-img-wrapper">
                  <div class="speaker-bg"></div>
                  <div class="speaker-img">
                    <img
                      src="../assets/speakers/image6.png"
                      alt="speakers photo"
                      draggable="false"
                    />
                  </div>
                </div>
                <h3>Kristin Watson</h3>
                <a href="" target="_blank">
                  <div class="d-flex align-items-center">
                    <i class="fa-brands fa-twitter green"></i>
                    <p class="mx-2">@nicktwitter</p>
                  </div></a
                >

                <p class="mt-1">
                  Consectetur adipiscing elit duis tristique sollicitudin nibh
                  sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
                  cursus vitae congue
                </p>
                <a
                  href="https://twitter.com/foresightinst"
                  class="tw-handle"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="mt-5">
        <p>
          Our hackathon directly follows the
          <span class="title-p">NFTBerlin Unconference</span>, come join us
          there as well! The Early-Bird ticket price (-60%) applies to all
          hackers, you'll be reimbursed the difference between the amounts upon
          submission of your project.
        </p>

        <div class="text-center mt-5 mb-5">
          <a href="https://www.encode.club/" target="_blank">
            <img
              src="../assets/sponsor/encode_club.png"
              height="150px"
              alt=""
            />
          </a>
        </div>

        <p>
          Encode Club is a web3 education community learning and building
          together through fantastic programmes with the leading protocols in
          the space. Encode Club organises online and in-person programmes like
          education series, bootcamps, hackathons and accelerators, while also
          helping their community get jobs and funding for projects and
          startups.
        </p>
      </div>
      <div
        data-tf-widget="IfK7eO1K"
        data-tf-iframe-props="title=NFTBERLIN & Encode Club Hackathon Application Form"
        data-tf-medium="snippet"
        data-tf-hidden="source=xxxxx"
        style="width: 100%; height: 450px"
      ></div>
      <div class="my-5 d-flex align-items-center">
        <a href="https://twitter.com/NFTBERLINteam" target="_blank">
          <div class="btn-contact">
            Twitter
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2314 10.9514L11.3164 0.683838C8.74514 0.708838 3.62009 0.743837 1.04889 0.768835L1.02764 2.05383C3.3414 2.03133 6.41132 2.01258 9.11276 1.98758L0.683957 10.4164L1.58271 11.3151L10.0115 2.88633L9.93901 10.9651L11.2315 10.9501L11.2314 10.9514Z"
                fill="#00FF00"
              />
            </svg>
          </div>
        </a>
        <a
          href="https://discord.gg/gMQhjZQuSe"
          target="_blank"
          class=""
          style="margin-left: 1rem"
        >
          <div class="btn-contact">
            Discord
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2314 10.9514L11.3164 0.683838C8.74514 0.708838 3.62009 0.743837 1.04889 0.768835L1.02764 2.05383C3.3414 2.03133 6.41132 2.01258 9.11276 1.98758L0.683957 10.4164L1.58271 11.3151L10.0115 2.88633L9.93901 10.9651L11.2315 10.9501L11.2314 10.9514Z"
                fill="#00FF00"
              />
            </svg>
          </div>
        </a>
      </div>
      <div class="mt-5 mb-5 hackathon-contacts">
        <h2>Questions?</h2>
        <p>
          Message
          <a href="mailto:ir@nftberlin.org" class="green">ir@nftberlin.org</a>
          or
          <a class="green" href="mailto:hack@encode.club">hack@encode.club</a>
        </p>
      </div>
    </div>

    <div class="gap"></div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import MenuMobile from "@/components/MenuMobile.vue";

export default {
  name: "Hackaton",
  components: {
    Navbar,
    Footer,
    MenuMobile,
  },
  data() {
    return {
      isMobile: "false",
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
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1680px) {
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1440px;
  }
}
</style>
