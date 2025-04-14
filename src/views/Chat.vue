<script lang="ts" setup>
import { useUserStore, useChannelStore } from '../stores'
import Chat from '../components/Chat.vue'

const user = useUserStore()
const channel = useChannelStore()
const activeChannel = channel.activeChannel
let { 
    messages, 
    members, 
    name, 
    picture 
} = activeChannel

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
    <div class="fixed w-60 h-full z-10 bg-slate-300 sm:hidden">
        <div class=""></div>
    </div>
    <div class="flex h-screen max-w-screen">
        <div class="grow">
            <Chat :group="group" :name="name" :image="picture" :description="description" :userId="user.id"
                :messages="messages" :members="members">
                <template v-slot:header>
                    <div class="py-2 pr-2 my-2 mr-2 sm:hidden z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </template>
            </Chat>
        </div>


    </div>
</template>