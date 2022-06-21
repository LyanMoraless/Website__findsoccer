<script setup>
import { RouterView } from 'vue-router';
import Topo from '@/components/Topo.vue';
import Rodape from '@/components/Rodape.vue';
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