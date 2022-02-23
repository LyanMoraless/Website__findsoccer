<template>
    <div class="card">
        <img src="https://via.placeholder.com/1920x640/0f9/fff" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{{ quadra.nome }}</h5>
            <p class="card-text">{{ quadra.descricao }}</p>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                Avaliação
                <star-rating read-only :rating="quadra.avaliacao.nota" :increment="0.01" :star-size="20" />
            </li>
            <li class="list-group-item">Comentários</li>
            <li class="list-group-item">Horário de funcionamento</li>
        </ul>

        <div class="card-body">
            <i>
                <a href="#" class="card-link">Confira os horários de funcionamento 02/02/2022</a>
            </i>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    props: ['quadra'],
    components: {
        StarRating
    }
}
</script>

<style>
</style>