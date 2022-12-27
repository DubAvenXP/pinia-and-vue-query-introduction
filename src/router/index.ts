import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "counter-1",
            component: () => import("@/counter/pages/Counter1Page.vue"),
        },
    ],
});

export default router;
