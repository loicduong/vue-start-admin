<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUIBasicTable from '@/view/pages/resources/documentation/element-ui/data/table/BasicTable.vue'
import EUICustomColumnTemplate from '@/view/pages/resources/documentation/element-ui/data/table/CustomColumnTemplate.vue'
import EUICustomIndex from '@/view/pages/resources/documentation/element-ui/data/table/CustomIndex.vue'
import EUIExpandableRow from '@/view/pages/resources/documentation/element-ui/data/table/ExpandableRow.vue'
import EUIFilter from '@/view/pages/resources/documentation/element-ui/data/table/Filter.vue'
import EUIFluidHeightTableWithFixedHeaderAndColumns from '@/view/pages/resources/documentation/element-ui/data/table/FluidHeightTableWithFixedHeaderAndColumns.vue'
import EUIGroupingTableHead from '@/view/pages/resources/documentation/element-ui/data/table/GroupingTableHead.vue'
import EUIMultipleSelect from '@/view/pages/resources/documentation/element-ui/data/table/MultipleSelect.vue'
import EUIRowspanAndColspan from '@/view/pages/resources/documentation/element-ui/data/table/RowspanAndColspan.vue'
import EUISingleSelect from '@/view/pages/resources/documentation/element-ui/data/table/SingleSelect.vue'
import EUISorting from '@/view/pages/resources/documentation/element-ui/data/table/Sorting.vue'
import EUIStripedTable from '@/view/pages/resources/documentation/element-ui/data/table/StripedTable.vue'
import EUISummaryRow from '@/view/pages/resources/documentation/element-ui/data/table/SummaryRow.vue'
import EUITableWithBorder from '@/view/pages/resources/documentation/element-ui/data/table/TableWithBorder.vue'
import EUITableWithCustomHeader from '@/view/pages/resources/documentation/element-ui/data/table/TableWithCustomHeader.vue'
import EUITableWithFixedColumn from '@/view/pages/resources/documentation/element-ui/data/table/TableWithFixedColumn.vue'
import EUITableWithFixedColumnsAndHeader from '@/view/pages/resources/documentation/element-ui/data/table/TableWithFixedColumnsAndHeader.vue'
import EUITableWithFixedHeader from '@/view/pages/resources/documentation/element-ui/data/table/TableWithFixedHeader.vue'
import EUITableWithStatus from '@/view/pages/resources/documentation/element-ui/data/table/TableWithStatus.vue'
import EUITreeDataAndLazyMode from '@/view/pages/resources/documentation/element-ui/data/table/TreeDataAndLazyMode.vue'

setCurrentPageTitle('Table')
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#table" />
      Table
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Display multiple data with similar format. You can sort, filter, compare
      your data in a table.
    </div>
    <!-- end::Block -->
  </div>
  <EUIBasicTable />
  <EUIStripedTable />
  <EUITableWithBorder />
  <EUITableWithStatus />
  <EUITableWithFixedHeader />
  <EUITableWithFixedColumn />
  <EUITableWithFixedColumnsAndHeader />
  <EUIFluidHeightTableWithFixedHeaderAndColumns />
  <EUIGroupingTableHead />
  <EUISingleSelect />
  <EUIMultipleSelect />
  <EUISorting />
  <EUIFilter />
  <EUICustomColumnTemplate />
  <EUITableWithCustomHeader />
  <EUIExpandableRow />
  <EUITreeDataAndLazyMode />
  <EUISummaryRow />
  <EUIRowspanAndColspan />
  <EUICustomIndex />
</template>
