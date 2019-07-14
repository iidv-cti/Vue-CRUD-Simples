import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

// import store from '../stores'
import firebase from 'firebase'

// These imports load individual services into the firebase namespace.
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(Vuex)

const initialState = {
  auth: 0,
  status: '',
  anotations: []
};

const store = new Vuex.Store({
  state: initialState,

  mutations: {
    update_auth (state){
      state.auth = firebase.auth().currentUser
    },

    auth_request (state) {
      state.status = 'loading'
    },

    auth_success (state, user) {
      state.status = 'success'
      state.auth = firebase.auth().currentUser
    },

    auth_error (state) {
      state.status = 'error'
    },

    logout (state) {
      state.auth = 0
      state.anotations = []
    },

    add_anotation (state, notes) {
      state.anotations.push(notes)
    }
  },

  actions: {
    ler_anotacao({commit}, dados){
      return new Promise((resolve, reject) => {
        firebase.firestore().collection('anotacoes').doc(dados.id).get()
        .then((doc) => { resolve(doc.data()) })
        .catch((err) => { alert(err); reject(err) })
      })
    },

    alterar_anotacao ({commit}, dados) {
      return new Promise((resolve, reject) => {
        this.state.anotations = []

        let note = {
          titulo: dados.titulo,
          categoria: dados.categoria,
          conteudo: dados.conteudo,
          user: dados.userId
        }

        firebase.firestore().collection('anotacoes').doc(dados.id).set(note)
          .then((doc) => { alert('alterado'); note.id = dados.id; commit('add_anotation', note); resolve() })
          .catch((err) => { reject(err.message) })
      })
    },

    excluir_anotacao ({commit}, dados){
      return new Promise((resolve, reject) => {
        firebase.firestore().collection('anotacoes').doc(dados.id).delete()
        .then((doc) => {resolve(doc)})
        .catch((err) => {reject(err)})
      })
    },

    adicionar_anotacao ({commit}, dados) {
      return new Promise((resolve, reject) => {
        this.state.anotations = []

        let note = {
          titulo: dados.titulo,
          categoria: dados.categoria,
          conteudo: dados.conteudo,
          user: dados.userId
        }

        firebase.firestore().collection('anotacoes').add(note)
          .then((doc) => { alert('adicionado'); note.id = doc.id; commit('add_anotation', note); resolve() })
          .catch((err) => { reject(err.message) })
      })
    },

    load_anotations ({commit}, user) {
      return new Promise((resolve, reject) => {
        this.state.anotations = []
        
        firebase.firestore().collection('anotacoes')
          .where('user', '==', this.state.auth.uid)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let dados = (doc.data())
              
              commit('add_anotation', {
                titulo: dados.titulo,
                categoria: dados.categoria,
                conteudo: dados.conteudo,
                id: doc.id
              })
            })
            resolve()
          })
          .catch((err) => { alert(err.message); reject(err) })
      })
    },

    register ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then((userData) => { alert('registrado'); commit('auth_success', userData); router.push('/'); resolve() })
          .catch((err) => { alert(err.message); reject(err) })
      })
    },

    login ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then((userData) => { commit('auth_success', userData); router.push('/'); resolve() })
          .catch((err) => { alert(err.message); reject(err) })
      })
    },

    logout ({commit}) {
      return new Promise((resolve, reject) => {
        firebase.auth().signOut()
          .then(() => { commit('logout'); resolve() })
          .catch((err) => { alert('Erro ao sair'); reject(err) })
      })
    }
  },

  getters: {
    isLoggedIn: state => state.auth ? 1 : 0,
    loggedData: state => state.auth,
    authStatus: state => state.status,
    userId: state => state.user.uid,
    anotations: state => state.anotations
  }
})

export default store
