<template>
  <div class="home-page">
    <div class="home-page__weather-chart">
      <WeatherChart
        chart-title="5 day weather forecast - temperature"
      ></WeatherChart>
    </div>
    <AppSelect
      v-model="cityStore.selectedCities"
      class="home-page__city-select"
      :items="cityStore.cityNames"
      label="Select one or more cities"
    >
    </AppSelect>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { storeToRefs } from "pinia";
import AppSelect from "../components/AppSelect.vue";
import WeatherChart from "../components/WeatherChart.vue";
import { useCities } from "../stores/cities";
import { useWeatherData } from "../stores/weatherData";
import WeatherService from "../services/weather.service";
import { plainToInstance } from "class-transformer";
import { WeatherData } from "../models/weatherData.model";

const cityStore = useCities();
const weatherDataStore = useWeatherData();
if (!cityStore.cities.length) {
  cityStore.fetchAll();
}

const { selectedCities } = storeToRefs(cityStore);
watch(
  selectedCities,
  async (newCities, currentCities) => {
    if (newCities.length > currentCities.length) {
      const addedCity = newCities
        .filter((city) => !currentCities.includes(city))
        .pop();
      if (addedCity) {
        const cityObj = cityStore.getCityObjByName(addedCity);
        if (cityObj) {
          const weatherData = await WeatherService.getFiveDaysDataForCity(
            cityObj
          );
          const receivedData = plainToInstance(
            WeatherData,
            weatherData as any,
            {
              strategy: "exposeAll",
            }
          );
          weatherDataStore.addCityWeatherData(receivedData);
        }
      }
    } else if (newCities.length < currentCities.length) {
      const removedCity = currentCities
        .filter((city) => !newCities.includes(city))
        .pop();
      if (removedCity) {
        weatherDataStore.removeCityWeatherData(removedCity);
      }
    }
  },
  { deep: true }
);
</script>

<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1 rem;

  &__weather-chart {
    padding: 3rem;
  }

  &__city-select {
    padding: 12rem 0 0 12 rem;
    min-width: 16rem;
  }
}
</style>
