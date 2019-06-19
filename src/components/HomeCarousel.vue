<template>
<v-carousel hide-controls hide-delimiters height="220">
    <v-carousel-item
      v-for="color in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-layout
          align-center
          fill-height
          justify-center
        >
          <v-flex
                        class="text-md-center text-lg-center text-sm-center white--text"
                    >
                        <h3 class="display-4 font-weight-black shadow">
                            {{ namePage }}
                        </h3>
                        <div
                            class="display-3 shadow"
                            style="font-family: 'Allura', cursive !important;"
                        >
                            {{ subName2 }}
                        </div>
            </v-flex>
        </v-layout>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name: 'HomeCarousel',
    data() {
        return {
            namePage: 'CiTeAr',
            subName2: 'Ciência, Tecnologia e Arte',
            colors: [
                'purple'
            ]
        };
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}

h3.display-4 {
    font-family: 'Allura', cursive !important;
    letter-spacing: normal !important;
}
</style>
