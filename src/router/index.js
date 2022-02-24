import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/line/:lineId",
    name: "LineDisplay",
    component: () => import("../views/LineView.vue"),
  },
  {
    path: "/",
    name: "allLines",
    component: () => import("../views/AllLines.vue"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;

