<script setup lang="ts">
import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumbs/breadcrumb'
import { themeName } from '@/core/helpers/documentation'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageBreadcrumbs('Resources', 'Changelog')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <!-- begin::Accordion -->
      <div id="kt_accordion_2" class="accordion accordion-flush accordion-icon-toggle">
        <!-- begin::Item -->
        <div class="mb-5">
          <!-- begin::Header -->
          <div class="accordion-header py-3 d-flex" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_1">
            <span class="accordion-icon">
              <span class="svg-icon svg-icon-3">
                <InlineSvg src="/media/icons/duotone/Navigation/Right-2.svg" />
              </span>
            </span>
            <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
              {{ themeName }} v1.0.0 - 11 June, 2021
            </h3>
          </div>
          <!-- end::Header -->

          <!-- begin::Body -->
          <div id="kt_accordion_2_item_1" class="fs-6 collapse ps-10 show" data-bs-parent="#kt_accordion_2">
            <ul class="py-2">
              <li class="py-2">
                Initial release.
              </li>
            </ul>
          </div>
          <!-- end::Body -->
        </div>
        <!-- end::Item -->
      </div>
      <!-- end::Accordion -->
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
