<template>
  <div id="app">
    <div class="main">
      <div id="nav">
        <div class="nav-wrapper">
          <div class="left">
            <router-link to="/">Bill Wohlers</router-link>
          </div>
          <div class="right">
            <div class="vertical-center">
              <router-link to="/projects">Projects</router-link>
              <router-link to="/inquiries">Inquiries</router-link>
            </div>
          </div>
        </div>
      </div>
      <router-view/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Footer,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;1,300;1,400&family=Poppins:wght@200;300&display=swap');
* {
 box-sizing: border-box;
}
*:before,
*:after {
 box-sizing: border-box;
}

#app {
  font-family: "Merriweather";
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  height: 100%;
  position: relative;
  margin: 0;
}

*:focus {
    outline: none;
}

.main {
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 10em; /* height of your footer */
  
  #nav {
    background: white;
    position: fixed;
    box-shadow: 0 1px 10px #CCCCCC;
    width: 100%;
    z-index: 10;
    text-align: left;

    .nav-wrapper {
      display: flex;
      flex-direction: row;
      padding: 1em 4em;

      a {
        display: inline-block;
        margin: 0 1em;
        font-family: 'Poppins';
        font-size: 18px;
        text-decoration: none;
        border-bottom: none;
        color: #2c3e50;

        &:hover {
          color: maroon;
          border-bottom: 1px solid maroon;
        }
      }

      .left {
        width: 50%;

        a {
          font-size: 24px;
        }
      }

      .right {
        width: 50%;
        text-align: right;
        position: relative;

        .vertical-center {
          width: 100%;
          height: 24px;
        }
      }
    }
  }
}

.wrapper {
  margin-top: 6em;
}

.vertical-center {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.container {
  width: 80%;
}

input, textarea {
  font-size: 20px;
  padding: 6px 8px;
  font-family: 'Poppins';
  border: 1px solid #CCC;
  border-radius: 2px;
}

textarea {
  font-size: 18px;
  width: 50%;
}

button {
  background: #EEE;
  font-family: 'Poppins';
  font-size: 18px;
  padding: 6px 2em;
  border: 1px solid #DDD;
  border-radius: 4px;
  cursor: pointer;
}

.footer {
  background: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 10;
  height: 10em;
  padding: 4em 0;
  
  a {
    display: inline-block;
    margin: 0 1em;
    font-family: 'Poppins';
    font-size: 18px;
    text-decoration: none;
    border-bottom: 1px solid #F8F8F8;
    color: #2c3e50;

    &:hover {
      color: maroon;
      border-bottom: 1px solid maroon;
    }
  }

  .copyright {
    font-family: 'Poppins';
    font-size: 16px;
    color: gray;
  }
}

h1 {
  font-size: 3em;
  font-family: 'Poppins';
  display: block;
  font-weight: 200;
  margin: 0;

  &.cursor {
    border-right: 2px solid #2c3e50;
  }
}

a {
  border-bottom: 1px solid #2c3e50;
  text-decoration: none;
  color: #2c3e50;

  &:hover {
    color: maroon;
    border-bottom: 1px solid maroon;
  }
}

.dim {
  filter: brightness(75%);
}


</style>
