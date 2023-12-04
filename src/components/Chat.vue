<script setup>
import Message from '../components/Message.vue'

const props = defineProps({
    userId: String,
    messages: Object,
    members: Object
})

const findMemberById = id => props.members.find(member => member.id === id)

</script>

<template>
    <div class="h-full flex flex-col">
        <div class="grow overflow-y-auto overflow-hidden">
            <!-- Chat Messages Container -->
            <div class="flex flex-col p-4 place-content-end content-end ">
                <!-- Individual Messages -->
                <Message v-for="message in messages" :user="findMemberById(message.author)" :msg="message.content"
                    :right="userId === message.author" />
            </div>
        </div>

        <!-- Message Input Area -->
        <div class="p-4">
            <div class="flex gap-2">
                <button class="p-2 bg-blue-500 text-white rounded-full">+</button>
                <input type="text" class="flex-1 p-2 border rounded" placeholder="Type a message..." />
                <button class="p-2 bg-blue-500 text-white rounded">Send</button>
            </div>
        </div>
    </div>
</template>