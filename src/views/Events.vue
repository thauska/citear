<template>
    <span>
        <HomeCarousel />
        <v-flex
            class="display-2 text-xs-center my-4 title_gl font-weight-medium"
            >Eventos
        </v-flex>
        <img-construcao></img-construcao>
    </span>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel';
import ImgConstrucao from '@/components/ImgConstrucao';

export default {
    name: 'events',
    components: {
        HomeCarousel,
        ImgConstrucao
    }
};
</script>

<style></style>
