import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/citear/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/integrantes',
            name: 'members',
            component: () => import('./views/Members.vue')
        },
        {
            path: '/eventos',
            name: 'events',
            component: () => import('./views/Events.vue')
        },
        {
            path: '/producao',
            name: 'producao',
            component: () => import('./views/Producao.vue')
        },
        {
            path: '/galeria',
            name: 'gallery',
            component: () => import('./views/Gallery.vue')
        },
        {
            path: '/contatos',
            name: 'contact',
            component: () => import('./views/Contact.vue')
        }
    ]
});
