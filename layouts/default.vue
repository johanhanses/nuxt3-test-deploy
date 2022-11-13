<script setup lang="ts">
const user = useUser()
</script>

<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
    <NuxtLink to="/admin">Admin</NuxtLink>
    <NuxtLink to="/spa">SPA</NuxtLink>
    <NuxtLink to="/ssr">SSR</NuxtLink>
    <NuxtLink to="/swr">SWR</NuxtLink>
    <NuxtLink to="/static">Static</NuxtLink>
    <NuxtLink
      to="/login"
      v-if="!user.isLoggedIn"
    >
      Login
    </NuxtLink>
    <a
      href="#"
      v-else
      @click.prevent="user.logout"
    >
      Logout
    </a>
  </nav>
  <slot />
</template>
