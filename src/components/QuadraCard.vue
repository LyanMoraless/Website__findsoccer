<template>
    <div class="card">
        <img :src="quadra.foto.url" class="card-img-top mostAcessed" v-if="quadra.foto" />
        <div class="card-body">
            <h5 class="card-title direitos2">{{ quadra.nome }}</h5>
            <p class="card-subtitle">{{ quadra.quadra_tipo.nome }}</p>
            <p class="card-text">{{ quadra.descricao }}</p>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                Avaliação
                <star-rating :read-only="true" :rating="5" :increment="0.01" :star-size="20" />
            </li>
            <li class="list-group-item">Comentários (13)</li>
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
