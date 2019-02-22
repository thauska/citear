<template>
  <v-container fluid class="home-hero">
    <v-layout justify-center align-center column pa-5>
      <div flat class="display-3 font-weight-black white--text text-xs-center shadow">
        <slot/>
      </div>
    </v-layout>
    <div style=" position: absolute; bottom: 0; right: 10px;" class="white--text">
      <h6>
        Foto:
        <a href="https://unsplash.com/@steve_j" target="_blank">Steve Johnson on Unsplash</a>
      </h6>
    </div>
  </v-container>
</template>

<script>
export default {
    name: 'ImgHero'
};
</script>

<style scoped>
.home-hero {
    min-height: 25vh;
    width: calc(100vw - 1em);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
a {
    color: white;
    text-decoration: none;
}
</style>
