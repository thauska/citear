<template>
    <span>
        <img-hero
            :style="{
                'background-image':
                    'url(' + require('@/assets/img/hero1-min.jpg') + ')'
            }"
            >Integrantes</img-hero
        >
        <v-layout column>
            <v-container>
                <MembersDetails />
            </v-container>
        </v-layout>
    </span>
</template>

<script>
import ImgHero from '@/components/ImgHero';
import MembersDetails from '@/components/MembersDetails';

export default {
    name: 'members',
    components: {
        ImgHero,
        MembersDetails
    }
};
</script>

<style></style>
