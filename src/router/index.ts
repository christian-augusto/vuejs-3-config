import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@views/HomeView.vue";
import HelloWorldView from "@views/HelloWorldView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/hello-world",
    name: "hello-world",
    component: HelloWorldView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
