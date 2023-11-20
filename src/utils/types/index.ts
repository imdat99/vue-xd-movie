import { OPENRATION_NAME } from "../constant";

export type Theme = "dark" | "light" | "system";
export type GraphQuery = {
  operationName: OPENRATION_NAME;
  variables: Record<string, string | number>;
  query: string;
};

export type QueryResult<T extends Record<string, any>> = {
  loading: boolean;
  data: T;
  status: "success" | "fail" | "idle";
};

export type Genre = {
  nameVi: string;
  nameEn: string;
  slug: string;
  __typename: "Genre";
};
export type MovieTitle = {
  id: string;
  nameEn: string;
  nameVi: string;
  type: string;
  postedAt: string;
  tmdbPoster: string;
  tmdbBackdrop: string;
  publishDate: string;
  intro: string;
  imdbRating: string;
  countries: string[];
  genres: Genre[];
  translation: "subtitle";
  __typename: "Title";
};

export type HomePageTitle = Record<
  "recommendedTitles" | "movieTitles" | "showTitles" | "waitingTitles",
  { nodes: MovieTitle[] }
>;
