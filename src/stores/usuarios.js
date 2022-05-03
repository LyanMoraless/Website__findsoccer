import { defineStore } from 'pinia'

export const useUsuariosStore = defineStore('usuarios', {
  state: () => {
    return {
      usuario: null,
      logado: false
    }
  },
  actions: {
    cadastrarUsuario(usuario) {
      // Enviar para a rota o método post da url /usuarios
    },
  }
})
