import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "../components/HomePage.vue";
import LoadingPage from "../components/LoadingPage.vue";
import GravityDrive from "../components/case-studies/GravityDrive.vue";

const routes = [
  { path: "/", component: LoadingPage },
  { path: "/home", component: HomePage },
  {
    path: "/gravityDrive",
    component: GravityDrive,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
