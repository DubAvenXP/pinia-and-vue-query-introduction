import { createRouter, createWebHistory } from "vue-router";
import { clientRoute } from "@/clients/router";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "counter-1",
            component: () => import("@/counter/pages/Counter1Page.vue"),
        },
        {
            path: "/setup",
            name: "counter-2",
            component: () => import("@/counter/pages/Counter2Page.vue"),
        },
        clientRoute,
    ],
});

export default router;
