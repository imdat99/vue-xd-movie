import { HomePageTitle } from "@/utils/types";
import { defineStore } from "pinia";

export const nameSpace = "HOME-MOVIE";
export const useHomeTitle = defineStore(nameSpace, {
  state: (): HomePageTitle => ({
    recommendedTitles: {
      nodes: [],
    },
    movieTitles: {
      nodes: [],
    },
    showTitles: {
      nodes: [],
    },
    waitingTitles: {
      nodes: [],
    },
  }),
  actions: {
    addHomeTitle(data: HomePageTitle) {
      console.log("aa", data);
      this.$state = data;
    },
  },
});
