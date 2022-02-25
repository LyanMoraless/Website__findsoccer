<template>
    <header class="topo">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <div class="col-2">
                    <RouterLink class="navbar-brand logo" to="/">
                        <img src="@/assets/img/Topo/logo.svg" />
                    </RouterLink>
                </div>
                <div class="col-2"></div>
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
                            <RouterLink to="/quadras">Quadras</RouterLink>
                            <a>Usuário</a>
                            <RouterLink to="/quadras/new">Cadastre Quadras</RouterLink>
                            <a>Configurações</a>
                            <a>Sair</a>
                        </ul>
                    </div>
                </div>

                <div class="col-6">
                    <FormPesquisa />
                </div>

                <div class="col-2">
                    <ul class="navbar-nav d-none d-sm-block">
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
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <RouterLink class="dropdown-item" to="/quadras">Quadras</RouterLink>
                                <a class="dropdown-item" href="#">Usuário</a>
                                <RouterLink class="dropdown-item" to="/quadras/new">Cadastre Quadras</RouterLink>
                                <a class="dropdown-item" href="#">Configurações</a>
                                <a class="dropdown-item" href="#">Sair</a>
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
    components: { FormPesquisa }
}
</script>

<style>
</style>