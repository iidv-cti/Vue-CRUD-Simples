import Vue from 'vue'
import Router from 'vue-router'

import HeaderTemplate from '@/components/Header'

import IndexPage from '@/pages/Index'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'

import AnotacoesVerPage from '@/pages/anotacoes/Ver'
import AnotacoesAdicionarPage from '@/pages/anotacoes/Adicionar'
import AnotacoesEditarrPage from '@/pages/anotacoes/Editar'

// import store from '../stores'
import firebase from 'firebase'

// These imports load individual services into the firebase namespace.
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyBbNn4K0uIlfqMpfC2BsQYH0QLSUPSSeZw',
  authDomain: 'notes-fb04b.firebaseapp.com',
  databaseURL: 'https://notes-fb04b.firebaseio.com',
  projectId: 'notes-fb04b',
  storageBucket: '',
  messagingSenderId: '354686202649',
  appId: '1:354686202649:web:026d934be61d3ca1'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

Vue.component('Header', HeaderTemplate)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage,
      meta: {
        title: 'Anotações',
        onlyGuests: true
      }
    },

    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        title: 'Login | Anotações',
        onlyGuests: true
      }
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: {
        title: 'Cadastro | Anotações',
        onlyGuests: true
      }
    },

    {
      path: '/dashboard',
      name: 'anotacoes.ver',
      component: AnotacoesVerPage,
      meta: {
        title: 'Dashboard | Anotações',
        requiresAuth: true
      }
    },

    {
      path: '/anotacoes/adicionar',
      name: 'anotacoes.adicionar',
      component: AnotacoesAdicionarPage,
      meta: {
        title: 'Adicionar anotação | Anotações',
        requiresAuth: true
      }
    },
    
    {
      path: '/anotacoes/:id/editar',
      name: 'anotacoes.editar',
      component: AnotacoesEditarrPage,
      meta: {
        title: 'Editar anotação | Anotações',
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const onlyGuests = to.matched.some(record => record.meta.onlyGuests)
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  if (requiresAuth && !currentUser) next('/login')
  else if (onlyGuests && currentUser) next('/dashboard')
  else next()
})

export default router
