import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/produkcja",
    name: "production",
    component: () => import("../views/Production.vue"),
  },
  {
    path: "/sterylizacja",
    name: "sterylizacja",
    component: () => import("../views/Sterylization.vue"),
  },
  {
    path: "/pakowanie",
    name: "pakowanie",
    component: () => import("../views/Packing.vue"),
  },
  {
    path: "/wykresy",
    name: "wykresy",
    component: () => import("../views/Charts.vue"),
  },
  {
    path: "/statystyki",
    name: "statystyki",
    component: () => import("../views/Statistics.vue"),
  },
  {
    path: "/archiwum",
    name: "archiwum",
    component: () => import("../views/Archives.vue"),
  },
  {
    path: "/line/:lineId",
    name: "LineDisplay",
    component: () => import("../views/LineView.vue"),
  },
  {
    path: "/linie",
    name: "allLines",
    component: () => import("../views/AllLines.vue"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
