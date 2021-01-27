import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './Router/Router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/styles/styles.scss'
import vWow from 'v-wow'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueYoutube from 'vue-youtube'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
 
Vue.use(VueYoutube)
Vue.use(vWow);
Vue.use(AOS);

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
