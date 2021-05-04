<template>
  <v-layout class="blue-grey darken-4">
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
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      :counter="this.userName"
                      label="Ingresa tus nombres"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :rules="userRules"
                      label="Ingresa tu nombre de usuario"
                      required
                    ></v-text-field>
                    <v-select
                      :rules="[(v) => !!v || 'Selecciona una categoria']"
                      label="Indica tu genero literario favorito"
                      v-model="select"
                      :items="items"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      v-model="lastname"
                      :rules="lastnamesRules"
                      :counter="this.userName"
                      label="Ingresa tus apellidos"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="Correo electronico"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>

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

              <v-btn class="mr-4" @click.prevent="validate" :disabled="!valid">
                Enviar
              </v-btn>
              <v-btn class="mr-4" @click.prevent="resetValidation">
                Validar
              </v-btn>
              <v-btn class="mr-4" @click.prevent="reset">
                Borrar
              </v-btn>
              <v-btn class="mr-4" @click.prevent="sendLogin">
                Cancelar
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
    dni: "",
    name: "",
    lastname: "",
    birthDate: "",
    place: "",
    genero: "",
    house: "",
    topic: "",
    user: "",
    password: "",
    //Users names
    userName: 50,
    nameRules: [
      (value) => !!value || "Necesitas un nombre de usuario",
      (value) =>
        (value && value.length <= this.userName) ||
        "el nombre de usuario debe tener menos de " +
          this.userName +
          " caracteres",
    ],
    //Users lastnames
    lastnamesRules: [
      (value) => !!value || "Necesitas un nombre de usuario",
      (value) =>
        (value && value.length <= this.userName) ||
        "el nombre de usuario debe tener menos de " +
          this.userName +
          " caracteres",
    ],
    //email list
    email: "",
    emailRules: [
      (value) => !!value || "Necesitamos un e-mail",
      (value) =>
        /.+@.+\..+/.test(value) ||
        "Hay algo raro con tu email, intenta con otro",
    ],
    //Item list
    select: null,
    items: [
      "Policial",
      "Aventura",
      "Fantasía",
      "Suspenso",
      "Juvenil",
      "Romance",
      "Horror",
    ],
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
    sendLogin() {
      this.$store.dispatch("close");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="css" scoped></style>
