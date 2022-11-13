// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ],
  imports: {
    dirs: ['stores']
  },
  routeRules: {
    '/spa': { ssr: false },
    '/static': { static: true },
    '/swr': { swr: true }
  }
})
