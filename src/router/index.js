import { createRouter, createWebHistory } from "vue-router";
import Countries from "../components/Countries.vue";
import InfoCard from "../components/InfoCard.vue";

const routes = [
  {
    path: "/",
    name: "Countries",
    component: Countries,
  },
  {
    path: "/InfoCard",
    name: "InfoCard",
    component: InfoCard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
