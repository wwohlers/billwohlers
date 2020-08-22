<template>
  <div class="project">
    <parallax class="parallax" :speed-factor="1">
      <img class="dim" src="../../assets/c4c_banner.png"/>
    </parallax>
    <div class="sub-title-wrapper">
      <div class="sub-title">
        <div class="img">
          <img src="../../assets/c4c_logo.png" />
        </div>
        <p class="text">
          <a href="https://www.trovaus.com" target="_blank">C4C</a> is a student-run organization at Northeastern University. Powered by only volunteers, C4C designs, develops,
          and maintains web apps for nonprofits in the Boston area.
        </p>
      </div>
    </div>
    <div class="main">
      <p>
        I joined C4C early freshman year with two goals: to gain hands-on, full-stack web development experience with a team, and to use my passion for web development to give back to the Boston community. In my first semester, I led the front-end development of their <a href="https://www.c4cneu.com" target="_blank">internal website</a>. I had only two weeks to refresh my Javascript skills and learn the Vue.js framework well enough so that I could make significant design decisions, write tickets for the other developers, and review their code.
        <br/><br/>
        In the second semester, I was invited to join the more intense Development team, where I assisted in the front-end development of two websites for local nonprofits. Over the summer, I assisted in the maintenance of one of the sites, which included substantial feature development on the back-end. This was my first opportunity to work with a Java HTTP API, which shifted my previously JS-focused perspective on web development.
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