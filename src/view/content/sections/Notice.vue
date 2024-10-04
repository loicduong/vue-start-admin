<script setup lang="ts">
defineOptions({
  name: 'Notice',
})
</script>

<template>
  <!-- begin::Information -->
  <div class="d-flex align-items-center rounded py-4 px-4 bg-light-info">
    <!-- begin::Icon -->
    <div class="d-flex h-80px w-80px flex-shrink-0 flex-center position-relative ms-5 me-8">
      <span class="svg-icon position-absolute opacity-5">
        <InlineSvg class="w-80px h-80px" src="/media/icons/duotone/Layout/Layout-polygon.svg" />
      </span>
      <span class="svg-icon svg-icon-3x svg-icon-info position-absolute">
        <InlineSvg src="/media/icons/duotone/Tools/Compass.svg" />
      </span>
    </div>
    <!-- end::Icon -->
    <!-- begin::Description -->
    <div class="text-gray-600 fw-bold fs-5">
      <slot />
    </div>
    <!-- end::Description -->
  </div>
  <!-- end::Information -->
</template>
