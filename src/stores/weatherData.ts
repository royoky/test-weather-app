import { defineStore } from "pinia";
import { list, WeatherData } from "../models/weatherData.model";

export const useWeatherData = defineStore("weatherData", {
  state: () => {
    return {
      weatherData: [] as WeatherData[],
    };
  },
  actions: {
    addCityWeatherData(weatherData: WeatherData) {
      this.weatherData.push(weatherData);
    },

    removeCityWeatherData(cityName: string) {
      this.weatherData.splice(
        this.weatherData.findIndex(
          (wd) => wd.city.name.toLowerCase() === cityName.toLowerCase()
        ),
        1
      );
    },
  },

  getters: {
    getWeatherDataByCity: (state) => {
      return (cityName: string) =>
        state.weatherData
          .filter((wd) => wd.city.name.toLowerCase() === cityName.toLowerCase())
          .pop();
    },
  },
});
