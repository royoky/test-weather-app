<template>
  <div class="weather-chart">
    <Chart :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Chart } from "highcharts-vue";

const chartOptions = {
  title: "Example",
  series: [
    {
      data: [4, 2, 1.25, 1, 1.25, 2, 4], // sample data
    },
  ],
};

const props = defineProps<{
  msg: string;
}>();
</script>
