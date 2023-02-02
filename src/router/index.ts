import { createRouter, createWebHistory } from "vue-router";

const home = () => import("../views/home.vue");
const login = () => import("../views//login/index.vue");
const learn = () => import("../views/learn/learn.vue");

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/learn",
    name: "learn",
    component: learn,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
