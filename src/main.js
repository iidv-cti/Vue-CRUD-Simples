// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from '@/stores'

// This import loads the firebase namespace.
import firebase from 'firebase/app'

// These imports load individual services into the firebase namespace.
import 'firebase/auth'

Vue.config.productionTip = false
Vue.prototype.$store = store

let app = ''

firebase.auth().onAuthStateChanged(() => {
  /* eslint-disable no-new */
  if (!app) {
    store.commit('update_auth')
    
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
