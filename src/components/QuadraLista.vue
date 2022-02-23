<template>
    <div class="card mb-3">
        <router-link to="/quadras/1">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="quadra.foto.url" class="img-fluid rounded-start" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ quadra.nome }}</h5>
                        <p class="card-text">{{ quadra.descricao }}</p>
                        <div class="card-text">
                            <h5 class="text-muted">Avaliação</h5>

                            <h3>{{ quadra.preco.preco2 }}</h3>
                            <h4>{{quadra.preco.preco1}}</h4>

                            <div class="comentarios">
                                <!-- <div
                                    class="comentario"
                                    v-for="comentario in quadra.avaliacao.comentarios"
                                    :key="comentario.id"
                                >
                                    <p>
                                        {{ comentario.usuario.nome }}
                                        <br />
                                        <small class="text-muted">{{ comentario.comentario }}</small>
                                    </p>
                                </div> -->
                            </div>
                        </div>
                    </div>
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