import { OPENRATION_NAME } from "../constant";

export const HomeQuery = {
  operationName: OPENRATION_NAME.HOMETITLES,
  variables: {},
  query:
    'query HomeTitles {\n  recommendedTitles: titles(first: 8, sort: "recommended") {\n    nodes {\n      ...TitleBasics\n      __typename\n    }\n    __typename\n  }\n  movieTitles: titles(first: 15, sort: "updated", types: ["movie"], watchable: true) {\n    nodes {\n      ...TitleBasics\n      __typename\n    }\n    __typename\n  }\n  showTitles: titles(first: 10, sort: "updated", types: ["show"], watchable: true) {\n    nodes {\n      ...TitleBasics\n      __typename\n    }\n    __typename\n  }\n  waitingTitles: titles(first: 20, sort: "updated", types: ["movie", "show"], watchable: null) {\n    nodes {\n      ...TitleBasics\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment TitleBasics on Title {\n  id\n  nameEn\n  nameVi\n  type\n  postedAt\n  tmdbPoster\n  tmdbBackdrop\n publishDate\n  intro\n  imdbRating\n  countries\n  genres {\n    nameVi\n    slug\n    __typename\n  }\n  translation\n  __typename\n}\n',
};
