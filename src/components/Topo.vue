<template>
  <header class="topo">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <RouterLink class="navbar-brand logo" to="/">
          <img src="@/assets/img/Topo/logo.svg" />
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-block d-sm-none">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink to="/quadras" class="nav-link">Quadras</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/locais" class="nav-link">
                  Menu do Usuário
                </RouterLink>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Configurações</a>
              </li>
              <li class="nav-item"><a href="#" class="nav-link">Sair</a></li>
            </ul>
          </div>
          <div class="col d-flex justify-content-center">
            <FormPesquisa />
          </div>
        </div>

        <div class="col-1 d-none d-lg-block">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="bi bi-list" style="font-size: 1.5em"></i>
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <RouterLink class="dropdown-item" to="/quadras"
                  >Quadras</RouterLink
                >
                <RouterLink class="dropdown-item" to="/locais"
                  >Menu do Usuário</RouterLink
                >
                <!-- <a class="dropdown-item" href="#">Configurações</a> -->
                <a class="dropdown-item" href="#" onclick="exit()">Sair</a>
                <!-- FUNÇÃO EXIT -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import FormPesquisa from "./FormPesquisa.vue";
export default {
  components: { FormPesquisa },
};
</script>

<style>
</style>