<template>
  <v-footer height="auto">
    <v-layout justify-center row wrap>      
      <v-flex primary lighten-2 py-4 text-xs-center white--text xs12>
        <div >&copy; {{ new Date().getFullYear() }} - CITE-NITAE²/UFPA </div>
        <div>Made with Vue.js</div>
      </v-flex>
    </v-layout>
    
  </v-footer>
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style>
body{
    line-height: 1.5;
}
</style>
