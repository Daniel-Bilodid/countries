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
    path: "/country/:country",
    name: "CountryInfo",
    component: InfoCard,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
