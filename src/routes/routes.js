import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "../components/HomePage.vue";
import LoadingPage from "../components/LoadingPage.vue";

const routes = [
  { path: "/", component: LoadingPage },
  { path: "/home", component: HomePage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
