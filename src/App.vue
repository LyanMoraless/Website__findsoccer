<script setup>
import { RouterView } from "vue-router";
import { useQuadrasStore } from "./stores/quadras";
import { onMounted } from "vue";

const store = useQuadrasStore();

onMounted(() => {
  store.consultarTiposDeQuadras();
  store.consultarCidades();
});
</script>

<template>
  <RouterView />
</template>

<style>
</style>
