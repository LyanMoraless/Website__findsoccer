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
    </main>

    <Rodape />
  </div>
</template>
