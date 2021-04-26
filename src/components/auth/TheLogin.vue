<template>
  <v-layout class="primary">
    <v-flex>
      <v-row align="center" align-content="center">
        <v-col align-self="center">
          <v-avatar>
            <img
              src="../../assets/logo.png"
              class="login--avatar d-inline-flex"
              alt="password"
            />
          </v-avatar>
          <v-card
            dark
            color="white"
            style="max-width: 750px; margin: auto"
            class="overflow-hidden info pa-12 mt-12 login"
          >
            <form>
              <v-card-title class="d-inline-flex">
                Acceso al sistema
              </v-card-title>
              <v-text-field v-model="email" label="Usuario"></v-text-field>
              <v-text-field
                v-model="password"
                label="Contraseña"
                type="password"
              ></v-text-field>
              <v-btn class="mr-4" @click.prevent="test"><!--@click.prevent="loginUser">-->
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
      email: "",
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
          email: this.email,
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
  border-radius: 25px;
}
.login--avatar {
  display: inline-block;
  border-radius: 50%;
  background: #fff;
  margin: 15px;
}
</style>
