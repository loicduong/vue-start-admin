<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
import { code1 } from '@/view/pages/resources/documentation/element-ui/basic/layout-container/code'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#common-layout" />
      Common Layout
    </h1>
    <!-- end::Heading -->

    <div class="rounded border p-10">
      <div class="common-layout">
        <ElContainer>
          <ElHeader>Header</ElHeader>
          <ElMain>Main</ElMain>
        </ElContainer>

        <ElContainer>
          <ElHeader>Header</ElHeader>
          <ElMain>Main</ElMain>
          <ElFooter>Footer</ElFooter>
        </ElContainer>

        <ElContainer>
          <ElAside width="200px">
            Aside
          </ElAside>
          <ElMain>Main</ElMain>
        </ElContainer>

        <ElContainer>
          <ElHeader>Header</ElHeader>
          <ElContainer>
            <ElAside width="200px">
              Aside
            </ElAside>
            <ElMain>Main</ElMain>
          </ElContainer>
        </ElContainer>

        <ElContainer>
          <ElHeader>Header</ElHeader>
          <ElContainer>
            <ElAside width="200px">
              Aside
            </ElAside>
            <ElContainer>
              <ElMain>Main</ElMain>
              <ElFooter>Footer</ElFooter>
            </ElContainer>
          </ElContainer>
        </ElContainer>

        <ElContainer>
          <ElAside width="200px">
            Aside
          </ElAside>
          <ElContainer>
            <ElHeader>Header</ElHeader>
            <ElMain>Main</ElMain>
          </ElContainer>
        </ElContainer>

        <ElContainer>
          <ElAside width="200px">
            Aside
          </ElAside>
          <ElContainer>
            <ElHeader>Header</ElHeader>
            <ElMain>Main</ElMain>
            <ElFooter>Footer</ElFooter>
          </ElContainer>
        </ElContainer>
      </div>

      <CodeHighlighter :field-height="400" lang="html">
        {{
          code1
        }}
      </CodeHighlighter>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
