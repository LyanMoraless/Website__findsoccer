<template>
  <div>
    <Banner />

    <section class="principal" v-if="quadrasMaisAcessadas">
      <div class="container">
        <h2 class="marginTitle">Mais Acessadas
        <hr />
      </h2>
      </div>

      <div class="container">
        <div class="row align-items-stretch">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadrasMaisAcessadas"
            :key="quadra.id"
          >
            <QuadraCard :quadra="quadra" />
          </div>
        </div>
      </div>
    </section>
    <section class="principal" v-if="quadrasRecentes">
      <div class="container">
        <h2 class="marginTitle">Visitadas Recentemente
        <hr />
      </h2>
      </div>

      <div class="container">
        <div class="row align-items-stretch">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadrasRecentes"
            :key="quadra.id"
          >
            <QuadraCard :quadra="quadra" />
          </div>
        </div>
      </div>
    </section>
    <section class="principal" v-if="quadrasMaisAcessadas">
      <div class="container">
        <h2 class="marginTitle">Maiores Avaliações
        <hr />
      </h2>
      </div>

      <div class="container final">
        <div class="row align-items-stretch">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadrasMaisAvaliadas"
            :key="quadra.id"
          >
            <QuadraCard :quadra="quadra" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

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

<style>
.principal {
  padding: 50px;
}
.marginTitle {
  margin: 50px 0px 50px 0px;
  font-style: italic;
}
.final {
  margin-bottom: 50px;
}
</style>