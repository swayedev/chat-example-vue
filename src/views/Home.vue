<script setup>
import { useUserStore } from '../stores/user.store'

const user = useUserStore()

</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello {{ user.name }}
  </h1>
</template>