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
      cidades: [],
      quadrasMaisAcessadas: [],
      quadrasRecentes: [],
      quadrasMaisAvaliadas: []
    }
  },
  getters: {
    quadrasFiltradas: (state) => state.quadras
      .filter((quadra) => (state.filtro.tipo_id == null || quadra.quadra_tipo_id == state.filtro.tipo_id))
      // .filter((quadra) => (state.filtro.cidade == null || (quadra.cidade == state.filtro.cidade.nome && quadra.cidade == state.filtro.cidade.estado)))
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
    async consultarCidades() {
      const res = await api.get("/locais/cidades");
      this.cidades = res.data
    },
    consultarQuadrasRecentes() {
    },
    consultarQuadrasMaisAvaliadas() {
    }
  }
})
