<script setup lang="ts">
import Quill from 'quill'
import { onMounted } from 'vue'

onMounted(() => {
  const editorId = 'kt_forms_widget_1_editor'

  // init editor
  const options: object = {
    modules: {
      toolbar: {
        container: '#kt_forms_widget_1_editor_toolbar',
      },
    },
    theme: 'snow',
  }

  // Init editor
  new Quill(`#${editorId}`, options)
})
</script>

<template>
  <!-- begin::Feeds Widget 1 -->
  <div class="card card-custom mb-5 mb-xxl-8">
    <!-- begin::Body -->
    <div class="card-body pb-0">
      <!-- begin::Top -->
      <div class="d-flex align-items-center">
        <!-- begin::Symbol -->
        <div class="symbol symbol-45px me-5">
          <span class="symbol-label bg-light align-items-end">
            <img alt="Logo" src="/media/svg/avatars/007-boy-2.svg" class="mh-40px">
          </span>
        </div>
        <!-- end::Symbol -->

        <!-- begin::Description -->
        <span class="text-muted fw-bold fs-6">What’s on your mind, Jerry?</span>
        <!-- end::Description -->
      </div>
      <!-- end::Top -->

      <!-- begin::Form -->
      <form id="kt_forms_widget_1_form" class="pt-7 ql-quil ql-quil-plain">
        <!-- begin::Editor -->
        <div id="kt_forms_widget_1_editor" />
        <!-- end::Editor -->

        <div class="border-top mt-5" />

        <!-- begin::Toolbar -->
        <div
          id="kt_forms_widget_1_editor_toolbar"
          class="ql-toolbar d-flex align-items-center justify-content-between py-2"
        >
          <div class="me-2">
            <span class="ql-formats ql-size ms-0">
              <select class="ql-size w-75px" />
            </span>

            <span class="ql-formats">
              <button class="ql-bold" />
              <button class="ql-italic" />
              <button class="ql-underline" />
              <button class="ql-strike" />
              <button class="ql-image" />
              <button class="ql-link" />
              <button class="ql-clean" />
            </span>
          </div>

          <div class="me-n3">
            <span class="btn btn-icon btn-sm btn-active-color-primary">
              <i class="flaticon2-clip-symbol icon-ms" />
            </span>
            <span class="btn btn-icon btn-sm btn-active-color-primary">
              <i class="flaticon2-pin icon-ms" />
            </span>
          </div>
        </div>
        <!-- end::Toolbar -->
      </form>
      <!-- end::Form -->
    </div>
    <!-- end::Body -->
  </div>
  <!-- end::Feeds Widget 1 -->
</template>
