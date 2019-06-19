<template>
    <v-container>
        <v-layout column mb-4>
            <v-flex
                class="display-2 text-xs-center my-5 title_gl font-weight-medium"
                >Grupo de Pesquisa CiTeAr
                <v-flex
                    class="display-3 text-xs-center mt-3 font-weight-light"
                    style="font-family: 'Allura', cursive !important;"
                    >Ciência, Tecnologia e Arte</v-flex
                >
            </v-flex>
            <v-card color="rgb(232,234,246, 0.8)">
                <v-layout row wrap>
                    <v-flex xs12 lg12>
                        <v-container>
                            <div class="subheading">
                                <p>
                                    O grupo de pesquisa
                                    <strong
                                        >CiTeAr - Ciência, Tecnologia e
                                        Arte</strong
                                    >
                                    é um grupo de natureza interdisciplinar que
                                    tem como características principais a
                                    experimentação, a reflexão e a divulgação de
                                    pesquisas oriundas das conexões, relações e
                                    intersecções entre Ciência, Tecnologia e
                                    Arte.
                                </p>
                                <p>
                                    Os temas de pesquisa têm as seguintes
                                    palavras-chave como pontos para
                                    experimentação, produção e difusão de
                                    conhecimentos: criatividade, inovação,
                                    tecnologia, metodologia, arte e ciência.
                                </p>
                                <p>O CiTeAr visa:</p>
                                <ul>
                                    <li>
                                        criar um espaço multidisciplinar,
                                        criativo e inovador para experimentação
                                        e desenvolvimento de pesquisa que
                                        envolvam Ciência, Arte e Inovação,
                                        buscando promover a integração entre
                                        estas áreas de conhecimento;
                                    </li>
                                    <br />
                                    <li>
                                        estimular práticas de experimentação,
                                        produção e pesquisa em metodologias e
                                        processos inovadores aplicados ao ensino
                                        superior que envolvam Ciência, Arte e
                                        Tecnologia;
                                    </li>
                                    <br />
                                    <li>
                                        despertar o interesse de alunos de
                                        graduação e pós-graduação em uma
                                        formação interdisciplinar com ênfase em
                                        processo ou produtos inovadores oriundos
                                        da conexão entre Ciência e Art
                                    </li>
                                    <br />
                                    <li>
                                        complementar a formação de profissionais
                                        nas áreas envolvidas para atuação em
                                        pesquisa integrada;
                                    </li>
                                    <br />
                                    <li>
                                        estabelecer um centro de referência na
                                        Ufpa e no Brasil e atrair pesquisadores
                                        nacionais e internacionais.
                                    </li>
                                    <br />
                                </ul>
                            </div>
                        </v-container>
                    </v-flex>
                    <v-flex xs12 lg12>
                        <v-card-title>
                            <div>
                                <h3 class="headline font-weight-medium">
                                    Lideres do Grupo
                                </h3>
                            </div>
                        </v-card-title>
                        <v-container>
                            <p class="subheading">
                                Cristina Lúcia Dias Vaz – PPGCIMES <br />
                                Iran Abreu Mendes – PPGECM
                            </p>
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
            img: '@/assets/logo.png'
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
