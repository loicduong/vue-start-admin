<script setup lang="ts">
import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumbs/breadcrumb'
import GeneralWidget1 from '@/view/content/widgets/general/Widget1.vue'
import ListWidget9 from '@/view/content/widgets/list/Widget9.vue'
import StatsWidget1 from '@/view/content/widgets/stats/Widget1.vue'
import StatsWidget2 from '@/view/content/widgets/stats/Widget2.vue'
import TableWidget1 from '@/view/content/widgets/tables/Widget1.vue'
import TableWidget2 from '@/view/content/widgets/tables/Widget2.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageBreadcrumbs('Dashboards', 'Start')
})
</script>

<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-xl-4">
      <GeneralWidget1 />
    </div>
    <div class="col-xl-8">
      <TableWidget1 />
    </div>
  </div>

  <div class="row g-5 g-xxl-8">
    <div class="col-xl-4">
      <StatsWidget1 />
    </div>
    <div class="col-xl-8">
      <StatsWidget2 />
    </div>
  </div>

  <div class="row g-5 g-xxl-8">
    <div class="col-xl-4">
      <ListWidget9 />
    </div>
    <div class="col-xl-8">
      <TableWidget2 />
    </div>
  </div>
</template>
