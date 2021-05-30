<template>
  <div class="container" v-if="user">
      <Navbar></Navbar>
      <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import Navbar from '../components/Navbar'

export default {
  components: {
    NewChatForm, Navbar },
    setup(){
   
    }
}
</script>

<style>

</style>