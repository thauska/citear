<template>
    <v-carousel>
        <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
        >
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex
                        class="text-md-center text-lg-center text-sm-center white--text shadow"
                    >
                        <h3 class="display-4 font-weight-black mb-3">
                            {{ namePage }}
                        </h3>
                        <div class="display-1 font-weight-bold mb-3">
                            {{ subName1 }}
                        </div>
                        <div class="display-1 font-weight-light mb-3">
                            {{ subName2 }}
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
            <div
                    style=" position: absolute; bottom: 50px; right: 10px;"
                    class="white--text"
                >
                    <h6>
                        Foto:
                        <a href="https://unsplash.com/@steve_j" target="_blank"
                            >Steve Johnson em Unsplash</a
                        >
                    </h6>
                </div>
        </v-carousel-item>
        
    </v-carousel>
</template>

<script>
export default {
    name: 'HomeCarousel',
    data() {
        return {
            namePage: 'CiTeAr',
            subName1: 'Grupo de Pesquisa',
            subName2: 'Ciência, Tecnologia e Arte',
            items: [
                {
                    src: require('@/assets/homehero-min.jpg')
                },
                {
                    src: require('@/assets/carousel2-min.jpg')
                },
                {
                    src: require('@/assets/carousel3-min.jpg')
                }
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
</style>
