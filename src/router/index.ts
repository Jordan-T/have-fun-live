import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import OfferList from "../views/OfferList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/offers",
    name: "Offers",
    component: OfferList,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
