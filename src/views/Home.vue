<template>
  <div>
    <layout-navigator />
    <layout-home />
  </div>
</template>

<script>
import LayoutNavigator from "../components/LayoutNavigator.vue";
import LayoutHome from "../components/LayoutHome.vue";
export default {
  name: "Home",
  components: {
    LayoutNavigator,
    LayoutHome,
  },
  methods: {
    sendMain() {
      this.$router.push({ name: "Main" }).catch(() => {
        console.log("Home");
        console.log(this.$store.user);
      });;
    },
  },
  //Hooks
  created() {
    this.sendMain();
  },
};
</script>
