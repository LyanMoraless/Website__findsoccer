<template>
  <div class="container">
    <h2 class="marginTitleQd">
      Detalhes da Quadra
      <hr />
    </h2>
    <div>
      <QuadraDetails />
    </div>
  </div>
</template>

<script>
import QuadraDetailsVue from "../../components/QuadraDetails.vue";
import { useQuadrasStore } from "../../stores/quadras";
import QuadraDetails from "../../components/QuadraDetails.vue";

const store = useQuadrasStore();

export default {
  components: { QuadraDetailsVue, QuadraDetails },
  computed: {
    quadras() {
      return store.quadras;
    },
  },
};
</script>

<style>
.marginTitleQd {
  margin: 50px 0px 50px 0px;
  font-style: italic;
}
</style>