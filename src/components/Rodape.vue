<template>
    <footer class="rodape">
        <div class="container">

            <div class="row">

                <div class="col-3 politic">
                        <RouterLink class="politic" to="/politic">Politicas</RouterLink>
                </div>

                <div class="col-6">

                    <section class="direitos">Todos os direitos reservados - FindSoccer</section>

                </div>

                
                    
                        <div class="col-3">
                                <img class="images" src="@/assets/img/Rodape/whats.svg" />      
                                <img class="images" src="@/assets/img/Rodape/instagram.svg" />     
                                <img class="images" src="@/assets/img/Rodape/face.svg" /> 
                        </div>
                    
                
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

.images{
    height: 40px;
    width: 40px;
    margin: 0px 10px;
}
.politic{
    color: #1FD86F; 
    text-decoration: none;
    padding-top: 9px;
}

</style>