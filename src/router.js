import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
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

export default router;
