<template>
  <div>
    <administration-bar />
    <p>Ya se ve esta madre</p>
  </div>
</template>
<script>
import AdministrationBar from '../components/AdministrationBar.vue';
export default {
  name: "Administration",
  components: {
    AdministrationBar
  },
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
