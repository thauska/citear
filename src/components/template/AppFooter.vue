<template>
    <v-footer height="auto" absolute app>
        <v-layout justify-center row wrap>
            <v-flex indigo lighten-2 py-3 text-xs-center white--text xs12
                >&copy; {{ new Date().getFullYear() }} —
                <strong>
                    <a href="http://cite.ufpa.br" target="_blank"
                        >CITE - NITAE²/UFPA</a
                    >
                </strong>
                <br />
                <a href="http://vuejs.org" target="_blank"> Made with Vue.js</a>
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

<style scoped>
a {
    text-decoration: none;
    color: white;
}
</style>
