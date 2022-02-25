<template>
    <div class="container quadrasPadding">
        <h2 class="marginTitle">
            Quadras
            <hr />
        </h2>

        <div>
            <div>
                <QuadraLista v-for="quadra in quadras" :key="quadra.id" :quadra="quadra" />
            </div>
        </div>
    </div>
</template>

<script>
import QuadraLista from "../components/QuadraLista.vue";
import { useQuadrasStore } from "../stores/quadras";

const store = useQuadrasStore();

export default {
    components: { QuadraLista },
    computed: {
        quadras() {
            return store.quadras
        }
    }
}
</script>

<style>
</style>