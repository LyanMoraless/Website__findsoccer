import { defineStore } from 'pinia'

import api from '@/api'

export const useQuadrasStore = defineStore('quadras', {
  state: () => {
    return {
      filtro: {
        tipo_id: null,
        cidade: null,
        data: null,
        hora: null
      },
      quadras: [],
      tiposDeQuadras: [],
      quadrasMaisAcessadas: [],
      quadrasRecentes: [],
      quadrasMaisAvaliadas: []
    }
  },
  actions: {
    async consultarQuadras() {
      const res = await api.get("/quadras");
      this.quadras = res.data;
    },
    consultarQuadrasMaisAcessadas() {
    },
    async cadastrarQuadra(quadra) {
      const res = await api.post("/quadras", quadra);
      console.log(res);
    },
    async consultarTiposDeQuadras() {
      const res = await api.get("/quadras-tipos");
      this.tiposDeQuadras = res.data;
    },
    consultarQuadrasRecentes() {
    },
    consultarQuadrasMaisAvaliadas() {
    }
  }
})
