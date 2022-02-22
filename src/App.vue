<script setup>
import { RouterView } from 'vue-router'
import Topo from './components/Topo.vue';
import Rodape from './components/Rodape.vue';
</script>

<template>
  <Topo />
  <main class="conteudo">
    <RouterView />
  </main>
  <Rodape />
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
@import "bootstrap/dist/css/bootstrap.css";
@import "@/assets/css/style.css";
</style>
