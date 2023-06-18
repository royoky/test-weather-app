import { Expose, Type } from "class-transformer";
import { City } from "./city.model";

interface MainData {
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

interface WindData {
  speed: number;
  deg: number;
  gust: number;
}

export interface List {
  main: MainData;
  wind: WindData;
  dt: number;
}

export class WeatherData {
  @Expose()
  list: List[];

  @Type(() => City)
  city: City;
}
