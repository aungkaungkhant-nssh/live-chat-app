const { ref } = require("@vue/reactivity");
import { auth } from '../firebase/config'
let user=ref(auth.currentUser);
auth.onAuthStateChanged((_user)=>{
    user.value=_user;
})
let getUser=()=>{
    return {user};
}
export default getUser;