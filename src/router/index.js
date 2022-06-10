import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  
  // ------------------------------------------------------------------------------------------------------------------ //

  // OPÇÕES DO MENU -> TOPO DO SITE

  // ------------------------------------------------------------------------------------------------------------------ //
      // -> PERFIL DO USUÁRIO
  {
    path: '/perfilUser',
    name: 'perfilUser',
    component: () => import('../views/PerfilDoUsuarioView.vue')
  },
      // -> LOCAIS DO USUÁRIO
  {
    path: '/meusLocais',
    name: 'meusLocais',
    component: () => import('../views/MeusLocaisView.vue')
  },
      // -> TODAS AS QUADRAS
  {
    path: '/quadras',
    name: 'quadras',
    component: () => import('../views/QuadrasView.vue')
  },

  // ------------------------------------------------------------------------------------------------------------------ //
  
  // CADASTROS DO SITE

  // ------------------------------------------------------------------------------------------------------------------ //
      // -> CADASTRO DOS LOCAIS
  {
    path: '/locais/new',
    name: 'locaisCadastro',
    component: () => import('../views/CadastreLocaisView.vue')
  },
        // -> CADASTRO DAS QUADRAS
  {
    path: '/quadras/new',
    name: 'quadrasCadastro',
    component: () => import('../views/CadastreQuadrasView.vue')
  },

  // ------------------------------------------------------------------------------------------------------------------ //

  {
    path: '/quadras/:id',
    name: 'quadraDetails',
    component: () => import('../views/QuadraDetailsView.vue')
  },
  
  {
    path: '/politic',
    name: 'politic',
    component: () => import('../views/PoliticView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
