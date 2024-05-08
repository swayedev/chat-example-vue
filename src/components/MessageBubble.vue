<script lang="ts" setup>
import Embed from './Embed.vue'
const props = defineProps({
  color: String,
  msg: String,
})

let embed = false
let embedLink = ''
let hasImage = false
let msgImage = ''
embedLink = extractAndEmbedYouTubeLink()
if (embedLink) {
  embed = true
}
msgImage = createImageElementFromText()
if (msgImage) {
  hasImage = true
}

function extractAndEmbedYouTubeLink() {
  // Regular expression to match a YouTube URL
  const youtubeRegExp = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^\s&]+)/;
  const match = props.msg?.match(youtubeRegExp);

  if (match && match[1].length === 11) {
    // Create an iframe with the embedded YouTube video
    return `https://www.youtube.com/embed/${match[1]}`;
  } else {
    // Return a message or null if no valid YouTube URL is found
    return '';
  }
}

function createImageElementFromText() {
    // Regular expression to match image URLs (jpg, png, gif)
    const imageUrlRegExp = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
    const match = props.msg?.match(imageUrlRegExp);

    if (match) {
        return match[0];
    } else {
        return '';
    }
}

// Example usage:
// const textWithImageUrl = "Some random text https://media.tenor.com/E05AfL5sZ08AAAAC/goku-lol.gif more random text";

</script>
<template>
  <!-- Message Bubble -->
  <div :class="`${color ? color : 'bg-blue-200'} p-3 rounded max-w-max text-xl shadow-soft-xl`">
    <div class="break-all">
      {{ msg }}
    </div>
    <div>
     <img v-if="hasImage" :src="msgImage" class="h-full w-full"/> 
    </div>
    <Embed v-if="embed" :link="embedLink" />
  </div>
</template>

<style>
.shadow-soft-xl {
  --tw-shadow: 0 20px 27px 0 rgba(0, 0, 0, .05);
  --tw-shadow-colored: 0 20px 27px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>