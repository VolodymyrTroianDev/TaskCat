import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import RenderImg from "./components/RenderImg.vue";
import { infinityScroll } from "./services/infinityScroll";
import "./assets/main.css";

const app = createApp(App);
app.config.globalProperties.$infinityScroll = infinityScroll;
app.component("render-image", RenderImg);

app.use(createPinia()).use(router).use(VueAxios, axios).mount("#app");
