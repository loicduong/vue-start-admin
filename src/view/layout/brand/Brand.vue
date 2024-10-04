<script setup lang="ts">
import { toAbsoluteUrl } from '@/core/helpers/assets'

function siteLogo() {
  return toAbsoluteUrl('media/logos/logo-default.svg')
}
</script>

<template>
  <RouterLink to="/">
    <img :src="siteLogo()" class="h-30px" alt="Logo">
  </RouterLink>
</template>
