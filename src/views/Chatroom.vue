<template>
  <div class="container">
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

}
</script>

<style>

</style>