import { defineStore } from 'pinia'

import api, { ibge } from '@/api'

export const useProfilesStore = defineStore('profiles', {
  state: () => {
    return {
      locais: [],
      localSelecionado: null,
      quadras: [],
      tiposDeQuadras: [],
      cidades: [],
      recursos: [],

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
    quadrasFiltradas: (state) => state.quadras.filter((quadra) => (state.localSelecionado == null || quadra.localId == state.localSelecionado.id))
  },
  actions: {
    async consultarQuadras() {
      const res = await api.get("/quadras");
      this.quadras = res.data;
    },
    async consultarLocais() {
      const res = await api.get("/locais");
      this.locais = res.data;
    },
    async cadastrarQuadra(quadra) {
      return await api.post("/quadras", quadra);
    },
    async cadastrarLocal(local) {
      return await api.post("/locais", local);
    },
    async consultarTiposDeQuadras() {
      const res = await api.get("/quadra-tipos");
      this.tiposDeQuadras = res.data;
    },
    async consultarRecursos() {
      const res = await api.get("/recursos");
      this.recursos = res.data;
    },
    async consultarCidades() {
      const res = await ibge.get("/api/v1/localidades/municipios");
      this.cidades = res.data;
    },
    selecionarLocal(local) {
      this.localSelecionado = local;
    }
  }
})
