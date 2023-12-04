<script setup>
const props = defineProps({
  link: String
})

</script>
<template>
    <!-- Embed -->
    <div class="pt-[56.25%] w-full relative overflow-hidden rounded">
        <iframe class="h-full w-full absolute top-0 left-0 right-0 bottom-0" :src="link" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
