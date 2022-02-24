import { defineStore } from 'pinia'

export const useQuadrasStore = defineStore('quadras', {
  state: () => {
    return {
      quadras: [
        {
          "id": 1,
          "foto": {
            "id": 1,
            "url": "/img/QuadraCards/quadra.jpg" //COLOCAR IMAGEM DA QUADRA
          },
          "fotos": [
            {
              "id": 1,
              "url": "https://via.placeholder.com/1024x768"
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
          // "avaliacao": {
          //   "nota": 4.5,
          //   "comentarios": [
          //     {
          //       "usuario": {
          //         "id": 1,
          //         "nome": "Rafael"
          //       },
          //       "comentario": "A quadra é incrivel",
          //       "nota": 5
          //     },
          //     {
          //       "usuario": {
          //         "id": 2,
          //         "nome": "Leonardo"
          //       },
          //       "comentario": "A quadra é impecavelmente limpa",
          //       "nota": 4
          //     }
          //   ]
          // },
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
          ],
          "preco": {
            //"preco1": "R$:60,00/30min",
            "preco2": "R$:120,00/1hora"
          }
        },

        {
          "id": 2,
          "foto": {
            "id": 1,
            "url": "/img/QuadraCards/quadra1.jpg"
          },
          "fotos": [
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
          "nome": "Doce sem Coco",
          "descricao": "Doce sem coco é a quadra mais gostosa do mundo, tirando que você não terá problemas em achar coco em meio ao chocolate.",
          "endereco": {
            "rua": "Cussy Junior",
            "quadra": 7,
            "numero": 89,
            "bairro": "Altos da Cidade"
          },
          // "avaliacao": {
          //   "nota": 4,
          //   "comentarios": [
          //     {
          //       "usuario": {
          //         "id": 1,
          //         "nome": "Mateus"
          //       },
          //       "comentario": "Amo chocolate sem coco",
          //       "nota": 5
          //     },
          //     {
          //       "usuario": {
          //         "id": 2,
          //         "nome": "João"
          //       },
          //       "comentario": "Prefiro meus doces com coco, mas a quadra é até que organizadinha",
          //       "nota": 3
          //     }
          //   ]
          // },
          "horarios": [
            {
              "diaSemana": "seg",
              "inicio": "08:00",
              "fim": "22:00"
            },
            {
              "diaSemana": "ter",
              "inicio": "08:00",
              "fim": "22:00"
            }
          ],
          "preco": {
            //"preco1": "R$:40,00/30min",
            "preco2": "R$:110,00/1hora"
          }
        },

        {
          "id": 3,
          "foto": {
            "id": 1,
            "url": "/img/QuadraCards/quadra2.jpg"
          },
          "fotos": [
            {
              "id": 1,
              "url": "img/quadras/03/1.jpg"
            },
            {
              "id": 2,
              "url": "img/quadras/03/2.jpg"
            },
            {
              "id": 3,
              "url": "img/quadras/03/3.jpg"
            }
          ],
          "nome": "Urso Rosa",
          "descricao": "Oferta como essa jamais achará em lugar algum, basta procurar um urso cor de rosa como o nosso",
          "endereco": {
            "rua": "Oliveira dos Campos",
            "quadra": 21,
            "numero": 238,
            "bairro": "Redentor"
          },
          // "avaliacao": {
          //   "nota": 2,
          //   "comentarios": [
          //     {
          //       "usuario": {
          //         "id": 1,
          //         "nome": "Apolo"
          //       },
          //       "comentario": "Infelizmente não tem agua e não vi urso cor de rosa algum",
          //       "nota": 2
          //     },
          //     {
          //       "usuario": {
          //         "id": 2,
          //         "nome": "Lucas"
          //       },
          //       "comentario": "Meu filho se cortou com um caco de vidro no gramado, como isso seria possível?",
          //       "nota": 0
          //     }
          //   ]
          // },
          "horarios": [
            {
              "diaSemana": "seg",
              "inicio": "12:00",
              "fim": "22:00"
            },
            {
              "diaSemana": "ter",
              "inicio": "12:00",
              "fim": "22:00"
            }
          ],
          "preco": {
            //"preco1": "R$:100,00/30min",
            "preco2": "R$:200,00/1hora"
          }

        },

        {
          "id": 4,
          "foto": {
            "id": 1,
            "url": "/img/QuadraCards/quadra3.jpg"
          },
          "fotos": [
            {
              "id": 1,
              "url": "img/quadras/04/1.jpg"
            },
            {
              "id": 2,
              "url": "img/quadras/04/2.jpg"
            },
            {
              "id": 3,
              "url": "img/quadras/04/3.jpg"
            }
          ],
          "nome": "JoGolfinho's",
          "descricao": "Quem já viu na região uma quadra que se joga com golfinhos? Venha fazer parte e não perca essa oportunidade",
          "endereco": {
            "rua": "Getúlio Vargas",
            "quadra": 72,
            "numero": 3112,
            "bairro": "Santa Clara"
          },
          // "avaliacao": {
          //   "nota": 5,
          //   "comentarios": [
          //     {
          //       "usuario": {
          //         "id": 1,
          //         "nome": "ApaixonadosPorGolfinhos"
          //       },
          //       "comentario": "Foi mágico, não se explica o que ocorre lá! É único, magnífico",
          //       "nota": 5
          //     },
          //     {
          //       "usuario": {
          //         "id": 2,
          //         "nome": "Sérgio"
          //       },
          //       "comentario": "Perdi para um time de golfinhos! Eles são realmente bons",
          //       "nota": 3
          //     },
          //     {
          //       "usuario": {
          //         "id": 3,
          //         "nome": "Luiz"
          //       },
          //       "comentario": "Quase me afoguei com aquele golfinho me driblando",
          //       "nota": 2
          //     }
          //   ]
          // },
          "horarios": [
            {
              "diaSemana": "seg",
              "inicio": "06:00",
              "fim": "22:00"
            },
            {
              "diaSemana": "ter",
              "inicio": "06:00",
              "fim": "22:00"
            }
          ],
          "preco": {
            //"preco1": "R$:20,00/30min",
            "preco2": "R$:120,00/1hora"
          }

        }
      ]
    }
  }
})
