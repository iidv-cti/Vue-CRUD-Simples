webpackJsonp([1],{ATpm:function(t,a){},HaCZ:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App"},i,!1,function(t){e("VP80")},null,null).exports,n=e("/ocq"),r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Anotações")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[1==t.isLoggedIn?e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"anotacoes.ver"}}},[t._v("Ver anotações")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"anotacoes.adicionar"}}},[t._v("Adicionar anotações")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Sair da conta")])])]):e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Página inicial")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[t._v("Entrar")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"}}},[t._v("Registrar")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var c=e("VU/8")({computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push("/login")})}}},r,!1,function(t){e("NrKt")},null,null).exports,l={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{height:"100px"}})]),this._v(" "),a("div",{staticClass:"row justify-content-md-center"},[a("div",{staticClass:"col col-md-6"},[a("div",{staticClass:"display-1"},[this._v("\n                  Sistema de anotações"),a("br")]),a("br"),this._v(" "),a("div",{staticClass:"h1"},[this._v("\n                  Sistema de anotações desenvolvido com Vue.js, Firebase, SASS, Bootstrap, jQuery e disponível no GitHub.\n              ")])])])])}]};var u=e("VU/8")({name:"App"},l,!1,function(t){e("gA46")},null,null).exports,d={data:{email:"",password:""},methods:{login:function(){var t=this,a=this.email,e=this.password;this.$store.dispatch("login",{email:a,password:e}).then(function(){return t.$router.push("/")}).catch(function(t){return console.log(t)})}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),t._v(" "),e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-md-center text-left"},[e("div",{staticClass:"col col-md-6"},[t._m(1),e("br"),e("br"),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.login(a)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("E-mail")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Senha")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),t._v(" "),e("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Enviar"}})])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{height:"100px"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"display-4"},[this._v("\n                  Login"),a("br"),this._v(" "),a("small",[this._v("Entre em sua conta")])])}]};var v=e("VU/8")(d,m,!1,function(t){e("t8gl")},null,null).exports,f={methods:{register:function(){var t=this,a=this.email,e=this.password;this.$store.dispatch("register",{email:a,password:e}).then(function(){return t.$router.push("/")}).catch(function(t){return console.log(t)})}}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),t._v(" "),e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-md-center text-left"},[e("div",{staticClass:"col col-md-6"},[t._m(1),e("br"),e("br"),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.register(a)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("E-mail")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"confirm.email"}},[t._v("Confirmação de E-mail")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm_email,expression:"confirm_email"}],staticClass:"form-control",attrs:{type:"email",id:"confirm.email"},domProps:{value:t.confirm_email},on:{input:function(a){a.target.composing||(t.confirm_email=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("Senha")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"confirm.password"}},[t._v("Confirmação de Senha")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm_password,expression:"confirm_password"}],staticClass:"form-control",attrs:{type:"password",id:"confirm.password"},domProps:{value:t.confirm_password},on:{input:function(a){a.target.composing||(t.confirm_password=a.target.value)}}})]),t._v(" "),e("input",{staticClass:"btn btn-primary",attrs:{type:"submit"}})])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{height:"50px"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"display-4"},[this._v("\n                  Registro"),a("br"),this._v(" "),a("small",[this._v("Cadastre sua conta")])])}]};var h=e("VU/8")(f,p,!1,function(t){e("y6Vx")},null,null).exports,_={data:function(){return this.$store.dispatch("load_anotations"),{}},computed:{notations:function(){return this.$store.getters.anotations}},methods:{deleteItem:function(t){var a=this;confirm("Deseja excluir esse item?")&&this.$store.dispatch("excluir_anotacao",{id:t}).then(function(){a.$store.dispatch("load_anotations"),alert("Excluído.")}).catch(function(){alert("Não foi possível excluir esse item.")})}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),t._v(" "),e("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"row"},t._l(t.notations,function(a){return e("div",{key:a,staticClass:"col col-md-4 text-left"},[e("div",{staticClass:"card",staticStyle:{width:"100%"}},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.titulo))]),t._v(" "),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(a.categoria))]),t._v(" "),e("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(e){return t.deleteItem(a.id)}}},[e("i",{staticClass:"material-icons"},[t._v("delete")])]),t._v(" "),e("router-link",{staticClass:"card-link",attrs:{to:{name:"anotacoes.editar",params:{id:a.id}}}},[e("i",{staticClass:"material-icons"},[t._v("edit")])])],1)])])}),0)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{height:"50px"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row justify-content-md-center text-left"},[a("div",{staticClass:"col col-md-6"},[a("div",{staticClass:"h1"},[this._v("\n                  Todas suas anotações"),a("br"),this._v(" "),a("small",[this._v("Veja suas anotações na nuvem")])]),a("br"),a("br")])])}]};var C=e("VU/8")(_,g,!1,function(t){e("RcPj")},null,null).exports,b={methods:{adicionar:function(){var t=this,a=this.titulo,e=this.categoria,s=this.conteudo,i=this.$store.getters.loggedData.uid;this.$store.dispatch("adicionar_anotacao",{titulo:a,categoria:e,conteudo:s,userId:i}).then(function(){return t.$router.push("/")}).catch(function(t){return alert(t)})}}},w={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),t._v(" "),e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-md-center text-left"},[e("div",{staticClass:"col col-md-6"},[t._m(1),e("br"),e("br"),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.adicionar()}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"titulo"}},[t._v("Título")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.titulo,expression:"titulo"}],staticClass:"form-control",attrs:{type:"titulo",id:"titulo"},domProps:{value:t.titulo},on:{input:function(a){a.target.composing||(t.titulo=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"categoria"}},[t._v("Categoria")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoria,expression:"categoria"}],staticClass:"form-control",attrs:{type:"categoria",id:"categoria"},domProps:{value:t.categoria},on:{input:function(a){a.target.composing||(t.categoria=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"conteudo"}},[t._v("Conteúdo")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.conteudo,expression:"conteudo"}],staticClass:"form-control",attrs:{type:"conteudo",id:"conteudo"},domProps:{value:t.conteudo},on:{input:function(a){a.target.composing||(t.conteudo=a.target.value)}}})]),t._v(" "),e("input",{staticClass:"btn btn-primary",attrs:{type:"submit"}})])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{height:"50px"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"h1"},[this._v("\n                  Nova anotação"),a("br"),this._v(" "),a("small",[this._v("Adicione uma anotação ao sistema")])])}]};var y=e("VU/8")(b,w,!1,function(t){e("ATpm")},null,null).exports,x={data:function(){return{titulo:"",categoria:"",conteudo:""}},created:function(){var t=this;this.$store.dispatch("ler_anotacao",{id:this.$route.params.id}).then(function(a){t.titulo=a.titulo,t.categoria=a.categoria,t.conteudo=a.conteudo}).catch(function(t){return alert(t)})},methods:{alterar:function(){var t=this,a=this.titulo,e=this.categoria,s=this.conteudo,i=this.$store.getters.loggedData.uid,o=this.$route.params.id;this.$store.dispatch("alterar_anotacao",{titulo:a,categoria:e,conteudo:s,userId:i,id:o}).then(function(){return t.$router.push("/")}).catch(function(t){return alert(t)})}}},$={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),t._v(" "),e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-md-center text-left"},[e("div",{staticClass:"col col-md-6"},[t._m(1),e("br"),e("br"),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.alterar()}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"titulo"}},[t._v("Título")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.titulo,expression:"titulo"}],staticClass:"form-control",attrs:{id:"titulo"},domProps:{value:t.titulo},on:{input:function(a){a.target.composing||(t.titulo=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"categoria"}},[t._v("Categoria")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoria,expression:"categoria"}],staticClass:"form-control",attrs:{id:"categoria"},domProps:{value:t.categoria},on:{input:function(a){a.target.composing||(t.categoria=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"conteudo"}},[t._v("Conteúdo")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.conteudo,expression:"conteudo"}],staticClass:"form-control",attrs:{id:"conteudo"},domProps:{value:t.conteudo},on:{input:function(a){a.target.composing||(t.conteudo=a.target.value)}}})]),t._v(" "),e("input",{staticClass:"btn btn-primary",attrs:{type:"submit"}})])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{height:"50px"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"h1"},[this._v("\n                  Editar anotação"),a("br"),this._v(" "),a("small",[this._v("Altere uma anotação exitente")])])}]};var E=e("VU/8")(x,$,!1,function(t){e("HaCZ")},null,null).exports,S=e("kxiW"),A=e.n(S);e("dih4");A.a.initializeApp({apiKey:"AIzaSyBbNn4K0uIlfqMpfC2BsQYH0QLSUPSSeZw",authDomain:"notes-fb04b.firebaseapp.com",databaseURL:"https://notes-fb04b.firebaseio.com",projectId:"notes-fb04b",storageBucket:"",messagingSenderId:"354686202649",appId:"1:354686202649:web:026d934be61d3ca1"}),s.a.component("Header",c),s.a.use(n.a);var k=new n.a({routes:[{path:"/",name:"home",component:u,meta:{onlyGuests:!0}},{path:"/login",name:"login",component:v,meta:{onlyGuests:!0}},{path:"/register",name:"register",component:h,meta:{onlyGuests:!0}},{path:"/dashboard",name:"anotacoes.ver",component:C,meta:{requiresAuth:!0}},{path:"/anotacoes/adicionar",name:"anotacoes.adicionar",component:y,meta:{requiresAuth:!0}},{path:"/anotacoes/:id/editar",name:"anotacoes.editar",component:E,meta:{requiresAuth:!0}}]});k.beforeEach(function(t,a,e){var s=A.a.auth().currentUser,i=t.matched.some(function(t){return t.meta.requiresAuth}),o=t.matched.some(function(t){return t.meta.onlyGuests});i&&!s?e("/login"):o&&s?e("/dashboard"):e()});var P=k,N=e("//Fk"),I=e.n(N),V=e("NYxO");e("881v");s.a.use(V.a);var j=new V.a.Store({state:{auth:0,status:"",anotations:[]},mutations:{update_auth:function(t){t.auth=A.a.auth().currentUser},auth_request:function(t){t.status="loading"},auth_success:function(t,a){t.status="success",t.auth=A.a.auth().currentUser},auth_error:function(t){t.status="error"},logout:function(t){t.auth=0,t.anotations=[]},add_anotation:function(t,a){t.anotations.push(a)}},actions:{ler_anotacao:function(t,a){t.commit;return new I.a(function(t,e){A.a.firestore().collection("anotacoes").doc(a.id).get().then(function(a){t(a.data())}).catch(function(t){alert(t),e(t)})})},alterar_anotacao:function(t,a){var e=this,s=t.commit;return new I.a(function(t,i){e.state.anotations=[];var o={titulo:a.titulo,categoria:a.categoria,conteudo:a.conteudo,user:a.userId};A.a.firestore().collection("anotacoes").doc(a.id).set(o).then(function(e){alert("alterado"),o.id=a.id,s("add_anotation",o),t()}).catch(function(t){i(t.message)})})},excluir_anotacao:function(t,a){t.commit;return new I.a(function(t,e){A.a.firestore().collection("anotacoes").doc(a.id).delete().then(function(a){t(a)}).catch(function(t){e(t)})})},adicionar_anotacao:function(t,a){var e=this,s=t.commit;return new I.a(function(t,i){e.state.anotations=[];var o={titulo:a.titulo,categoria:a.categoria,conteudo:a.conteudo,user:a.userId};A.a.firestore().collection("anotacoes").add(o).then(function(a){alert("adicionado"),o.id=a.id,s("add_anotation",o),t()}).catch(function(t){i(t.message)})})},load_anotations:function(t,a){var e=this,s=t.commit;return new I.a(function(t,a){e.state.anotations=[],A.a.firestore().collection("anotacoes").where("user","==",e.state.auth.uid).get().then(function(a){a.forEach(function(t){var a=t.data();s("add_anotation",{titulo:a.titulo,categoria:a.categoria,conteudo:a.conteudo,id:t.id})}),t()}).catch(function(t){alert(t.message),a(t)})})},register:function(t,a){var e=t.commit;return new I.a(function(t,s){e("auth_request"),A.a.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(a){alert("registrado"),e("auth_success",a),P.push("/"),t()}).catch(function(t){alert(t.message),s(t)})})},login:function(t,a){var e=t.commit;return new I.a(function(t,s){e("auth_request"),A.a.auth().signInWithEmailAndPassword(a.email,a.password).then(function(a){e("auth_success",a),P.push("/"),t()}).catch(function(t){alert(t.message),s(t)})})},logout:function(t){var a=t.commit;return new I.a(function(t,e){A.a.auth().signOut().then(function(){a("logout"),t()}).catch(function(t){alert("Erro ao sair"),e(t)})})}},getters:{isLoggedIn:function(t){return t.auth?1:0},loggedData:function(t){return t.auth},authStatus:function(t){return t.status},userId:function(t){return t.user.uid},anotations:function(t){return t.anotations}}}),U=e("yviF"),H=e.n(U);s.a.config.productionTip=!1,s.a.prototype.$store=j;var R="";H.a.auth().onAuthStateChanged(function(){R||(j.commit("update_auth"),R=new s.a({el:"#app",router:P,components:{App:o},template:"<App/>"}))})},NrKt:function(t,a){},RcPj:function(t,a){},VP80:function(t,a){},gA46:function(t,a){},t8gl:function(t,a){},y6Vx:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.cabe813137abf944f5b1.js.map