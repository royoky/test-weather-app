import { Expose } from "class-transformer";

export class City {
  @Expose()
  name: string;

  @Expose()
  lat: number;

  @Expose()
  lon: number;
}
