<script setup>
import Embed from './Embed.vue'
const props = defineProps({
  color: String,  
  msg: String,
})

function createYouTubeEmbedLink(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        // Create an iframe with the embedded YouTube video
        return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${match[2]}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        // Return a message or null if the URL is not a valid YouTube URL
        return 'Invalid YouTube URL';
    }
}

// Example usage:
const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const embedCode = createYouTubeEmbedLink(url);


</script>
<template>
    <!-- Message Bubble -->
    <div :class="`${color ? color : 'bg-blue-200'} p-3 rounded max-w-max text-xl`">
      {{msg}}
      <Embed />
    </div>
</template>
