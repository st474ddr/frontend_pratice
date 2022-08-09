import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import VideoView from "../views/VideoView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/video",
    name: "video",
    component: VideoView,
    children: [
      {
        path: "info",
        name: "info",
        component: () => import("../views/VideoInfoView.vue"),
      },
      {
        path: "content",
        name: "content",
        component: () => import("../views/VideoContentView.vue"),
      },
    ],
  },
  {
    path: "/parameter",
    component: () => import("../views/ParameterView.vue"),
    children: [
      {
        path: "restful/:parameter",
        component: () => import("../views/ParameterView.vue"),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
