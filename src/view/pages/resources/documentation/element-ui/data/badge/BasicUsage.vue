<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code1 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#basic-usage" />
      Basic usage
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Displays the amount of new messages.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElBadge :value="12" class="item">
        <ElButton size="small">
          comments
        </ElButton>
      </ElBadge>
      <ElBadge :value="3" class="item">
        <ElButton size="small">
          replies
        </ElButton>
      </ElBadge>
      <ElBadge :value="1" class="item" type="primary">
        <ElButton size="small">
          comments
        </ElButton>
      </ElBadge>
      <ElBadge :value="2" class="item" type="warning">
        <ElButton size="small">
          replies
        </ElButton>
      </ElBadge>

      <ElDropdown trigger="click">
        <span class="el-dropdown-link">
          Click Me<i class="el-icon-caret-bottom el-icon--right" />
        </span>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem class="clearfix">
              comments
              <ElBadge class="mark" :value="12" />
            </ElDropdownItem>
            <ElDropdownItem class="clearfix">
              replies
              <ElBadge class="mark" :value="3" />
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
