<template>
  <div class="home" @scroll.passive="handleScroll">
    <div class="bio-wrapper">
      <div class="bio">
        <div class="left">
          <img src="../assets/me.jpg">
        </div>
        <div class="right">
          <h1 :class="{ cursor: showCursor }">{{ text }}<img v-if="showReplay" @click="replay" class="replay" src="../assets/replay.svg" /></h1>
          <p class="intro">
            I'm a full stack web developer and undergraduate computer science student at Northeastern University.
            Keep scrolling to learn more about me and the work that I've done.
          </p>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <p class="header">What I've Built</p>
      <div class="item">
        <div class="item-container">
          <div class="small">
            <img src="../assets/huskyhusky_logo.png">
          </div>
          <div class="big">
            <p class="header-sub">The Husky Husky</p>
            <p class="tagline">A personal project built for a school organization</p>
            <p class="body">
              When I first stumbled upon the Husky Husky's old website, I immediately saw an opportunity to improve their web presence.
              In spring 2020, I built <a href="https://thehuskyhusky.com">their new site</a>, which takes care of content management in a way 
              that makes sense for them while showcasing a simple but expressive design.
            </p>
            <p class="subline">
              Built with Vue.js, Express.js, and MongoDB on AWS
            </p>
            <button class="read-more" @click="$router.push('/projects/huskyhusky')">Read More <span class="bounce">>></span></button>
        </div>
        </div>
      </div>
      <div class="item">
        <div class="item-container">
          <div class="small">
            <img src="../assets/f.e_logo.svg">
          </div>
          <div class="big">
            <p class="header-sub">floor.exchange</p>
            <p class="tagline">Personal project</p>
            <p class="body">
              During quarantine, in search of an idea for a personal project, I envisioned a social network based around stocks and the stock market. Enter <a href="https://floor.exchange" target="_blank">floor.exchange</a>, a web platform where users can trade stocks using virtual currency and discuss stock market news in a reddit-style forum.
            </p>
            <p class="subline">Built with Vue, Express.js, and Postgres on AWS</p>
            <button class="read-more" @click="$router.push('/projects/floor-exchange')">Read More <span class="bounce">>></span></button>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-container">
          <div class="small">
            <img src="../assets/typeaway_banner.png">
          </div>
          <div class="big">
            <p class="header-sub">Typeaway.io</p>
            <p class="tagline">Personal project</p>
            <p class="body">
              I love typing, and I especially love one-minute typing tests, like 10FastFingers.
              Unhappy with existing sites, I set out to build my own simple front-end app that
              did typing tests right (in my humble opinion). <a href="https://typeaway.io"
                                                                target="_blank">Try it
              out for yourself!</a> My record is 150 WPM.
            </p>
            <p class="subline">Built with Vue and hosted on AWS S3</p>
            <button class="read-more" @click="$router.push('/projects/typeaway')">Read More <span
                class="bounce">>></span></button>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-container">
          <div class="small">
            <img src="../assets/trova_logo.png">
          </div>
          <div class="big">
            <p class="header-sub">Trova</p>
            <p class="tagline">Internship as a full-stack engineer</p>
            <p class="body">
              <a href="https://trovaus.com">Trova</a> is a social network that helps property managers improve tenant satisfaction by fostering a 
              strong sense of community and belonging. Because the team had only a few engineers, I made large contributions to a complete redesign
              of the front end, and significantly expanded back-end functionality.
            </p>
            <p class="quote">
              <span class="quote-content">"Bill joined Trova as a full-stack engineer and immediately exceeded our expectations. I was extremely impressed by his business acumen, constructive feedback, and his ability to deliver high-quality code... You can’t teach hustle or passion and Bill has both."</span>
              <span class="quote-attr">&mdash; Mike Fodera, CEO of Trova</span>
            </p>
            <button class="read-more" @click="$router.push('/projects/trova')">Read More <span class="bounce">>></span></button>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-container">
          <div class="small">
            <img src="../assets/c4c_logo.png">
          </div>
          <div class="big">
            <p class="header-sub">Code 4 Community</p>
            <p class="tagline">Volunteer full-stack developer</p>
            <p class="body">
              <a href="https://c4cneu.com">Code 4 Community</a> is a student-run org at Northeastern University that
              builds websites for free for nonprofit organizations in the Boston area. In fall 2019, I led the front-end development of their <a href="https://c4cneu.com">internal
              website</a>, and I've since contributed full-stack to other web projects for various nonprofits in the area.
            </p>
            <p class="subline">A typical tech stack at C4C is React.js, Vert.x (Java) and Postgres</p>
            <button class="read-more" @click="$router.push('/projects/c4c')">Read More <span class="bounce">>></span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="skills">
      <p class="header">How I Built Them</p>
      <div class="item">
        <div class="item-container">
          <div class="skill">
            <p class="name">Vue, React, Angular</p>
            <p class="desc">
              I've got extensive experience in all three, but Vue is my go-to frontend framework.
              I believe that Vue has the answer to almost any front-end problem. I swear by Vue
              and use it in all of my solo projects, like this one.
            </p>
          </div>
          <div class="skill">
            <p class="name">Node.js</p>
            <p class="desc">
              Node.js is my go-to for building web applications. I swear by Typescript and npm,
              which have both helped me build complex, maintainable, and scalable RESTful APIs
              using Express.js and Nest.js, among others. I love the power and versatility that
              Javascript offers when it's done right.
            </p>
          </div>
          <div class="skill">
            <p class="name">Databases</p>
            <p class="desc">
              Picking a database is like picking a programming language &mdash; it all depends on
              the context and use case. For highly complex data structures, I tend to go with
              MongoDB because of close integration with Javascript. In other cases, I'll use an SQL
              database like Postgres.
            </p>
          </div>
          <div class="skill">
            <p class="name">AWS</p>
            <p class="desc">
              Designing and programming an app are just one part of the process. To make the app
              available, you also have to configure and deploy the infrastructure that powers it.
              My projects have used S3, Cloudfront, Route 53, Lambda, EC2, ALB, and RDS. Along
              the way, I've learned a lot about the fundamentals of computers and networking, and
              gained a proficiency with Linux systems.
            </p>
          </div>
          <div class="skill">
            <p class="name">...and plenty more</p>
            <p class="desc">
              Those are my biggest strengths as a developer. If you have further questions, <router-link to="/inquiries">drop me a line.</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <p class="header">More questions?</p>
      <p class="text">
        If you have a business inquiry or any further questions, <router-link to="/inquiries">click here</router-link> for my contact information. To learn more about me and my projects, click <router-link to="/projects">here</router-link>. And if you want the last minute of your life back, you're out of luck.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  title: "Home | Bill Wohlers",
  data() {
    return {
      meString: 'Hi, I\'m Bill.',
      letterTimeMap: [0, 100, 100, 200, 100, 50, 100, 100, 100, 100, 100, 50, 50],
      time: 0,
      fullTypingText: "Clocking in at 140 words per minute, I'm in the top 0.1% of typists around the world. The average word has five letters, so I can type about 12 characters per second. That's the speed you're watching now.",
      typingTextIndex: 0,
      typing: false,
      typed: false,
      showReplay: false,
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
    },

    replay() {
      this.showReplay = false;
      this.time = 0;
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
  },

  watch: {
    text: function(val) {
      if (val.length === this.meString.length) {
        setTimeout(() => this.showReplay = true, 500);
      }
    }
  }
}
</script>

