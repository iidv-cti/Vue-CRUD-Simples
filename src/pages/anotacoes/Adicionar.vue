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
                <div class="h1">
                    Nova anotação<br/>
                    <small>Adicione uma anotação ao sistema</small>
                </div><br /><br />

                <form v-on:submit.prevent="adicionar()">
                  <div class="form-group">
                      <label for="titulo">Título</label>
                      <input type="titulo" v-model="titulo" id="titulo" class="form-control"/>
                  </div>

                  <div class="form-group">
                      <label for="categoria">Categoria</label>
                      <input type="categoria" v-model="categoria" id="categoria" class="form-control"/>
                  </div>

                  <div class="form-group">
                      <label for="conteudo">Conteúdo</label>
                      <textarea type="conteudo" v-model="conteudo" id="conteudo" class="form-control"></textarea>
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
    adicionar: function () {
      let titulo = this.titulo
      let categoria = this.categoria
      let conteudo = this.conteudo
      let userId = this.$store.getters.loggedData.uid
      this.$store.dispatch('adicionar_anotacao', { titulo, categoria, conteudo, userId })
        .then(() => this.$router.push('/'))
        .catch(err => alert(err))
    }
  }
}
</script>

<style>

</style>
