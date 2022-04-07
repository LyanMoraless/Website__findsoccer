<template>

<div class="container">

<!-- NOMES --------------------------------------------------------------------------------------------------------------- -->

    <h2 class="name">FindNames</h2>
    <hr class="geralPad">

     <div class="mb-3">
            <label for="nameQuadra" class="labelStyle">Nome da Quadra</label>
            <input type="text" class="form-control inputStyle" placeholder="Digite o nome da quadra">
        </div>

        <div class="mb-3">
            <label for="nameQuadra" class="labelStyle">Username da Quadra</label>
            <input type="text" class="form-control inputStyle" placeholder="Digite um username para sua quadra">
        </div>

<!-- CREDENCIAIS --------------------------------------------------------------------------------------------------------------- -->

    <h2 class="name">FindCredentials</h2>
    <hr class="geralPad">

        <div class="mb-3">
            <label for="" class="labelStyle">RG</label>        
            <input type="text" class="form-control" placeholder="XX.XXX.XXX-X">    
        </div>

        <div class="mb-3">
            <label for="" class="labelStyle">CPF</label>
            <input type="text" class="form-control" placeholder="XXX.XXX.XXX-XX">
        </div>
        <div class="mb-3">
            <label for="" class="labelStyle">CNPJ</label>
            <input type="text" class="form-control" placeholder="XX. XXX. XXX/0001-XX" aria-label="Server">
        </div>

        <label for="" class="labelStyle">Celular</label>
        <label for="" class="labelStyle6">Email</label>
        <label for="" class="labelStyle7">Telefone</label>

        <div class="mb-3 input-group">
            <input type="text" class="form-control" placeholder="+51 (XX) XXXXX-XXXX">
            <input type="text" class="form-control" placeholder="user.best@gmail.com">
            <input type="text" class="form-control" placeholder="XXXXXXXX">
        </div>

<!-- LOCALIZAÇÃO --------------------------------------------------------------------------------------------------------------- -->
        

    <h2 class="name">FindLocations</h2>
    <hr class="geralPad">

        <label for="" class="labelStyle">Rua</label>
        <label for="" class="labelStyle4">CEP</label>

        <div class="input-group mb-3">
            <input type="text" class="form-control col-10" placeholder="XX.XXX.XXX-X">        
            <input type="text" class="form-control col-2" placeholder="XXXXXX">    
        </div>

        <label for="" class="labelStyle">Estado</label>
        <label for="" class="labelStyle2">Cidade</label>
        <label for="" class="labelStyle3">Bairro</label>

        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="XXX.XXX.XXX-XX">
            <input type="text" class="form-control" placeholder="XXX.XXX.XXX-XX">
            <input type="text" class="form-control" placeholder="XXX.XXX.XXX-XX">
        </div>
        
        <label for="" class="labelStyle">Número</label>
        <label for="" class="labelStyle5">Complemento</label>

        <div class="input-group mb-3">
            <input type="text" class="form-control col-2" placeholder="X-XX">
            <div class="col-2"></div>
            <textarea class="form-control col-8" id="divEnd"></textarea>
        </div>

<!-- ESPECIFICIDADES ------------------------------------------------------------------------------------------------------------- -->

    <h2 class="name">FindSpecificities</h2>
    <hr class="geralPad">

    <label for="" class="labelStyle">Preço</label>

    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">R$:</span>
        <input type="text" class="form-control" placeholder="Preço por hora: XXX,xx">
    </div>
    
    <label for="" class="labelStyle">Número</label>
    <label for="" class="labelStyle5">Descrição</label>

    <div class="input-group mb-3">

        <select class="col-3 form-control">
            <option>Segunda - Sexta</option>
            <option>Segunda - Sábado</option>
            <option>Segunda - Domingo</option>
            <option>Sábado - Domingo</option>
        </select>

        <div class="col-1"></div>

        <textarea class="form-control col-8" id="divEnd" placeholder="Escreva uma breve descrição para a sua quadra"></textarea>
    </div>

    <h1 class="h1Style d-flex">Seja bem-vindo a FindSoccer</h1>
    <h6 class="h6Style d-flex">Seu jogo começa aqui</h6>

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
}
.inputStyle{
    font-style: italic;
}
.labelStyle2{
    color: #1FD86F;
    font-size: large;
    margin-left: 320px;
}
.labelStyle3{
    color: #1FD86F;
    font-size: large;
    margin-left: 315px;
}
.labelStyle4{
    color: #1FD86F;
    font-size: large;
    margin-left: 900px;
}
.labelStyle5{
    color: #1FD86F;
    font-size: large;
    margin-left: 305px;
}
.labelStyle6{
    color: #1FD86F;
    font-size: large;
    margin-left: 317px;
}
.labelStyle7{
    color: #1FD86F;
    font-size: large;
    margin-left: 327px;
}
#divEnd{
    justify-content: end;
}
.h1Style{
    margin-top: 100px;
    justify-content: center;
}
.h6Style{
    color: #1FD86F;
    font-style: italic;
    margin-right: 300px;
    justify-content: end;
}

</style>