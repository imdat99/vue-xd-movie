import { Theme } from "../types";

export const storageKey = "xd-movie-theme";
export const defaultTheme: Theme = "light" as const;
export const tmdbUrl = "https://image.tmdb.org/t/p/original/";
export const BaseQueryUrl = "http://ltd.giant9.click/wp-json/movie/g";
export enum OPENRATION_NAME {
  TITLE = "Title",
  HOMETITLES = "HomeTitles",
}
