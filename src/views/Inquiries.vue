<template>
  <div class="wrapper">
    <h1>Inquiries</h1>
    <div class="banner">
      <p>
        Use this form for any inquiries about me and my work and for business opportunities or offers. 
        <br/><br/>
        If you've got a cause that I'm passionate about, I may be able to make you a custom website at little or no cost. If you would like me to consider such a project, use this form to let me know.
      </p>
    </div>
    <div class="form">
      <form v-on:submit.prevent>
        <label class="control">
          <span class="label">Name</span>
          <input type="text" placeholder="Name" v-model="name"/>
        </label>
        <label class="control">
          <span class="label">Email</span>
          <input type="text" placeholder="Email" v-model="email"/>
        </label>
        <label class="control">
          <span class="label">Message</span>
          <textarea rows="6" v-model="message"></textarea>
        </label>
        <button @click="submit()">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inquiries',
  title: "Inquiries | Bill Wohlers",
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    submit() {
      console.log(this.name, this.email, this.message);
    }
  }
}
</script>

<style lang="scss">
.banner {
  margin-top: 2em;
  width: 100%;
  background: #EEE;
  padding: 4em 0;

  p {
    width: 70%;
    min-width: 600px;
    margin: auto;
    font-family: 'Poppins';
    font-size: 20px;
  }
}

.form {
  width: 50%;
  min-width: 600px;
  max-width: 1000px;
  margin: auto;
  text-align: left;
}

.control {
  display: block;
  margin: 2em 0;

  .label {
    font-size: 14px;
    font-family: 'Poppins';
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5em;
    color: #777;
    cursor: pointer;
  }
}
</style>