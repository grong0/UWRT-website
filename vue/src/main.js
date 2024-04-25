import "./assets/output.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon, faArrowRight, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faSun);
library.add(faMoon);
library.add(faArrowRight);
library.add(faShoppingCart);

const app = createApp(App);

app.use(router);

app.mount("#app");
