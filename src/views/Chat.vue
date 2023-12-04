<script setup>
import { useUserStore, useChannelStore } from '../stores'
import Chat from '../components/Chat.vue'

const user = useUserStore()
const channel = useChannelStore()
const activeChannel = channel.activeChannel
let messages = activeChannel.messages
let members = activeChannel.members
</script>

<template>
    <div class="h-screen">
        <Chat 
            :userId="user.id" 
            :messages="messages" 
            :members="members"/>
    </div>
</template>