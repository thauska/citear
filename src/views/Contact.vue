<template>
  <span>
      <img-hero :style="{'background-image': 'url(' + require('../assets/img/hero5.jpg') + ')'}"> Contato </img-hero>
      <contact-details></contact-details>
  </span>
</template>

<script>
import ImgHero from '@/components/ImgHero';
import ContactDetails from '@/components/ContactDetails'

export default {
    name: 'contact',
    components: {
        ImgHero,
        ContactDetails
    }
};
</script>

<style>
</style>
