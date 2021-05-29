<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
      <input type="text" v-model="displayName" placeholder="displayname">
      <input type="email" v-model="email" placeholder="Enter email">
      <input type="password" v-model="password" placeholder="Enter password">
       <div v-if="error" class="error">{{error}}</div>
      <button>SignUp</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignUp from "../composables/useSignUp";
export default {
    setup(){
        let {error,createAccount}=useSignUp();
        let email=ref("");
        let password=ref("");
        let displayName=ref("");
        let signUp=async()=>{
            let res=await createAccount(displayName.value,email.value,password.value);
            if(res){
              console.log("true");
            }
        }
        return{email,password,displayName,signUp,error};
    }
}
</script>

<style>

</style>