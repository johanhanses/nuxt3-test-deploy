<script setup lang="ts">
const route = useRoute()

const message = computed(
  () =>
    `I am on team ${route.params.teamSlug} and my id is: ${route.params.userId}`
)
</script>

<template>
  <p>
    {{ message }}
  </p>
</template>
