<template>
    <form class="form-inline" @submit.prevent="pesquisar()">
        <select class="form-control mr-sm-2 menus" name="tipo">
            <option>Society</option>
            <option>Futsal</option>
            <option>Campo</option>
        </select>

        <select class="form-control mr-sm-2 menus" name="cidade">
            <option>Estado - Cidade</option>
        </select>

        <select class="form-control mr-sm-2 menus" name="data">
            <option>31</option>
        </select>

        <select class="form-control mr-sm-2 menus" name="hora">
            <option>00:00</option>
        </select>

        <button class="btn butt my-2 my-sm-0" type="submit">Search</button>
    </form>
</template>

<script>
export default {
    methods: {
        pesquisar () {
            this.$router.push('/quadras');
        }
    }

}
</script>

<style>
</style>