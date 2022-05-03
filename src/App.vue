<script setup>
import { RouterView } from 'vue-router'
import Topo from './components/Topo.vue';
import Rodape from './components/Rodape.vue';
import { useQuadrasStore } from './stores/quadras';
import { onMounted } from '@vue/runtime-core';
const store = useQuadrasStore();

onMounted(() => {
  store.consultarTiposDeQuadras();
})
</script>

<template>
  
  <div>
    <Topo />

      <main class="conteudo">

        <RouterView />

      </main>
  

   

  <Rodape />

  </div>
</template>

<style>
</style>
