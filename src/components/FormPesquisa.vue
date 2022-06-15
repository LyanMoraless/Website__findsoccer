<script setup>
import { computed } from "vue";
import { useQuadrasStore } from "@/stores/quadras";
import { useRouter } from "vue-router";

const store = useQuadrasStore();
const router = useRouter();

const pesquisar = () => {
  router.push("/quadras");
};

const tiposDeQuadras = computed(() => store.tiposDeQuadras);
const tipoDeQuadra = computed({
  get() {
    return store.filtro.tipo_id;
  },
  set(value) {
    store.$patch((state) => {
      state.filtro.tipo_id = value;
    });
  },
});

const cidades = computed(() => store.cidades);
const cidade = computed({
  get() {
    return store.filtro.cidade;
  },
  set(value) {
    store.$patch((state) => {
      state.filtro.cidade = value;
    });
  },
});
</script>

<template>

  <form class="form-inline" @submit.prevent="pesquisar()">
    <select
      class="form-control mr-sm-2 menus"
      name="tipo"
      v-model="tipoDeQuadra"
    >
    <option :value="null">Todos os tipos</option>
      <option
        v-for="tiposDeQuadra in tiposDeQuadras"
        :key="tiposDeQuadra.id"
        :value="tiposDeQuadra.id"
      >
        {{ tiposDeQuadra.nome }}
      </option>
    </select>
     <!--cidade listado-->
    <select class="form-control mr-sm-2 w-25 menus" name="cidade">
      <option :value="null">Todos as cidades</option>
      <option 
      v-for="cidade in cidades" 
      :key="cidade" 
      :value="cidade"
      >
      {{ cidade.nome }}
      </option>
    </select>
    <select class="form-control mr-sm-2 menus" name="data">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>22</option>
      <option>27</option>
      <option>31</option>
    </select>
    <select class="form-control mr-sm-2 menus" name="hora">
      <option>00:00</option>
      <option>05:00</option>
      <option>06:00</option>
      <option>08:00</option>
      <option>09:00</option>
      <option>11:00</option>
      <option>16:00</option>
      <option>18:00</option>
    </select>
    <button class="btn butt my-2 my-sm-0" type="submit">Search</button>
  </form>
</template>
