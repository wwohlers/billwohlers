<template>
  <div>
    <div v-if="name">Test
      <C4C v-if="name === 'c4c'"></C4C>
      <HuskyHusky v-if="name === 'huskyhusky'"></HuskyHusky>
      <Trova v-if="name === 'trova'"></Trova>
    </div>
    <div v-else>
      <div class="wrapper">
        <h1>My Projects</h1>
        <div class="project-list">
          <div class="project-list-item" @click="go('trova')">
            <img src="../assets/trova_logo.png">
            <p class="desc">Intern &mdash; startup company</p>
            <p class="time">Apr 2020 &mdash; </p>
          </div>
          <div class="project-list-item" @click="go('c4c')">
            <img src="../assets/c4c_logo.png">
            <p class="desc">Developer &mdash; student-run organization</p>
            <p class="time">Sept 2019 &mdash; </p>
          </div>
          <div class="project-list-item" @click="go('huskyhusky')">
            <img src="../assets/huskyhusky_logo.png">
            <p class="desc">Solo project</p>
            <p class="time">Jan 2019 &mdash; Apr 2019</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C4C from '../components/projects/c4c';
import HuskyHusky from '../components/projects/huskyhusky';
import Trova from '../components/projects/trova';

export default {
  name: 'Projects',
  props: {
    name: String,
  },
  components: {
    C4C,
    HuskyHusky,
    Trova,
  },
  methods: {
    go(name) {
      this.$router.push("/projects/" + name);
    }
  }
}
</script>

<style lang="scss">
.project {
  margin-top: 4em;

  .parallax {
    min-height: 0 !important; // overrides default parallaxy library css
    height: 20vh !important;
  }

  .sub-title-wrapper {
    width: 100%;
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
          max-width: 100%;
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
}

.project-list {

  .project-list-item {
    width: 90%;
    max-width: 600px;
    margin: 6em auto;
    display: flex;
    flex-direction: column;

    background: #F4F4F4;
    border-radius: 4px;
    box-shadow: 0 0 12px 4px #DDD;
    padding: 2em 0;
    cursor: pointer;
    
    &:hover {
      transition: 1s;
      transform: scale(1.05);
    }

    img {
      width: 60%;
      margin: auto;
      margin-bottom: 1em;
    }

    .desc {
      font-size: 24px;
    }

    .time {
      color: #888888;
      font-size: 18px;
      margin: 0;
    }
  }
}
</style>