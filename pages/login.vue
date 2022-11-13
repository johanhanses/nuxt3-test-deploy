<script setup lang="ts">
const user = useUser()

definePageMeta({
  layout: 'plain'
})
</script>

<template>
  <form @submit.prevent="user.login">
    <h1>Login</h1>
    <label> Username <input type="text" /></label>
    <label>Password <input type="password" /></label>
    <button>Login</button>
  </form>
  <NuxtLink to="/">Home</NuxtLink>
</template>
