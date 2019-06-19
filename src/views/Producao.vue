<template>
    <span>
        <HomeCarousel />
        <v-flex
            class="display-2 text-xs-center my-4 title_gl font-weight-medium"
            >Produção
        </v-flex>
        <ImgConstrucao />        
    </span>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel';
import ImgConstrucao from '@/components/ImgConstrucao';

export default {
    name: 'producao',
    components: {
        HomeCarousel,
        ImgConstrucao
    }
};
</script>

<style></style>
