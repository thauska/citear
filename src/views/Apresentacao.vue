<template>
    <span>
        <img-hero
            :style="{
                'background-image':
                    'url(' + require('@/assets/homehero-min.jpg') + ')'
            }"
            >Apresentação</img-hero
        >
        <apresentacao-details></apresentacao-details>
    </span>
</template>

<script>
import ImgHero from '@/components/ImgHero';
import ApresentacaoDetails from '@/components/ApresentacaoDetails';

export default {
    name: 'apresen',
    components: {
        ImgHero,
        ApresentacaoDetails
    }
};
</script>
