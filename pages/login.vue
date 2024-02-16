<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: ['guest']
})

const form = ref<{email: string; password: string}>({
  email: 'cliente@gmail.com',
  password: 'cliente',
})

const auth = useAuthStore()
async function handleLogin() {
  const {error} = await auth.login(form.value)

  console.log(error)
}
</script>

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="form.email" />
      <input type="password" v-model="form.password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped></style>
