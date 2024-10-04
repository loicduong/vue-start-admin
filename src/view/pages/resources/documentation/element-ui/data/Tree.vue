<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIAccordion from '@/view/pages/resources/documentation/element-ui/data/tree/Accordion.vue'
import EUIBasicUsage from '@/view/pages/resources/documentation/element-ui/data/tree/BasicUsage.vue'
import EUICheckingTreeNodes from '@/view/pages/resources/documentation/element-ui/data/tree/CheckingTreeNodes.vue'
import EUICustomLeafNodeInLazyMode from '@/view/pages/resources/documentation/element-ui/data/tree/CustomLeafNodeInLazyMode.vue'
import EUICustomNodeContent from '@/view/pages/resources/documentation/element-ui/data/tree/CustomNodeContent.vue'
import EUIDefaultExpandedAndDefaultChecked from '@/view/pages/resources/documentation/element-ui/data/tree/DefaultExpandedAndDefaultChecked.vue'
import EUIDisabledCheckbox from '@/view/pages/resources/documentation/element-ui/data/tree/DisabledCheckbox.vue'
import EUIDraggable from '@/view/pages/resources/documentation/element-ui/data/tree/Draggable.vue'
import EUISelectable from '@/view/pages/resources/documentation/element-ui/data/tree/Selectable.vue'
import EUITreeNodeFiltering from '@/view/pages/resources/documentation/element-ui/data/tree/TreeNodeFiltering.vue'

setCurrentPageTitle('Tree')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#tree" />
      Tree
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Display a set of data with hierarchies.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicUsage />
  <EUISelectable />
  <EUICustomLeafNodeInLazyMode />
  <EUIDisabledCheckbox />
  <EUIDefaultExpandedAndDefaultChecked />
  <EUICheckingTreeNodes />
  <EUICustomNodeContent />
  <EUITreeNodeFiltering />
  <EUIAccordion />
  <EUIDraggable />
</template>
