import { appQuery } from "@/lib/app-requets";
import { BaseQueryUrl } from "@/utils/constant";
import { GraphQuery, QueryResult } from "@/utils/types";
import { reactive } from "vue";

const queryFunction: Record<string, Function> = {};

export const AppQlProvider = () => {
  const query = reactive(queryFunction);
  return query;
};

export default function useAppQl<T extends Record<string, any>>(
  graphQuery: GraphQuery
) {
  const queryResult = reactive<
    { data: Record<string, any> } & Omit<QueryResult<T>, "data">
  >({
    loading: false,
    status: "idle",
    data: {},
  });

  queryFunction[graphQuery.operationName] = (setFn: (t: T) => void) => {
    queryResult.status = "idle";
    queryResult.loading = true;
    appQuery(BaseQueryUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphQuery),
    })
      .then((r) => {
        if (!setFn) {
          queryResult.data = r;
        } else {
          setFn(r);
        }
        queryResult.status = "success";
      })
      .catch(() => {
        queryResult.status = "fail";
      })
      .finally(() => {
        queryResult.loading = false;
      });
  };
  return queryResult as QueryResult<T>;
}
