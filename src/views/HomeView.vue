<template>
  <div>
    <Banner />

    <section class="principal" v-if="quadrasMaisAcessadas.length > 0">
      <h2 class="marginTitle">Mais acessadas</h2>
      <hr />

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
    <section class="principal">
      <h2 class="marginTitle2">
        Visitadas recentemente
        <hr />
      </h2>

      <div class="container">
        <div class="row align-items-stretch">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadras"
            :key="quadra.id"
          >
            <QuadraCard :quadra="quadra" />
          </div>
        </div>
      </div>
    </section>
    <section class="principal">
      <h2 class="marginTitle3">
        Maiores avaliações
        <hr />
      </h2>

      <div class="container final">
        <div class="row align-items-stretch">
          <div
            class="col-3 d-flex align-items-stretch"
            v-for="quadra in quadras"
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
    quadras() {
      return store.quadras;
    },
    quadrasMaisAcessadas() {
      return store.quadrasMaisAcessadas;
    }
  },
};
</script>

<style>
.principal {
  padding: 50px;
}
.marginTitle {
  margin: 60px;
  font-style: italic;
}
.marginTitle2 {
  margin: 60px;
  font-style: italic;
  margin-top: 120px;
}
.marginTitle3 {
  margin: 60px;
  font-style: italic;
  margin-top: 120px;
}
.final {
  margin-bottom: 50px;
}
</style>