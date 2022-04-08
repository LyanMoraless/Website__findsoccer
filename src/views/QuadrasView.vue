<template>

    <h2 class="marginTitleQd1">
        Quadras - Bauru/Sp
        <hr />
    </h2>

    <div class="container quadrasPadding">

         <QuadraLista v-for="quadra in quadras" :key="quadra.id" :quadra="quadra" id="quadrasStyle"/>
         <QuadraLista v-for="quadra in quadras" :key="quadra.id" :quadra="quadra" id="quadrasStyle"/>

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

.marginTitleQd1{
    font-style: italic;
    margin: 80px 150px;
}
.quadrasPadding{
    margin-top: 50px;
    margin-bottom: 50px;
}
#quadrasStyle{
    margin-top: 50px;
}

</style>