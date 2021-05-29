import { ref } from "@vue/reactivity"
import { auth } from '../firebase/config';
let error=ref(null);
let checkEmailAndPassword=async(email,password)=>{
    try{
        let res=await auth.signInWithEmailAndPassword(email,password);
        
        if(!res){
            throw new Error("Connection Time Out")
        }
       return res;
    }catch(err){
        error.value=err.message;
    }
     
}
let useLogin=()=>{
    return {error,checkEmailAndPassword}
}
export default useLogin;