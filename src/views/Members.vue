<template>
    <span>
        <img-hero
            :style="{
                'background-image':
                    'url(' + require('../assets/img/hero1.jpg') + ')'
            }"
            >Integrantes</img-hero
        >
        <members-details></members-details>
        <members-details2></members-details2>
        <members-details3></members-details3>
    </span>
</template>

<script>
import ImgHero from '@/components/ImgHero';
import MembersDetails from '@/components/MembersDetails';
import MembersDetails2 from '@/components/MembersDetails2';
import MembersDetails3 from '@/components/MembersDetails3';

export default {
    name: 'members',
    components: {
        ImgHero,
        MembersDetails,
        MembersDetails2,
        MembersDetails3
    }
};
</script>

<style></style>
