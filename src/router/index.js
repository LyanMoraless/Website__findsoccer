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
        component: () => import('../views/quadras/QuadrasView.vue')
      },
      {
        path: 'quadras/:id',
        name: 'quadraDetails',
        component: () => import('../views/quadras/QuadraDetailsView.vue')
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
        component: () => import('../views/profiles/PerfilDoUsuarioView.vue')
      },
      {
        path: 'locais',
        name: 'profile_locais',
        component: () => import('../views/profiles/MeusLocaisView.vue')
      },
      // -> CADASTRO DOS LOCAIS
      {
        path: 'locais/new',
        name: 'locaisCadastro',
        component: () => import('../views/profiles/CadastreLocaisView.vue')
      },
      // -> CADASTRO DAS QUADRAS
      {
        path: 'locais/:local_id/quadras/new',
        name: 'quadrasCadastro',
        component: () => import('../views/profiles/CadastreQuadrasView.vue')
      },
      {
        path: 'new',
        name: 'profile_new',
        component: () => import('../views/profiles/PerfilDoUsuarioView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'login-view',
        component: () => import('../views/login/LoginView.vue')
      },
      // CADASTROS DO SITE

      {
        path: '/register',
        name: 'login-register',
        component: () => import('../views/login/CadastroUserView.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
