import api from '@/api';
import { defineStore } from 'pinia'

export const useUsuariosStore = defineStore('usuarios', {
  state: () => {
    return {
      usuario: null,
      logado: true,
    }
  },

  getters: {
    isLogado: (state) => state.logado,
  },

  actions: {
    cadastrarUsuario(usuario) {
      // Enviar para a rota o método post da url /usuarios
    },
  }
});
