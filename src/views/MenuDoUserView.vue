
<script setup>
import { useUsuariosStore } from "@/stores/usuarios";
import { storeToRefs } from "pinia";
import { onMounted } from "vue-demi";
import LocaisMenu from "../components/LocaisMenu.vue";
import CardQuadraLocais from "../components/CardQuadraLocais.vue";

const store = useUsuariosStore();

const { locais, quadras } = storeToRefs(store);

onMounted(() => {
  store.consultarLocais();
  store.consultarQuadras();
});
</script>
<template>
  <div>
    <div class="container">
      <h1 class="title">Minhas quadras</h1>
      <hr style="margin-bottom: 50px;"/>

      <div class="row">
        <div class="col-md-4">
          <LocaisMenu :locais="locais" />
        </div>

        <div class="col-md">
          <CardQuadraLocais v-for="quadra in quadras" :quadra='quadra' :key="quadra.id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.title{
font-style: italic;
margin-top: 30px;
}
</style>
