import type { App } from "vue";
import { AppQlProvider } from "./appQuery";
// register all directives
const provider = (app: App<Element>) => {
  app.provide("appQl", AppQlProvider);
};

export default provider;
