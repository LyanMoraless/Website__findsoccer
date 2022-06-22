<script setup>
import { useProfilesStore } from "@/stores/profiles";
import { storeToRefs } from "pinia";

const props = defineProps(["locais"]);
const store = useProfilesStore();

const {localSelecionado} = storeToRefs(store);

</script>
<template>
  <div class="list-group">
    <a
      href="#"
      @click="store.selecionarLocal(null)"
      :class="[
        'list-group-item',
        'list-group-item-action',
        localSelecionado === null ? 'active' : '',
      ]"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">Todos</h5>
      </div>
    </a>
    <a
      href="#"
      @click="store.selecionarLocal(local)"
      :class="[
        'list-group-item',
        'list-group-item-action',
        localSelecionado != null && localSelecionado.id == local.id
          ? 'active'
          : '',
      ]"
      v-for="local in props.locais"
      :key="local.id"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ local.nome }}</h5>
      </div>
    </a>

    <RouterLink
      class="list-group-item list-group-item-action y"
      to="/profile/locais/new"
    >
      Cadastrar novo local
    </RouterLink>
  </div>
</template>

<style>
.y {
  color: #1fd86f;
}
</style>