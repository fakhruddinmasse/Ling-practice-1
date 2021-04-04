<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Ling Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div v-for="msg in state.chat" :key="msg.message" 
          class="w-full"
          :class="msg.userId == userId ? 'text-right' : '' "
          >
            {{msg.message}}
          </div>
        </div>
        <div class="h-8 p-2">
          <input 
          v-model="state.message"
          placeholder="Start Typing...."
          class="p-1 border rounded shadow"
          @keydown.enter="addMessage" 
          /> 
        </div>
      </div>
    </div>
    <div >
    </div>
    
  </section>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { chatRef } from '../utilities/firebase.js'
import {useStore} from 'vuex'

export default {
  setup(){
    const state = reactive({
      chat:[ ],
      message:""
    });

    const store = useStore()
    const userId = computed(()=> store.state.authUser.uid);

    onMounted(async()=>{      
      chatRef.on("child_added", (snapshot) => {
        state.chat.push({key: snapshot.key, ...snapshot.val()});
      });

    })

    function addMessage(){
      const newChat = chatRef.push();      
      newChat.set({userId: state.userId, message:state.message});
      state.message = "";
    }

    return {state, addMessage, userId};
  }
}
</script>

<style>

</style>