<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <!-- begin::Section -->
  <div class="pt-10">
    <!-- begin::Heading -->
    <h1 id="custom-switch" class="anchor fw-bolder mb-5">
      <a href="#custom-switch" />
      Custom Switch
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>.form-check-custom</code> and
      <code>.form-check-solid</code> class with <code>.form-switch</code> to set
      custom layout with solid background style for a form switch:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="mb-10">
          <div class="form-check form-switch form-check-custom form-check-solid">
            <input id="flexSwitchDefault" class="form-check-input" type="checkbox" value="">
            <label class="form-check-label" for="flexSwitchDefault">
              Default switch
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-switch form-check-custom form-check-solid">
            <input id="flexSwitchChecked" class="form-check-input" type="checkbox" value="" checked>
            <label class="form-check-label" for="flexSwitchChecked">
              Checked switch
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-switch form-check-custom form-check-solid">
            <input
              id="flexSwitchDisabled"
              class="form-check-input"
              type="checkbox"
              value=""
              Disabled
              checked
            >
            <label class="form-check-label" for="flexSwitchDisabled">
              Disabled switch
            </label>
          </div>
        </div>

        <!-- begin::Code -->
        <div class="py-0">
          <CodeHighlighter :field-height="400" lang="html">
            {{ `
            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="checked" />
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>

            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid">
                <input class="form-check-input" type="checkbox" value="" disabled id="flexCheckDisabled" />
                <label class="form-check-label" for="flexCheckDisabled">
                  Disabled checkbox
                </label>
              </div>
            </div>

            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid">
                <input class="form-check-input" type="radio" value="" id="flexRadioDefault" />
                <label class="form-check-label" for="flexRadioDefault">
                  Default radio
                </label>
              </div>
            </div>

            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid">
                <input class="form-check-input" type="radio" value="" id="flexRadioChecked" checked="checked" />
                <label class="form-check-label" for="flexRadioChecked">
                  Checked radio
                </label>
              </div>
            </div>

            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid">
                <input class="form-check-input" type="radio" value="" disabled id="flexRadioDisabled" />
                <label class="form-check-label" for="flexRadioDisabled">
                  Disabled radio
                </label>
              </div>
            </div>
            ` }}
          </CodeHighlighter>
        </div>
        <!-- end::Code -->
      </div>
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="pt-15 pb-5">
      Use
      <a
        class="fw-bold"
        href="<?php echo Theme::getPageUrl('documentation/base/utilities#width-and-height')?>"
        target="_blank"
      >Custom Size Classes</a>&nbsp; for switches to set custom sizes:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="mb-10 d-flex">
          <div class="form-check form-switch form-check-custom form-check-solid me-10">
            <input id="flexSwitch20x30" class="form-check-input h-20px w-30px" type="checkbox" value="">
            <label class="form-check-label" for="flexSwitch20x30">
              20px x 30px
            </label>
          </div>

          <div class="form-check form-switch form-check-custom form-check-solid me-10">
            <input id="flexSwitch30x50" class="form-check-input h-30px w-50px" type="checkbox" value="">
            <label class="form-check-label" for="flexSwitch30x50">
              30px X 50px
            </label>
          </div>

          <div class="form-check form-switch form-check-custom form-check-solid me-10">
            <input id="flexSwitch40x60" class="form-check-input h-40px w-60px" type="checkbox" value="">
            <label class="form-check-label" for="flexSwitch40x60">
              40px X 60px
            </label>
          </div>
        </div>

        <!-- begin::Code -->
        <div class="py-0">
          <CodeHighlighter :field-height="400" lang="html">
            {{ `
            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid form-check-lg">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckboxLg" />
                <label class="form-check-label" for="flexCheckboxLg">
                  Large checkbox
                </label>
              </div>
            </div>

            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid form-check-lg">
                <input class="form-check-input" type="radio" value="" id="flexCheckboxSm" />
                <label class="form-check-label" for="flexCheckboxSm">
                  Large radio
                </label>
              </div>
            </div>

            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid form-check-sm">
                <input class="form-check-input" type="checkbox" value="" id="flexRadioLg" />
                <label class="form-check-label" for="flexRadioLg">
                  Small checkbox
                </label>
              </div>
            </div>

            <div class="mb-10">
              <div class="form-check form-check-custom form-check-solid form-check-sm">
                <input class="form-check-input" type="radio" value="" id="flexRadioSm" />
                <label class="form-check-label" for="flexRadioSm">
                  Small radio
                </label>
              </div>
            </div>
            ` }}
          </CodeHighlighter>
        </div>
        <!-- end::Code -->
      </div>
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Section -->
</template>
