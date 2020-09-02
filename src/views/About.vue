<template>
  <div class="wrapper">
    <h1>About Me</h1>
    <div class="sub-title-wrapper">
      <div class="sub-title">
        <div class="img">
          <img src="../assets/me.jpg" />
        </div>
        <p class="text">
          When I'm on your time, you'll appreciate my efficient style and dogged work ethic. And when I'm not, you'll uncover a more easygoing and fun side to me.
        </p>
      </div>
    </div>
    <div class="main">
      <p>
        I've always been a computer person. Technology was an unavoidable part of my childhood, and I liked it that way. I wrote my first line of HTML when I was nine. By middle school I was sure I wanted to be a programmer, and I devoted hours of my free time every week to teaching myself to code. After countless YouTube tutorials and many frustrating nights of fixing elusive bugs, I'm proficient in various technologies, languages, frameworks, and systems, some of which I may never use again.
        <br/><br/>
        But in those many hours of learning and practicing, and learning and practicing some more, I realized what every experienced programmer already knows: it's not about the languages you know, but the skills that you develop on the way. I don't love programming for any particular tech stack, but instead for how, with enough Googling and patience, you can realize almost any vision. It's this boundless potential for creation that motivates me through those long, agonizing nights of coding. And there's enough of those for the two of us.
        <br/><br/>
        As a teammate, I have three qualities that stand out. First, I'm communicative. Brevity, clarity, and honesty are my policies. Second, I'm driven. I love getting things done, but I don't enjoy work for its own sake &mdash; I enjoy it because I believe in meeting deadlines and fulfilling commitments, and I set ambitious ones for myself. And third, I love to learn. Whether it's about your product and your clientelle, you and your background, or a tech stack I haven't yet encountered, I'm always eager for more.
        <br/><br/>
        As a friend, you'll find me to be down-to-earth, and never afraid to share a laugh. The world is better off when we're all a little more understanding and appreciative of each other. And that's only important if we can enjoy ourselves while we're here.
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