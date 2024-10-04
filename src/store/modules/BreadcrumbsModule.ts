import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBreadcrumbsStore = defineStore('breadcrumbs', () => {
  const breadcrumbs = ref<Breadcrumb>()

  const pageTitle = () => breadcrumbs.value?.title

  const pageSection = () => breadcrumbs.value?.section

  const setBreadcrumbAction = (payload: Breadcrumb) => {
    breadcrumbs.value = payload
  }

  return {
    breadcrumbs,
    pageTitle,
    pageSection,
    setBreadcrumbAction,
  }
})
