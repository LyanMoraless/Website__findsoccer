
<script setup>
import api from "@/api";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuadrasStore } from "../stores/quadras";

defineProps(["quadrasCadastro"]);

const router = useRouter();

const store = useQuadrasStore();

const horarios = ref(store.horarios);
const qdDtls = ref(store.qdDtls); //qdDtls = quadra details

const nome = ref();
const largura = ref();
const comprimento = ref();
const piso = ref();
const descricao = ref();
const img = ref();

const cel = ref();
const email = ref();
const precHr = ref();

const cep = ref();
const rua = ref();
const compl = ref();
const bairro = ref();
const estado = ref();
const cidade = ref();
const numero = ref();

const preco = ref();

const consultarCep = async () => {
  const res = await axios.get(`https://viacep.com.br/ws/${cep.value}/json/`);
  rua.value = res.data.logradouro;
  compl.value = res.data.complemento;
  bairro.value = res.data.bairro;
  estado.value = res.data.uf;
  cidade.value = res.data.localidade;
};

const submitForm = async () => {
  const res = await store.cadastrarLocal({
    nome: nome.value,
    largura: largura.value,
    comprimento: comprimento.value,
    piso: piso.value,
    descricao: descricao.value,
    img: img.value,

    //CHECAR SE ESSES 3 CAMPOS PODEM OU DEVEM PERTENCER AO CADASTRO DE UM LOCAL
    cel: cel.value,
    email: email.value,
    precHr: precHr.value,

    horarios: horarios.value,
    qdDtls: qdDtls.value,
    endereco: {
      cep: cep.value,
      rua: rua.value,
      compl: compl.value,
      bairro: bairro.value,
      estado: estado.value,
      cidade: cidade.value,
      numero: numero.value,
    },
    preco: preco.value,
  });

  console.log(res);

  await store.cadastrarQuadra({
    local_id: res.data.id,
    quadra_tipo_id: 1,
  });

  router.replace("/quadras");
};
</script>

<template>
  <div>
    <div class="title">
      Cadastro de Quadra
      <!-- <img src="../../public/img/Logo 1.jpg" alt=""> -->
    </div>

    <div class="container">
      <!-- DADOS ESPECÍFICOS --------------------------------------------------------------------------------------------------------------- -->
      <h4 class="name">Nomenclaturas</h4>
      <hr class="geralPad" />


<div class="row">
          <div class="form-group col-md">
            <label for="nameQuadra">Nome da Quadra</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite o nome do Local"
              v-model="nome"
            />
          </div>
        </div>

      <h4 class="name">Dados específicos</h4>
      <hr class="geralPad" />

      <form @submit.prevent="submitForm">

        <div class="row">
          <div class="form-group col-md">
            <label for="nameQuadra">Largura da Quadra</label>
            <input
              type="text"
              class="form-control inputStyle"
              placeholder="Digite a largura da sua quadra"
              v-model="largura"
            />
          </div>

          <div class="col-md">
            <label for="nameQuadra">Comprimento da Quadra</label>
            <input
              type="text"
              class="form-control inputStyle"
              placeholder="Digite o comprimento da sua quadra"
              v-model="comprimento"
            />
          </div>
        </div>

        <div class="row">
          <div class="form-group col-md-4">
            <label for="nameQuadra">Piso</label>
            <input
              type="text"
              class="form-control inputStyle"
              placeholder="Gramado sintético, híbrido, concreto"
              v-model="piso"
            />
          </div>

          <div class="col-md-6">
            <label for="">Descrição</label>
            <textarea
              class="form-control"
              id="divEnd"
              placeholder="Escreva uma breve descrição para o seu local (banheiro, vestiário, bebedouro, churrasqueira, bar, área de lazer)"
              v-model="descricao"
            ></textarea>
          </div>

          <div class="col">
            <label for="">Imagens</label>
            <input
              type="text"
              class="form-control"
              placeholder="Zip"
              required
              v-model="img"
            />
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
        </div>

        <!-- CREDENCIAIS --------------------------------------------------------------------------------------------------------------- -->

        <h4 class="name">Credenciais</h4>
        <hr class="geralPad" />

        <div class="row">
          <div class="form-group col">
            <label for="">Celular</label>
            <input
              type="text"
              class="form-control"
              placeholder="+51 (XX) XXXXX-XXXX"
              v-model="cel"
            />
          </div>

          <div class="form-group col-md-6">
            <label for="">Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="user.best@gmail.com"
              v-model="email"
            />
          </div>

          <div class="form-group col-md-2">
            <label for="">Preço por hora</label>
            <input
              type="text"
              class="form-control"
              placeholder="R$: XXX,xx"
              v-model="precHr"
            />
          </div>
        </div>

        <!-- <h3>Horário de Funcionamento</h3> -->

        <div class="row mgDtls" v-for="details in qdDtls" :key="details.id">
          <div class="col-md-3" id="x">Vestiário:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.vestiario"
            />
          </div>

          <div class="col-md-3">Banheiro:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.banheiro"
            />
          </div>

          <div class="col-md-3">Chuveiro:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.chuveiro"
            />
          </div>

          <div class="col-md-3" id="x">Bebedouro:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.bebedouro"
            />
          </div>

          <div class="col-md-3">Coletes:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.coletes"
            />
          </div>

          <div class="col-md-3">Juiz:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.juiz"
            />
          </div>

          <div class="col-md-3" id="x">Cantina:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.cantina"
            />
          </div>

          <div class="col-md-3">Area de Alimentação:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.areaAlimentacao"
            />
          </div>

          <div class="col-md-3">Chuteira:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.chuteira"
            />
          </div>

          <div class="col-md-3">Bola:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.bola"
            />
          </div>

          <div class="col-md-3">Estacionamento Próprio:</div>
          <div class="form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="details.estacionamento"
            />
          </div>
        </div>

        <div>
          <hr />

          <button class="buttonS btn btn-success btn-lg d-flex">
            Cadastrar
          </button>
        </div>
      </form>

      <h1 class="h1Style">Seja bem-vindo a FindSoccer</h1>
      <h4 class="h4Style">Seu jogo começa aqui</h4>
    </div>
  </div>
</template>

<style>
.title {
  font-size: 35px;
  font-style: italic;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.name {
  font-style: italic;
  margin-top: 50px;
}
.geralPad {
  margin-bottom: 50px;
}
label {
  color: #1fd86f;
  font-size: large;
}
#divEnd {
  justify-content: end;
}
.h1Style {
  margin-top: 100px;
  justify-content: center;
  display: flex;
}
.h4Style {
  color: #1fd86f;
  font-style: italic;
  justify-content: center;
  display: flex;
  margin-top: -10px;
  margin-bottom: 50px;
  margin-left: 300px;
}
.buttonS {
  justify-content: center;
}
.details {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  color: #1fd86f;
}
.mgDtls {
  margin-top: 50px;
}
#x {
  margin-bottom: 20px;
}
</style>