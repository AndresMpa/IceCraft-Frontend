<template>
  <div>
    <app-bar />
    <layout-home />
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutHome from '../components/LayoutHome.vue';
import AppBar from '../components/AppBar.vue';

export default {
  name: "Home",
  components: {
    AppBar,
    LayoutHome,
  },
};
</script>
