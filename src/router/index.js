import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPage from "@/components/DashboardPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardPage // 不能使用 vue3 写法
  }
];

const router = new VueRouter({
  routes
});

export default router;
