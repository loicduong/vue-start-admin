<script setup lang="ts">
import { useCopyClipboard } from '@/core/helpers/documentation'
import Prism from 'prismjs'
import { onMounted } from 'vue'

defineOptions({
  name: 'CodeHighlighter2',
})

const { init } = useCopyClipboard()

onMounted(() => {
  Prism.highlightAll()
  init()
})

function id() {
  return Math.random()
    .toString(36)
    .substr(2, 9)
}

const htmlId = id()
const jsId = id()
</script>

<template>
  <div class="py-5">
    <div class="highlight">
      <button class="highlight-copy btn" data-bs-toggle="tooltip" title="Copy code">
        copy
      </button>
      <ul class="nav nav-pills" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            data-bs-toggle="tab"
            :href="`#kt_highlight_${htmlId}`"
            role="tab"
            aria-selected="true"
          >HTML</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            :href="`#kt_highlight_${jsId}`"
            role="tab"
            aria-selected="false"
          >JAVASCRIPT</a>
        </li>
      </ul>
      <div class="tab-content">
        <div :id="`kt_highlight_${htmlId}`" class="tab-pane fade active show" role="tabpanel">
          <div class="highlight-code">
            <pre class="language-html"><code class="language-html"><slot name="html" /></code></pre>
          </div>
        </div>
        <div :id="`kt_highlight_${jsId}`" class="tab-pane fade" role="tabpanel">
          <div class="highlight-code">
            <pre class="language-js"><code class="language-js"><slot name="js" /></code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
