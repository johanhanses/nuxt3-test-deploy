<script setup lang="ts">
import { Movie } from '~~/types'

const route = useRoute()

const { data, error } = await useFetch<Movie>(
  `http://www.omdbapi.com/?apikey=3484716c&i=${route.params.id}`,
  {
    pick: ['Plot', 'Title', 'Response', 'Poster'],
    key: `/movies/${route.params.id}`
  }
)

if (error.value) {
  console.error(error.value)
  throw createError({ statusCode: 500, statusMessage: 'MegaError' })
}
if (data.value?.Response !== 'True')
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

useHead({
  title: data.value.Title,
  meta: [
    { name: 'description', content: data.value.Plot },
    { property: 'og:description', content: data.value.Plot },
    { property: 'og:image', content: data.value.Poster },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<template>
  <pre>{{ data }}</pre>
</template>
