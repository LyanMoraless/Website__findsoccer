<template>

  <h2 class="marginTitleQd">
    Detalhes da Quadra
    <hr />
  </h2>


  <div class="container quadrasPadding">
    <div class="">
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

.marginTitleQd{
    margin: 60px;
    font-style: italic;
    margin-top: 50px;
}
.quadrasPadding{
    margin-top: 50px;
    margin-bottom: 50px;
}

</style>