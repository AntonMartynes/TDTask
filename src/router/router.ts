import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { UserRole } from "../types/user";

export const router = createRouter({
  history: createWebHistory(),
  routes, // массив маршрутов, определенный в вашем проекте
});

router.beforeEach((to, _, next) => {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const userRole = localStorage.getItem("userRole");

  if (isLoggedIn) {
    if (to.path === "/login" || to.path === "/") {
      next("/dashboard");
    } else {
      next();
    }
  } else {
    if (to.path === "/dashboard" || to.path === "/settings") {
      next("/login");
    } else {
      next();
    }
  }

  if (userRole !== UserRole.Admin && to.path === "settings") {
    next("/dashboard");
  } else {
    next();
  }
});
