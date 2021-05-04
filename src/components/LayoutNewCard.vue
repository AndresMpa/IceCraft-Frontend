<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :lazy-src="feed.img" :src="feed.img"></v-img>

    <v-card-title>{{ feed.by }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="feed.rarity"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">Rarity: {{ feed.rarity }}</div>
      </v-row>

      <div class="my-4 subtitle-1">$ • {{ feed.price }}, {{ feed.by }}</div>

      <div></div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="primary accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>
        <v-chip>1:30PM</v-chip>
        <v-chip>2:30PM</v-chip>
        <v-chip>4:30PM</v-chip>
        <v-chip>6:30PM</v-chip>
        <v-chip>8:30PM</v-chip>
        <v-chip>10:30PM</v-chip>
        <v-chip>5:30PM</v-chip>
        <v-chip>5:30PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary lighten-2" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "LayoutNewCard",
  props: {
    feed: Object,
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
<style lang="css">
.profile {
  margin: auto;
}
</style>
