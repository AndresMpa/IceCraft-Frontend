<template>
  <div>
    <administration-bar />
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
