<template>
  <!--Imagens-->
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            src="https://tvuniaobrasilia.com.br/wp-content/uploads/2021/05/2.5.-Campo-Sao-Jose.-Arte-Divulgacao.jpg"
            class="w-100"
            alt="..."
          />
        </div>
        <div class="col-5">
          <img
            src="https://www.lrgramas.com.br/imagens-midia/informacoes/grama-campo-futebol-01.webp"
            class="h-50 w-100 pb-2"
            alt="..."
          />

          <div class="w-100">
            <img
              src="https://fatebtb.edu.br/novosite/wp-content/uploads/2016/02/Campo-de-Futebol-Society-1.jpg"
              class="imagem"
              alt="..."
            />
          </div>
        </div>
      </div>
      <!--Descrição-->
      <div class="row">
        <div class="col-sm-7">
          <h3 class="card-title pb-5">Descrição</h3>
          <p class="card-text text-justify pb-5">
            Para quem não conhece, “Lorem Ipsum” ou “dummy text” é um texto
            utilizado para preencher o espaço de texto em publicações (jornais,
            revistas, e websites), com a finalidade de verificar o layout,
            tipografia e formatação antes de utilizar conteúdo real. No nosso
            caso, é muito usado em wireframes e sketches para preencher algum
            bloco de texto em que o conteúdo final não tenha muita importância
            para aquilo que queremos demonstrar. O lorem ipsum simula com
            razoável fidelidade um texto real, por possuir palavras de diversos
            tamanhos e sinais de pontuação, permitindo testar também a forma
            como o texto flui nas caixas e campos de formatação. Com o passar do
            tempo foram surgindo várias ferramentas online que geram esses
            blocos de textos
          </p>
        </div>
            <!--Banner-->
        <div class="col-sm-5 pt-4 sticky-top">
          <div class="card shadow p-3 mb-5 bg-white rounded">
            <div class="card-body">
              <h5 class="card-title text-center">Agendamento Rápido</h5>
              <p class="card-text p-3">
                Agende o horário e dia mais proximo de você
              </p>
              <h2 class="card-title text-center">R$80,00/hora</h2>
              <h5 class="row card-title text-center pl-5 pb-2">
                <star-rating
                  :read-only="true"
                  :rating="5"
                  :increment="0.01"
                  :star-size="20"
                />/ <span><a class="text-dark"> 3 comentários</a></span>
              </h5>
              <div class="container">
                <div class="form-group row">
                  <label for="exampleFormControlSelect1">
                    <h5 class="text-success">Pessoas</h5></label
                  >
                  <div class="col-sm-3">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="form-group row">
                  <label for="exampleFormControlSelect1">
                    <h5 class="text-success">Horas</h5></label
                  >
                  <div class="col-sm-4">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>00:00</option>
                      <option>05:00</option>
                      <option>06:00</option>
                      <option>08:00</option>
                      <option>09:00</option>
                      <option>11:00</option>
                      <option>16:00</option>
                      <option>18:00</option>
                    </select>
                  </div>
                </div>
              </div>
              <h5 class="card-title text-center p-3">Visualização</h5>
              <div class="row">
                <div class="col-sm-5">
                  <h5 class="card-title text-success">Total</h5>
                </div>
                <p class="card-text">
                  R$ <span class="card-text text-danger">120,00</span>
                </p>
              </div>
              <p class="card-text text-center">
                R$<span class="card-text text-danger">120,00</span>
              </p>
              <h5 class="card-title text-center">Agendar</h5>
            </div>
          </div>
        </div>

        <!--Ofeceremos-->
        <div class="container">
          <h3 class="pb-5">Oferecemos</h3>
          <div class="row">
            <div class="col-sm-2 pb-3">Vestiario</div>
            <div class="col-sm-2">Bola</div>
            <div class="col-sm-2">Churrasqueira</div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-2 pb-3">Chuveiro</div>
            <div class="col-sm-2">Juiz</div>
            <div class="col-sm-2">Frigobar</div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-2 pb-3">Coletes</div>
            <div class="col-sm-2">Cantina</div>
            <div class="col-sm-2">Talheres</div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-2">Chuteira</div>
            <div class="col-sm-2">Refeitorio</div>
            <div class="col-sm-2 pb-5">
              <div class="dropdown">
                <div
                  class="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Mais Opções
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Comentários-->
      <div class="container">
        <h4 class="text-center pb-5 pt-5">Comentários</h4>
        <div class="card-deck">
          <div class="card shadow p-3 mb-5 bg-white rounded">
            <img
              class="card-img-top rounded-circle"
              src="https://conceitos.com/wp-content/uploads/psicologia/Perfil-Psicologico.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Nome</h5>
              <p class="card-text text-justify">
                Para quem não conhece, “Lorem Ipsum” ou “dummy text” é um texto
                utilizado para preencher o espaço de texto em publicações
                (jornais, revistas, e websites), com a finalidade de verificar o
                layout
              </p>
            </div>
          </div>
          <div class="card shadow p-3 mb-5 bg-white rounded">
            <img
              class="card-img-top rounded-circle"
              src="https://conceitos.com/wp-content/uploads/psicologia/Perfil-Psicologico.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Nome</h5>
              <p class="card-text text-justify">
                Para quem não conhece, “Lorem Ipsum” ou “dummy text” é um texto
                utilizado para preencher o espaço de texto em publicações
                (jornais, revistas, e websites), com a finalidade de verificar o
                layout
              </p>
            </div>
          </div>
          <div class="card shadow p-3 mb-5 bg-white rounded">
            <img
              class="card-img-top rounded-circle"
              src="https://conceitos.com/wp-content/uploads/psicologia/Perfil-Psicologico.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Nome</h5>
              <p class="card-text text-justify">
                Para quem não conhece, “Lorem Ipsum” ou “dummy text” é um texto
                utilizado para preencher o espaço de texto em publicações
                (jornais, revistas, e websites), com a finalidade de verificar o
                layout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--FIM-->
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  props: ["quadras"],
  components: {
    StarRating,
  },
};
</script>

<style>
.imagem {
  width: 60%;
}
</style>
