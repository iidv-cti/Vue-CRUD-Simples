<template>
  <div id="app">
    <Header />
    <div class="container">
        <div class="row">
            <div class="col" style="height:100px;">
            </div>
        </div>
        <div class="row justify-content-md-center text-left">
            <div class="col col-md-6">
                <div class="display-4">
                    Login<br/>
                    <small>Entre em sua conta</small>
                </div><br /><br />

                <form @submit.prevent='login' >
                  <div class="form-group">
                      <label for="email">E-mail</label>
                      <input type="email" v-model="email" id="email" class="form-control"/>
                  </div>

                  <div class="form-group">
                      <label for="email">Senha</label>
                      <input type="password" v-model="password" id="password" class="form-control"/>
                  </div>

                  <input type="submit" class="btn btn-primary" value="Enviar" />
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data: {
    email: '',
    password: ''
  },

  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
</style>
