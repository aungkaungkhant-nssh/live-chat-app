<template>
    <h2>Login</h2>
    <form>
        <input type="email" placeholder="enter email" v-model="email">
        <input type="password" placeholder="enter password" v-model="password">
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {    
    setup(){
        let email=ref("");
        let password=ref("");
        return{email,password}
    }
}
</script>

<style>

</style>