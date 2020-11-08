<template>
  <div class="project">
    <parallax class="parallax" :speed-factor="1">
      <img class="dim" src="../../assets/typeaway_banner_long.png"/>
    </parallax>
    <div class="sub-title-wrapper">
      <div class="sub-title">
        <p class="text">
          <a href="https://typeaway.io" target="_blank">Typeaway.io</a> is a simple front-end web
          app that I built with one purpose: to do typing tests the way I think they should be done.
        </p>
      </div>
    </div>
    <div class="main">
      <p>
        You may have already figured out that I love computers. I spend half of my waking hours
        at the keyboard. Naturally, then, I love typing, and &mdash; at the risk of sounding
        proud &mdash; I'm good at it.
        <br/><br/>
        My entire life, I've used <a href="https://10fastfingers.com/" target="_blank">10FastFingers
      </a> for typing tests. To me, these tests aren't just about the speed that I can achieve.
        Racing my fingers across the keyboard is, honestly, exhilarating. And there's nothing
        like making a new personal record.
        <br/><br/>
        But I've always felt like these online tests could be done a little better. I wanted a
        dark mode to make it easier on my eyes at night. I wanted live WPM and satisfying sounds.
        I want the text to move more smoothly. So, I built
        <a href="https://typeaway.io" target="_blank">Typeaway.io</a>.
        <br/><br/>
        My high score is 150 WPM. Can you beat me?
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "typeaway"
}
</script>

<style scoped>

</style>
