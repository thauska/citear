<template>
    <v-container grid-list-lg>
        <div class="text-xs-center">
            <v-flex class="display-1 text-xs-center my-2 font-weight-medium"
                >Pesquisadores</v-flex
            >
        </div>
        <v-layout wrap class="mb-4">
            <v-flex
                xs12
                sm4
                md3
                class="text-xs-center"
                v-for="pesquisadores in pesquisador"
                :key="pesquisadores.id"
            >
                <v-card
                    color="rgb(232,234,246, 0.8)"
                    class="pt-4 mx-auto"
                    flat
                    max-width="400"
                    min-height="330"
                >
                    <v-card-text>
                        <v-avatar size="88">
                            <v-img :src="pesquisadores.img" class="mb-4">
                                <v-layout
                                    slot="placeholder"
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                                >
                                    <v-progress-circular
                                        indeterminate
                                        color="grey darken-5"
                                    ></v-progress-circular>
                                </v-layout>
                            </v-img>
                        </v-avatar>
                        <h3 class="subheading font-weight-bold mb-2">
                            {{ pesquisadores.name }}
                        </h3>
                        <div class="blue--text mb-2">
                            <strong>Titulação Máxima:</strong>
                            {{ pesquisadores.titulacao }}
                        </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-layout tag="v-card-text" text-xs-left wrap>
                        <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>
                            Lattes:
                        </v-flex>
                        <v-flex>
                            <a
                                :href="`${pesquisadores.website}`"
                                target="_blank"
                            >
                                <v-avatar :size="35">
                                    <img src="@/assets/img/icone_lattes.jpg" />
                                </v-avatar>
                            </a>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <div class="text-xs-center">
            <v-flex class="display-2 text-xs-center my-2 font-weight-medium"
                >Estudantes</v-flex
            >
        </div>
        <v-layout wrap class="mb-4">
            <v-flex
                xs12
                sm4
                md3
                class="text-xs-center"
                v-for="estudantes in estudante"
                :key="estudantes.id"
            >
                <v-card
                    color="rgb(232,234,246, 0.8)"
                    class="pt-4 mx-auto"
                    flat
                    max-width="400"
                    min-height="330"
                >
                    <v-card-text>
                        <v-avatar size="88">
                            <v-img :src="estudantes.img" class="mb-4">
                                <v-layout
                                    slot="placeholder"
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                                >
                                    <v-progress-circular
                                        indeterminate
                                        color="grey darken-5"
                                    ></v-progress-circular>
                                </v-layout>
                            </v-img>
                        </v-avatar>
                        <h3 class="subheading font-weight-bold mb-2">
                            {{ estudantes.name }}
                        </h3>
                        <div class="blue--text mb-2">
                            <strong>Nível de treinamento:</strong>
                            {{ estudantes.titulacao }}
                        </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-layout tag="v-card-text" text-xs-left wrap>
                        <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>
                            Lattes:
                        </v-flex>
                        <v-flex>
                            <a :href="`${estudantes.website}`" target="_blank">
                                <v-avatar :size="35">
                                    <img src="@/assets/img/icone_lattes.jpg" />
                                </v-avatar>
                            </a>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <div class="text-xs-center">
            <v-flex class="display-2 text-xs-center my-2 font-weight-medium"
                >Colaboradores Estrangeiros</v-flex
            >
        </div>
        <v-layout wrap class="mb-4">
            <v-flex
                xs12
                sm4
                md3
                class="text-xs-center"
                v-for="estrangeiros in estrangeiro"
                :key="estrangeiros.id"
            >
                <v-card
                    color="rgb(232,234,246, 0.8)"
                    class="pt-4 mx-auto"
                    flat
                    max-width="400"
                    min-height="330"
                >
                    <v-card-text>
                        <v-avatar size="88">
                            <v-img :src="estrangeiros.img" class="mb-4">
                                <v-layout
                                    slot="placeholder"
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                                >
                                    <v-progress-circular
                                        indeterminate
                                        color="grey darken-5"
                                    ></v-progress-circular>
                                </v-layout>
                            </v-img>
                        </v-avatar>
                        <h3 class="subheading font-weight-bold mb-2">
                            {{ estrangeiros.name }}
                        </h3>
                        <div class="blue--text mb-2">
                            <strong>País:</strong>
                            {{ estrangeiros.titulacao }}
                        </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-layout tag="v-card-text" text-xs-left wrap>
                        <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>
                            Lattes:
                        </v-flex>
                        <v-flex>
                            <a
                                :href="`${estrangeiros.website}`"
                                target="_blank"
                            >
                                <v-avatar :size="35">
                                    <img src="@/assets/img/icone_lattes.jpg" />
                                </v-avatar>
                            </a>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'membersdetails',
    data: () => ({
        avatar: null,
        pesquisador: [
            {
                id: 1,
                name: 'Aldrin Moura de Figueredo',
                titulacao: 'Doutorado',
                website: 'http://lattes.cnpq.br/4671233730699231',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4723607A4'
            },
            {
                id: 2,
                name: 'André Fellipe Ribeiro de Almeida',
                titulacao: 'Mestrado',
                website: 'http://lattes.cnpq.br/0320934018856520',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4343712J7'
            },
            {
                id: 3,
                name: 'Cristina Lúcia Dias Vaz',
                titulacao: 'Doutorado',
                website: 'http://lattes.cnpq.br/5829728118120411',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4786082A2'
            },
            {
                id: 4,
                name: 'Dionne Cavalcante Monteiro',
                titulacao: 'Doutorado',
                website: 'http://lattes.cnpq.br/4423219093583221',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4728481H5'
            },
            {
                id: 5,
                name: 'Hugo Alex Carneiro Diniz',
                titulacao: 'Doutorado',
                website: 'http://lattes.cnpq.br/3453735891564506',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4775221H8'
            },
            {
                id: 6,
                name: 'Iran Abreu Mendes',
                titulacao: 'Doutorado',
                website: 'http://lattes.cnpq.br/4490674057492872',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4704236U8'
            },
            {
                id: 7,
                name: 'Márcio Lima do Nascimento',
                titulacao: 'Doutorado',
                website: 'http://lattes.cnpq.br/6668311810812135',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4782965U9'
            }
        ],
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
                titulacao: 'Especialização',
                website: 'http://lattes.cnpq.br/2550098149452983',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8169236J3'
            },
            {
                id: 4,
                name: 'Helena do Socorro Campos da Rocha',
                titulacao: 'Mestrado Profissional',
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
                titulacao: 'Mestrado Profissional',
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
        ],
        estrangeiro: [
            {
                id: 1,
                name: 'Tereza Paula Costa Azinheira Oliveira',
                titulacao: 'Republica Portuguesa',
                website: ' http://lattes.cnpq.br/6968164405653111',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4494352D1'
            }
        ]
    })
};
</script>
