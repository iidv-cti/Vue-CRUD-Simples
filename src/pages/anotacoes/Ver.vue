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
                    Todas suas anotações<br/>
                    <small>Veja suas anotações na nuvem</small>
                </div><br /><br />
            </div>
        </div>
        <div class="row">
            <div class="col col-md-3 m-2 text-left" v-bind:key="note" v-for="note in notations">
                <div class="card" style="width: 100%;">
                  <div class="card-body">
                    <h5 class="card-title">{{note.titulo}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{note.categoria}}</h6>
                    <a @click='deleteItem(note.id)' href="#" class="card-link"><i class="material-icons">delete</i></a>
                    <router-link :to="{name:'anotacoes.editar', params:{id:note.id}}" class="card-link"><i class="material-icons">edit</i></router-link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {

  data: function () {
    this.$store.dispatch('load_anotations')
    return {}
  },

  computed: {
    notations: function () { return this.$store.getters.anotations }
  },

  methods: {
    deleteItem: function(id){
      let confirmar = confirm("Deseja excluir esse item?")
      if (confirmar) {
        this.$store.dispatch("excluir_anotacao", {id: id})
        .then(() => {this.$store.dispatch('load_anotations'); alert("Excluído.")})
        .catch(() => {alert("Não foi possível excluir esse item."); })
      }
    }
  }
}
</script>

<style>

</style>
