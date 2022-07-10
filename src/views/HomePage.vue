<template>
  <div class="home-page">
    <AppSelect v-model=cityStore.selectedCities :items="cityStore.cityNames" label="Select one or more cities">
    </AppSelect>
    <WeatherChart msg="weather chart"></WeatherChart>
  </div>
</template>

<script setup lang="ts">
import AppSelect from "../components/AppSelect.vue";
import WeatherChart from "../components/WeatherChart.vue";
import { useCities } from "../stores/cities";

const cityStore = useCities();

if (!cityStore.cities.length) {
  cityStore.fetchAll();
}

</script>
