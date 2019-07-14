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
                    Editar anotação<br/>
                    <small>Altere uma anotação exitente</small>
                </div><br /><br />

                <form v-on:submit.prevent="alterar()">
                  <div class="form-group">
                      <label for="titulo">Título</label>
                      <input v-model="titulo" id="titulo" class="form-control"/>
                  </div>

                  <div class="form-group">
                      <label for="categoria">Categoria</label>
                      <input v-model="categoria" id="categoria" class="form-control"/>
                  </div>

                  <div class="form-group">
                      <label for="conteudo">Conteúdo</label>
                      <textarea v-model="conteudo" id="conteudo" class="form-control"></textarea>
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

  data () {
    return {
      titulo: '',
      categoria: '',
      conteudo: ''
    }
  },

  created: function () {
    this.$store.dispatch('ler_anotacao', { id: this.$route.params.id })
      .then((data) => {
          this.titulo = data.titulo
          this.categoria = data.categoria
          this.conteudo = data.conteudo
      }).catch(err => alert(err))
  },

  methods: {
    alterar: function () {
      let titulo = this.titulo
      let categoria = this.categoria
      let conteudo = this.conteudo
      let userId = this.$store.getters.loggedData.uid
      let id = this.$route.params.id
      this.$store.dispatch('alterar_anotacao', { titulo, categoria, conteudo, userId, id})
        .then(() => this.$router.push('/'))
        .catch(err => alert(err))
    }
  }
}
</script>

<style>

</style>
