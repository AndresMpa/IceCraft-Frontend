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
            <form>
              <img
                src="../../assets/logo.png"
                class="login--avatar justify-center"
                alt="password"
              />
              <v-divider inset dark></v-divider>
              <v-card-title class="justify-center">
                Acceso al sistema
              </v-card-title>
              <v-text-field v-model="user" label="Usuario"></v-text-field>
              <v-text-field
                v-model="password"
                label="Contraseña"
                type="password"
              ></v-text-field>
              <v-btn class="mr-4" @click.prevent="loginUser"
                ><!--@click.prevent="test">-->
                Ingresar
              </v-btn>
              <v-btn class="mr-4" @click.prevent="cancelLogin">
                Cancelar
              </v-btn>
              <v-btn class="mr-4" @click.prevent="sendToCreateAccount">
                Crear una cuenta
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "TheLogin",
  data() {
    return {
      user: "",
      password: "",
      currentError: null,
    };
  },
  methods: {
    test() {
      this.$router.push({ name: "Main" });
    },
    loginUser() {
      axios
        //Esta es la ruta del backend
        .post("/usuario/login", {
          user: this.user,
          password: this.password,
        })
        .then((response) => {
          return response.data;
        })
        //Se guarda el token de la sesion
        .then((data) => {
          this.$store.dispatch("keepToken", data.tokenReturn);
          swal(
            "Exitoso",
            "Hola de nuevo " + this.$store.state.user.nombre,
            "success"
          );
          //Redireccionamientos
          if (localStorage.getItem("rol") == "Administrador") {
            this.$router.push({ name: "AdministrationMainContent" });
          } else {
            this.$router.push({ name: "LayoutMain" });
          }
        })
        .catch((error) => {
          this.currentError = null;
          if (error.response.status == 401) {
            this.currentError = "Credenciales son incorrectas.";
          } else if (error.response.status == 404) {
            this.currentError = "El usuario no existe";
          } else {
            this.currentError = "Ocurrió un error con el servidor.";
          }
          swal("Error", this.currentError, "error");
        });
    },
    sendToCreateAccount() {
      this.$router.push({ name: "Account" });
    },
    cancelLogin() {
      this.$store.dispatch("close");
      this.$router.push({ name: "Main" });
    },
  },
};
</script>
<style lang="css">
.sideImage {
  max-width: 70px;
  max-height: 70px;
  display: inline-flex;
}
.login {
  border-radius: 80px;
}
.login--avatar {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  min-width: 120px;
  min-height: 120px;
}
</style>
