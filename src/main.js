import '@babel/polyfill';
import Vue from 'vue';
import '@/plugins/vuetify';
import App from '@/App.vue';
import router from '@/router';
import VueParticles from 'vue-particles';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.use(VueParticles);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
