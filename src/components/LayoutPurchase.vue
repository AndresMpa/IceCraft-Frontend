<template>
  <v-container fluid>
    <h2>Historial de compras</h2>
    <v-simple-table fixed-header height="500px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Titulo del libro
            </th>
            <th class="text-left">
              Fecha de compra
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in story" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
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
      ],
    };
  },
};
</script>
<style lang="css" scoped></style>
