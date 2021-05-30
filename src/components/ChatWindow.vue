<template>
     <div class="chat-window">
        <div class="messages" ref="scroll">
            <div class="single" v-for="message in formatMessages" :key="message.id" >
                <span class="created-at">{{message.created_at}}</span>
                <span class="name">{{message.name}}</span>
                <span class="message">{{message.message}}</span>
               
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { db } from '../firebase/config';
import {formatDistanceToNow} from "date-fns"
import { computed, onUpdated } from '@vue/runtime-core';
export default {
    setup(){
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
       
        
        return{formatMessages,scroll};
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
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>