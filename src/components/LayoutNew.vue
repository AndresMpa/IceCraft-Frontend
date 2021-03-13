<template>
  <v-container>
    <h2>Noticias</h2>
    <v-row justify="space-around">
      <v-col
        style="display: inline-flex; margin: 1em; padding: 1em"
        v-for="(info, index) of feed"
        cols="card.flex"
        :key="index"
      >
        <v-sheet class="pa-5 ma-5" color="grey lighten-3">
          <v-sheet :rounded="rounded" class="mx-auto">
            <layout-new-card :feed="info"></layout-new-card>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LayoutNewCard from "./LayoutNewCard.vue";
export default {
  name: "LayoutNew",
  data() {
    return {
      feed: [
        {
          img: "https://picsum.photos/200/300",
          price: 5000,
          by: "M A P A",
          rarity: 5,
        },
        {
          img: "https://picsum.photos/200/300",
          by: "MGK",
          price: 5000,
          rarity: 3.6,
        },
        {
          img: "https://picsum.photos/200/300",
          by: "MGK",
          price: 5000,
          rarity: 3.6,
        },
        {
          img: "https://picsum.photos/200/300",
          by: "MGK",
          price: 5000,
          rarity: 3.6,
        },
        {
          img: "https://picsum.photos/200/300",
          by: "MGK",
          price: 5000,
          rarity: 3.6,
        },
        {
          img: "https://picsum.photos/200/300",
          by: "MGK",
          price: 5000,
          rarity: 3.6,
        },
      ],
    };
  },
  components: {
    LayoutNewCard,
  },
};
</script>
<style lang="css"></style>
