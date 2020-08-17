<template>
  <div class="home" @scroll.passive="handleScroll">
    <div class="bio-wrapper">
      <div class="bio">
        <div class="left">
          <img src="https://www.okea.org/wp-content/uploads/2019/10/placeholder.png">
        </div>
        <div class="right">
          <h1 :class="{ cursor: showCursor }">{{ text }}</h1>
          <p class="intro">
            I'm a full stack web developer and undergraduate computer science student at Northeastern University.
            Keep scrolling to learn more about me and the work that I've done.
          </p>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <p class="header">My Work</p>
      <div class="item">
        <div class="item-container">
          <div class="small">
            <img src="https://www.okea.org/wp-content/uploads/2019/10/placeholder.png">
          </div>
          <div class="big">
            <p class="header-sub">The Husky Husky</p>
            <p class="tagline">A solo project built for a school organization</p>
            <p class="body">
              When I first stumbled upon the Husky Husky's old website, I knew right away that I could improve their web presence.
              In spring 2020, I built <a href="http://thehuskyhusky.com">their new site</a>, which takes care of content management in a way 
              that makes sense for them while showcasing a simple, functional design free of distracting branding.
            </p>
            <p class="subline">Built with Vue.js, Express.js, and MongoDB</p>
        </div>
        </div>
      </div>
      <div class="item">
        <div class="item-container">
          <div class="small">
            <img src="https://www.okea.org/wp-content/uploads/2019/10/placeholder.png">
          </div>
          <div class="big">
            <p class="header-sub">Trova</p>
            <p class="tagline">Contributed (full-stack) during an internship in summer 2020</p>
            <p class="body">
              <a href="https://trovaus.com">Trova</a> is a social network that helps property managers improve tenant satisfaction by fostering a 
              strong sense of community and belonging. Because the team had only a few engineers, I made large contributions to a complete redesign
              of the front end, and significantly expanded back-end functionality.
            </p>
            <p class="subline">Built with Angular, Express.js, and Postgres</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-container">
          <div class="small">
            <img src="https://www.okea.org/wp-content/uploads/2019/10/placeholder.png">
          </div>
          <div class="big">
            <p class="header-sub">Code 4 Community</p>
            <p class="tagline">Contribute to front-end work throughout the school year</p>
            <p class="body">
              <a href="https://c4cneu.com">Code 4 Community</a> is a student-run org at Northeastern University that
              builds websites for free for nonprofit organizations in the Boston area. So far, I've helped complete their <a href="https://c4cneu.com">internal
              website</a>, and have helped with front-end work for Lucy's Love Bus and Speak For The Trees, websites that remain in progress.
            </p>
            <p class="subline">Our tech stack is Vue.js, Spring MVC (Java) and Postgres</p>
          </div>
        </div>
      </div>
    </div>
    <div class="skills">
      <p class="header">My Skills</p>
      <div class="item">
        <div class="item-container">
          <p class="header-sub">On the front-end</p>
          <div class="skill">
            <p class="name">Vue, React, Angular</p>
            <p class="desc">
              My go-to frontend framework. I believe that Vue has the answer to almost any front-end problem. I swear by
              Vue and use it in all of my solo projects, like this one.
            </p>
          </div>
          <div class="skill">
            <p class="name">Express.js RESTful API</p>
            <p class="desc">
              My go-to back-end framework, and suitable for nearly any modern web app. I learned it by using it in several of my personal projects.
              I also gained significant experience while working on Trova's backend.
            </p>
          </div>
          <div class="skill">
            <p class="name">PHP</p>
            <p class="desc">
              Though hard to come by nowadays, PHP is a classic. Appropriately, it was the first back-end language that I picked up.
              My first full-stack projects that I made in high school were built with PHP. 
            </p>
          </div>
          <div class="skill">
            <p class="name">Databases/SQL</p>
            <p class="desc">
              I believe in flexible and sensible data structures. MongoDB is my go-to database management system, but any document-based database makes
              sense for most projects and is far easier to reason about. All my personal projects use one.
            </p>
          </div>
          <div class="skill">
            <p class="name">Cloud Computing</p>
            <p class="desc">
              Classics, like PHP. Postgres is my go-to relational database management system, and I've worked with it in various different
              projects, including Trova and some Code 4 Community projects.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <p class="header">Still interested?</p>
      <p class="text">
        If you have a business-related inquiry, click <router-link to="/inquiries">here</router-link> to get in touch.
        If you want to know more about my work, click <router-link to="/projects">here</router-link> for more.
        And if you want the last five minutes of your life back, you're out of luck.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      meString: 'Hi, I\'m Bill.',
      letterTimeMap: [0, 100, 100, 200, 100, 50, 100, 100, 100, 100, 100, 50, 50],
      time: 0,
      fullTypingText: "Clocking in at 140 words per minute, I'm in the top 0.1% of typists around the world. The average word has five letters, so I can type about 12 characters per second. That's the speed you're watching now.",
      typingTextIndex: 0,
      typing: false,
      typed: false
    }
  },
  created() {
    const self = this;
    window.addEventListener('scroll', this.handleScroll);
    setInterval(() => {
      self.time += 50;
    }, 50);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    startTyping() {
      const self = this;
      let typingInterval = setInterval(() => {
        if (self.typingTextIndex == self.fullTypingText.length) {
          self.typing = false;
          clearInterval(typingInterval);
        } else {
          self.typingTextIndex++;
        }
      }, 83);
    },
    
    handleScroll: function() {
      if (window.scrollY > 4700 && window.scrollY < 5500 && !this.typing) {
        this.typing = true;
        this.typed = true;
        this.typingTextIndex = 0;
        this.startTyping();
      }
    }
  },
  computed: {
    text() {
      let totalTime = 0;
      let i = 0;
      for (i; i < this.letterTimeMap.length; i++) {
        totalTime += this.letterTimeMap[i];
        if (totalTime >= this.time) break;
      }
      return this.meString.substring(0, i);
    },

    showCursor() {
      return Math.floor(this.time / 500) % 2 === 0;
    },

    typingText() {
      if (this.typingTextIndex === 0) {
        return this.typed ? "" : "Keep scrolling...";
      }
      return this.fullTypingText.substring(0, this.typingTextIndex);
    }
  }
}
</script>

