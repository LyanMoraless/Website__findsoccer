<script setup>
import { computed } from 'vue';
import { useQuadrasStore } from "@/stores/quadras";

const store = useQuadrasStore();

const pesquisar = () => {
  this.$router.push("/quadras");
};

const tiposDeQuadras = computed(() => (store.tiposDeQuadras));
</script>


<template>
  <form class="form-inline" @submit.prevent="pesquisar()">
    <select class="form-control mr-sm-2 menus" name="tipo">
      <option v-for="tiposDeQuadra in tiposDeQuadras" :key="tiposDeQuadra.id">
        {{ tiposDeQuadra.nome }}
      </option>
    </select>

    <select class="form-control mr-sm-2 menus" name="cidade">
      <option>Estado - Cidade</option>
      <option>São Paulo</option>
      <option>Minas Gerais</option>
      <option>Rio de Janeiro</option>
      <option>Outras Opções...</option>
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

