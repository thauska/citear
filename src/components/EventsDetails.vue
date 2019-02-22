<template>
    <v-layout>
        <v-container>
            <section>
                <v-layout row wrap class="my-5">
                    <v-flex xs12 lg6>
                        <v-card class="elevation-0">
                            <v-responsive height="45px" class="text-xs-center">
                                <v-icon x-large class="brown--text"
                                    >flash_on</v-icon
                                >
                            </v-responsive>
                            <v-card-title primary-title>
                                <div
                                    class="headline text-xs-center"
                                    style="width:100%"
                                >
                                    Speeds up development
                                </div>
                            </v-card-title>
                            <v-card-text>
                                We did most of the heavy lifting for you to
                                provide a default stylings that incorporate our
                                custom components. Additionally, we refined
                                animations and transitions to provide a smoother
                                experience for developers.
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex xs12 lg6>
                        <v-card class="elevation-0">
                            <v-responsive height="45px" class="text-xs-center">
                                <v-icon x-large class="brown--text"
                                    >group</v-icon
                                >
                            </v-responsive>
                            <v-card-title primary-title>
                                <div
                                    class="headline text-xs-center"
                                    style="width:100%"
                                >
                                    User Experience Focused
                                </div>
                            </v-card-title>
                            <v-card-text>
                                By utilizing elements and principles of Material
                                Design, we were able to create a framework that
                                incorporates components and animations that
                                provide more feedback to users. Additionally, a
                                single underlying responsive system across all
                                platforms allow for a more unified user
                                experience.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </section>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    name: 'EventsDetails'
};
</script>

<style scoped></style>
