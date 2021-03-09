<template>
  <div>
    <v-main>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "AdminMain",
};
</script>

<style lang="css">
</style>
