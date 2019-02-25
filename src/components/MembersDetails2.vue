<template>
    <v-container>
        <v-card xs12>
            <v-card-title class="secondary white--text headline"
                >Estudantes</v-card-title
            >
            <v-layout justify-space-between pa-2 xs6 row wrap>
                <v-flex style="overflow:auto;">
                    <v-treeview
                        :active.sync="active"
                        :items="estudantes"
                        :open.sync="open"
                        activatable
                        active-class="primary--text"
                        class="grey lighten-5"
                        open-on-click
                        transition
                    >
                        <v-icon
                            v-if="!item.children"
                            slot="prepend"
                            slot-scope="{ item, active }"
                            :color="active ? 'primary' : ''"
                            >mdi-account</v-icon
                        >
                    </v-treeview>
                </v-flex>
                <v-flex d-flex text-xs-center>
                    <v-scroll-y-transition mode="out-in">
                        <div
                            v-if="!selectedE"
                            class="title grey--text text--lighten-1 font-weight-light"
                            style="align-self: center;"
                        >
                            Selecione um nome
                        </div>
                        <v-card
                            v-else
                            :key="selectedE.id"
                            class="pt-4 mx-auto"
                            flat
                            max-width="400"
                        >
                            <v-card-text>
                                <v-avatar size="88">
                                    <v-img
                                        :src="`${selectedE.img}`"
                                        class="mb-4"
                                    ></v-img>
                                </v-avatar>
                                <h3 class="headline mb-2">
                                    {{ selectedE.name }}
                                </h3>
                                <div class="blue--text mb-2">
                                    <strong>Nível de Treinamento:</strong>
                                    {{ selectedE.titulacao }}
                                </div>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-layout tag="v-card-text" text-xs-left wrap>
                                <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2
                                    >Lattes:</v-flex
                                >
                                <v-flex>
                                    <a
                                        :href="`${selectedE.website}`"
                                        target="_blank"
                                    >
                                        <v-avatar :size="35">
                                            <img
                                                src="../assets/img/icone_lattes.jpg"
                                            />
                                        </v-avatar>
                                    </a>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-scroll-y-transition>
                </v-flex>
            </v-layout>
        </v-card>
        <br />
        <v-divider></v-divider>
    </v-container>
</template>

<script>
export default {
    name: 'membersdetails3',
    data: () => ({
        active: [],
        avatar: null,
        open: [],
        estudante: [
            {
                id: 1,
                name: 'Dirceu Henrique Barros de Andrade',
                titulacao: 'Graduação',
                website: ' http://lattes.cnpq.br/1772365579359148',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8654168H9'
            },
            {
                id: 2,
                name: 'Edilson dos Passos Neri Júnior',
                titulacao: 'Mestrado Profissional',
                website: 'http://lattes.cnpq.br/5917661277687347',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4259578P0'
            },
            {
                id: 3,
                name: 'Glenda Quaresma Alves',
                titulacao: 'Mestrado Profissional',
                website: 'http://lattes.cnpq.br/2550098149452983',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8169236J3'
            },
            {
                id: 4,
                name: 'Helena do Socorro Campos da Rocha',
                titulacao: 'Não há formação em andamento',
                website: 'http://lattes.cnpq.br/3955516512057842',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4775464U9'
            },
            {
                id: 5,
                name: 'Juliardnas Rigamont Araújo Nascimento',
                titulacao: 'Mestrado Profissional',
                website: 'http://lattes.cnpq.br/9792261025601451',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4202532H3'
            },
            {
                id: 6,
                name: 'Laura Camila Silva da Silva',
                titulacao: 'Graduação',
                website: 'http://lattes.cnpq.br/9224610708124109',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8076307Z1'
            },
            {
                id: 7,
                name: 'Leidiane Jacira de Oliveira Santos',
                titulacao: 'Mestrado Profissional',
                website: 'http://lattes.cnpq.br/4069310879169342',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4766662Y4'
            },
            {
                id: 8,
                name: 'Luciano Santana Begot',
                titulacao: 'Graduação',
                website: 'http://lattes.cnpq.br/3801682744313985',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2188753J6'
            },
            {
                id: 9,
                name: 'Marcelia Luzia de Assis Palheta',
                titulacao: 'Graduação',
                website: ' http://lattes.cnpq.br/0636576271876839',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2121240H4'
            },
            {
                id: 10,
                name: 'Mayara de Oliveira Vieira',
                titulacao: 'Graduação',
                website: 'http://lattes.cnpq.br/4849296736177942',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8981647U2'
            },
            {
                id: 11,
                name: 'Vinicius Lima dos Santos',
                titulacao: 'Graduação',
                website: 'http://lattes.cnpq.br/2310402968872909',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2188827U5'
            }
        ]
    }),

    computed: {
        estudantes() {
            return [
                {
                    name: 'Nome do Estudante',
                    children: this.estudante
                }
            ];
        },
        selectedE() {
            if (!this.active.length) return undefined;

            const id = this.active[0];

            return this.estudante.find(user => user.id === id);
        }
    }
};
</script>

<style></style>
