import type LayoutConfig from '@/core/config/LayoutConfigTypes'
import layoutConfig from '@/core/config/DefaultLayoutConfig'
import merge from 'deepmerge'
import objectPath from 'object-path'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref<LayoutConfig>(layoutConfig)
  const initial = ref<LayoutConfig>(layoutConfig)

  function getLayoutConfig(path: string, defaultValue?: unknown) {
    return objectPath.get(config.value, path, defaultValue)
  }

  function setLayoutConfig(payload: LayoutConfig) {
    config.value = payload
  }

  function resetLayoutConfig() {
    config.value = Object.assign({}, initial.value)
  }

  function overrideLayoutConfig() {
    config.value = initial.value = Object.assign(
      {},
      initial.value,
      JSON.parse(window.localStorage.getItem('config') || '{}'),
    )
  }

  function overridePageLayoutConfig(payload: LayoutConfig) {
    config.value = merge(config.value, payload)
  }

  return {
    config,
    initial,
    getLayoutConfig,
    setLayoutConfig,
    resetLayoutConfig,
    overrideLayoutConfig,
    overridePageLayoutConfig,
  }
})
