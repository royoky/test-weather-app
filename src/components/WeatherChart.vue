<template>
  <div class="weather-chart">
    <Chart :options="getChartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { Chart } from "highcharts-vue";
import { WeatherData, list } from "../models/weatherData.model";
import { useWeatherData } from "../stores/weatherData";

const weatherDataStore = useWeatherData();

const { weatherData } = storeToRefs(weatherDataStore);

const props = defineProps<{
  chartTitle: string;
}>();

const getChartOptions = computed(() => {
  return {
    title: { text: props.chartTitle },
    series: weatherData.value.map((wd: WeatherData) => {
      const data = wd.list?.map((elt: list) => {
        return {
          y: elt.main.temp,
        };
      });
      return { name: wd.city.name, data };
    }),
  };
});
</script>
