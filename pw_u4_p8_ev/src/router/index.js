import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EstudianteView from "@/views/EstudianteView.vue";
import LoginView from "@/views/LoginView.vue";

import { obtenerPaginasPermitidas } from "@/helpers/Autorizacion";

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
  {
    path: "/estudiante",
    name: "estudiante",
    component: EstudianteView,
    meta: {
      requiresAuth: true, //protegida
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/notas",
    name: "notas",
    component: () => import("@/views/NotasIngresoView.vue"),
    meta: {
      requiresAuth: true, //protegida
    },
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/RecursoProhibidoView.vue"),
  },

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
    //cuando esta autorizado
    if (!estaAutenticado()) {
      //en caso de no estar autenticado
      next("/login");
    } else {
      //si esta autenticado
      const usr = localStorage.getItem("usuario");
      const paginas = obtenerPaginasPermitidas(usr);
      if (paginas.includes(to.path)) {
        next();
      } else {
        next("/403");
      }
    }
  } else {
    next();
  }
});

export default router;
