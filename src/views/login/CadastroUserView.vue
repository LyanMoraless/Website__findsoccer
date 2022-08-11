<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUsuariosStore } from "@/stores/usuarios";

// TERMINAR A INSERÇÃO DE DADOS

defineProps(["usuarioCadastro"]);

const router = useRouter();
const store = useUsuariosStore();

const username = ref(store.username);
const email = ref(store.email);
const senha = ref(store.senha);

const submitForm = async() => {
    const res = await store.cadastrarUsuario({
        username: username.value,
        email: email.value,
        senha: senha.value
    });

    // router.replace("/")
}

</script>

<template>
  
    <section>
        <div class="areaLogin">
            <div class="login">
                
                <div class="titleLogs">
                    <img id="imgDtls" src="../../../public/img/registrese.png">
                </div>

                <form @submit.prevent="submitForm">
                    <input 
                    type="text" 
                    name="username" 
                    placeholder="Nome de usuário" 
                    autofocus 
                    v-model="username"
                    >
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite seu email" 
                    v-model="email"
                    >
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Digite sua senha" 
                    v-model="senha"
                    >
                    <button class="loginBtn">Entrar</button>
                </form>

                <div class="image">
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
    height: 570px;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 7px 7px 13px 0px rgb(108, 204, 45);
}
.login form{
    display: flex;
    flex-direction: column;
    width: 100%;
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
.titleLogs{
    font-size: 27px;
}
.image{
    margin-top: 50px;
}
#imgDtls{
    margin-bottom: 20px;
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
</style>