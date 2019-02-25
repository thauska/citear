<template>
    <span>
        <img-hero
            :style="{
                'background-image':
                    'url(' + require('../assets/img/hero4-min.jpg') + ')'
            }"
            >Galeria</img-hero
        >
        <img-construcao></img-construcao>
    </span>
</template>

<script>
import ImgHero from '../components/ImgHero';
import ImgConstrucao from '../components/ImgConstrucao';

export default {
    name: 'gallery',
    components: {
        ImgHero,
        ImgConstrucao
    }
};
</script>

<style></style>
