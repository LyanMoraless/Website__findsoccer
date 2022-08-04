<script setup>

</script>

<template>
  
    <section>

        <div class="areaLogin">
            <div class="login">

                <h3 class="y">Cadastro</h3>

                <form class="butesp">
                    <input type="text" name="name" placeholder="Digite o nome de usuário " autofocus>
                    <input type="text" name="email" placeholder="Insira um email válido" autofocus>
                    <input type="password" name="password" placeholder="Digite sua senha" >
                    <button class="loginBtn">Entrar</button>
                </form>
                
                <div class="img">
                    <img src="@/assets/img/telaDeLogin.jpg" />
                </div> 

            </div>
        </div>
    </section>

</template>

<style>
body{
    font-family: Arial, Helvetica, sans-serif;
    /* overflow: hidden; */
    background-image: url();
}
.areaLogin{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 455px;
    height: 520px;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 7px 7px 13px 0px rgb(108, 204, 45);
}
.login form{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.y{
    font-size: 35px;
    margin-bottom: 30px;
}
.login input{
    margin-top: 15px;
    border: none;
    height: 60px;
    outline: none;
    padding-left: 10px;
    border-radius: 8px;
}
.login img{
    /* width: 300px;
    height: 80px; */
    width: auto;
    height: auto;
}
input::placeholder{
    color: #1FD86F;
    font-size: 17px;
}
.loginBtn{
    background-color:white;
    color: #1FD86F;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    font-size: 20px;
    font-weight: bold;
    /* cursor: pointer; */
    border: none;
    height: 60px;
}
p{
    font-size: small;
    color: black;
    text-decoration: none;
}
p a{
    margin-left: 1px;
    color: #1FD86F;
}
.butesp{
    margin-bottom: 40px;
}
</style>