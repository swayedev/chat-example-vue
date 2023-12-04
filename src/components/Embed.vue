<script setup>
// const props = defineProps({
//   color: String,  
//   msg: String,
// })

// function createYouTubeEmbedLink(url) {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
//     const match = url.match(regExp);

//     if (match && match[2].length === 11) {
//         // Create an iframe with the embedded YouTube video
//         return ``;
//     } else {
//         // Return a message or null if the URL is not a valid YouTube URL
//         return 'Invalid YouTube URL';
//     }
// }

// // Example usage:
// const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// const embedCode = createYouTubeEmbedLink(url);


</script>
<template>
    <!-- Embed -->
    <div class="pt-[56.25%] w-full relative overflow-hidden">
        <iframe class="h-full w-full absolute top-0 left-0 right-0 bottom-0" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
