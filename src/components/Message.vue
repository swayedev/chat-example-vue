<script setup>
import MessageBubble from './MessageBubble.vue'
const props = defineProps({
  user: Object,
  msg: String,
  right: Boolean
})
</script>
<template>
    <div :class="`${right ? 'self-end' : ''} flex items-end mb-4`">
        <MessageBubble v-if="right" :msg="msg"/>
        <!-- User Avatar -->
        <img :src="user.avatar" :alt="user.name"
            :class="`${right ? 'ml-2' : 'mr-2'} w-10 h-10 rounded-full`"/>
        <MessageBubble v-if="!right" :msg="msg" color="bg-gray-200"/>
    </div>
</template>
