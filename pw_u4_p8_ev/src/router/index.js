import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EstudianteView from "@/views/EstudianteView.vue";
import LoginView from "@/views/LoginView.vue";

// function estaAutenticado(){
//   //comprobacion de la flag auth
//   return localStorage.getItem('auth')==='true';
// }

const estaAutenticado = () => localStorage.getItem("auth") === "true";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      //nombre personalizable
      requiresAuth: true, //protegida
    },
  },
  // {
  //   path: "/estudiante",
  //   name: "estudiante",
  //   component: EstudianteView,
  // },

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//GUARDIAN
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    //en caso de no estar autenticado
    if (!estaAutenticado()) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
