import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = "clients";

export const clientRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    name: ROUTE_NAME,
    component: () => import("@/clients/layout/ClientsLayout.vue"),
    children: [
        {
            path: "",
            name: "clients",
            redirect: { name: `${ROUTE_NAME}-list` },
        },
        {
            path: "list",
            name: `${ROUTE_NAME}-list`,
            component: () => import("@/clients/pages/ListPage.vue"),
        },
        {
            path: ":id",
            name: `${ROUTE_NAME}-id`,
            component: () => import("@/clients/pages/ClientPage.vue"),
        }
    ]

}
