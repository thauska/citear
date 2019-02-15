import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Events from './views/Events.vue';
import Projects from './views/Projects.vue';
import Gallery from './views/Gallery.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
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
            component: Projects
        },
        {
            path: '/',
            name: 'gallery',
            component: Gallery
        },
        {
            path: '/',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});
