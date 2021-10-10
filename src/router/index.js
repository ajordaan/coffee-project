import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ManualBrews from "../views/ManualBrews.vue";
import Machines from "../views/Machines.vue";
import Beans from "../views/Beans.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/manual-brews",
    name: "ManualBrews",
    component: ManualBrews,
  },
  {
    path: "/machines",
    name: "Machines",
    component: Machines,
  },
  {
    path: "/beans",
    name: "Beans",
    component: Beans,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
