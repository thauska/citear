<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="indigo lighten-4"
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index" :to="item.url">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="indigo lighten-4">
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">
                    {{ appTitle }}
                </router-link>
            </v-toolbar-title>

            <v-spacer class="hidden-md-and-down"></v-spacer>
            <v-btn
                flat
                class="hidden-md-and-down"
                v-for="item in items"
                :key="item.title"
                :to="item.url"
                >{{ item.title }}</v-btn
            >
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
                { title: 'Integrantes', url: '/integrantes' },
                { title: 'Eventos', url: '/eventos' },
                { title: 'Produção', url: '/producao' },
                { title: 'Galeria', url: '/galeria' },
                { title: 'Contato', url: '/contatos' }
            ]
        };
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}

@media only screen and (max-width: 1024px) {
}
</style>
