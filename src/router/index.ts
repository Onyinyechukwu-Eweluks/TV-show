import { createRouter, createWebHistory } from "vue-router";

import DashboardPage from "../views/DashboardPage.vue";
import ShowDetailsPage from "../views/ShowDetailsPage.vue";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
