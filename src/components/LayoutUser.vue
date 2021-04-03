<template>
  <v-container>
    <v-row class="d-flex">
      <v-col cols="12" md="4">
        <v-sheet class="d-flex" color="teal lighten-3" height="100%">
          <sheet-footer>
            #4: (2r x 1c)
          </sheet-footer>
        </v-sheet>
      </v-col>
      <v-col class="d-flex" cols="12" md="4">
        <v-row class="ma-n3">
          <v-col cols="12">
            <v-sheet class="d-flex" color="green lighten-3" height="150">
              <sheet-footer>
                #2: (1r x 1c)
              </sheet-footer>
            </v-sheet>
          </v-col>
          <v-col cols="12">
            <v-sheet class="d-flex" color="red lighten-3" height="250">
              <sheet-footer>
                #5: (2r x 2c)
              </sheet-footer>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4">
        <v-sheet class="d-flex" color="teal lighten-3" height="100%">
          <sheet-footer>
            #4: (2r x 1c)
          </sheet-footer>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  components: {
    // A simple helper component
    SheetFooter: {
      functional: true,

      render(h, { children }) {
        return h(
          "v-sheet",
          {
            staticClass: "mt-auto align-center justify-center d-flex px-2",
            props: {
              color: "rgba(0, 0, 0, .36)",
              dark: true,
              height: 50,
            },
          },
          children
        );
      },
    },
  },
};
</script>
<style lang="css" scoped></style>
