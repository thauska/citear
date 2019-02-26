<template>
    <v-parallax alt="teste" :src="require('@/assets/homehero-min.jpg')">
        <v-layout>
            <v-layout align-center column justify-center class="shadow">
                <div class="display-4 font-weight-black mb-3">
                    {{ namePage }}
                </div>
                <div class="display-1 font-weight-bold mb-3">
                    Grupo de Pesquisa
                </div>
                <div class="display-1 font-weight-light mb-3">
                    Ciência, Tecnologia e Arte
                </div>
                <div
                    style=" position: absolute; bottom: 0; right: 10px;"
                    class="white--text"
                >
                    <h6>
                        Foto:
                        <a href="https://unsplash.com/@steve_j" target="_blank"
                            >Steve Johnson em Unsplash</a
                        >
                    </h6>
                </div>
            </v-layout>
        </v-layout>
    </v-parallax>
</template>

<script>
export default {
    name: 'HomeHero',
    data() {
        return {
            namePage: 'CiTeAr'
        };
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
