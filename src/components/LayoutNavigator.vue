<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template>
          <v-list-item :to="{ name: 'Main' }">
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-title> Inicio </v-list-item-title>
          </v-list-item>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Productos </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'News' }">
              <v-list-item-action>
                <v-icon>mdi-newspaper</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Noticias </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Book' }">
              <v-list-item-action>
                <v-icon>mdi-bookshelf</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Libros </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Reserve' }">
              <v-list-item-action>
                <v-icon>mdi-clipboard-edit</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Reservas </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Social </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Friend' }">
              <v-list-item-action>
                <v-icon>mdi-account-box-multiple</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Amigos </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Chat' }">
              <v-list-item-action>
                <v-icon>mdi-mailbox-open-up</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Chats </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Foro' }">
              <v-list-item-action>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Foro </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Perfil </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Profile' }">
              <v-list-item-action>
                <v-icon>mdi-clipboard-account</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Administrar </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Purchase' }">
              <v-list-item-action>
                <v-icon>mdi-history</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Compras </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>

        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title> Contacto </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Creator' }">
              <v-list-item-action>
                <v-icon>mdi-creative-commons</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Creadores </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Info' }">
              <v-list-item-action>
                <v-icon>mdi-book-information-variant</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Contenidos </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Menu</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="this.rol">
        <v-btn @click="logOut" icon>
          <v-icon>logout</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn @click="sendLogin" icon>
          <v-icon>login</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "LayoutNavigator",
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("close");
      this.$router.push({ path: "principal" });
    },
    sendLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style lang="css"></style>
