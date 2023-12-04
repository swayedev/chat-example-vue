<script setup>
import { useUserStore, useChannelStore } from '../stores'
import Chat from '../components/Chat.vue'

const user = useUserStore()
const channel = useChannelStore()
const activeChannel = channel.activeChannel
let messages = activeChannel.messages
let members = activeChannel.members
let name = activeChannel.name
let picture = activeChannel.picture
let description = "last seen today at 1:53am"
let group = false
if (members.length > 2) {
    group = true
    description = members.length + " members"
}

if (members.length == 2) {
    members.forEach(member => {
        if (member.id != user.id) {
            name = member.name
            picture = member.avatar
            description = member.status
        }
    })
} 
</script>

<template>
    <div class="flex h-screen">
        <div class="flex flex-col w-14 bg-gray-100">
            <div class="p-2 mx-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div class="p-2 bg-orange-500 rounded-lg my-1 mx-2 text-center text-white"> 1 </div>
            <div class="p-2 bg-blue-500 rounded-lg my-1 mx-2 text-center text-white">2</div>
        </div>
        <Chat :group="group" :name="name" :image="picture" :description="description" :userId="user.id" :messages="messages"
            :members="members" />

    </div>
</template>