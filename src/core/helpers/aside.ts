import DocMenuConfig from '@/core/config/DocMenuConfig'
import { computed } from 'vue'
/*
TIP: To start with clean menu update the config path to @/core/config/MainMenuCleanConfig".
 */
import MainMenuConfig from '@/core/config/MainMenuConfig'
import router from '@/router'

/**
 * Returns current route actual aside menu config
 * @returns {object}
 */
export const asideMenu = computed(() => {
  return !router.currentRoute.value.path.includes('documentation')
    ? MainMenuConfig
    : DocMenuConfig
})
