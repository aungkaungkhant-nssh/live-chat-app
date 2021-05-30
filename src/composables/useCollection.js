import { ref } from "@vue/reactivity";
import { db } from "../firebase/config"

let useCollection=(collection)=>{
    let error=ref(null);
    let addDoc=async(doc)=>{
        try{
            await db.collection(collection).add(doc);
        }catch(err){
            error.value="could not send message";
            console.log(err.message);
        }
    }
    return{error,addDoc}
}
export default useCollection;