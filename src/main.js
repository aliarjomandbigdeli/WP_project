import Vue from 'vue';
import App from './App'
import router from './router'
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto);

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
