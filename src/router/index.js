import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPage from "@/components/DashboardPage.vue";
import Goods from "@/components/Goods/GoodsPage.vue";
import Orders from "@/components/Order/OrdersPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardPage, // 不能使用 vue3 写法,
    children: [
      {
        path: 'goods',
        name: 'goods',
        component: Goods
      },
      {
        path: 'orders',
        name: 'orders',
        component: Orders
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
