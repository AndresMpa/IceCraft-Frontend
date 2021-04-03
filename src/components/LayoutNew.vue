<template>
  <v-container>
    <h2>Noticias</h2>
    <br />
    <v-row justify="space-around">
      <v-col
        style="display: inline-flex; margin: 0 auto 10px auto; padding: 0 3em 0 3em;"
        v-for="(info, index) of feed"
        cols="card.flex"
        :key="index"
      >
        <v-sheet
          style="padding: auto; margin: 0 auto 10px auto;"
          elevation="1"
          outlined
          shaped
        >
          <v-sheet class="mx-auto ">
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
