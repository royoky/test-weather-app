import { defineStore } from "pinia";
import { City } from "../models/city.model";
import api from "../services/api";
import { plainToInstance } from "class-transformer";

export const useCities = defineStore("cities", {
  state: () => {
    return {
      cities: [] as City[],
      cityNames: ["nantes", "bordeaux", "lyon", "marseille", "paris"],
      selectedCities: [] as string[],
    };
  },
  actions: {
    async fetchAll(): Promise<void> {
      const params = new URLSearchParams({
        appId: import.meta.env.VITE_API_KEY,
        q: "",
      });
      const responses = await Promise.all(
        this.cityNames.map(async (city) => {
          params.set("q", city);
          const res = await api.get("/geo/1.0/direct", { params });
          return res.data;
        })
      );
      this.cities = plainToInstance(City, responses as City[]);
      console.info("cities fetched");
    },
  },
});
