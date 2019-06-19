<template>
    <span>
        <HomeCarousel />
        <apresentacao-details></apresentacao-details>
    </span>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel';
import ApresentacaoDetails from '@/components/ApresentacaoDetails';

export default {
    name: 'apresen',
    components: {
        HomeCarousel,
        ApresentacaoDetails
    }
};
</script>
