import { h } from "vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: "/projects",
            name: "projects",
            component: () => import("../views/ProjectsView.vue")
        },
        {
            path: "projects/:id",
            name: "project",
            component: () => import("../views/SingleProjectView.vue")
        },
        {
            path: "/:catchAllUndefined(.*)*",
            name: "NotFound",
            component: h("p", { style: "color:red;" }, "404 Not Found")
        }
    ]
})

export default router
