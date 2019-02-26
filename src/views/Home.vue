<template>
    <span>
        <home-carousel></home-carousel>
        <home-details></home-details>
    </span>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel';
import HomeDetails from '@/components/HomeDetails';

export default {
    name: 'home',
    components: {
        HomeCarousel,
        HomeDetails
    }
};
</script>
