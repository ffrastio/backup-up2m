import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/author",
    name: "Author",
    component: () => import("../views/sources/author/index.vue"),
  },
  {
    path: "/author/:id",
    props: true,
    name: "AuthorDetail",
    component: () => import("../views/sources/author/detail.vue"),
  },
  {
    path: "/penelitian",
    name: "Penelitian",
    component: () =>
      import("../views/sources/Penelitian.vue"),
  },
  {
    path: "/pengabdian",
    name: "Pengabdian",
    component: () =>
      import("../views/sources/Pengabdian.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
        import("../views/auth/Login.vue")
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
