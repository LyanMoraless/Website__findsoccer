<template>
  <Banner />

  <section class="principal">
    <div class="container">
      <h2>
        Mais acessadas
        <hr />
      </h2>

      <div class="row align-items-stretch">
        <div class="col-3 d-flex align-items-stretch" v-for="quadra in quadras" :key="quadra.id">
          <QuadraCard :quadra="quadra"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from "../components/Banner.vue";
import QuadraCard from "../components/QuadraCard.vue";
export default {
  components: { Banner, QuadraCard },
  data() {
    return {
      quadras: [
        {
          "id": 1,
          "img": [
            {
              "id": 1,
              "url": "img/quadras/01/1.jpg"
            },
            {
              "id": 2,
              "url": "img/quadras/01/2.jpg"
            },
            {
              "id": 3,
              "url": "img/quadras/01/3.jpg"
            }
          ],
          "nome": "Pavê no fim de Ano",
          "descricao": "A quadra pavê no fim de Ano apresenta uma alta disponibilidade, beleza, cheiro impecável e gostosura.",
          "endereco": {
            "rua": "Machado de Assis",
            "quadra": 3,
            "numero": 46,
            "bairro": "Mary Dotta"
          },
          "avaliacao": {
            "nota": 4.5,
            "comentarios": [
              {
                "usuario": {
                  "id": 1,
                  "nome": "Rafael"
                },
                "comentario": "A quadra é incrivel",
                "nota": 5
              },
              {
                "usuario": {
                  "id": 2,
                  "nome": "Leonardo"
                },
                "comentario": "A quadra é impecavelmente limpa",
                "nota": 4
              }
            ]
          },
          "horarios": [
            {
              "diaSemana": "seg",
              "inicio": "08:00",
              "fim": "23:00"
            },
            {
              "diaSemana": "ter",
              "inicio": "08:00",
              "fim": "23:00"
            }
          ]

        },
        {
          "id": 2,
          "img": [
            {
              "id": 1,
              "url": "img/quadras/02/1.jpg"
            },
            {
              "id": 2,
              "url": "img/quadras/02/2.jpg"
            },
            {
              "id": 3,
              "url": "img/quadras/02/3.jpg"
            }
          ],
          "nome": "Teste de quadra",
          "descricao": "A quadra pavê no fim de Ano apresenta uma alta disponibilidade, beleza, cheiro impecável e gostosura.",
          "endereco": {
            "rua": "Machado de Assis",
            "quadra": 3,
            "numero": 46,
            "bairro": "Mary Dotta"
          },
          "avaliacao": {
            "nota": 4.5,
            "comentarios": [
              {
                "usuario": {
                  "id": 1,
                  "nome": "Rafael"
                },
                "comentario": "A quadra é incrivel",
                "nota": 5
              },
              {
                "usuario": {
                  "id": 2,
                  "nome": "Leonardo"
                },
                "comentario": "A quadra é impecavelmente limpa",
                "nota": 4
              }
            ]
          },
          "horarios": [
            {
              "diaSemana": "seg",
              "inicio": "08:00",
              "fim": "23:00"
            },
            {
              "diaSemana": "ter",
              "inicio": "08:00",
              "fim": "23:00"
            }
          ]

        },
        {
          "id": 2,
          "img": [
            {
              "id": 1,
              "url": "img/quadras/02/1.jpg"
            },
            {
              "id": 2,
              "url": "img/quadras/02/2.jpg"
            },
            {
              "id": 3,
              "url": "img/quadras/02/3.jpg"
            }
          ],
          "nome": "Teste de quadra",
          "descricao": "A quadra pavê no fim de Ano apresenta uma alta disponibilidade, beleza, cheiro impecável e gostosura.",
          "endereco": {
            "rua": "Machado de Assis",
            "quadra": 3,
            "numero": 46,
            "bairro": "Mary Dotta"
          },
          "avaliacao": {
            "nota": 4.5,
            "comentarios": [
              {
                "usuario": {
                  "id": 1,
                  "nome": "Rafael"
                },
                "comentario": "A quadra é incrivel",
                "nota": 5
              },
              {
                "usuario": {
                  "id": 2,
                  "nome": "Leonardo"
                },
                "comentario": "A quadra é impecavelmente limpa",
                "nota": 4
              }
            ]
          },
          "horarios": [
            {
              "diaSemana": "seg",
              "inicio": "08:00",
              "fim": "23:00"
            },
            {
              "diaSemana": "ter",
              "inicio": "08:00",
              "fim": "23:00"
            }
          ]

        },
        {
          "id": 2,
          "img": [
            {
              "id": 1,
              "url": "img/quadras/02/1.jpg"
            },
            {
              "id": 2,
              "url": "img/quadras/02/2.jpg"
            },
            {
              "id": 3,
              "url": "img/quadras/02/3.jpg"
            }
          ],
          "nome": "Teste de quadra",
          "descricao": "A quadra pavê no fim de Ano apresenta uma alta disponibilidade, beleza, cheiro impecável e gostosura.",
          "endereco": {
            "rua": "Machado de Assis",
            "quadra": 3,
            "numero": 46,
            "bairro": "Mary Dotta"
          },
          "avaliacao": {
            "nota": 3.2,
            "comentarios": [
              {
                "usuario": {
                  "id": 1,
                  "nome": "Rafael"
                },
                "comentario": "A quadra é incrivel",
                "nota": 5
              },
              {
                "usuario": {
                  "id": 2,
                  "nome": "Leonardo"
                },
                "comentario": "A quadra é impecavelmente limpa",
                "nota": 4
              }
            ]
          },
          "horarios": [
            {
              "diaSemana": "seg",
              "inicio": "08:00",
              "fim": "23:00"
            },
            {
              "diaSemana": "ter",
              "inicio": "08:00",
              "fim": "23:00"
            }
          ]

        }
      ]
    }
  }
}
</script>

<style>
</style>