<style scoped lang="scss">

h1 {
  padding-right: 4px; // makes room for cursor
  display: inline-block;
  border-right: 2px solid #F8F8F8;
}

.header {
  font-size: 64px;
  font-family: 'Poppins';
  font-weight: 200;
}

.header-sub {
  font-size: 32px;
  font-family: 'Poppins';
  font-weight: 300;
  margin: 0.5em 0;
}

.home {
  width: 100%;
  top: 0;
  z-index: 1;

  .bio-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    background: #F8F8F8;
  }

  .bio {
    max-width: 50%;
    max-height: 40%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    display: flex;

    .left {
      width: 40%;
      position: relative;

      img {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }

    .right {
      width: 100%;
      padding: 0 3em;
      
      .intro {
        font-size: 24px;
        font-family: 'Poppins';
      }
    }
  }

  .portfolio {
    width: 100%;
    margin: auto;

    .item {
      padding: 6em 0;

      &:nth-child(even) {
        background: #F8F8F8;

        .item-container {
          flex-direction: row !important;
        }
      }

      .item-container {
        flex-direction: row-reverse;
        width: 60%;
        margin: auto;
        padding: 3em 0;
        display: flex;

        .small {
          width: 40%;
          position: relative;

          img {
            width: 100%;
            max-width: 100%;
            width: auto;
            height: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
        }

        .big {
          width: 100%;
          padding: 0 3em;

          .tagline {
            color: #555555;
            font-family: 'Poppins';
            font-size: 20px;
          }

          .body {
            font-size: 16px;
            line-height: 1.5em;
          }

          .subline {
            font-size: 16px;
            font-style: italic;
          }
        }
      }
    }
  }

  .skills {
    width: 100%;

    .item {
      padding: 5em 0;

      &:nth-child(even) {
        background: #F2F2F2;

        .item-container {
          flex-direction: row !important;
        }
      }

      .item-container {
        width: 60%;
        margin: auto;

        .skill {
          margin: 3em 0;

          .name {
            text-align: left;
            font-family: 'Poppins';
            font-size: 24px;
            margin: 0.2em 0;
          }

          .desc {
            text-align: left;
            display: block;
            margin-left: 2em;
            line-height: 1.5em;
          }
        }
      }
    }
  }

  .more {
    background: #F2f2f2;
    padding: 5em 0;

    .header {
      font-size: 48px;
    }

    .text {
      display: block;
      width: 50%;
      margin: auto;
      line-height: 1.5em;
    }
  }
}
</style>
