import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Apresentacao from '@/views/Apresentacao.vue';
import Members from '@/views/Members.vue';
import LinhasPesquisa from '@/views/LinhasPesquisa.vue';
import Events from '@/views/Events.vue';
import Producao from '@/views/Producao.vue';
import Gallery from '@/views/Gallery.vue';
import Contact from '@/views/Contact.vue';

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
            path: '/apresentacao',
            name: 'apresentacao',
            component: Apresentacao
        },
        {
            path: '/integrantes',
            name: 'members',
            component: Members
        },
        {
            path: '/linhas-de-pesquisa',
            name: 'linhas-de-pesquisa',
            component: LinhasPesquisa
        },
        {
            path: '/eventos',
            name: 'events',
            component: Events
        },
        {
            path: '/producao',
            name: 'producao',
            component: Producao,
            children: [
                {
                    name: 'Artigos de Periódicos',
                    path: 'articles'
                },
                {
                    name: 'Resumos em Eventos',
                    path: 'resumos'
                },
                {
                    name: 'Livros',
                    path: 'livros',
                    component: () => import('@/components/Producao/Livros.vue')
                },
                { name: 'REA', path: 'rea' },
                { name: 'Outros', path: 'outros' }
            ]
        },
        {
            path: '/galeria',
            name: 'gallery',
            component: Gallery
        },
        {
            path: '/contatos',
            name: 'contact',
            component: Contact
        }
    ]
});
