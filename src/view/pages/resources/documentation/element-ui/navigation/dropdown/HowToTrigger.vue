<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code3 } from './data'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#how-to-trigger" />
      How to trigger
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Click the triggering element or hover on it.
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ElRow class="block-col-2">
        <ElCol :span="8">
          <span class="demonstration">hover to trigger</span>
          <ElDropdown>
            <span class="el-dropdown-link">
              Dropdown List<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <template #dropdown>
              <ElDropdownMenu>
                <ElDropdownItem icon="el-icon-plus">
                  Action 1
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-circle-plus">
                  Action 2
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-circle-plus-outline">
                  Action 3
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-check">
                  Action 4
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-circle-check">
                  Action 5
                </ElDropdownItem>
              </ElDropdownMenu>
            </template>
          </ElDropdown>
        </ElCol>
        <ElCol :span="8">
          <span class="demonstration">click to trigger</span>
          <ElDropdown trigger="click">
            <span class="el-dropdown-link">
              Dropdown List<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <template #dropdown>
              <ElDropdownMenu>
                <ElDropdownItem icon="el-icon-plus">
                  Action 1
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-circle-plus">
                  Action 2
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-circle-plus-outline">
                  Action 3
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-check">
                  Action 4
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-circle-check">
                  Action 5
                </ElDropdownItem>
              </ElDropdownMenu>
            </template>
          </ElDropdown>
        </ElCol>
        <ElCol :span="8">
          <span class="demonstration">right click to trigger</span>
          <ElDropdown trigger="contextmenu">
            <span class="el-dropdown-link">
              Dropdown List<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <template #dropdown>
              <ElDropdownMenu>
                <ElDropdownItem icon="el-icon-plus">
                  Action 1
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-circle-plus">
                  Action 2
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-circle-plus-outline">
                  Action 3
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-check">
                  Action 4
                </ElDropdownItem>
                <ElDropdownItem icon="el-icon-circle-check">
                  Action 5
                </ElDropdownItem>
              </ElDropdownMenu>
            </template>
          </ElDropdown>
        </ElCol>
      </ElRow>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code3
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
