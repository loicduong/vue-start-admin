<script setup lang="ts">
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'

function click(event: any) {
  const target = event.currentTarget

  // Activate indicator
  target.setAttribute('data-kt-indicator', 'on')

  // Disable indicator after 3 seconds
  setTimeout(() => {
    target.removeAttribute('data-kt-indicator')
  }, 3000)
}
</script>

<template>
  <!-- begin::Section -->
  <div class="pt-10">
    <!-- begin::Heading -->
    <h1 id="toggle" class="anchor fw-bolder mb-5">
      <a href="#toggle" />
      Toggle
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Click on the below buttons to check toggling indicator state with a simple
      Javascript code:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <button id="kt_button_1" type="button" class="btn btn-primary me-10" @click.prevent="click($event)">
          <span class="indicator-label">
            Submit
          </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2" />
          </span>
        </button>

        <button id="kt_button_2" type="button" class="btn btn-success me-10" @click.prevent="click($event)">
          <span class="indicator-label">
            Submit
          </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2" />
          </span>
        </button>

        <button id="kt_button_3" type="button" class="btn btn-danger me-10" @click.prevent="click($event)">
          <span class="indicator-label">
            Submit
          </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2" />
          </span>
        </button>
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Code -->
    <div class="py-5">
      <CodeHighlighter2>
        <template #html>
          {{ `<button type="button" class="btn btn-primary me-10" id="kt_button_1">
            <span class="indicator-label">
              Submit
            </span>
            <span class="indicator-progress">
              Please wait...
              <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span></button>` }}
        </template>
        <template #js>
          {{
            `// Element to indecate
          var button = document.querySelector("#kt_button_1");

          // Handle button click event
          button.addEventListener("click", function() {
          // Activate indicator
          button.setAttribute("data-kt-indicator", "on");

          // Disable indicator after 3 seconds
          setTimeout(function() {
          button.removeAttribute("data-kt-indicator");
          }, 3000);
          });`
          }}
        </template>
      </CodeHighlighter2>
    </div>
    <!-- end::Code -->
  </div>
  <!-- end::Section -->
</template>
