<script lang="ts" setup>
import { Movie, MovieResponse } from '~~/types'

const searchQuery = ref('batman')
const movies = ref<Movie[]>([])

const search = async () => {
  const { Search } = await $fetch<MovieResponse>(
    `http://www.omdbapi.com/?apikey=3484716c&s=${searchQuery.value}`
  )
  movies.value = Search
}
search()
</script>

<template>
  <form @submit.prevent="search">
    <input
      v-model="searchQuery"
      type="text"
    />
    <button>Search</button>
  </form>

  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li
      v-for="movie in movies"
      :key="movie.imdbID"
    >
      <NuxtLink :to="`/movies/${movie.imdbID}`">
        <img
          :src="movie.Poster"
          :alt="movie.Title"
        />
      </NuxtLink>
    </li>
  </ul>
</template>
