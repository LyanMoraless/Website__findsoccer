<script>
import Banner from "../components/Banner.vue";
import QuadraCard from "../components/QuadraCard.vue";
import { useQuadrasStore } from "../stores/quadras";
import Rodape from "../components/Rodape.vue";

const store = useQuadrasStore();

export default {
  components: { Banner, QuadraCard, Rodape },
  computed: {
    quadrasRecentes() {
      return store.quadrasRecentes || [];
    },
    quadrasMaisAcessadas() {
      return store.quadrasMaisAcessadas || [];
    },
    quadrasMaisAvaliadas() {
      return store.quadrasMaisAvaliadas || [];
    },
  },
  mounted() {
    store.consultarQuadrasMaisAcessadas();
    store.consultarQuadrasMaisAvaliadas();
    store.consultarQuadrasRecentes();
  },
};
</script>

<template>
  
  <div>

    <!-- TOPO DA PÁGINA -->
    
    <Banner />
    
    <!-- HOME -->

    <!-- HOME -> QUADRAS MAIS ACESSADAS  -->

    <!-- ------------------------------------------------------------- -->
    <div class="container">
      <section v-if="quadrasMaisAcessadas">
        <h2 class="marginTitle">Mais acessadas</h2>
        <hr />
        <div class="row align-items-stretch">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadrasMaisAcessadas"
            :key="quadra.id">
            <QuadraCard :quadra="quadra" />
          </div>
        </div>
      </section>
    </div>
    <!-- ------------------------------------------------------------- -->

    <!-- HOME -> QUADRAS VISITADAS RECENTEMENTE  -->

    <!-- ------------------------------------------------------------- -->
    <div class="container">
      <section v-if="quadrasRecentes">
        <h2 class="marginTitle">
          Visitadas recentemente
          <hr />
        </h2>
        <div class="row align-items-stretch">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadrasRecentes"
            :key="quadra.id">
            <QuadraCard :quadra="quadra" />
          </div>
        </div>
      </section>
    </div>
    <!-- ------------------------------------------------------------- -->

    <!-- HOME -> QUADRAS COM MAIORES AVALIAÇÕES -->

    <!-- ------------------------------------------------------------- -->
    <div class="container">
    <section class="principal" v-if="quadrasMaisAcessadas">
      <h2 class="marginTitle">
        Maiores avaliações
        <hr />
      </h2>
      
        <div class="row align-items-stretch end">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadrasMaisAvaliadas"
            :key="quadra.id"
          >
            <QuadraCard :quadra="quadra" />
          </div>
        </div>
    </section>
    </div>
    <!-- ------------------------------------------------------------- -->
  </div>
</template>

<style>
.marginTitle {
  margin: 60px 0px 0px 0px;
  font-style: italic;
}
.end {
  margin-bottom: 50px;
}
hr{
  margin-bottom: 50px;
  background-color: black;
}
</style>