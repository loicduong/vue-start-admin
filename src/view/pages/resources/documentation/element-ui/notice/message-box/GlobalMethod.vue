<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <div class="mb-10">
    <!-- begin::Heading -->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#global-method" />
      Global method
    </h2>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      If Element Plus is fully imported, it will add the following global
      methods for <code>app.config.globalProperties</code>:
      <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> and
      <code>$prompt</code>. So in a Vue instance you can call
      <code>MessageBox</code> like what we did in this page. The parameters are:
    </div>
    <!-- end::Block -->

    <div class="rounded border p-10">
      <ul>
        <li><code>$msgbox(options)</code></li>
        <li>
          <code>$alert(message, title, options)</code> or
          <code>$alert(message, options)</code>
        </li>
        <li>
          <code>$confirm(message, title, options)</code> or
          <code>$confirm(message, options)</code>
        </li>
        <li>
          <code>$$prompt(message, title, options)</code> or
          <code>$prompt(message, options)</code>
        </li>
      </ul>

      <CodeHighlighter lang="html">
        {{}}
      </CodeHighlighter>
    </div>
  </div>
</template>
́
