import Vue from "vue";
import VueRouter from "vue-router";
import Stordc from "../views/Stordc";
import Intmov from "../views/Intmov";
import SitMP from "../views/SitMP";
import Lav from "../views/Lav";
import SplitView from "../views/SplitView";
import BySprint from "../views/BySprint";
import BySmart from "../views/BySmart";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Stordc,
    meta: { title: "LAMEP APP" },
  },
  {
    path: "/intmov",
    component: Intmov,
    meta: { title: "LAMEP APP" },
  },
  {
    path: "/sitmp",
    component: SitMP,
    meta: { title: "LAMEP APP" },
  },
  {
    path: "/lav",
    component: Lav,
    meta: { title: "LAMEP APP" },
  },
  {
    path: "/splitview",
    component: SplitView,
    meta: { title: "LAMEP APP" },
  },
  {
    path: "/bysprint",
    component: BySprint,
    meta: { title: "LAMEP APP" },
  },
  {
    path: "/bysmart",
    component: BySmart,
    meta: { title: "LAMEP APP" },
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

export default router;
