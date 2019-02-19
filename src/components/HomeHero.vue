<template>
    <v-parallax :src="require('@/assets/homehero.jpg')">
        <v-layout align-center column justify-center class="shadow">
            <div class="display-4 font-weight-black mb-3">CiTeAr</div>
            <div class="display-1 font-weight-bold mb-3">Grupo de Pesquisa</div>
            <div class="display-1 font-weight-light mb-3">
                Ciência, Tecnologia e Arte
            </div>
        </v-layout>
    </v-parallax>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.shadow {
    text-shadow: black 0.2em 0.1em;
}
</style>
