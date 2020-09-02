<template>
  <div class="project">
    <parallax class="parallax" :speed-factor="1">
      <img class="dim" src="../../assets/f.e_banner.png"/>
    </parallax>
    <div class="sub-title-wrapper">
      <div class="sub-title">
        <div class="img">
          <img src="../../assets/f.e_logo.svg" />
        </div>
        <p class="text">
            <a href="https://floor.exchange" target="_blank">floor.exchange</a> is a social network where investors and traders can trade stocks using virtual currency, keep up with stock market news, and discuss market movements in a reddit-style forum.
        </p>
      </div>
    </div>
    <div class="main">
      <p>
        During the summer of 2020, I finally began work on a personal project that had brewed in my mind for months. I envisioned a web platform at the intersection of social networks and trading tools, exposing a new, fundamentally <i>social</i> aspect of the stock market. Initial development took about two months, and testing and publication an additional month after that. By September, the website was live, which presented a new challenge that I had yet to face in any of my previous projects: business marketing.
        <br/><br/>
        This continues to be an ongoing project and business venture, and one that fully showcases what I'm capable of as a web developer.
      </p>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy';

export default {
  components: {
    Parallax,
  }
}
</script>