<template>
    <v-app id="app">
        <app-navigation></app-navigation>
        <vue-particles
            color="#5C6BC0"
            :particleSize="3"
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
@import url('https://fonts.googleapis.com/css?family=Allura');
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script');

.display-4,
.display-3,
.display-2,
.display-1,
.headline,
.title,
.v-btn__content {
    font-family: 'Kaushan Script', cursive !important;
}

#particles-js {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.shadow {
    text-shadow: rgb(34, 33, 33) 0.04em 0.04em 0.04em;
}
#app {
    font-family: 'Josefin Slab', serif !important;
    background-image: -webkit-radial-gradient(
        closest-side,
        rgba(255, 255, 255, 1) 0,
        #e8eaf6 100%
    );
    background-image: -moz-radial-gradient(
        closest-side,
        rgba(255, 255, 255, 1) 0,
        #e8eaf6 100%
    );
    background-image: radial-gradient(
        closest-side,
        rgba(255, 255, 255, 1) 0,
        #e8eaf6 100%
    );
    background-position: 50% 50%;
    -webkit-background-origin: padding-box;
    background-origin: padding-box;
    -webkit-background-clip: border-box;
    background-clip: border-box;
    -webkit-background-size: auto auto;
    background-size: auto auto;
}
</style>
