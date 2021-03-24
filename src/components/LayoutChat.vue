<template>
  <div>
    <h1>
      Chats
    </h1>
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      min-height="200"
      transition="fade-transition"
    >
    </v-lazy>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped></style>
