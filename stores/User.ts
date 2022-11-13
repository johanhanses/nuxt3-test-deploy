export const useUser = defineStore('user', {
  state: () => ({
    isLoggedIn: false
  }),
  getters: {},
  actions: {
    login() {
      this.isLoggedIn = true
      useRouter().push('/')
    },
    logout() {
      this.isLoggedIn = false
    }
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
