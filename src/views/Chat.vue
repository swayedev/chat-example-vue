<script setup>
import { useUserStore, useChannelStore } from '../stores'
import Message from '../components/Message.vue'

const user = useUserStore()
const channel = useChannelStore()
const activeChannel = channel.activeChannel
let t = channel.findMemberById(activeChannel, 2) 
</script>

<template>
<div class="flex flex-col h-screen">
    <!-- Chat Messages Container -->
    <div class="flex flex-col overflow-y-auto p-4 place-content-end content-end h-full">
        <!-- Individual Messages -->
        <Message :user="t" msg="Hello, How are you?" />
        <Message :user="user" :right="true" msg="I'm fine, thanks!" />
    </div>

    <!-- Message Input Area -->
    <div class="p-4">
        <div class="flex gap-2">
            <input type="text" class="flex-1 p-2 border rounded" placeholder="Type a message..."/>
            <button class="p-2 bg-blue-500 text-white rounded">Send</button>
        </div>
    </div>
</div>

</template>