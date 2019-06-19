<template>
    <v-parallax :src="require('@/assets/homehero.jpg')" height="300">
        <v-layout align-center column justify-center class="shadow">
            <h3 class="display-4 font-weight-black">
                {{ namePage }}
            </h3>
            <div
                class="display-3"
                style="font-family: 'Allura', cursive !important;"
            >
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

h3.display-4 {
    font-family: 'Allura', cursive !important;
    letter-spacing: normal !important;
}
</style>
