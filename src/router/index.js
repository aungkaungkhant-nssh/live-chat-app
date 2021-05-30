import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom'


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path:"/chatroom",
    name:'Chatroom',
    component:Chatroom,
   
   
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
