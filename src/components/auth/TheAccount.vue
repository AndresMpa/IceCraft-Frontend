<template>
  <v-layout class="primary">
    <v-flex>
      <v-row align="center" align-content="center">
        <v-col align-self="center">
          <v-card
            dark
            color="white"
            style="max-width: 750px; margin: auto"
            class="overflow-hidden info pa-12 mt-12 login"
          >
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="this.userName"
                :rules="nameRules"
                label="Nombre de usuario"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Correo electronico"
                required
              ></v-text-field>

              <v-select
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || 'Selecciona una categoria']"
                label="Item"
                required
              ></v-select>

              <v-checkbox
                v-model="checkbox"
                :rules="[
                  (v) =>
                    !!v ||
                    'Requerimos que acepte terminos y concondiciones del servicio',
                ]"
                label="Acepto terminos y concondiciones"
                required
              ></v-checkbox>

              <v-btn class="mr-4" @click="validate" :disabled="!valid">
                Enviar
              </v-btn>

              <v-btn class="mr-4" @click="reset">
                Borrar
              </v-btn>

              <v-btn @click="resetValidation">
                Validar
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    userName: 25,
    nameRules: [
      (v) => !!v || "Necesitas un nombre de usuario",
      (v) =>
        (v && v.length <= this.userName) ||
        "el nombre de usuario debe tener menos de " +
          this.userName +
          " caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Necesitamos un e-mail",
      (v) =>
        /.+@.+\..+/.test(v) || "Hay algo raro con tu email, intenta con otro",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="css" scoped></style>
