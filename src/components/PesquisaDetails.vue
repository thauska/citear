<template>
    <v-container mt-3>
        <v-layout column>
            <v-card color="rgb(232,234,246, 0.8)">
                <v-layout row wrap>
                    <v-flex xs12 lg12>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline font-weight-medium">
                                    Criatividade e Inovação em Ciência, Tecnologia e Arte
                                </h3>
                            </div>
                        </v-card-title>
                        <v-container>
                            <div class="subheading">
                                <p>
                                    Em breve mais informações...
                                </p>
                        
                            </div>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'PesquisaDetails',
    data() {
        return {
            img: '@/assets/logo.png'
        };
    }
};
</script>

<style scoped>

li {
    list-style-type: upper-roman;
}
</style>
