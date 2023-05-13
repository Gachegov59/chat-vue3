import index from "@/pages/chatPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import defaultLayout from "@/layouts/defaultLayout.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: index,
      meta: {
        layout: defaultLayout,
        // requiresAuth: false
      },
    },
    {
      path: "/auth",
      component: () => import("@/pages/authPage.vue"),
      meta: {
        layout: defaultLayout,
      },
    },
  ],
});
