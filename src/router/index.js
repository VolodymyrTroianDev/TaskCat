import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Upload from "../views/UploadComponent.vue";
import View from "../views/View.vue";
import Header from "../components/Header.vue";

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      Header,
    },
  },
  {
    path: "/cats/new",
    name: "Upload",
    components: {
      default: Upload,
      Header,
    },
  },
  {
    path: "/cats/my",
    name: "View",
    components: {
      default: View,
      Header,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
