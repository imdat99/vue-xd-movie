import { BaseQueryUrl } from "@/utils/constant";
import { GraphQuery } from "@/utils/types";

export const appQuery = (
  url: string = BaseQueryUrl,
  option: {
    method: "POST" | "GET";
    headers: Record<string, any>;
    body: string | FormData;
  }
) => {
  return fetch(url, option).then((res) =>
    res.ok
      ? res.json()
      : (() => {
          throw Error();
        })()
  );
};

export const ManualQuery = (graphQuery: GraphQuery) =>
  appQuery(BaseQueryUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphQuery),
  });
