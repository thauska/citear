<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="indigo lighten-5" disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>                    
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
                <!-- <v-btn color="indigo lighten-4">{{access}}</v-btn> -->
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="indigo lighten-5">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer">            
            </v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title> {{appTitle}} </v-toolbar-title>
            <v-spacer class="hidden-md-and-down"></v-spacer>            
             <v-btn flat class="hidden-md-and-down">Grupo</v-btn>
            <!-- <v-btn flat class="hidden-md-and-down" v-for="item in items" :key="item" :to="'/'"> {{item.title}} </v-btn> -->
            <!-- <v-btn color="indigo lighten-4" class="hidden-md-and-down">{{access}}</v-btn> -->
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
                {title: 'Grupo'},
                {title: 'Eventos'},
                {title: 'Projetos'},
                {title: 'Galeria'},
                {title: 'Contato'},
            ],
        }
    }
}
</script>

<style scoped>
</style>
