import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ticket from "../views/Ticket.vue";
import ManageTicket from "../views/ManageTicket.vue";
import BuyTicket from "../views/BuyTicket.vue";
import Newsletter from "../views/Newsletter.vue";
import Hackathon from "../views/Hackathon.vue";
import TalksPage from "../views/TalksPage.vue";
import TalksPageTwo from "../views/TalksPageTwo.vue";
import Impressum from "../views/Impressum.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ticket/:id",
    name: "Buy",
    component: Ticket,
  },
  {
    path: "/manage-ticket",
    name: "ManageTicket",
    component: ManageTicket,
  },
  {
    path: "/ticket",
    name: "Ticket",
    component: BuyTicket,
  },
  {
    path: "/hackathon",
    name: "Hackathon",
    component: Hackathon,
  },
  {
    path: "/newsletter",
    name: "Newsletter",
    component: Newsletter,
  },
  {
    path: "/talks",
    name: "TalksPage",
    component: TalksPage,
  },
  {
    path: "/talks-2",
    name: "TalksPageTwo",
    component: TalksPageTwo,
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: Impressum,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
