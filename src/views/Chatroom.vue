<template>
  <div class="container" v-if="user">
      <Navbar></Navbar>
       <ChatWindow></ChatWindow>
      <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatForm from '../components/NewChatForm'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import { watch } from '@vue/runtime-core'
import {useRouter} from "vue-router"

export default {
  components: {
    ChatWindow,
    NewChatForm, Navbar },
    setup(){
      let {user}=getUser();
      let router=useRouter();
      watch(user,()=>{
        if(!user.value){
          router.push("/")
        }
      })
      return{user}
    }
}
</script>

<style>

</style>