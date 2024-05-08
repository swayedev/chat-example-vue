<script lang="ts" setup>
import { useUserStore } from '../stores/user.store'

const user = useUserStore()

</script>

<template>
  <!-- List of chats -->
  <!-- Friends list -->
  <!-- search feature -->
  <!-- user settings -->
  <!-- application settings -->
  <div class="flex flex-col h-full w-full">
    <div class="fixed h-14">
      Navigation / Header
    </div>
    <div class="grow pt-14">
      Dashboard
      <h1 class="text-3xl font-bold underline">
        Hello {{ user.name }}
      </h1>
    </div>
    <div>
      Footer
    </div>
  </div>
</template>