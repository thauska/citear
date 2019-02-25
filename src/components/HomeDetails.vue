<template>
    <v-container>
        <v-layout column mb-4>
            <v-flex
                class="display-2 text-xs-center my-5 title_gl font-weight-medium"
                >Grupo de Pesquisa CiTeAr
                <v-flex class="display-1 text-xs-center my-2 font-weight-light"
                    >Ciência, Tecnologia e Arte</v-flex
                >
            </v-flex>
            <v-card>
                <v-layout row wrap>
                    <v-flex xs12 lg12>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline font-weight-medium">
                                    Repercussão dos trabalhos do grupo
                                </h3>
                            </div>
                        </v-card-title>
                        <v-container>
                            <div class="subheading">
                                <p>
                                    O grupo de pesquisa Ciência, Tecnologia e
                                    Arte é um grupo de natureza interdisciplinar
                                    que tem como características principais a
                                    experimentação, a reflexão e a divulgação de
                                    pesquisas oriundas das conexões, relações e
                                    intersecções entre Ciência, Tecnologia e
                                    Arte. Suas principais metas são:
                                </p>
                                <ul>
                                    <li>
                                        Criar um espaço multidisciplinar,
                                        criativo e inovador para experimentação
                                        e desenvolvimento de pesquisa que
                                        envolvam Ciência, Tecnologia e Arte;
                                    </li>
                                    <br />
                                    <li>
                                        Estimular práticas de experimentação,
                                        produção e pesquisa em metodologias e
                                        processos inovadores aplicados ao ensino
                                        superior que envolvam Ciência, Arte e
                                        Tecnologia;
                                    </li>
                                    <br />
                                    <li>
                                        Complementar a formação de profissionais
                                        nas áreas envolvidas para atuação em
                                        pesquisa integrada e atrair
                                        pesquisadores nacionais e
                                        internacionais. Entre os trabalhos já
                                        realizados destacamos: ebooks,
                                        animações, vídeos, apresentação em
                                        congressos nacionais e internacionais,
                                        orientações de iniciação científica,
                                        palestras, oficinas e minicursos.
                                    </li>
                                    <br />
                                </ul>
                            </div>
                        </v-container>
                    </v-flex>
                    <v-flex xs12 lg6>
                        <v-card-title>
                            <div>
                                <h3 class="headline font-weight-medium">
                                    Linhas de pesquisa
                                </h3>
                            </div>
                        </v-card-title>
                        <v-container>
                            <p class="subheading">
                                Criatividade e Inovação em Ciência, Tecnologia e
                                Arte
                            </p>
                        </v-container>
                    </v-flex>
                    <v-flex xs12 lg6>
                        <v-card-title>
                            <div>
                                <h3 class="headline font-weight-medium">
                                    Lideres do Grupo
                                </h3>
                            </div>
                        </v-card-title>
                        <v-container>
                            <p class="subheading">Cristina Lúcia Dias Vaz</p>
                            <p class="subheading">Iran Abreu Mendes</p>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails',
    data() {
        return {
            img: '../assets/logo.png'
        };
    }
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
