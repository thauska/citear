<template>
  <v-app id="app">
    <app-navigation></app-navigation>
    <vue-particles
      color="#b3d4fc"
      :particleOpacity="0.7"
      shapeType="circle"
      :particleSize="4"
      linesColor="#9fa8da"
    ></vue-particles>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <v-divider></v-divider>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/template/AppNavigation';
import AppFooter from '@/components/template/AppFooter';

export default {
    name: 'App',
    components: {
        AppNavigation,
        AppFooter
    }
};
</script>

<style>
#particles-js {
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.shadow {
    text-shadow: black 0.1em 0.1em 0.08em;
}
</style>
