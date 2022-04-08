<template>

<div class="container">

    <h2 class="name">Menu do Ceo</h2>
    <hr class="geralPad">
     
            <h4 class="h4Style">Lyan Gabriel Ruiz Morales</h4>  
            <div class="d-flex img1">
                <img class="img1" src="../../public/img/c.avif" alt="">
            </div>

            <div class="d-flex">

                <div class="row">
                    <label for="nameQuadra" class="labelStyle col-12">Nome da Quadra</label>
                    <input type="text" class="form-control d-flex inputStyleX" placeholder="Digite o nome da quadra">
                </div>

            </div>
</div>

</template>

<script>
export default {
    props: ['quadrasCadastro']

}
</script>

<style>


.name{
    font-style: italic;
    margin-top: 50px;
    margin-bottom: 40px;
}
.geralPad{
    margin-top: 30px;
    margin-bottom: 30px;
}
.labelStyle{
    color: #1FD86F;
    font-size: large;
    margin-top: -250px;
}
.inputStyleX{
    font-style: italic;
    margin-top: -215px;
    margin-left: 12px;
    width: 800px;
}
.h4Style{
    margin-top: 50px;
    color: #1FD86F;
}
.img1{
    height: 300px;
    justify-content: end;
    margin-top: -35px;
}
.camps1{
    margin-top: 100px;
}
</style>