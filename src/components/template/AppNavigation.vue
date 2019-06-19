<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="indigo lighten-4"
            disable-resize-watcher
        >
            <v-list>
                <template>
                    <v-list-tile
                        v-for="(item, index) in items"
                        :key="index"
                        router
                        :to="item.url"
                    >
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="indigo lighten-4">
            <v-toolbar-side-icon
                class="hidden-lg-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-toolbar-title>
                <router-link
                    to="/"
                    tag="span"
                    class="font-weight-black"
                    style="cursor: pointer; font-family: 'Allura', cursive !important;"
                >
                    {{ appTitle }}
                </router-link>
            </v-toolbar-title>

            <v-spacer class="hidden-md-and-down"></v-spacer>
            <v-toolbar-items class="hidden-md-and-down">
                <v-btn
                flat
                class="hidden-md-and-down"
                v-for="item in items"
                :key="item.title"
                :to="item.url"
                >{{ item.title }}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'CiTeAr',
            drawer: false,
            items: [
                { title: 'Início', url: '/' },
                { title: 'Apresentação', url: '/apresentacao' },
                { title: 'Integrantes', url: '/integrantes' },
                { title: 'Linha de Pesquisa', url: '/linhas-de-pesquisa' },
                { title: 'Produção', url: '/producao' },
                { title: 'Eventos', url: '/eventos' },
                { title: 'Galeria', url: '/galeria' },
                { title: 'Contato', url: '/contatos' }
            ],
        };
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}

.v-btn {
    font-size: 12px;
}
</style>
