import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      children: [
        {
          name: "homeIndex",
          path: "",
          component: () => import("@/pages/home/Home.vue"),
        },
        {
          name: "Phim Hot",
          path: "top",
          component: () => import("@/pages/top/Top.vue"),
        },
        {
          name: "category",
          path: "category",
          children: [
            {
              name: "Phim Lẻ",
              path: "movie",
              component: () => import("@/pages/cats/Category.vue"),
            },
            {
              name: "Phim Bộ",
              path: "show",
              component: () => import("@/pages/cats/Category.vue"),
            },
          ],
        },
        {
          name: "Phim Mới",
          path: "new",
          component: () => import("@/pages/cats/Category.vue"),
        },
        {
          name: "movie",
          path: "movie/:id",
          component: () => import("@/pages/movie/Movie.vue"),
        },
        {
          name: "watch",
          path: "watch",
          component: () => import("@/pages/watch/Watch.vue"),
        },
      ],
    },
  ],
});

export default router;
