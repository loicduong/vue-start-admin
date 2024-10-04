import { useBreadcrumbsStore } from '@/store/modules/BreadcrumbsModule'

/**
 * Sets current page breadcrumbs
 * @param {string} section Current page section name
 * @param {string} title Current page title name
 */
export function setCurrentPageBreadcrumbs(section: string, title: string): void {
  const breadcrumbsStore = useBreadcrumbsStore()

  breadcrumbsStore.setBreadcrumbAction({
    section,
    title,
  })
}

/**
 * Sets current page breadcrumbs
 * @param {string} title Current page title name
 */
export function setCurrentPageTitle(title: string): void {
  const breadcrumbsStore = useBreadcrumbsStore()

  breadcrumbsStore.setBreadcrumbAction({
    title,
  })
}
