import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import EmptyPage from "../pages/EmptyPage.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Paper Dashboard 2",
    },
  },
  {
    path: "/icons",
    name: "Icons",
    component: EmptyPage,
    meta: {
      title: "Icons",
    },
  },
  {
    path: "/maps",
    name: "Maps",
    component: EmptyPage,
    meta: {
      title: "Maps",
    },
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: EmptyPage,
    meta: {
      title: "Notifications",
    },
  },
  {
    path: "/user-profile",
    name: "User",
    component: EmptyPage,
    meta: {
      title: "User",
    },
  },
  {
    path: "/tables",
    name: "Tables",
    component: EmptyPage,
    meta: {
      title: "Tables",
    },
  },
  {
    path: "/typography",
    name: "Typography",
    component: EmptyPage,
    meta: {
      title: "Typography",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: EmptyPage,
    meta: {
      title: "NotFound",
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;