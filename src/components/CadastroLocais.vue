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

const nome = ref();
const username = ref();
const descricao = ref();
const img = ref();

const cel = ref();
const fone = ref();
const email = ref();

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
    username: username.value,
    descricao: descricao.value,
    img: img.value,

    //CHECAR SE ESSES 3 CAMPOS PODEM OU DEVEM PERTENCER AO CADASTRO DE UM LOCAL
    cel: cel.value,
    fone: fone.value,
    email: email.value,

    horarios: horarios.value,
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

  // console.log(res);

  // await store.cadastrarQuadra({
  //   local_id: res.data.id,
  //   quadra_tipo_id: 1,
  // });

  router.replace('/profile/locais');
  
};
</script>

<template>
  <div>
    <div class="title">
      Cadastro de Local
      <!-- <img src="../../public/img/Logo 1.jpg" alt=""> -->
    </div>
    
    <div class="container">
      <!-- NOMES --------------------------------------------------------------------------------------------------------------- -->

      <h4 class="name">Nomenclaturas</h4>
      <hr class="geralPad" />

      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="form-group col">
            <label for="nameQuadra">Nome do Local</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite o nome do Local"
              v-model="nome"
            />
          </div>

          <div class="col">
            <label for="nameQuadra">Username do Local</label>
            <input
              type="text"
              class="form-control inputStyle"
              placeholder="Digite um username para seu Local"
              v-model="username"
            />
          </div>
        </div>

        <div class="row">
          <div class="form-group col-md-10">
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
            <input type="text" class="form-control"  placeholder="Zip" required>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
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

        <!-- LOCALIZAÇÃO --------------------------------------------------------------------------------------------------------------- -->

        <h4 class="name">Localização</h4>
        <hr class="geralPad" />

        <div class="row">
          <div class="form-group col-2">
            <label for="">CEP</label>
            <input
              type="text"
              class="form-control"
              placeholder="XXXXXX"
              v-model="cep"
              @change="consultarCep"
            />
          </div>
        </div>

        <div class="row">
          <div class="form-group col">
            <label for="">Rua</label>
            <input
              type="text"
              class="form-control"
              placeholder="Machado de Assis"
              v-model="rua"
            />
          </div>

          <div class="form-group col-md-2">
            <label for="">Número</label>
            <input
              type="text"
              class="form-control"
              placeholder="XXX"
              v-model="numero"
            />
          </div>

          <div class="form-group col-md-2">
            <label for="">Complemento</label>
            <input
              type="text"
              class="form-control"
              placeholder="Apto X"
              v-model="compl"
            />
          </div>
        </div>

        <div class="row">
          <div class="form-group col">
            <label for="">Estado</label>
            <input
              type="text"
              class="form-control"
              placeholder="Sp"
              v-model="estado"
            />
          </div>
          <div class="form-group col">
            <label for="">Cidade</label>
            <input
              type="text"
              class="form-control"
              placeholder="Bauru"
              v-model="cidade"
            />
          </div>
          <div class="form-group col">
            <label for="">Bairro</label>
            <input
              type="text"
              class="form-control"
              placeholder="Estoril"
              v-model="bairro"
            />
          </div>
        </div>

        <!-- ESPECIFICIDADES ------------------------------------------------------------------------------------------------------------- -->

        <h4 class="name">Especificidades</h4>
        <hr class="geralPad" />

        <div class="row">
          <div class="form-group col">
            <label for="">Preço</label>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">R$:</span>
              </div>

              <input
                type="text"
                class="form-control"
                placeholder="Preço por hora: XXX,xx"
                v-model="preco"
              />
            </div>
          </div>
        </div>

        <!-- <h3>Horário de Funcionamento</h3> -->

        <div class="row">
          <div class="col-md-4" style="color: #1fd86f; margin-bottom: 20px">
            Dia da Semana
          </div>
          <div class="col-md-2 details">Aberto</div>
          <div class="col-md-3 details">Horário de abertura</div>
          <div class="col-md-3 details">Horário de fechamento</div>
        </div>

        <div class="row" v-for="horario in horarios" :key="horario.dia">
          <div class="form-group col-md-5">{{ horario.desc }}</div>
          <div class="form-group form-check col-md-1">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="horario.aberto"
            />
          </div>
          <div class="form-group col-md-3 form-check" v-if="horario.aberto">
            <input type="text" class="form-control" v-model="horario.inicio" />
          </div>
          <div class="form-group col-md-3" v-if="horario.aberto">
            <input type="text" class="form-control" v-model="horario.fim" />
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
</style>