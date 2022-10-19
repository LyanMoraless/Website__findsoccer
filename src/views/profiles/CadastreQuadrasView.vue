<script setup>
import { useProfilesStore } from "@/stores/profiles";
import axios from "axios";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps(["quadrasCadastro"]);

const router = useRouter();
const route = useRoute();
const store = useProfilesStore();
const { recursos, tiposDeQuadras } = storeToRefs(store);

onMounted(() => {
  store.consultarRecursos();
  store.consultarTiposDeQuadras();
});

const nome = ref();
const largura = ref();
const comprimento = ref();
const descricao = ref();
const quadraTipo = ref();
const preco = ref();

const submitForm = async () => {
  const res = await store.cadastrarQuadra({
    // local_id: res.data.id,
    // quadra_tipo_id: 1,
    localId: route.params.local_id,
    nome: nome.value,
    largura: largura.value,
    comprimento: comprimento.value,
    descricao: descricao.value,
    quadraTipo: quadraTipo.value,
    preco: preco.value,
  });

  console.log(res);

  router.replace("/profile/locais");
};
</script>

<template>
  <div>
    <div class="title">Cadastro de Quadra</div>

    <div class="container">
      <div class="row">
        <div class="form-group col-md-9">
          <label for="nameQuadra">Nome da Quadra</label>
          <input
            type="text"
            class="form-control"
            placeholder="Quadra Futsal 1"
            v-model="nome"
          />
        </div>
        <div class="col-md form-group">
          <label for="nameQuadra">Nome da Quadra</label>
          <select class="custom-select" v-model="quadraTipo">
            <option v-for="tipo in tiposDeQuadras" :key="tipo.id">
              {{ tipo.nome }}
            </option>
          </select>
        </div>
      </div>

      <!--  <h4 class="name">Dados específicos</h4>
      <hr class="geralPad" /> 
-->
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
          <div class="col-md-9">
            <label for="">Descrição</label>
            <textarea
              class="form-control"
              id="divEnd"
              placeholder="Escreva uma breve descrição para o seu local (banheiro, vestiário, bebedouro, churrasqueira, bar, área de lazer)"
              v-model="descricao"
            ></textarea>
          </div>
            <div class="col-md">
              <label for="nameQuadra">Preço</label>
              <input
                type="text"
                class="form-control inputStyle"
                placeholder="Preço XXX,xx"
                v-model="preco"
              />
            </div>
        </div>

        <div class="row mgDtls">
          <div v-for="recurso in recursos" :key="recurso.id" class="col-md-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :value="recurso.id"
                :id="`recurso_${recurso.id}`"
              />
              <label class="form-check-label" :for="`recurso_${recurso.id}`">
                {{ recurso.nome }}
              </label>
            </div>
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