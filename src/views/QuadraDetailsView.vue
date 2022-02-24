<template>
  <div class="container quadrasPadding">
    <h2>
      Detalhes da Quadra
      <hr />
    </h2>

    <div class="quadraEspecial">
      <QuadraDetails />
    </div>

  </div>
</template>

<script>

import QuadraDetailsVue from "../components/QuadraDetails.vue";
import { useQuadrasStore } from "../stores/quadras";
import QuadraDetails from "../components/QuadraDetails.vue";

const store = useQuadrasStore();

export default {
  components: { QuadraDetailsVue, QuadraDetails },
  computed: {
    quadras() {
      return store.quadras
    }
  }
}
</script>

<style>
</style>