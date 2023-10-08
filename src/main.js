import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

import "aos/dist/aos.css";
createApp(App).use(router).mount("#app");
