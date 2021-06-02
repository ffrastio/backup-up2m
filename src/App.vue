<template>
  <div id="app">
    <Navbar/>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/layouts/Navbar.vue'
import Footer from '@/components/layouts/Footer.vue'

export default {
 name: "App",
 components: {
   Navbar,
   Footer
 }
};
</script>

<style>
#app {
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
