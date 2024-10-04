<script setup lang="ts">
defineOptions({
  name: 'Info',
})
</script>

<template>
  <div class="py-5">
    <!-- begin::Information -->
    <div class="d-flex align-items-center rounded py-5 px-5 bg-light-warning">
      <!-- begin::Icon -->
      <!-- begin::Svg Icon | path: '.svg/icons/Code/Info-circle.svg.' -->
      <span class="svg-icon svg-icon-3x svg-icon-warning me-5">
        <InlineSvg src="/media/icons/duotone/Code/Info-circle.svg" />
      </span>
      <!-- end::Svg Icon -->
      <!-- end::Icon -->
      <!-- begin::Description -->
      <div class="text-gray-600 fw-bold fs-5">
        <slot />
      </div>
      <!-- end::Description -->
    </div>
    <!-- end::Information -->
  </div>
</template>
