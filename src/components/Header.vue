<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Anotações</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" v-if="isLoggedIn == 1">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'anotacoes.ver'}">Ver anotações</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'anotacoes.adicionar'}">Adicionar anotações</router-link>
                </li>
                <li class="nav-item">
                    <a  class="nav-link" v-on:click="logout">Sair da conta</a>
                </li>
            </ul>
            <ul class="navbar-nav mr-auto" v-else >
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'home'}">Página inicial</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'login'}">Entrar</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'register'}">Registrar</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => { this.$router.push('/login') })
    }
  }
}
</script>

<style>

</style>
