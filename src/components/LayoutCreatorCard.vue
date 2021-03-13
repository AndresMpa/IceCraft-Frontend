<template>
  <v-card class="mx-auto" min-width="360">
    <br />
    <v-img
      :src="member.avatar"
      class="profile"
      height="200px"
      width="200px"
    ></v-img>
    <br />
    <hr />

    <v-card-title style="text-align: justify">
      {{ member.nombre }}
    </v-card-title>

    <v-card-subtitle> {{ member.rol }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="info lighten-2" text>
        <a
          :href="member.profile"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none"
        >
          Conoceme
        </a>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ member.descripcion }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "LayoutCreatorCard",
  props: {
    member: Object,
  },
  data: () => ({
    show: false,
  }),
};
</script>
<style lang="css">
.profile {
  margin: auto;
}
</style>
