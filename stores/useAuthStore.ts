
interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}

interface Credentials {
    email: string;
    password: string;
}
export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const isLoggedIn = computed(() => !!user.value)

    async function fetchUser() {
        const {data, error} = await useApiFetch('api/user')
        user.value = data.value as User
    }
    async function login(credentials: Credentials) {
        await useApiFetch('sanctum/csrf-cookie')

        const login = await useApiFetch('api/login', {
            method: 'POST',
            body: credentials
        })


        await fetchUser()

        return login
    }

    async function logout() {
        await useApiFetch('api/logout', {
            method: 'POST'
        })
        user.value = null
        navigateTo('/login')
    }

    return {user, login, isLoggedIn, fetchUser, logout}
})