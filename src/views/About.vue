<template>
  <div class="wrapper">
    <h1>About Me</h1>
    <div class="sub-title-wrapper">
      <div class="sub-title">
        <div class="img">
          <img src="../assets/me.jpg" />
        </div>
        <p class="text">
          When I'm on your time, you'll appreciate my efficient style and unrelenting work ethic. And when I'm not, you'll uncover a more easygoing and fun side to me.
        </p>
      </div>
    </div>
    <div class="main">
      <p>
        I've always been a computer person. Technology was an unavoidable part of my childhood, and I liked it that way. I wrote my first line of HTML when I was nine. By middle school I was sure I wanted to be a programmer, and I devoted hours of my free time every week to teaching myself to code. After countless 360p YouTube tutorials and many an agonizing night of fixing elusive and inexplicable bugs, I'm proficient in HTML, CSS, Javascript, Java, and plenty more languages, many of which I will likely never use again. 
        <br/><br/>
        But in these tireless hours of reading and practicing, and reading and practicing some more, I realized what every experienced programmer already knows: it's not about the languages you know, but the skills that you develop while learning and using those languages. I don't love programming for any particular language or framework, but instead for how &mdash; with enough Googling and patience &mdash; you can make almost anything you want. It's this boundless potential for creation that motivates me through even the most frustrating nights of coding. And there's enough of those for the two of us.
        <br/><br/>
        As a teammate, there are three qualities of mine that stand out. First, I'm communicative. Brevity, clarity, and honesty are crucial, and you'll find plenty of each in me. Second, I'm driven. I love getting things done, but I don't enjoy work for its own sake. I enjoy it because I believe in meeting deadlines and fulfilling commitments, and I set ambitious ones for myself. Finally, I love to learn. Whether it's about you and your background, your product and your clientelle, or a tech stack I haven't yet encountered, I'm always ready for more.
        <br/><br/>
        As a friend, you'll find me to be down-to-earth, and never afraid of having some fun. The world is better off when we're all a little more understanding and appreciative of each other. And that's only important if we can enjoy ourselves while we're here.
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.sub-title-wrapper {
  width: 100%;
  margin-top: 2em;
  background-color: #F2F2F2;
  padding: 5em 0;

  .sub-title {
    display: flex;
    width: 50%;
    margin: auto;

    .img {
      width: 40%;
      margin-right: 2em;
      position: relative;

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
    }

    .text {
      width: 100%;
      font-size: 20px;
      font-family: 'Poppins';
    }
  }
}

.main {
  margin: 4em 0;

  p {
    width: 50%;
    margin: auto;
    text-align: left;
    font-size: 18px;
    line-height: 1.5em;
  }
}

@media only screen and (max-width: 1000px) {
  .sub-title-wrapper {
    margin-top: 1em;

    .sub-title {
      width: 80%;
      .img {
        display: none;
      }
    }
  }

  .main {
    p {
      width: 80%;
      font-size: 16px;
    }
  }
}
</style>