<template>
  <Banner />

  <section class="principal alinhamento">
    <div class="container">
      <h2 class="marginTitle">
        Mais acessadas
        <hr />
      </h2>

      <div class="row align-items-stretch maisAcessadas">
        <div class="col-3 d-flex align-items-stretch" v-for="quadra in quadras" :key="quadra.id">
          <QuadraCard :quadra="quadra" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from "../components/Banner.vue";
import QuadraCard from "../components/QuadraCard.vue";
import { useQuadrasStore } from "../stores/quadras";
import Rodape from "../components/Rodape.vue";


const store = useQuadrasStore()

export default {
  components: { Banner, QuadraCard, Rodape },
  computed: {
    quadras() {
      return store.quadras
    }
  }
}
</script>

<style>
</style>