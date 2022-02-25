<template>
    <div>
        <CadastroQuadras />
    </div>
</template>

<script>

import CadastroQuadras from "../components/CadastroQuadras.vue";
import Banner from "../components/Banner.vue";
import Rodape from "../components/Rodape.vue";
import { useQuadrasCadastroStore } from "../stores/quadrasCadastro";

const store = useQuadrasCadastroStore()

export default {
    components: {CadastroQuadras, Banner, Rodape },
    computed: {
        quadrasCadastro() {
            return store.quadrasCadastro
        }
    }
}
</script>

<style>
</style>