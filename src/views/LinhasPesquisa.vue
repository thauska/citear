<template>
    <div>
        <img-hero
            :style="{
                'background-image':
                    'url(' + require('@/assets/img/hero-6.jpg') + ')'
            }"
        >
            Linha de Pesquisa
        </img-hero>
        <PesquisaDetails />
    </div>
</template>

<script>
import ImgHero from '@/components/ImgHero';
import PesquisaDetails from '@/components/PesquisaDetails';

export default {
    name: 'linhas-de-pesquisa',
    components: {
        ImgHero,
        PesquisaDetails
    }
};
</script>
