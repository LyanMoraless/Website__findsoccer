import { defineStore } from 'pinia'

import api, { ibge } from '@/api'

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
      quadrasMaisAvaliadas: [],

//CADASTRO QUADRAS

      horarios: [
        {
          dia: 7,
          desc: "Sábado",
          aberto: false,
          inicio: "08:00",
          fim: "22:00",
        },
        {
          dia: 0,
          desc: "Domingo",
          aberto: false,
          inicio: "08:00",
          fim: "22:00",
        },
        {
          dia: 1,
          desc: "Segunda-feira",
          aberto: true,
          inicio: "08:00",
          fim: "22:00",
        },
        {
          dia: 2,
          desc: "Terça-feira",
          aberto: true,
          inicio: "08:00",
          fim: "22:00",
        },
        {
          dia: 3,
          desc: "Quarta-feira",
          aberto: true,
          inicio: "08:00",
          fim: "22:00",
        },
        {
          dia: 4,
          desc: "Quinta-feira",
          aberto: true,
          inicio: "08:00",
          fim: "22:00",
        },
        {
          dia: 5,
          desc: "Sexta-feira",
          aberto: true,
          inicio: "08:00",
          fim: "22:00",
        },
      ],

//CADASTRO DOS DETALHES DAS QUADRAS

      qdDtls: [
        {
          id: 1,
          vestiario: true,
          banheiro: true,
          chuveiro: true,
          bebedouro: true,
          coletes: true,
          juiz: false,
          cantina: false,
          areaAlimentacao: true,
          chuteira: false,
          bola: true,
          estacionamento: false
        }
      ]

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
    async consultarQuadrasMaisAcessadas() {
      const res = await api.get("/quadras");
      this.quadrasMaisAcessadas = res.data;
    },
    async consultarTiposDeQuadras() {
      const res = await api.get("/quadra-tipos");
      this.tiposDeQuadras = res.data;
    },
    async consultarCidades() {
      const res = await ibge.get("/api/v1/localidades/municipios");
      this.cidades = res.data
    },
    async consultarQuadrasRecentes() {
      const res = await api.get("/quadras");
      this.quadrasRecentes = res.data;
    },
    async consultarQuadrasMaisAvaliadas() {
      const res = await api.get("/quadras");
      this.quadrasMaisAvaliadas = res.data;
    }
  }
})
