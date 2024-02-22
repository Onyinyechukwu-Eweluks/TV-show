import { createRouter, createWebHistory } from "vue-router";

import DashboardPage from "../views/DashboardPage.vue";
import ShowDetailsPage from "../views/ShowDetailsPage.vue";
import SearchPage from "../views/SearchPage.vue";

export const routes = [
  {
    path: "/",
    name: "DashboardPage",
    component: DashboardPage,
  },
  {
    path: "/:id",
    name: "ShowDetailsPage",
    component: ShowDetailsPage,
  },
  {
    path: "/search/:tvShow",
    name: "SearchPage",
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
