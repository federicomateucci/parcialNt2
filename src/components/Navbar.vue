<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/lista">
              <a class="nav-link" href="#">Lista Gastos</a>
            </router-link>
          </li>
         <li class="nav-item">
            <router-link to="/preguntas">
              <a class="nav-link" href="#">choice</a>
            </router-link>
          </li>
        </ul>
        <br>
        <!-- <Login :valido="validLog"/> -->
      </div>
    </nav>
  </section>
</template>

<script>
// import Login from './Login.vue'
export default {
  name: "navbar",
  props: [],
  components:{
  // Login     
  },
  mounted() {},
  data() {
    return {
      
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-navbar {
}
</style>
