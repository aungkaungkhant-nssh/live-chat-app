<template>
  <form>
      <textarea  v-model="message" placeholder="Text Message and hint enter" @keypress.prevent.enter="handleSubmit"></textarea>
  </form>

</template>

<script>
import { ref } from '@vue/reactivity'
import { db } from '../firebase/config';
export default {
    setup(){
        let message=ref("");
        let handleSubmit=()=>{
            console.log("hi");
        //    await db.collection("messages").add()
        }
        return{message,handleSubmit}
    }
}
</script>

<style>
  form{
        margin: 10px;
    }
    textarea{
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding:10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>