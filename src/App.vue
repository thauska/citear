<template>
  <v-app id="app">
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppFooter from '@/components/AppFooter';

export default {
    name: 'App',
    components: {
        AppNavigation,
        AppFooter
    }
};
</script>

<style>
.shadow {
    text-shadow: black 0.2em 0.1em;
}
</style>
