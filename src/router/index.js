import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'app',
    component: () => import('../layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      // -> TODAS AS QUADRAS
      {
        path: 'quadras',
        name: 'quadras',
        component: () => import('../views/QuadrasView.vue')
      },
      {
        path: 'quadras/:id',
        name: 'quadraDetails',
        component: () => import('../views/QuadraDetailsView.vue')
      },
      {
        path: 'politic',
        name: 'politic',
        component: () => import('../views/PoliticView.vue')
      }
    
    ]
  },

  // ------------------------------------------------------------------------------------------------------------------ //

  // OPÇÕES DO MENU -> TOPO DO SITE

  // ------------------------------------------------------------------------------------------------------------------ //
  // -> PERFIL DO USUÁRIO
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../layouts/ProfileLayout.vue'),
    children: [
      {
        path: '',
        name: 'profile_view',
        component: () => import('../views/PerfilDoUsuarioView.vue')
      },
      {
        path: 'locais',
        name: 'profile_locais',
        component: () => import('../views/MeusLocaisView.vue')
      },
      // ------------------------------------------------------------------------------------------------------------------ //
      // -> CADASTRO DOS LOCAIS
      {
        path: 'locais/new',
        name: 'locaisCadastro',
        component: () => import('../views/CadastreLocaisView.vue')
      },
      // -> CADASTRO DAS QUADRAS
      {
        path: 'quadras/new',
        name: 'quadrasCadastro',
        component: () => import('../views/CadastreQuadrasView.vue')
      },
      {
        path: 'new',
        name: 'profile_new',
        component: () => import('../views/PerfilDoUsuarioView.vue')
      },
      {
        path: 'login',
        name: 'profile_login',
        component: () => import('../views/LoginView.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'login_view',
        component: () => import('../views/LoginView.vue')
      },
      // CADASTROS DO SITE

      {
        path: '/register',
        name: 'login-register',
        component: () => import('../views/CadastroUserView.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
