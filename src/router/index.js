import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView";
import AgentsView from "../views/AgentsView";
import ListingsView from "../views/ListingsView";
import BlogView from "../views/BlogView";
import ContactView from "../views/ContactView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/agents",
    name: "agents",
    component: AgentsView,
  },
  {
    path: "/listings",
    name: "listings",
    component: ListingsView,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: BlogView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
