import router from '@/router/index'
import { computed } from 'vue'

/**
 * Set the sidebar display
 * @returns {boolean}
 */
export const displaySidebar = computed(() => {
  return !router.currentRoute.value.meta.asideEnabled
})

/**
 * Set the aside display
 * @returns {boolean}
 */
export const displayAside = computed(() => {
  return router.currentRoute.value.meta.asideEnabled
})

/**
 * Set the toolbar display
 * @returns {boolean}
 */
export const displayToolbar = computed(() => {
  return (
    !(router.currentRoute.value.fullPath as string).includes('dashboards')
  )
})

/**
 * Set the aside primary display
 * @returns {boolean}
 */
export const displayAsidePrimary = computed(() => {
  return !router.currentRoute.value.meta.asidePrimaryDisabled
})

/**
 * Set the aside secondary display
 * @returns {boolean}
 */
export const displayAsideSecondary = computed(() => {
  return !router.currentRoute.value.meta.asideSecondaryDisabled
})
