<template>
  <div class="project">
    <parallax class="parallax" :speed-factor="1">
      <img class="dim" src="../../assets/huskyhusky_banner.png"/>
    </parallax>
    <div class="sub-title-wrapper">
      <div class="sub-title">
        <div class="img">
          <img src="../../assets/huskyhusky_logo.png" />
        </div>
        <p class="text">
          <a href="https://thehuskyhusky.com" target="_blank">The Husky Husky</a> is an online satire publication run by Northeastern students. In the spring semester of my
          freshman year, I designed, developed, and published a new website that better served their needs and better represented their vision.
        </p>
      </div>
    </div>
    <div class="main">
      <p>
        One day late in my first semester at Northeastern, I stumbled upon a small satire publication run by two second-year students at Northeastern. Though their writing impressed me, I 
        thought their web presence needed an upgrade. In January, I offered to make them a custom website with a content management system that better
        suited their needs and a design that best represented their character. Over the next three months, I designed the site from the ground up based on their needs, developed and tested
        it, and published it on AWS, replacing their old website. 
        <br/><br/>
        The frontend was done entirely in Vue. The backend was powered by Express.js and used MongoDB, making the Husky Husky my first project that used a document-based database. But the
        most valuable experience I gained while working on this project was working with AWS, as it was my first solo project release on the service.
        <br/><br/>
        I continue to maintain The Husky Husky website to this day, with help from some of their writers. You can find it <a target="_blank" to="https://thehuskyhusky.com">here</a>.
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