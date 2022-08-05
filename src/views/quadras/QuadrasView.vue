<template>
  <div class="container">
    <h2 class="marginTitleQd1">
      Quadras - Bauru/Sp
      <hr />
    </h2>
    <QuadraLista
      v-for="quadra in quadrasFiltradas"
      :key="quadra.id"
      :quadra="quadra"
      id="quadrasStyle"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue-demi";
import QuadraLista from "../../components/QuadraLista.vue";
import { useQuadrasStore } from "../../stores/quadras";

const store = useQuadrasStore();
const { quadrasFiltradas } = storeToRefs(store);

onMounted(() => {
  store.consultarQuadras();
});
</script>

<style>
.marginTitleQd1 {
  font-style: italic;
  margin: 80px 0px 80px 0px;
}
.quadrasPadding {
  margin-top: 50px;
  margin-bottom: 50px;
}
#quadrasStyle {
  margin-top: 50px;
}
</style>