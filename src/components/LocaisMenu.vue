<script setup>
const props = defineProps(['locais']);

</script>
<template>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">Todos</h5>
      </div>
    </a>
    <a href="#" class="list-group-item list-group-item-action" v-for="local in props.locais" :key="local.id">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ local.nome }}</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small>And some small print.</small>
    </a>

    <RouterLink class="list-group-item list-group-item-action y" to="/quadras/new">
      Cadastrar novo local
    </RouterLink>
  </div>
</template>

<style>
.y{
  color: #1fd86f;
}
</style>