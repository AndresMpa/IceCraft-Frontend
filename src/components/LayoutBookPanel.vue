<template>
  <v-container fluid>
    <v-data-iterator
      :items="book"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-5">
          <v-text-field
            flat
            clearable
            class="bars"
            hide-details
            solo-inverted
            label="Buscar"
            v-model="search"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
          <v-spacer></v-spacer>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              class="bars"
              hide-details
              :items="keys"
              solo-inverted
              label="Filtrar por"
              prepend-inner-icon="mdi-magnify"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.Titulo"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card class="containigCard">
              <img :src="item.imagen" alt="test" srcset="" />
              <v-card-title class="subheading font-weight-bold">
                {{ item.titulo }}
              </v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                  <v-list-item-content
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <div class="d-inline-block">
            <span class="grey--text">Libros por pagina</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  color="primary"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <v-spacer></v-spacer>

          <div class="d-inline-block">
            <span
              class="mr-4
            grey--text"
            >
              Pagina {{ page }} de {{ numberOfPages }}
            </span>

            <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1 "
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="ml-1 d-inline-block"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: "LayoutBookPanel",
  props: {
    book: Array,
  },
  data() {
    return {
      itemsPerPageArray: [8, 12, 24],
      sortDesc: false,
      itemsPerPage: 8,
      sortBy: "name",
      items: [],
      search: "",
      filter: {},
      page: 1,
      keys: [
        "Titulo",
        "Autor",
        "Genero",
        "Paginas",
        "Editorial",
        "issn",
        "Idioma",
        "Publicado",
        "Estado",
        "Precio",
        "Cantidad",
      ],
    };
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.book.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Titulo");
    },
  },
};
</script>

<style lang="css" scoped>
div .bars {
  margin: 0 5% 0 0%;
}

.containigCard {
  min-width: 360px;
  margin-left: 5%;
}

@media screen and (max-width: 768px) {
  div .bars {
    margin: 0%;
    width: 100%;
  }
}
</style>
