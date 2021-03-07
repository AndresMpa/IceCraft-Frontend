<template>
  <div>
    <layout-navigator />
    <layout-home />
  </div>
</template>

<script>
import LayoutHome from '../components/LayoutHome.vue';
import LayoutNavigator from '../components/LayoutNavigator.vue';

export default {
  name: "Home",
  components: {
    LayoutHome,
    LayoutNavigator,
  },
  methods: {
    sendMain() {
      this.$router.push({path: "principal"});
      console.log("Home");
    },
  },
  //Hooks
  created() {
    this.sendMain();
  },
};
</script>
