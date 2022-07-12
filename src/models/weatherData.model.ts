import { Expose } from "class-transformer";
import { City } from "./city.model";

export interface mainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface windData {
  speed: number;
  deg: number;
  gust: number;
}

export interface list {
  main: mainData;
  wind: windData;
}

export class WeatherData {
  @Expose()
  list: list[];

  @Expose()
  city: City;
}
