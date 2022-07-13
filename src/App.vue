<template>
  <v-app>
    <v-app-bar
      color="teal-darken-4"
      image="http://www.pixelstalk.net/wp-content/uploads/2016/05/Blue-sunny-sky.jpg"
    >
      <v-app-bar-title
        ><div class="app-bar-title">Weather Forecast</div></v-app-bar-title
      >
    </v-app-bar>
    <v-main>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HomePage from "./views/HomePage.vue";
</script>

<style lang="scss">
.app-bar-title {
  color: rgb(49, 46, 46);
  text-align: center;
}
</style>
