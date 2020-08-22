<template>
  <div class="footer">
    <div class="footer-wrapper">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/inquiries">Inquiries</router-link>
      <br />
      <p class="copyright">
        &copy; {{ year }} Bill Wohlers
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }  
}
</script>