<template>
    <span>
        <HomeCarousel />
        <v-layout column>
            <v-flex
                class="display-2 text-xs-center my-4 title_gl font-weight-medium"
                >Integrantes
            </v-flex>
            <v-container>
                <MembersDetails />
            </v-container>
        </v-layout>
    </span>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel';
import MembersDetails from '@/components/MembersDetails';

export default {
    name: 'members',
    components: {
        HomeCarousel,
        MembersDetails
    }
};
</script>

<style></style>
