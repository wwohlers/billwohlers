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
          <a href="https://www.trovaus.com" target="_blank">C4C</a> is a student-run organization at Northeastern University. Powered purely by volunteer programmers, C4C designs, develops,
          and maintains web apps for nonprofits in the Boston area.
        </p>
      </div>
    </div>
    <div class="main">
      <p>
        I joined C4C early in my freshman year with two goals: to gain hands-on, full-stack web development experience on a team, and to use my passion of coding to give back to the Boston 
        community. Within a month of joining, I stepped up to lead front-end development of their <a href="https://www.c4cneu.com" target="_blank">internal website</a>. In my first semester
        at Northeastern, I had found myself in a position of serious responsibility. I had only two weeks to teach myself the entire Vue framework well enough to make important design decisions
        and write tickets for the other programmers on our team.
        <br/><br/>
        In the second semester, I was invited to join the more intense Development team, where I assisted in the front-end development of two websites for local nonprofits. My 
        first experience working on a nontrivial web development project, I was fortunate enough to have a devoted team of several other programmers who already had multiple 
        semesters of computer science classes, internships, and co-ops under their belt. My experience during my first year at C4C helped prepare me for my internship at 
        <router-link to="/projects/trova">Trova</router-link> later that spring.
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