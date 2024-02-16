<script lang="ts" setup>
const auth = useAuthStore()


async function handleLogout() {
  await auth.logout()
}
</script>

<template>
  <div>
    <button v-if="auth.isLoggedIn" @click="handleLogout">Logout</button>
    <pre>{{auth.user}}</pre>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/login">Login</nuxt-link>
      </li>
    </ul>
    <slot />
  </div>
</template>

<style scoped></style>
