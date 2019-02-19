<template>
    <v-app id="app">        
        <v-content transition="slide-x-transition">
            <app-navigation></app-navigation>
            <router-view></router-view>
        </v-content>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
import AppFooter from '@/components/AppFooter'

export default {
    name: 'App',
    components: {
        AppNavigation,
        AppFooter
    }
};
</script>

<style>
</style>