<style scoped lang="scss">

h1 {
  padding-right: 4px;
  display: inline-block;
  border-right: 2px solid #F8F8F8;
  position: relative;

  &.cursor {
    border-right: 2px solid #2c3e50;
  }
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
      width: 30%;
      position: relative;

      img {
        max-height: 100%;
        max-width: 100%;
        border-radius: 50%;
        width: auto;
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
          flex-direction: row;
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

          .quote {
            font-size: 15px;
            font-style: italic;
            line-height: 1.5em;
            color: #666;
            margin: 1.5em 0 2.5em 0;

            .quote-attr {
              display: block;
              margin-top: 1em;
              float: right;
            }
          }

          .read-more {
            background: maroon;
            color: white;
            text-transform: uppercase;
            font-size: 15px;
            padding: 6px 1em;
            border: none;
            box-shadow: 0 0 10px #CCC;

            .bounce {
              display: inline-block;
              transition: 0.5s;
            }

            &:hover {
              box-shadow: 0 0 10px 4px #CCC;

              .bounce {
                margin-left: 0.5em;
              }
            }
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
          flex-direction: row;
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

  .replay {
    width: 0.4em;
    height: 0.4em;
    position: absolute;
    right: -0.5em;
    top: 0;
    cursor: pointer;
  }

  .more {
    background: #FFF;
    padding: 5em 0;
    border-bottom: 1px solid #F2F2F2;

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

@media only screen and (max-width: 1000px) {
  .home {
    .bio {
      max-width: 95%;
      max-height: 60%;

      .left {
        display: none;
      }

      .right {
        padding: 0 1em;
      }
    }

    .portfolio {
      .item {
        padding: 2em 0;

        .item-container {
          width: 95%;
          flex-direction: column !important;

          .small {
            width: 90%;
            margin: auto;

            img {
              width: 30%;
              position: static;
            }
          }

          .big {
            padding: 0 1em;
          }
        }
      }
    }

    .skills > .item {
      padding: 2em 0;

      .item-container {
        width: 85%;
      }
    }

    .more {
      .text {
        width: 80%;
      }
    }
  }
}
</style>
