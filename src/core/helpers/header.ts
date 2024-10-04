import router from '@/router'
import { computed } from 'vue'

/**
 * Set header type
 * @returns {boolean}
 */
export const headerType = computed(() => {
  return (
    (router.currentRoute.value.fullPath as string).includes('light')
    || (router.currentRoute.value.fullPath as string).includes('extended')
  )
})

/**
 * Set display header menu button
 * @returns {boolean}
 */
export const headerTypeWithMenu = computed(() => {
  return (
    (router.currentRoute.value.fullPath as string).includes('compact')
  )
})

/**
 * Returns aside enabled meta propery
 * @returns {boolean}
 */
export const asideEnabled = computed(() => {
  return router.currentRoute.value.meta.asideEnabled
})
