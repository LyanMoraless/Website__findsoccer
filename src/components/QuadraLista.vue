<script>
import StarRating from 'vue-star-rating'

export default {
    props: ['quadra'],
    components: {
        StarRating
    }
}
</script>

<template>
    <div class="card mb-3" v-if="quadra">
        <router-link to="/quadras/1">
            <div class="row g-0 ">
                <div class="col-md-4">
                    <img :src="quadra.foto.url" class="img-fluid rounded-start mostAcessed2" v-if="quadra.foto" />
                </div>
                <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title cards">{{ quadra.nome }}</h5>
                        <p class="card-text cards2">{{ quadra.descricao }}</p>
                        <div class="card-text">
                            <star-rating :read-only="true" :rating="quadra.avaliacao" :increment="0.01" :star-size="20" />
                        </div>
                    </div>
                </div>
                <div class="col-3 d-flex align-items-end cards2">
                    <h3 v-if="quadra.precoHora">Hora:{{ quadra.precoHora }}</h3>
                    <h4 v-if="quadra.precoMeiaHora">Meia Hora:{{ quadra.precoMeiaHora }}</h4>
                </div>
            </div>
        </router-link>
    </div>
</template>

