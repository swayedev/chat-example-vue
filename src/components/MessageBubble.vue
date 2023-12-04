<script setup>
const props = defineProps({
  color: String,  
  msg: String,
})
</script>
<template>
    <!-- Message Bubble -->
    <div :class="`${color ? color : 'bg-blue-200'} p-2 rounded max-w-xs`">
        {{msg}}
    </div>
</template>
