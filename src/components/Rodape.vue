<template>
  <footer class="rodape">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <RouterLink class="politic" to="/politic">Politicas</RouterLink>
        </div>
        <div class="col-md-8">
          <section class="direitos">
            Todos os direitos reservados - FindSoccer
          </section>
        </div>

        <div class="col-md-2">
          <div class="images">
            <img src="@/assets/img/Rodape/whats.svg" />
            <img src="@/assets/img/Rodape/instagram.svg" />
            <img src="@/assets/img/Rodape/face.svg" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.images {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
}
.politic {
  color: #1fd86f;
  text-decoration: none;
}
.direitos {
  color: #1fd86f;
  display: flex;
  justify-content: center;
}
</style>