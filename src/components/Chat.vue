<script lang="ts" setup>
import Message from '../components/Message.vue'

const props = defineProps({
    userId: Number,
    group: Boolean,
    messages: Object,
    members: Object,
    name: String,
    image: String,
    description: String
})

const findMemberById = id => props.members?.find(member => member.id === id)

</script>

<template>
    <div class="h-full flex flex-col overflow-hidden">
        <div>
            <div class="border-black rounded-t-2xl border-b-0 border-solid p-6 shadow-soft-3xl">
                <div class="flex flex-wrap -mx-3">
                    <div class="w-full max-w-full px-3 shrink-0">

                        <div class="flex items-center">
                            <slot name="header"></slot>
                            <img :src="image" :alt="name"
                                class="inline-flex items-center justify-center w-12 h-12 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                            <div class="ml-4">
                                <h6 class="block mb-0">{{ name }}</h6>
                                <span class="leading-normal text-sm opacity-80 text-slate-700">{{ description }}</span>
                            </div>
                            <div class="flex gap-3 grow align-items-end justify-end mr-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round"
                                            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grow overflow-y-auto overflow-hidden">
            <!-- Chat Messages Container -->
            <div class="flex flex-col p-4 place-content-end content-end ">
                <!-- Individual Messages -->
                <Message v-for="message in messages" :user="findMemberById(message.author)" :msg="message.content"
                    :right="userId === message.author" :group="group" />
            </div>
        </div>

        <!-- Message Input Area -->
        <div class="p-4">
            <div class="flex gap-2">
                <button class="p-2 bg-blue-500 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
                <input type="text" class="flex-1 p-2 border rounded" placeholder="Type a message..." />
                <button class="p-2 bg-blue-500 text-white rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>

                </button>
            </div>
        </div>
    </div>
</template>

<style>
.shadow-soft-3xl {
    --tw-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, .15), 0 8px 9px -5px hsla(0, 0%, 8%, .06);
    --tw-shadow-colored: 0 8px 26px -4px var(--tw-shadow-color), 0 8px 9px -5px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>