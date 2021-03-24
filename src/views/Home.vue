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
    LayoutHome,
    LayoutNavigator,
  },
  methods: {
    sendMain() {
      this.$router.push({ name: "Main" }).catch(() => {
        console.log("Home");
      });
    },
  },
  //Hooks
  created() {
    this.sendMain();
  },
};
</script>
