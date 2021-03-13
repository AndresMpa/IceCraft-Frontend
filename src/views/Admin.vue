<template>
  <div>
    <admin-navigator />
    <admin-main />
  </div>
</template>
<script>
import AdminMain from '../components/AdminMain.vue';
import AdminNavigator from '../components/AdminNavigator.vue';
export default {
  components: { AdminNavigator, AdminMain },
  name: "Admin",
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
