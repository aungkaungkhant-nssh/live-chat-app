<template>
  <div class="welcome container">
      <div v-if="showLogin">
          <Login @enterChat="enterChat"></Login>
          <p>not remember? <span @click="showLogin=!showLogin">SignUp</span></p>
      </div>
      <div v-else>
          <SignUp @enterChat="enterChat"></SignUp>
          <p>Already account exist? Please <span @click="showLogin=!showLogin">Login</span></p>
      </div>
  </div>
</template>

<script>
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import { ref } from '@vue/reactivity'
import {useRouter} from "vue-router"
export default {
  components: {
    SignUp, Login },
    setup(){
      let router=useRouter();
      let showLogin=ref(true);
      let enterChat=()=>{
          router.push({name:"Chatroom"})
      }
      return{showLogin,enterChat};
    }

}
</script>

<style>
.welcome{
    padding:20px 0px;
    text-align: center;
}
.welcome form{
  width: 300px;
  margin: 20px auto;
}
.welcome label{
  display: block;
  margin:20px 0 10px;
}
.welcome input{
  width: 100%;
  padding:10px;
  border-radius: 20px;
  border:1px solid #eee;
  outline: none;
  color:#999;
  margin:10px auto;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
}
.welcome button{
  margin:20px auto;
}
</style>