<template>
    <v-container grid-list-sm>
        <v-layout justify-center align-center wrap>
            <v-flex xl12 lg12 md12 sm12 xs12>
                    <v-img
                        :src="require('@/assets/img/eventos/mathart/cartaz.jpg')"
                        contain
                        alt="Cartaz I Seminário de Matemática e Arte"
                        height="1000"
                    ></v-img>
            </v-flex>
            <v-flex xl12 lg12 md12 sm12 xs12 class="my-2">
                    <v-img
                        :src="require('@/assets/img/eventos/mathart/pg1.png')"
                        contain
                        alt="Apresentação I Seminário de Matemática e Arte"
                        height="1000"
                    ></v-img>
            </v-flex>
            <v-layout justify-center align-center wrap class="my-4">
                <v-btn
                color="indigo lighten-2"
                href="files/mathart/programacao.pdf"
                download>
                    <span>Baixe a Programação Completa</span>
                </v-btn>
                <v-btn
                color="indigo lighten-2"
                href="http://criar.ufpa.br"
                target="_blank"
                download>
                    <span>Acesse o site do CR3IAR</span>
                </v-btn>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'homedetails'
};
</script>

<style scoped>
.title_gl {
    padding-top: 13px;
    padding-bottom: 13px;
    border-bottom-color: rgba(240, 240, 240, 1);
    border-top-color: rgba(240, 240, 240, 1);
    border-bottom-style: solid;
    border-top-style: solid;
    border-bottom-width: 5px;
    border-top-width: 5px;
}
li {
    list-style-type: upper-roman;
}
</style>