<template>
  <div>
    <administration-bar />
    <administration-main-content />
  </div>
</template>
<script>
import AdministrationBar from '../components/AdministrationBar.vue';
import AdministrationMainContent from '../components/AdministrationMainContent.vue';
export default {
  name: "Administration",
  components: {
    AdministrationBar,
    AdministrationMainContent
  },
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
