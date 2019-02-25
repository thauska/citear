<template>
    <v-container>
        <v-card >
            <v-card-title class="secondary white--text headline"
                >Pesquisadores</v-card-title
            >
            <v-layout justify-space-between pa-2 xs6 row wrap>
                <v-flex style="overflow:auto;">
                    <v-treeview
                        :active.sync="active"
                        :items="pesquisadores"
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
                <v-flex text-xs-center>
                    <v-scroll-y-transition mode="out-in">
                        <div
                            v-if="!selectedP"
                            class="title grey--text text--lighten-1 font-weight-light"
                            style="align-self: center;"
                        >
                            Selecione um nome
                        </div>
                        <v-card
                            v-else
                            :key="selectedP.id"
                            class="pt-4 mx-auto"
                            flat
                            max-width="400"
                        >
                            <v-card-text>
                                <v-avatar size="88">
                                    <v-img
                                        :src="`${selectedP.img}`"
                                        class="mb-4"
                                    ></v-img>
                                </v-avatar>
                                <h3 class="headline mb-2">
                                    {{ selectedP.name }}
                                </h3>
                                <div class="blue--text mb-2">
                                    <strong>Titulação Máxima:</strong>
                                    {{ selectedP.titulacao }}
                                </div>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-layout tag="v-card-text" text-xs-left wrap>
                                <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2
                                    >Lattes:</v-flex
                                >
                                <v-flex>
                                    <a
                                        :href="`${selectedP.website}`"
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
    name: 'membersdetails',
    data: () => ({
        active: [],
        avatar: null,
        open: [],
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
        ]
    }),

    computed: {
        pesquisadores() {
            return [
                {
                    name: 'Nome do Pesquisador',
                    children: this.pesquisador
                }
            ];
        },
        selectedP() {
            if (!this.active.length) return undefined;

            const id = this.active[0];

            return this.pesquisador.find(user => user.id === id);
        }
    }
};
</script>

<style></style>
