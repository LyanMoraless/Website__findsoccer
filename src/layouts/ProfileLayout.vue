<script setup>
import { RouterView, useRouter } from "vue-router";
import Topo from "@/components/Topo.vue";
import Rodape from "@/components/Rodape.vue";
import { useUsuariosStore } from "@/stores/usuarios";

const router = useRouter();
const { isLogado } = useUsuariosStore();

if (!isLogado) {
  router.push("/login");
}
</script>
<template>
  <div>
    <Topo />
    <main class="conteudo">
      <div class="container">
        <ul class="nav nav-pills my-3">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">Perfil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile/locais" class="nav-link"
              >Meus Locais</router-link
            >
          </li>
        </ul>

        <RouterView />
      </div>
      <!--Email/Senha-->
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="card-body">
              <div class="row"> 
                <h3 class="card-title text-centerpl-3  pr-2">Lyan Morales</h3>
                <button class="btn btn-success" type="submit">Alterar</button>
              </div>

              <form>
                <div>
                  <div class="form-group pt-2">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                 <button class="btn btn-success" type="submit">Alterar</button>
                </div>
                <div class="form-group pt-2">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Senha"
                  />
                </div>
                <button class="btn btn-success" type="submit">Alterar</button>
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
        <h3 class="card-title pt-3 pb-3">Visitadas Recentemente</h3>
        <div class="container">
          <div class="row">
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://s.calendarr.com/upload/datas/di/an/dia-nacional-do-futebol_c.jpg?auto_optimize=low&width=640" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://s.calendarr.com/upload/datas/di/an/dia-nacional-do-futebol_c.jpg?auto_optimize=low&width=640" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://s.calendarr.com/upload/datas/di/an/dia-nacional-do-futebol_c.jpg?auto_optimize=low&width=640" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://s.calendarr.com/upload/datas/di/an/dia-nacional-do-futebol_c.jpg?auto_optimize=low&width=640" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://s.calendarr.com/upload/datas/di/an/dia-nacional-do-futebol_c.jpg?auto_optimize=low&width=640" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://s.calendarr.com/upload/datas/di/an/dia-nacional-do-futebol_c.jpg?auto_optimize=low&width=640" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://s.calendarr.com/upload/datas/di/an/dia-nacional-do-futebol_c.jpg?auto_optimize=low&width=640" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://s.calendarr.com/upload/datas/di/an/dia-nacional-do-futebol_c.jpg?auto_optimize=low&width=640" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>

        <!--Historico de Busca-->

        <h3 class="card-title pt-3 pb-4">Historico de Busca</h3>
        <div class="container">
          <div class="row">
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://altipisos.com.br/wp-content/uploads/2021/04/site-1.jpg" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://altipisos.com.br/wp-content/uploads/2021/04/site-1.jpg" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://altipisos.com.br/wp-content/uploads/2021/04/site-1.jpg" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://altipisos.com.br/wp-content/uploads/2021/04/site-1.jpg" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://altipisos.com.br/wp-content/uploads/2021/04/site-1.jpg" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://altipisos.com.br/wp-content/uploads/2021/04/site-1.jpg" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://altipisos.com.br/wp-content/uploads/2021/04/site-1.jpg" class="card-img-top" alt="..." />
            </div>
            <div class=" pr-3 pb-3" style="width: 17rem">
              <img src="https://altipisos.com.br/wp-content/uploads/2021/04/site-1.jpg" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
      
    </main>

    <Rodape />
  </div>
</template>
