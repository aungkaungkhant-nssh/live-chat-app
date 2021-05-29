import { ref } from "@vue/reactivity";
import {auth} from "../firebase/config";
let error=ref(null);
let createAccount=async(displayName,email,password)=>{
    try{
        let res= await auth.createUserWithEmailAndPassword(email,password);
        if(!res){
          throw new Error("Cannot create Account")
        }
        res.user.updateProfile({displayName:displayName});
        return res;
  }catch(err){
      error.value=err.message;
      
  }
}
let useSignUp=()=>{
    return {error,createAccount};
}
export default useSignUp;