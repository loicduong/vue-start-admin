import { useBodyStore } from '@/store/modules/BodyModule'

/**
 * Enables loader
 * @param {number} delay loading time in milliseconds
 */
export function loading(delay: number): void {
  const bodyStore = useBodyStore()
  // Add loading class to body
  bodyStore.addBodyClassName('page-loading')

  // Simulate the delay page loading
  setTimeout(() => {
    // Remove page loader after some time
    bodyStore.removeBodyClassName('page-loading')
  }, delay)
}
