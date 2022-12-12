<template>
  <section>
    <div class="container">
      <h1 class="marginTitle">Profile</h1>
      <hr class="hr" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="card-body">
            <div class="row marginTitle2">
              <h3 class="pr-2">Lyan Morales</h3>
              <button class="btn btn-success btn-sm btn-danger" type="submit">Alterar</button>
            </div> 

            <form>
              <div class="row">
                <div class="form-group col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    value="drlyanmorales@gmail.com"
                  />
                </div>
                <div class="col-sm-2">
                  <button class="btn btn-danger" type="submit">Alterar</button>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Password"
                    value="123456787654321"
                  />
                </div>
                <div class="col-sm-2">
                  <button class="btn btn-danger" type="submit">Alterar</button>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="CPF"
                    value="390.079.978.40"
                  />
                </div>
                <div class="col-sm-2">
                  <button class="btn btn-danger" type="submit">Alterar</button>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="RG"
                    value="52.996.616-5"
                  />
                </div>
                <div class="col-sm-2">
                  <button class="btn btn-danger" type="submit">Alterar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!--Quadras-->
        <div class="col-sm-6">
          <ol class="list-group-numbered">
            <li class="d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto pb-4 pt-2">
                <div class="fw-bold pt-4">
                  <h5 class="card-title">Quadras alugadas</h5>
                </div>
              </div>
              <span class="badge rounded-pill pt-4"><h5>3</h5></span>
            </li>
            <li class="d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto pt-4">
                <div class="fw-bold">
                  <h5 class="card-title">Quadras acessadas</h5>
                </div>
              </div>
              <span class="badge rounded-pill pt-4"><h5>125</h5></span>
            </li>
            <li class="d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto pt-5">
                <div class="fw-bold">
                  <h5 class="card-title">Quadras cadastras</h5>
                </div>
              </div>
              <span class="badge rounded-pill pt-5"><h5>27</h5></span>
            </li>
          </ol>
        </div>
      </div>
      <!--Visitadas-->
      <section class="principal" v-if="quadrasMaisAcessadas">
      <div class="container">
        <h2 class="marginTitle">Mais Acessadas
        <hr class="hr2" />
      </h2>
      </div>

      <div class="container">
        <div class="row align-items-stretch">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadrasMaisAcessadas"
            :key="quadra.id"
          >
            <QuadraCard :quadra="quadra" />
          </div>
        </div>
      </div>
    </section>

      <!--Historico de Busca-->

      <section v-if="quadrasMaisAcessadas">
      <div class="container">
        <h2 class="marginTitle">Histórico de Busca
        <hr class="hr2" />
      </h2>
      </div>

      <div class="container">
        <div class="row align-items-stretch">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadrasMaisAcessadas"
            :key="quadra.id"
          >
            <QuadraCard :quadra="quadra" />
          </div>
        </div>
      </div>
    </section>
    </div>
  </section>
</template>

<script>

import QuadraCard from "../../components/QuadraCard.vue";
import { useQuadrasStore } from "../../stores/quadras";

const store = useQuadrasStore();

export default {
  components: { QuadraCard },
  computed: {
    quadrasMaisAcessadas() {
      return store.quadrasMaisAcessadas || [];
    },
  },
  mounted() {
    store.consultarQuadrasMaisAcessadas();
  },
};

</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  /* overflow: hidden; */
  background-image: url();
}
.areaLogin {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 455px;
  height: 520px;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 7px 7px 13px 0px rgb(108, 204, 45);
}
.login form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.login input {
  margin-top: 15px;
  border: none;
  height: 60px;
  outline: none;
  padding-left: 10px;
  border-radius: 8px;
}
.login img {
  /* width: 300px;
    height: 80px; */
  width: auto;
  height: auto;
}
input::placeholder {
  color: #1fd86f;
  font-size: 17px;
}
.loginBtn {
  background-color: white;
  color: #1fd86f;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  font-size: 20px;
  font-weight: bold;
  /* cursor: pointer; */
  border: none;
  height: 60px;
}
.marginTitle {
  margin: 50px 0px 0px 0px;
  font-style: italic;
}
p {
  font-size: small;
  color: black;
  text-decoration: none;
}
p a {
  margin-left: 1px;
  color: #1fd86f;
}
.hr {
  border-color: black;
  margin-bottom: 50px;
}
.marginTitle2 {
  margin-bottom: 20px;
}
.hr2 {
  border-color: #a9a9a9;
}
</style>