import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/integrantes',
            name: 'members',
            component: () => import('@/views/Members.vue')
        },
        {
            path: '/linhas-de-pesquisa',
            name: 'linhas-de-pesquisa',
            component: () => import('@/views/LinhasPesquisa.vue')
        },
        {
            path: '/eventos',
            name: 'events',
            component: () => import('@/views/Events.vue')
        },
        {
            path: '/producao',
            name: 'producao',
            component: () => import('@/views/Producao.vue'),
            // children: [{
            //     name: 'Artigos de Periódicos',
            //     path: '/articles'
            // },
            // {
            //     name: 'Resumos em Eventos',
            //     path:'/resumes'},
            // {   name: 'Livros',
            //     path: '/books'},
            // {   name: 'REA',
            //     path: '/rea'},
            // {   name: 'Outros',
            //     path: '/outros'}]
        },
        {
            path: '/galeria',
            name: 'gallery',
            component: () => import('@/views/Gallery.vue')
        },
        {
            path: '/contatos',
            name: 'contact',
            component: () => import('@/views/Contact.vue')
        }
    ]
});
