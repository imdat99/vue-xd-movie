import type { App } from "vue";
import iconDirective from "./icon";
// register all directives
const directives = (app: App<Element>) => {
  iconDirective(app);
};

export default directives;
