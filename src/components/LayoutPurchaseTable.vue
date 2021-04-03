<template>
  <v-container fluid>
    <h2>Historial de compras</h2>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <br />
        <thead v-for="(purchase, index) of story" cols="card.flex" :key="index">
          <tr>
            <th class="text-left">
              Titulo del libro
            </th>
            <th class="text-left">
              Fecha de la compra
            </th>
            <tbody>
              <tr v-for="bill in story" :key="bill.name">
                <td>{{ bill.name }}</td>
                <td>{{ bill.date }}</td>
              </tr>
            </tbody>
          </tr>
        </thead>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      story: [
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
        {
          name: "Quijote de la mancha",
          date: "27/03/2002",
        },
      ],
    };
  },
};
</script>
<style lang="css" scoped></style>
