import { City } from "../models/city.model";
import api from "./api";

export default class WeatherService {
  static async getFiveDaysDataForCity(city: City) {
    const params = {
      appid: import.meta.env.VITE_API_KEY,
      lat: city.lat,
      lon: city.lon,
      units: "metric",
    };
    const res = await api.get("/data/2.5/forecast", { params });
    return res.data;
  }

  static async getFiveDaysDataForCities(cities: City[]) {
    return cities.map(async (city: City) => {
      const res = await WeatherService.getFiveDaysDataForCity(city);
      return res.data;
    });
  }
}
