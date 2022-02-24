<template>
    <div class="card mb-3">
        <router-link to="/quadras/1">
            <div class="row g-0 ">
                <div class="col-md-4">
                    <img :src="quadra.foto.url" class="img-fluid rounded-start mostAcessed2" />
                </div>
                <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title cards">{{ quadra.nome }}</h5>
                        <p class="card-text cards2">{{ quadra.descricao }}</p>
                        <div class="card-text">
                            <h5 class="text-muted cards2">Avaliação</h5>
                        </div>
                    </div>
                </div>
                <div class="col-3 d-flex align-items-end cards2">
                    <h3>{{ quadra.preco.preco2 }}</h3>
                    <h4>{{ quadra.preco.preco1 }}</h4>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['quadra'],
}
</script>

<style>
</style>