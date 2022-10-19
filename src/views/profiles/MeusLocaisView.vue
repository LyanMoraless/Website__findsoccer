<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue-demi";
import LocaisMenu from "../../components/LocaisMenu.vue";
import CardQuadraLocais from "../../components/CardQuadraLocais.vue";
import { useProfilesStore } from "@/stores/profiles";

const store = useProfilesStore();

const { locais, quadrasFiltradas, localSelecionado } = storeToRefs(store);

onMounted(() => {
  store.consultarLocais();
  store.consultarQuadras();
});
</script>
<template>
  <div>
    <div class="container">
      <h1 class="marginTitle">Minhas quadras</h1>
      <hr />

      <div class="row">
        <div class="col-md-3">
          <LocaisMenu :locais="locais" />
        </div>

        <div class="col-md-9">
          <CardQuadraLocais
            v-for="quadra in quadrasFiltradas"
            :quadra="quadra"
            :key="quadra.id"
          />

          <RouterLink
            class="list-group-item list-group-item-action y"
            :to="`/profile/locais/${localSelecionado.id}/quadras/new`"
            v-if="localSelecionado != null"
          >
            Cadastrar nova quadra
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.marginTitle {
  margin: 50px 0px 50px 0px;
  font-style: italic;
}
</style>
