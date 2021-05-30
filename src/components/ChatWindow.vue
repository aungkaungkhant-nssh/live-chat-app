<template>
     <div class="chat-window">
        <div class="messages" ref="scroll">
            <div class="single" v-for="message in formatMessages" :key="message.id" >
                <span class="created-at" :class="{loginTime:user.displayName===message.name}">{{message.created_at}}</span>
                <span class="name" :class="{loginMember:user.displayName===message.name}">{{message.name}}</span>
                <span class="message"  :class="{loginMessage:user.displayName===message.name}">{{message.message}}</span>
            </div>
    
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { auth, db } from '../firebase/config';
import {formatDistanceToNow} from "date-fns"
import { computed, onUpdated } from '@vue/runtime-core';

export default {
    setup(){
        let user=auth.currentUser;
        let scroll=ref(null);
        onUpdated(()=>{
            scroll.value.scrollTop=scroll.value.scrollHeight;
        })
        let messages=ref([]);
        let formatMessages=computed(()=>{
            return messages.value.map((msg)=>{
                let formatTime=formatDistanceToNow(msg.created_at.toDate());
                return {...msg,created_at:formatTime};
            })
        })
        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
        let result=[]; 
        snap.docs.forEach(doc =>{
            let document={...doc.data(),id:doc.id};
            doc.data().created_at && result.push(document);
            })
            messages.value=result;
        })
       
        
        return{formatMessages,scroll,user};
    }
}   
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
 
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
        color:indigo;
         /* display: block; */
      }
      .messages {
        max-height: 400px;
        overflow: auto;
        overflow-x: hidden;
       
      }
      .loginTime{
         margin:8px 0px 5px 700px;
      }
      .loginMember{
        color:green;
        margin-left:700px;
      }
      .message{
         display: block;
        margin:8px 0px 5px 0px;
      }
      .loginMessage{
        display: block;
        margin:8px 0px 5px 700px;
      }
</style>