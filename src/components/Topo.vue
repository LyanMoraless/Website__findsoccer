<template>
    <header class="topo">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <div class="col-2">
                    <RouterLink class="navbar-brand logo" to="/">
                        <img src="@/assets/img/logo.svg" />
                    </RouterLink>

                </div>
                            <!-- <RouterLink to="/quadras">Quadras</RouterLink> -->

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
                            <a>Usuário</a>
                            <a>Cadastre Quadras</a>
                            <a>Configurações</a>
                            <a>Sair</a>
                        </ul>
                    </div>
                </div>

                <div class="col-6">
                    <form class="form-inline">
                        <select class="form-control mr-sm-2 menus" name="tipo">
                            <option>Society</option>
                            <option>Futsal</option>
                            <option>Campo</option>
                        </select>

                        <select class="form-control mr-sm-2 menus" name="cidade">
                            <option>Estado - Cidade</option>
                        </select>

                        <select class="form-control mr-sm-2 menus" name="data">
                            <option>31</option>
                        </select>

                        <select class="form-control mr-sm-2 menus" name="hora">
                            <option>00:00</option>
                        </select>

                        <button class="btn butt my-2 my-sm-0" type="submit">Search</button>
                    </form>
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
                                <!-- <span class="navbar-toggler-icon"></span> -->
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Usuário</a>
                                <a class="dropdown-item" href="#">Cadastre Quadras</a>
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
export default {

}
</script>

<style>
</style>