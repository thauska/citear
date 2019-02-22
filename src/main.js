import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import VueParticles from 'vue-particles';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.use(VueParticles);

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
    window.app = app;
}
