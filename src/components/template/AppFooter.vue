<template>
    <v-footer height="auto" color="indigo lighten-2" absolute app>
        <v-layout justify-center row wrap>
            <v-flex indigo lighten-3></v-flex>
            <v-flex indigo lighten-3 py-3 text-xs-center white--text xs12
                >&copy; {{ new Date().getFullYear() }} —
                <strong>CITE - NITAE²/UFPA</strong> <br />
                Made with Vue.js
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            appTitle: 'CiTeAr',
            drawer: false,
            items: [
                { title: 'Início', url: '/' },
                { title: 'Integrantes', url: '/integrantes' },
                { title: 'Eventos', url: '/eventos' },
                { title: 'Projetos', url: '/projetos' },
                { title: 'Galeria', url: '/galeria' },
                { title: 'Contato', url: '/contatos' }
            ]
        };
    }
};
</script>

<style></style>
