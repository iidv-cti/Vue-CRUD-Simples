<template>
  <div id="app">
    <Header />
    <div class="container">
        <div class="row">
            <div class="col" style="height:50px;">
            </div>
        </div>
        <div class="row justify-content-md-center text-left">
            <div class="col col-md-6">
                <div class="display-4">
                    Registro<br/>
                    <small>Cadastre sua conta</small>
                </div><br /><br />

                <form @submit.prevent="register">
                  <div class="form-group">
                      <label for="email">E-mail</label>
                      <input type="email" v-model="email" id="email" class="form-control"/>
                  </div>

                  <div class="form-group">
                      <label for="confirm.email">Confirmação de E-mail</label>
                      <input type="email" v-model="confirm_email" id="confirm.email" class="form-control"/>
                  </div>

                  <div class="form-group">
                      <label for="password">Senha</label>
                      <input type="password" v-model="password" id="password" class="form-control"/>
                  </div>

                  <div class="form-group">
                      <label for="confirm.password">Confirmação de Senha</label>
                      <input type="password" v-model="confirm_password" id="confirm.password" class="form-control"/>
                  </div>

                  <input type="submit" class="btn btn-primary" />
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    register: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('register', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
</style>
