import api from '@/api';
import { defineStore } from 'pinia'

export const useUsuariosStore = defineStore('usuarios', {
  state: () => {
    return {
      usuario: null,
      logado: false,
      locais: [],
      quadras: []
    }
  },

  actions: {
    cadastrarUsuario(usuario) {
      // Enviar para a rota o método post da url /usuarios
    },
    async consultarQuadras() {
      const res = await api.get("/quadras");
      this.quadras = res.data;
    },
    async consultarLocais() {
      const res = await api.get("/locais");
      this.locais = res.data;
    },
  }
});
