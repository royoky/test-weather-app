import api from "./api";

export default class WeatherService {
  static getFiveDaysData(city: string) {
    const params = {
      appid: "",
    };
    const res = api.get("/data/2.5/forecast", { params });
  }
}
