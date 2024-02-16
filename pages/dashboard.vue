<script lang="ts" setup>

import {definePageMeta} from "#imports";

definePageMeta({
  middleware: ['auth']
})

</script>

<template>
  <div>
    Page: dashboard
  </div>
</template>

<style scoped></style>
