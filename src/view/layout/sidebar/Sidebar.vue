<script setup lang="ts">
import { DrawerComponent } from '@/assets/ts/components/_DrawerOptions'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  DrawerComponent.reinitialization()
})

function sidebarType() {
  return route.meta.sidebar
    ? `kt-sidebar-${route.meta.sidebar}`
    : 'kt-sidebar-general'
}

function isShop() {
  return route.meta.sidebar === 'shop'
}
</script>

<template>
  <!-- begin::Sidebar -->
  <div
    id="kt_sidebar"
    class="sidebar"
    :class="[isShop() && 'bg-white', !isShop() && 'bg-info']"
    data-kt-drawer="true"
    data-kt-drawer-name="sidebar"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '350px': '300px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_sidebar_toggler"
  >
    <!-- begin::Sidebar Content -->
    <div class="d-flex flex-column sidebar-body">
      <component :is="sidebarType()" />
    </div>
    <!-- end::Sidebar Content -->
  </div>
  <!-- end::Sidebar -->
</template>
