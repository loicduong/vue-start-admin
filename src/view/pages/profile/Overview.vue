<script setup lang="ts">
import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumbs/breadcrumb'
import FeedsWidget1 from '@/view/content/widgets/feeds/Widget1.vue'
import FeedsWidget2 from '@/view/content/widgets/feeds/Widget2.vue'
import FeedsWidget3 from '@/view/content/widgets/feeds/Widget3.vue'
import FeedsWidget4 from '@/view/content/widgets/feeds/Widget4.vue'
import ListWidget2 from '@/view/content/widgets/list/Widget2.vue'
import MixedWidget1 from '@/view/content/widgets/mixed/Widget1.vue'
import TablesWidget4 from '@/view/content/widgets/tables/Widget3.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageBreadcrumbs('Profile', 'Profile Overview')
})
</script>

<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-xl-6">
      <FeedsWidget1 />
      <FeedsWidget2 />
      <FeedsWidget3 />
      <FeedsWidget4 />
    </div>
    <div class="col-xl-6">
      <TablesWidget4 />
      <MixedWidget1 />
      <ListWidget2 />
    </div>
  </div>
</template>
