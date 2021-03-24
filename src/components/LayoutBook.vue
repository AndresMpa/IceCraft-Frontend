<template>
  <div>
    <h1>Libros</h1>
    <layout-book-panel></layout-book-panel>
  </div>
</template>

<script>
import LayoutBookPanel from './LayoutBookPanel.vue';
export default {
  name: "LayoutBook",
  components: { LayoutBookPanel },
};
</script>

<style lang="css" scoped></style>
