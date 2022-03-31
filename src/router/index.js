import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ticket from "../views/Ticket.vue";
import ManageTicket from "../views/ManageTicket.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ticket",
    name: "Ticket",
    component: Ticket,
  },
  {
    path: "/manage-ticket",
    name: "ManageTicket",
    component: ManageTicket,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
