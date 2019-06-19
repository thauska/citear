<template>
    <div>
        <HomeCarousel />
        <v-flex
                class="display-2 text-xs-center my-4 title_gl font-weight-medium"
                >Linha de Pesquisa
            </v-flex>
        <PesquisaDetails />
    </div>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel';
import PesquisaDetails from '@/components/PesquisaDetails';

export default {
    name: 'linhas-de-pesquisa',
    components: {
        HomeCarousel,
        PesquisaDetails
    }
};
</script>
