import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/settings",
            name: "settings",
            component: () => import("../views/SettingsView.vue"),
        },
        {
            path: "/incidents",
            name: "incidents",
            component: () => import("../views/CamundaIncidentsView.vue"),
        }
    ],
});

export default router;
