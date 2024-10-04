<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import CardBorder from '@/view/pages/resources/documentation/base/cards/CardBorder.vue'
import CardScroll from '@/view/pages/resources/documentation/base/cards/CardScroll.vue'
import CardScretch from '@/view/pages/resources/documentation/base/cards/CardStretch.vue'
import CustomCard from '@/view/pages/resources/documentation/base/cards/CustomCard.vue'
import FlushBorders from '@/view/pages/resources/documentation/base/cards/FlushBorders.vue'
import Overview from '@/view/pages/resources/documentation/base/cards/Overview.vue'
import ResetSidePaddings from '@/view/pages/resources/documentation/base/cards/ResetSidePaddings.vue'
import UtilityClasses from '@/view/pages/resources/documentation/base/cards/UtilityClasses.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageTitle('Cards')
})
</script>

<template>
  <!-- begin::Card -->
  <div class="card">
    <!-- begin::Card Body -->
    <div class="card-body p-10 p-lg-15">
      <Overview />

      <CustomCard />

      <CardScroll />

      <FlushBorders />

      <ResetSidePaddings />

      <CardBorder />

      <CardScretch />

      <UtilityClasses />
    </div>
    <!-- end::Card Body -->
  </div>
  <!-- end::Card -->
</template>
