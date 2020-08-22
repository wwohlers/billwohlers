<template>
  <div class="project">
    <parallax class="parallax" :speed-factor="1">
      <img class="dim" src="../../assets/trova_banner.png"/>
    </parallax>
    <div class="sub-title-wrapper">
      <div class="sub-title">
        <div class="img">
          <img src="../../assets/trova_logo.png" />
        </div>
        <p class="text">
          <a href="https://www.trovaus.com" target="_blank">Trova</a> is a social networking startup based in Boston, MA. They develop an app for property managers that connects neighbors within residential communities.
        </p>
      </div>
    </div>
    <div class="main">
      <p>
        I join Trova in an internship that began in April 2020 and ended when school resumed in the fall. At the time, and still, Trova was a small social networking startup, founded by a guy
        with a vision, and based in Boston. Their tech stack was ordinary: Angular on the front-end, Express.js and 
        Postgres in the back. Angular was unfamiliar to me, and &mdash; coming from Vue &mdash; presented an unexpectedly steep learning curve.
        The back-end was familiar, as I had worked with both Express and Postgres before.
        <br/><br/>
        When I joined the team, Trova's web app was in the process of a redesign. My first weeks were spent mostly on CSS and other front-end development, 
        including heavy work with Angular. Then I helped design and implement a new Events system on their website, and finally completely redid their profile system and matching algorithm.
        This project also gave me a valuable first taste of relational ORMs in Node. 
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