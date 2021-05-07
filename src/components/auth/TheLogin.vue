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
              <v-btn class="d-inline-block w-auto mr-4" @click.prevent="loginUser">
                Ingresar
              </v-btn>
              <v-btn class="d-inline-block w-auto mr-4" @click.prevent="sendToCreateAccount">
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
      loged: "",
      password: "",
      currentError: null,
    };
  },
  methods: {
    test() {
      if (this.user == "Larrycañonga@gmail.com") {
        this.$router.push({ name: "Main" });
      }
    },
    loginUser() {
      axios
        //Esta es la ruta del backend
        .post("/usuario/login", {
          usuario: this.user,
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
          // tipo: 1 -> Cliente
          // tipo: 2 -> Administracion
          // tipo: 3 -> Root
          if (localStorage.getItem("tipo") == "1") {
            this.$router.push({ name: "Main" });
          } else if (localStorage.getItem("tipo") == "2") {
            this.$router.push({ name: "AdminMain" });
          } else if (localStorage.getItem("tipo") == "3") {
            this.$router.push({ name: "Root" });
          } else {
            console.log("404")
          }
        })
        .catch((err) => {
          this.currentError = null;
          if (err.response.status == 401) {
            this.currentError = "Credenciales son incorrectas.";
          } else if (err.response.status == 404) {
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
    created: () => {
      this.loged = localStorage.getItem('token');
      console.log("Token: " + this.loged)
    }
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

@media screen and (max-width: 768px) {
  button {
    width: 100%;
    margin: 5px
  }
}
</style>
