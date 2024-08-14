import Login from "../pages/login.vue";
import Dashboard from "../pages/dashboard.vue";
import Settings from "../pages/settings.vue";

export const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard },
  { path: "/settings", component: Settings },
];
