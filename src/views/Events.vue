<template>
    <span>
        <img-hero
            :style="{
                'background-image':
                    'url(' + require('../assets/img/hero2-min.jpg') + ')'
            }"
        >
            Eventos
        </img-hero>
        <img-construcao></img-construcao>
    </span>
</template>

<script>
import ImgHero from '../components/ImgHero';
import ImgConstrucao from '../components/ImgConstrucao';

export default {
    name: 'events',
    components: {
        ImgHero,
        ImgConstrucao
    }
};
</script>

<style></style>
