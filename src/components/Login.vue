<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <input type="email" placeholder="enter email" v-model="email">
        <input type="password" placeholder="enter password" v-model="password">
         <div v-if="error" class="error">{{error}}</div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from "../composables/useLogin"
export default {    
    setup(){
        let {error,checkEmailAndPassword}=useLogin();
        let email=ref("");
        let password=ref("");
        let login=async()=>{
            let res=await checkEmailAndPassword(email.value,password.value);
            if(res){
                console.log("true");
            }
        }
        return{email,password,login,error}
    }
}
</script>

<style>

</style>