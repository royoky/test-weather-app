<template>
  <div class="weather-chart">
    <Chart
      :options="getChartOptions"
      :class="
        theme.global.current.value.dark ? 'highcharts-dark' : 'highcharts-light'
      "
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { Chart } from "highcharts-vue";
import { WeatherData, List } from "../models/weatherData.model";
import { useWeatherData } from "../stores/weatherData";
import { useTheme } from "vuetify";

const weatherDataStore = useWeatherData();
const theme = useTheme();

const { weatherData } = storeToRefs(weatherDataStore);

const props = defineProps<{
  chartTitle: string;
}>();

const getChartOptions = computed(() => {
  return {
    chart: {
      type: "spline",
    },
    title: { text: props.chartTitle },
    yAxis: {
      title: {
        text: "Temperature (°C)",
      },
    },

    xAxis: {
      type: "datetime",
      // tickInterval: 12 * 36e5, // 3 hours
      minorTickInterval: 3 * 36e5, // one hour
      labels: {
        enabled: true,
      },
      title: {
        text: "3-hour",
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {},
    series: weatherData.value.map((wd: WeatherData) => {
      const data = wd.list?.map((elt: List) => {
        return {
          x: elt.dt * 1000,
          y: elt.main.temp,
        };
      });
      return { name: wd.city.name, data };
    }),
  };
});
</script>

<style>
@import "../styles/dark-unica.css";
</style>
