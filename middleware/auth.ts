export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser()

  if (!user.isLoggedIn) return navigateTo('/login')
})
