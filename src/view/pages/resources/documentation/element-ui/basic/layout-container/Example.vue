<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code2 } from '@/view/pages/resources/documentation/element-ui/basic/layout-container/code'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}

const tableData = Array.from({ length: 20 }).fill(item)
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#example" />
      Example
    </h1>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <ElContainer style="height: 500px; border: 1px solid #eee">
        <ElAside width="200px" style="background-color: rgb(238, 241, 246)">
          <ElMenu :default-openeds="['1', '3']">
            <ElSubmenu index="1">
              <template #title>
                <i class="el-icon-message" />Navigator One
              </template>
              <ElMenuItemGroup>
                <template #title>
                  Group 1
                </template>
                <ElMenuItem index="1-1">
                  Option 1
                </ElMenuItem>
                <ElMenuItem index="1-2">
                  Option 2
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElMenuItemGroup title="Group 2">
                <ElMenuItem index="1-3">
                  Option 3
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElSubmenu index="1-4">
                <template #title>
                  Option4
                </template>
                <ElMenuItem index="1-4-1">
                  Option 4-1
                </ElMenuItem>
              </ElSubmenu>
            </ElSubmenu>
            <ElSubmenu index="2">
              <template #title>
                <i class="el-icon-menu" />Navigator Two
              </template>
              <ElMenuItemGroup>
                <template #title>
                  Group 1
                </template>
                <ElMenuItem index="2-1">
                  Option 1
                </ElMenuItem>
                <ElMenuItem index="2-2">
                  Option 2
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElMenuItemGroup title="Group 2">
                <ElMenuItem index="2-3">
                  Option 3
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElSubmenu index="2-4">
                <template #title>
                  Option 4
                </template>
                <ElMenuItem index="2-4-1">
                  Option 4-1
                </ElMenuItem>
              </ElSubmenu>
            </ElSubmenu>
            <ElSubmenu index="3">
              <template #title>
                <i class="el-icon-setting" />Navigator Three
              </template>
              <ElMenuItemGroup>
                <template #title>
                  Group 1
                </template>
                <ElMenuItem index="3-1">
                  Option 1
                </ElMenuItem>
                <ElMenuItem index="3-2">
                  Option 2
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElMenuItemGroup title="Group 2">
                <ElMenuItem index="3-3">
                  Option 3
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElSubmenu index="3-4">
                <template #title>
                  Option 4
                </template>
                <ElMenuItem index="3-4-1">
                  Option 4-1
                </ElMenuItem>
              </ElSubmenu>
            </ElSubmenu>
          </ElMenu>
        </ElAside>

        <ElContainer>
          <ElHeader style="text-align: right; font-size: 12px">
            <ElDropdown>
              <i class="el-icon-setting" style="margin-right: 15px" />
              <template #dropdown>
                <ElDropdownMenu>
                  <ElDropdownItem>View</ElDropdownItem>
                  <ElDropdownItem>Add</ElDropdownItem>
                  <ElDropdownItem>Delete</ElDropdownItem>
                </ElDropdownMenu>
              </template>
            </ElDropdown>
            <span>Tom</span>
          </ElHeader>

          <ElMain>
            <ElTable :data="tableData">
              <ElTableColumn prop="date" label="Date" width="140" />
              <ElTableColumn prop="name" label="Name" width="120" />
              <ElTableColumn prop="address" label="Address" />
            </ElTable>
          </ElMain>
        </ElContainer>
      </ElContainer>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code2
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
