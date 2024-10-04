<script setup lang="ts">
import { DrawerComponent } from '@/assets/ts/components/_DrawerOptions'
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
  DrawerComponent.reinitialization()
})

onUpdated(() => {
  DrawerComponent.reinitialization()
})
</script>

<template>
  <RouterView />
</template>
