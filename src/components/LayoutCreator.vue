<template>
  <v-container>
    <h2>Creadores</h2>
    <v-row justify="space-around">
      <v-col
        style="display: inline-flex; margin: 1em; padding: 1em"
        v-for="(creator, index) of creators"
        cols="card.flex"
        :key="index"
      >
        <v-sheet class="pa-5">
          <div></div>
          <v-sheet class="mx-auto">
            <layout-creator-card :member="creator"></layout-creator-card>
          </v-sheet>
          <div></div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LayoutCreatorCard from "./LayoutCreatorCard.vue";
export default {
  name: "LayoutCreator",
  data() {
    return {
      creators: [
        {
          avatar: "https://avatars.githubusercontent.com/u/39841241?s=460&u=1441d909822fadde1381093b4ad68529dc116b31&v=4",
          nombre: "Andrés M. Prieto Álvarez",
          rol: "Director de proyecto, fullstack developer",
          profile: "https://github.com/AndresMpa",
          descripcion:
            "Apasionado de la industria TI, estudiante de ingeniería en sistemas y computación de la UTP, licenciado en ingles y desarrollador web; apasionado por la generacion de proyecto y la creacion de soluciones practicas y accesibles para todo el mundo...",
        },
        {
          avatar: "https://avatars.githubusercontent.com/u/50428261?s=88&v=4",
          nombre: "Luis Guillermo Téllez Cárdenas",
          rol: "Backend developer",
          profile: "https://github.com/LuisGTC",
          descripcion:
            "Estudiante de ingeniería en sistemas y computación en la UTP, desarrollador web, interesado en los idiomas y el desarrollo de vídeo juegos, así como también en la investigación de la sociedad en su desarrollo a traves de nuevas tecnologías",
        },
        {
          avatar: "https://avatars.githubusercontent.com/u/57612755?s=460&u=5e7eba506b1506b978c9951c862ea99ba50beec8&v=4",
          nombre: "Juan Camilo Lopera Martinez",
          rol: "Frontend developer",
          profile: "https://github.com/loperamartinez",
          descripcion:
            "Estudiante de ingeniería de sistemas y computación de la Universidad Tecnológica de Pereira, interesado en el estudio de problemas sociales y políticos mediante las tecnologías de información.",
        },
        {
          avatar: "https://avatars.githubusercontent.com/u/79126055?s=460&v=4",
          nombre: "Juan Camilo Montoya Muñoz",
          rol: "Administrador de base de datos",
          profile: "https://github.com/Chamizo-98",
          descripcion:
            "Estudiante de ingeniería en sistemas y computación, interesado en la composición y manejo de bases de datos. Amante de las motos y recorrer los destinos más apasionados del territorio nacional.",
        },
      ],
    };
  },
  components: {
    LayoutCreatorCard,
  },
};
</script>
<style lang="css">
</style>
