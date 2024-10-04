<script setup lang="ts">
import { MenuComponent } from '@/assets/ts/components/MenuComponent'
import {
  displayAside,
  displaySidebar,
  displayToolbar,
} from '@/core/helpers/config'
import { loading } from '@/core/helpers/loader'
import LayoutService from '@/core/services/LayoutService'
import { useBodyStore } from '@/store/modules/BodyModule'
import { useBreadcrumbsStore } from '@/store/modules/BreadcrumbsModule'
import KTDrawerMessenger from '@/view/content/extras/DrawerMessenger.vue'
import KTUpgradeToPro from '@/view/content/extras/UpgradeToPro.vue'
import KTLoader from '@/view/content/Loader.vue'
import KTCreateApp from '@/view/content/modals/CreateAppModal.vue'
import KTAside from '@/view/layout/aside/Aside.vue'
import KTMenuModal from '@/view/layout/extras/MenuModal.vue'
import KTScrollTop from '@/view/layout/extras/ScrollTop.vue'
import KTSearchModal from '@/view/layout/extras/SearchModal.vue'
import KTFooter from '@/view/layout/footer/Footer.vue'
import KTHeader from '@/view/layout/header/Header.vue'
import KTSidebar from '@/view/layout/sidebar/Sidebar.vue'
import KTToolbar from '@/view/layout/toolbar/Toolbar.vue'
import { computed, onMounted, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const breadcrumbsStore = useBreadcrumbsStore()
const bodyStore = useBodyStore()
const route = useRoute()

const breadcrumbs = computed(() => {
  return breadcrumbsStore.breadcrumbs
})

const pageSection = computed(() => {
  return breadcrumbsStore.pageSection()
})

const pageTitle = computed(() => {
  return breadcrumbsStore.pageTitle()
})

// show page loading
bodyStore.addBodyClassName('page-loading')

onMounted(() => {
  LayoutService.initCurrentRouteLayout()

  // Simulate the delay page loading
  setTimeout(() => {
    // Remove page loader after some time
    bodyStore.removeBodyClassName('page-loading')
  }, 1000)
})

watch(
  () => route.path,
  () => {
    MenuComponent.hideDropdowns(undefined)
    LayoutService.initCurrentRouteLayout()
  },
)

watch(
  () => route.meta.asideEnabled,
  (from, to) => {
    if (!to) {
      loading(500)
    }
  },
)
</script>

<template>
  <KTLoader />
  <div class="page d-flex flex-row flex-column-fluid">
    <KTAside v-if="displayAside" />
    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader :title="pageTitle" />
      <div class="d-flex flex-column flex-column-fluid">
        <KTToolbar
          v-if="displayToolbar"
          :breadcrumbs="breadcrumbs"
          :title="pageTitle"
          :section="pageSection"
        />
        <div
          id="kt_content"
          class="content fs-6 d-flex flex-column-fluid container"
        >
          <div class="container">
            <RouterView />
          </div>
        </div>
      </div>
      <KTFooter />
    </div>
  </div>
  <KTSidebar v-if="displaySidebar" />
  <KTScrollTop />
  <KTMenuModal />
  <KTSearchModal />
  <KTCreateApp />
  <KTUpgradeToPro />
  <KTDrawerMessenger />
</template>
