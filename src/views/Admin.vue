<template>
  <div>
    <admin-navigator />
    <admin-home />
  </div>
</template>

<script>
import AdminNavigator from "../components/AdminNavigator.vue";
import AdminHome from "../components/AdminHome.vue";
export default {
  name: "Admin",
  components: {
    AdminNavigator,
    AdminHome,
  },
  methods: {
    sendAdmin() {
      this.$router.push({ name: "AdminMain" }).catch(() => {
        console.log("Admin");
      });
    },
  },
  //Hooks
  created() {
    this.sendAdmin();
  },
};
</script>
