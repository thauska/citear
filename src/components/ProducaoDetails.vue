<template>
    <v-container>
            <v-card color="rgb(232,234,246, 0.8)">
                <v-container fluid grid-list-md>
                    <v-layout row wrap justify-center align-center>
                        <v-flex
                            xs12
                            sm4
                            md3
                            v-for="card in cards"
                            :key="card.title"
                            v-bind="{ [`xs${card.flex}`]: true }"
                        >
                            <v-card>
                                <v-img :src="card.src" height="200px">
                                    <v-container fill-height fluid>
                                        <v-layout fill-height>
                                            <v-flex xs12 align-end flexbox>
                                                <span
                                                    class="headline white--text"
                                                    v-text="card.title"
                                                ></span>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-img>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    Clique para abrir:
                                    <v-btn icon router to="/livros">
                                        <v-icon>mdi-open-in-new</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-container>
</template>

<script>
export default {
    name: 'ProducaoDetails',
    data: () => ({
        cards: [
            // {
            //     title: 'Artigos de Periódicos',
            //     src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            //     flex: 3
            // },
            // {
            //     title: 'Resumos em Eventos',
            //     src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
            //     flex: 3
            // },
            {
                title: 'Livros',
                src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                flex: 3
            },
            {
                title: 'REA',
                src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                flex: 3
            },
            // {
            //     title: 'Outros',
            //     src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            //     flex: 3
            // }
        ]
    })

}
</script>

<style>

</style>
