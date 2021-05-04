<template>
  <div>
    <!--<h1>Libros</h1>-->
    <layout-book-panel :books="stock"></layout-book-panel>
  </div>
</template>

<script>
import LayoutBookPanel from "./LayoutBookPanel.vue";
export default {
  name: "LayoutBook",
  components: { LayoutBookPanel },
  data() {
    return {
      stock: [],
      headers: [
        { text: "Titulo", value: "titulo", sortable: false },
        { text: "Autor", value: "autor", sortable: false },
        { text: "Genero", value: "genero", sortable: false },
        { text: "Paginas", value: "numeroPagina", sortable: false },
        { text: "Editorial", value: "editorial", sortable: false },
        { text: "issn", value: "issn", sortable: false },
        { text: "Idioma", value: "idioma", sortable: false },
        { text: "Publicado", value: "fechaPublicacion", sortable: false },
        { text: "Estado", value: "estado", sortable: false },
        { text: "Precio", value: "precio", sortable: false },
        { text: "Cantidad", value: "cantidad", sortable: false },
        { text: "Imagen", value: "imagen", sortable: false },
      ],
    };
  },
  methods: {
    loadInfo() {
      let header = { Token: this.$store.state.Token };
      let configuration = { headers: header };
      axios
        .get('libro/list', configuration)
        .then(function (response) { 
          this.stock = response.data; 
        }
        ).catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.loadInfo();
  },
};
</script>

<style lang="css" scoped></style>
