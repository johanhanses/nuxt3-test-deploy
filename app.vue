<script setup lang="ts">
useHead({
  titleTemplate: (title) =>
    title ? `${title} - My movie site` : 'My movie site'
})
</script>

<template>
  <div style="padding: 5rem 5rem">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
