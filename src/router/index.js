import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom'
import {auth} from "../firebase/config"
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(!user){
        next();
      }else{
        next({name:"Chatroom"})
      }
    }
  },
  {
    path:"/chatroom",
    name:'Chatroom',
    component:Chatroom,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(user){
        next();
      }else{
        next("/")
      }
    }
   
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
