<template>
  <div>
    <layout-bar />
    <layout-home />
  </div>
</template>

<script>
import LayoutBar from '../components/LayoutBar.vue';
import LayoutHome from '../components/LayoutHome.vue';

export default {
  name: "Home",
  components: {
    LayoutHome,
    LayoutBar,
  },
};
</script>
