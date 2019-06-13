<template>
    <v-layout>
        <v-container>
            <v-flex>
                <v-card color="rgb(232,234,246, 0.8)">
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-4 font-weight-bold">
                                Grupo de Pesquisa Ciência, Tecnologia e Arte da
                                UFPA
                            </h3>
                            <h3 class="mb-1 font-weight-bold">
                                Universidade Federal do Pará
                            </h3>
                            <h4 class="mb-4 font-weight-bold">
                                Núcleo de Inovação e Tecnologias Aplicadas a
                                Ensino e Extensão (NITAE²)
                            </h4>
                            <div>
                                <p>
                                    Rua Augusto Corrêa, 01 - Guamá. 66075-110
                                    <br />Belém - Pará - Brasil
                                </p>
                                <p>Contato: (91) 3201-7834</p>
                                <p>E-mails: cvaz@ufpa.br/ iamendes1@gmail.com</p>
                            </div>
                        </div>
                    </v-card-title>
                    <div>
                        <v-img
                            :src="require('@/assets/img/ufpa-frente.jpg')"
                            aspect-ratio="3"
                            contain
                            alt="Frente da UFPA"
                            gradient="to bottom left, rgba(179,212,252,.09), rgba(179,212,252,.2)"
                        ></v-img>
                    </div>
                </v-card>
            </v-flex>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    name: 'contactdetails'
};
</script>

<style></style>
