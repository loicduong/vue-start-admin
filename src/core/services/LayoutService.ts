import { displayAsidePrimary, displayAsideSecondary, displayToolbar } from '@/core/helpers/config'
import router from '@/router'
import { useBodyStore } from '@/store/modules/BodyModule'

class LayoutService {
  /**
   * @description initialize default layout
   */
  public static init(): void {
    LayoutService.initLayout()
    LayoutService.initHeader()
    LayoutService.initToolbar()
    LayoutService.initFooter()
  }

  /**
   * @description init layout without sidebar
   */
  public static initLayoutWithSidebar(): void {
    LayoutService.initSidebar()
    LayoutService.disableAside()
  }

  /**
   * @description init layout without aside
   */
  public static initLayoutWithAside(): void {
    LayoutService.initAside()
    LayoutService.disableSidebar()
  }

  /**
   * @description init layout
   */
  public static initLayout(): void {
    const bodyStore = useBodyStore()

    bodyStore.addBodyAttribute({
      qualifiedName: 'id',
      value: 'kt_body',
    })

    bodyStore.addBodyClassName('page-loading-enabled')

    bodyStore.addBodyClassName('page-loading')
  }

  /**
   * @description init header
   */
  public static initHeader(): void {
    const bodyStore = useBodyStore()

    bodyStore.addBodyClassName('header-fixed')

    bodyStore.addBodyClassName('header-tablet-and-mobile-fixed')
  }

  /**
   * @description init toolbar
   */
  public static initToolbar(): void {
    const bodyStore = useBodyStore()

    bodyStore.addBodyClassName('toolbar-enabled')
  }

  /**
   * @description init aside
   */
  public static initAside(): void {
    if (!router.currentRoute.value.meta.asideEnabled) {
      return
    }

    if (!displayAsidePrimary.value && !displayAsideSecondary.value) {
      return
    }

    // Enable Aside
    const bodyStore = useBodyStore()

    bodyStore.addBodyClassName('aside-enabled')

    // Aside Secondary
    if (displayAsideSecondary.value) {
      bodyStore.addBodyClassName('aside-secondary-enabled')
    }
    else {
      bodyStore.addBodyClassName('aside-secondary-disabled')
    }

    // Aside Secondary
    if (displayAsidePrimary.value) {
      bodyStore.addBodyClassName('aside-primary-enabled')
    }
    else {
      bodyStore.addBodyClassName('aside-primary-disabled')
    }

    // Fixed Aside
    bodyStore.addBodyClassName('aside-fixed')
  }

  /**
   * @description init sidebar
   */
  public static initSidebar(): void {
    // / Set Sidebar enabled class
    const bodyStore = useBodyStore()

    bodyStore.addBodyClassName('sidebar-enabled')

    // Set Sidebar shown status
    bodyStore.addBodyAttribute({
      qualifiedName: 'data-sidebar',
      value: 'on',
    })
  }

  /**
   * @description init footer
   */
  public static initFooter(): void {
    // Fixed footer
    const bodyStore = useBodyStore()

    bodyStore.addBodyClassName('footer-fixed')
  }

  /**
   * @description removes all body classes which aside requires
   */
  public static disableAside(): void {
    const bodyStore = useBodyStore()

    bodyStore.removeBodyClassName('aside-enabled')

    bodyStore.removeBodyClassName('aside-fixed')

    bodyStore.removeBodyClassName('aside-secondary-enabled')

    bodyStore.removeBodyClassName('aside-secondary-disabled')

    bodyStore.removeBodyClassName('aside-primary-enabled')

    bodyStore.removeBodyClassName('aside-primary-disabled')

    bodyStore.removeBodyClassName('aside-minimized')
  }

  /**
   * @description removes all body classes which sidebar requires
   */
  public static disableSidebar(): void {
    const bodyStore = useBodyStore()

    bodyStore.removeBodyAttribute('sidebar-enabled')

    bodyStore.addBodyAttribute({
      qualifiedName: 'data-sidebar',
      value: 'off',
    })
  }

  /**
   * @description initialize current page layout depending
   * on route meta and config
   */
  public static initCurrentRouteLayout(): void {
    // Init aside if it is enabled else init sidebar
    if (router.currentRoute.value.meta.asideEnabled) {
      this.initLayoutWithAside()
    }
    else {
      this.initLayoutWithSidebar()
    }

    const bodyStore = useBodyStore()

    // Add classes for body if toolbar is enabled
    if (displayToolbar.value) {
      bodyStore.addBodyClassName('toolbar-enabled')
    }
    else {
      bodyStore.removeBodyClassName('toolbar-enabled')
    }

    // Add classes for body if mobile header is fixed
    bodyStore.addBodyClassName('header-tablet-and-mobile-fixed')
  }
}

export default LayoutService
