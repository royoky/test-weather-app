<template>
  <VApp>
    <VAppBar
      color="rgb(37, 127, 211)"
      image="http://www.pixelstalk.net/wp-content/uploads/2016/05/Blue-sunny-sky.jpg"
    >
      <VAppBarNavIcon></VAppBarNavIcon>
      <VAppBarTitle
        ><div class="app-bar-title">Weather Forecast</div></VAppBarTitle
      >
      <VBtn icon @click="toggleTheme">
        <VIcon>mdi-theme-light-dark</VIcon>
      </VBtn>
      <VBannerActions></VBannerActions>
    </VAppBar>
    <VMain>
      <HomePage />
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import HomePage from "./views/HomePage.vue";
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<style lang="scss">
.app-bar-title {
  color: rgb(49, 46, 46);
  text-align: center;
}
</style>
