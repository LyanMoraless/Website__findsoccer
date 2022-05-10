<script setup>
import api from "@/api";
import axios from "axios";
import { ref } from "vue";
import { useQuadrasStore } from "../stores/quadras"; //MUDAR USERSTORE

defineProps(["quadrasCadastro"]); //DEFINIR PROPS

const store = useQuadrasStore(); //DEFINIR STORE



const nome = ref();
const username = ref(); //CHECAR SE O USER DEVE TER USERNAME

const rg = ref();
const cpf = ref();
const cnpj = ref();
const cel = ref();
const email = ref();
const fone = ref();

const submitForm = async () => {
  const res = await store.cadastrarUsuario({ //STORE MODIFICADO
    nome: nome.value,
    rg: rg.value,
    cpf: cpf.value,
    cnpj: cnpj.value,
    cel: cel.value,
    email: email.value,
    fone: fone.value
  });
};
</script>

<template>
  <div class="container">
    <!-- NOMES --------------------------------------------------------------------------------------------------------------- -->

    <h2 class="name">Nomes</h2>
    <hr class="geralPad" />

    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <label for="nameQuadra">Nome da Quadra</label>
          <input
            type="text"
            class="form-control"
            placeholder="Digite o nome da quadra"
            v-model="nome"
          />
        </div>
      </div>

      <!-- CREDENCIAIS --------------------------------------------------------------------------------------------------------------- -->

      <h2 class="name">Credenciais</h2>
      <hr class="geralPad" />

      <div class="row">
        <div class="form-group col">
          <label for="">RG</label>
          <input
            type="text"
            class="form-control"
            placeholder="XX.XXX.XXX-X"
            v-model="rg"
          />
        </div>
        <div class="form-group col">
          <label for="">CPF</label>
          <input
            type="text"
            class="form-control"
            placeholder="XXX.XXX.XXX-XX"
            v-model="cpf"
          />
        </div>
        <div class="form-group col">
          <label for="">CNPJ</label>
          <input
            type="text"
            class="form-control"
            placeholder="XX. XXX. XXX/0001-XX"
            aria-label="Server"
            v-model="cnpj"
          />
        </div>
      </div>

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

        <div class="form-group col">
          <label for="">Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="user.best@gmail.com"
            v-model="email"
          />
        </div>

        <div class="form-group col">
          <label for="">Telefone</label>
          <input
            type="text"
            class="form-control"
            placeholder="XXXXXXXX"
            v-model="fone"
          />
        </div>
      </div>

      <div>
        <button class="buttonS btn btn-success btn-lg d-flex">Cadastrar</button>
      </div>
    </form>

    <h1 class="h1Style d-flex">Seja bem-vindo a FindSoccer</h1>
    <h6 class="h6Style d-flex">Seu jogo começa aqui</h6>
  </div>
</template>


<style>
.name {
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 40px;
}
.geralPad {
  margin-top: 30px;
  margin-bottom: 30px;
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
}
.h6Style {
  color: #1fd86f;
  font-style: italic;
  margin-right: 300px;
  justify-content: end;
}
.buttonS {
  justify-content: center;
}
</style>