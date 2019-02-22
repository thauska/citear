<template>
  <v-container >
    <v-card xs12>
      <v-card-title class="secondary white--text headline">Colaboradores Estrangeiros</v-card-title>
      <v-layout justify-space-between pa-3>
        <v-flex xs6>
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
            >mdi-account</v-icon>
          </v-treeview>
        </v-flex>
        <v-flex d-flex text-xs-center>
          <v-scroll-y-transition mode="out-in">
            <div
              v-if="!selectedE"
              class="title grey--text text--lighten-1 font-weight-light"
              style="align-self: center;"
            >Selecione um nome</div>
            <v-card v-else :key="selectedE.id" class="pt-4 mx-auto" flat max-width="400">
              <v-card-text>
                <v-avatar size="88">
                  <v-img :src="`${selectedE.img}`" class="mb-4"></v-img>
                </v-avatar>
                <h3 class="headline mb-2">{{ selectedE.name }}</h3>
                <div class="blue--text mb-2">
                  <strong>País:</strong>
                  {{ selectedE.titulacao }}
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-layout tag="v-card-text" text-xs-left wrap>
                <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Lattes:</v-flex>
                <v-flex>
                  <a :href="`${selectedE.website}`" target="_blank">
                    <v-avatar :size="35">
                      <img src="../assets/img/icone_lattes.jpg">
                    </v-avatar>
                  </a>
                </v-flex>
              </v-layout>
            </v-card>
          </v-scroll-y-transition>
        </v-flex>
      </v-layout>
    </v-card>
    <br>
  <v-divider></v-divider>
  </v-container>
  
</template>

<script>
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
    name: 'membersdetails2',
    data: () => ({
        active: [],
        avatar: null,
        open: [],
        estudante: [
            {
                id: 1,
                name: 'Tereza Paula Costa Azinheira Oliveira',
                titulacao: 'Republica Portuguesa',
                website: ' http://lattes.cnpq.br/6968164405653111',
                img:
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4494352D1'
            },
        ]
    }),

    computed: {
        estudantes() {
            return [
                {
                    name: 'Nome do Colaborador',
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

<style>
</style>
