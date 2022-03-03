import Vue from "vue";
import VueRouter from "vue-router";
import PublishPage from "@/components/PublishPage";
import EditPosts from "@/components/EditPosts";
import ViewPosts from "@/components/ViewPosts";

Vue.use(VueRouter);

const routes = [
  {
    path: "/ViewPosts",
    name: "ViewPosts",
    component: ViewPosts,
  },
  {
    path: "/",
    name: "PublishPage",
    component: PublishPage,
  },
  {
    path: "/EditPosts/:id",
    params: true,
    name: "EditPosts",
    component: EditPosts,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
