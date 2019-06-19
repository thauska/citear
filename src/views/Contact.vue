<template>
    <span>
        <HomeCarousel />
        <v-flex
            class="display-2 text-xs-center my-4 title_gl font-weight-medium"
            >Contato
        </v-flex>
        <contact-details></contact-details>
    </span>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel';
import ContactDetails from '@/components/ContactDetails';

export default {
    name: 'contact',
    components: {
        HomeCarousel,
        ContactDetails
    }
};
</script>

<style></style>
