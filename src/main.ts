import "@/assets/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import { AppIcon } from "./components/ui/icon";
import directives from "./directives";
import router from "./router";
import provider from "./provider";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App).use(router);
app.use(pinia);
directives(app);
provider(app);
app.component("v-icon", AppIcon);
app.mount("#app");
