import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Events from './views/Events.vue';

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
            path: '/',
            name: 'events',
            component: Events
        },
        {
            path: '/',
            name: 'projects',
            component: () => import('./views/Projects.vue')
        },
        {
            path: '/',
            name: 'gallery',
            component: () => import('./views/Gallery.vue')
        },
        {
            path: '/',
            name: 'contact',
            component: () => import('./views/Contact.vue')
        }
    ]
});

export default router;
