import { createRouter, createMemoryHistory } from "vue-router";

import HomePage from "../components/HomePage.vue";
import LoadingPage from "../components/LoadingPage.vue";
import GravityDrive from "../components/case-studies/GravityDrive.vue";
import ETurn from "../components/case-studies/ETurn.vue";

const routes = [
  { path: "/", component: LoadingPage },
  { path: "/home", component: HomePage },
  {
    path: "/gravityDrive",
    component: GravityDrive,
  },
  {
    path: "/eTurn",
    component: ETurn,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});
