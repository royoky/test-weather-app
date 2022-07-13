<template>
  <VApp>
    <VAppBar
      color="rgb(37, 127, 211)"
      image="http://www.pixelstalk.net/wp-content/uploads/2016/05/Blue-sunny-sky.jpg"
    >
      <VAppBarTitle
        ><div class="app-bar-title">Weather Forecast</div></VAppBarTitle
      >
    </VAppBar>
    <VMain>
      <HomePage />
    </VMain>
  </VApp>
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
