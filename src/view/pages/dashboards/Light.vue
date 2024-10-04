<script setup lang="ts">
import { DrawerComponent } from '@/assets/ts/components/_DrawerOptions'
import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumbs/breadcrumb'
import StatsWidget1 from '@/view/content/widgets/stats/Widget1.vue'
import StatsWidget2 from '@/view/content/widgets/stats/Widget2.vue'
import StatsWidget3 from '@/view/content/widgets/stats/Widget3.vue'
import StatsWidget4 from '@/view/content/widgets/stats/Widget4.vue'
import StatsWidget5 from '@/view/content/widgets/stats/Widget5.vue'
import StatsWidget6 from '@/view/content/widgets/stats/Widget6.vue'
import StatsWidget7 from '@/view/content/widgets/stats/Widget7.vue'
import StatsWidget8 from '@/view/content/widgets/stats/Widget8.vue'
import StatsWidget9 from '@/view/content/widgets/stats/Widget9.vue'
import TableWidget2 from '@/view/content/widgets/tables/Widget2.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageBreadcrumbs('Dashboards', 'Light')
  DrawerComponent.reinitialization()
})
</script>

<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-xl-4">
      <StatsWidget3 />
    </div>
    <div class="col-xl-4">
      <StatsWidget4 />
    </div>
    <div class="col-xl-4">
      <StatsWidget5 />
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
      <StatsWidget6 />
    </div>
    <div class="col-xxl-8">
      <StatsWidget7 />
    </div>
  </div>

  <div class="row g-5 g-xxl-8">
    <div class="col-xl-4">
      <div class="row">
        <div class="col-12">
          <StatsWidget8 />
        </div>
        <div class="col-12">
          <StatsWidget9 />
        </div>
      </div>
    </div>
    <div class="col-xl-8">
      <TableWidget2 />
    </div>
  </div>
</template>
