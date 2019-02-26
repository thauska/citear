<template>
    <v-container>
        <v-layout column align-center>
            <div class="display-1 font-weight-dark mb-4 mt-4">
                Página em Construção
            </div>
        </v-layout>
        <div>
            <v-img
                :src="require('@/assets/img/construcao.jpg')"
                :lazy-src="require('@/assets/img/construcao-min.jpg')"
                contain
                alt="Imagem de construção"
            ></v-img>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'imgconstrucao'
};
</script>

<style></style>
