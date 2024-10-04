<script setup lang="ts">
import { MenuComponent } from '@/assets/ts/components/MenuComponent'
import { onMounted } from 'vue'

defineOptions({
  name: 'Dropdown2',
})

onMounted(() => {
  // Lazy Initialization
  MenuComponent.reinitialization()
})
</script>

<template>
  <!-- begin::Menu -->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded fw-bold menu-title-gray-800 menu-hover-bg menu-state-title-primary w-250px w-md-300px"
    data-kt-menu="true"
  >
    <div class="menu-item mx-3">
      <div class="menu-content fs-6 text-dark fw-bolder py-6">
        4 New Notifications
      </div>
    </div>

    <div class="separator mb-3" />

    <div class="menu-item mx-3">
      <RouterLink to="/" class="menu-link px-4 py-3">
        <div class="symbol symbol-35px">
          <span class="symbol-label bg-light-info">
            <span class="svg-icon svg-icon-3 svg-icon-info">
              <InlineSvg src="/media/icons/duotone/Home/Library.svg" />
            </span>
          </span>
        </div>

        <div class="ps-4">
          <span class="menu-title fw-bold mb-1">New Uer Library Added</span>
          <span class="text-muted fw-bold d-block fs-7">3 Hours ago</span>
        </div>
      </RouterLink>
    </div>

    <div class="menu-item mx-3">
      <RouterLink to="/" class="menu-link px-4 py-3">
        <div class="symbol symbol-35px">
          <span class="symbol-label bg-light-warning">
            <span class="svg-icon svg-icon-3 svg-icon-warning">
              <InlineSvg src="/media/icons/duotone/Devices/Mic.svg" />
            </span>
          </span>
        </div>
        <div class="ps-4">
          <span class="menu-title fw-bold mb-1">Clean Microphone</span>
          <span class="text-muted fw-bold d-block fs-7">5 Hours ago</span>
        </div>
      </RouterLink>
    </div>

    <div class="menu-item mx-3">
      <RouterLink to="/settings" class="menu-link px-4 py-3">
        <div class="symbol symbol-35px">
          <span class="symbol-label bg-light-primary">
            <span class="svg-icon svg-icon-3 svg-icon-primary">
              <InlineSvg src="/media/icons/duotone/Communication/Group-chat.svg" />
            </span>
          </span>
        </div>

        <div class="ps-4">
          <span class="menu-title fw-bold mb-1">Quick Chat Created</span>
          <span class="text-muted fw-bold d-block fs-7">A Day ago</span>
        </div>
      </RouterLink>
    </div>

    <div class="menu-item mx-3">
      <RouterLink to="/settings" class="menu-link px-4 py-3">
        <div class="symbol symbol-35px">
          <span class="symbol-label bg-light-danger">
            <span class="svg-icon svg-icon-3 svg-icon-danger">
              <InlineSvg src="/media/icons/duotone/General/Attachment2.svg" />
            </span>
          </span>
        </div>

        <div class="ps-4">
          <span class="menu-title fw-bold mb-1">32 New Attachements</span>
          <span class="text-muted fw-bold d-block fs-7">2 Day ago</span>
        </div>
      </RouterLink>
    </div>

    <div class="separator mt-3" />

    <div class="menu-item mx-2">
      <div class="menu-content py-5">
        <RouterLink to="/" class="btn btn-primary fw-bolder me-2 px-5">
          Report
        </RouterLink>
        <RouterLink to="/" class="btn btn-light fw-bolder px-5">
          Reset
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- end::Menu -->
</template>
