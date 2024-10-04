<script setup lang="ts">
import CodeHighlighter from '@/view/content/highlighters/CodeHighlighter.vue'
</script>

<template>
  <!-- begin::Section -->
  <div class="py-10">
    <!-- begin::Heading -->
    <h1 id="custom-checkbox-and-radio" class="anchor fw-bolder mb-5">
      <a href="#custom-checkbox-and-radio" />
      Custom Checkbox & Radio
    </h1>
    <!-- end::Heading -->

    <!-- begin::Block -->
    <div class="py-5">
      Use <code>.form-check-custom</code> and
      <code>.form-check-solid</code> class with <code>.form-check</code> to set
      custom layout with solid background style for a form check:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid">
            <input id="flexCheckDefault" class="form-check-input" type="checkbox" value="">
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid">
            <input id="flexCheckChecked" class="form-check-input" type="checkbox" value="" checked>
            <label class="form-check-label" for="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid">
            <input id="flexCheckDisabled" class="form-check-input" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDisabled">
              Disabled checkbox
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid">
            <input id="flexRadioDefault" class="form-check-input" type="radio" value="">
            <label class="form-check-label" for="flexRadioDefault">
              Default radio
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid">
            <input id="flexRadioChecked" class="form-check-input" type="radio" value="" checked>
            <label class="form-check-label" for="flexRadioChecked">
              Checked radio
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid">
            <input id="flexRadioDisabled" class="form-check-input" type="radio" value="" disabled>
            <label class="form-check-label" for="flexRadioDisabled">
              Disabled radio
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
    <div class="pt-10 pb-5">
      Use <code>.form-check-{sm, lg}</code> fixed size classes for checkbox and
      radio to change their sizes:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid form-check-lg">
            <input id="flexCheckboxLg" class="form-check-input" type="checkbox" value="">
            <label class="form-check-label" for="flexCheckboxLg">
              Large checkbox
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid form-check-lg">
            <input id="flexCheckboxSm" class="form-check-input" type="radio" value="">
            <label class="form-check-label" for="flexCheckboxSm">
              Large radio
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid form-check-sm">
            <input id="flexRadioLg" class="form-check-input" type="checkbox" value="">
            <label class="form-check-label" for="flexRadioLg">
              Small checkbox
            </label>
          </div>
        </div>

        <div class="mb-10">
          <div class="form-check form-check-custom form-check-solid form-check-sm">
            <input id="flexRadioSm" class="form-check-input" type="radio" value="">
            <label class="form-check-label" for="flexRadioSm">
              Small radio
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

    <!-- begin::Block -->
    <div class="pt-15 pb-5">
      Use
      <a
        class="fw-bold"
        href="<?php echo Theme::getPageUrl('documentation/base/utilities#width-and-height')?>"
        target="_blank"
      >Custom Size Classes</a>&nbsp; for checkbox and radio to set custom sizes:
    </div>
    <!-- end::Block -->

    <!-- begin::Block -->
    <div class="py-5">
      <div class="rounded border p-10">
        <div class="mb-10 d-flex">
          <div class="form-check form-check-custom form-check-solid me-10">
            <input id="flexCheckbox30" class="form-check-input h-30px w-30px" type="checkbox" value="">
            <label class="form-check-label" for="flexCheckbox30">
              40px
            </label>
          </div>

          <div class="form-check form-check-custom form-check-solid me-10">
            <input id="flexCheckbox40" class="form-check-input h-40px w-40px" type="checkbox" value="">
            <label class="form-check-label" for="flexCheckbox40">
              40px
            </label>
          </div>

          <div class="form-check form-check-custom form-check-solid me-10">
            <input id="flexCheckbox50" class="form-check-input h-50px w-50px" type="checkbox" value="">
            <label class="form-check-label" for="flexCheckbox50">
              50px
            </label>
          </div>
        </div>

        <div class="mb-10 d-flex">
          <div class="form-check form-check-custom form-check-solid me-10">
            <input id="flexRadio30" class="form-check-input h-30px w-30px" type="radio" value="">
            <label class="form-check-label" for="flexRadio30">
              40px
            </label>
          </div>

          <div class="form-check form-check-custom form-check-solid me-10">
            <input id="flexRadio40" class="form-check-input h-40px w-40px" type="radio" value="">
            <label class="form-check-label" for="flexRadio40">
              40px
            </label>
          </div>

          <div class="form-check form-check-custom form-check-solid me-10">
            <input id="flexRadio50" class="form-check-input h-50px w-50px" type="radio" value="">
            <label class="form-check-label" for="flexRadio50">
              50px
            </label>
          </div>
        </div>

        <!-- begin::Code -->
        <div class="py-0">
          <CodeHighlighter :field-height="400" lang="html">
            {{ `
            <div class="mb-10 d-flex">
              <div class="form-check form-check-custom form-check-solid me-10">
                <input class="form-check-input h-30px w-30px" type="checkbox" value="" id="flexCheckbox30" />
                <label class="form-check-label" for="flexCheckbox30">
                  40px
                </label>
              </div>

              <div class="form-check form-check-custom form-check-solid me-10">
                <input class="form-check-input h-40px w-40px" type="checkbox" value="" id="flexCheckbox40" />
                <label class="form-check-label" for="flexCheckbox40">
                  40px
                </label>
              </div>

              <div class="form-check form-check-custom form-check-solid me-10">
                <input class="form-check-input h-50px w-50px" type="checkbox" value="" id="flexCheckbox50" />
                <label class="form-check-label" for="flexCheckbox50">
                  50px
                </label>
              </div>
            </div>

            <div class="mb-10 d-flex">
              <div class="form-check form-check-custom form-check-solid me-10">
                <input class="form-check-input h-30px w-30px" type="radio" value="" id="flexRadio30" />
                <label class="form-check-label" for="flexRadio30">
                  40px
                </label>
              </div>

              <div class="form-check form-check-custom form-check-solid me-10">
                <input class="form-check-input h-40px w-40px" type="radio" value="" id="flexRadio40" />
                <label class="form-check-label" for="flexRadio40">
                  40px
                </label>
              </div>

              <div class="form-check form-check-custom form-check-solid me-10">
                <input class="form-check-input h-50px w-50px" type="radio" value="" id="flexRadio50" />
                <label class="form-check-label" for="flexRadio50">
                  50px
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
