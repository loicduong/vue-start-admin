<script setup lang="ts">
import { DrawerComponent } from '@/assets/ts/components/_DrawerOptions'
import { ToggleComponent } from '@/assets/ts/components/_ToggleComponent'
import { asideMenu } from '@/core/helpers/aside'
import {
  displayAsidePrimary,
  displayAsideSecondary,
} from '@/core/helpers/config'
import Dropdown3 from '@/view/content/dropdown/Dropdown3.vue'
import KTAsideMenu from '@/view/layout/aside/Menu.vue'
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
  DrawerComponent.reinitialization()
  ToggleComponent.bootstrap()
})

onUpdated(() => {
  ToggleComponent.bootstrap()
})
</script>

<template>
  <!-- begin::Aside -->
  <div
    v-if="displayAsidePrimary || displayAsideSecondary"
    id="kt_aside"
    class="aside bg-info"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    :data-kt-drawer-width="
      displayAsideSecondary ? `{default:'200px', '300px': '250px'}` : `70px`
    "
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggler"
  >
    <!-- begin::Primary -->
    <div
      v-if="displayAsidePrimary"
      class="aside-primary d-flex flex-column align-items-center flex-row-auto"
    >
      <!-- begin::Logo -->
      <div
        class="aside-logo d-flex flex-column align-items-center flex-column-auto py-4 pt-lg-10 pb-lg-7"
      >
        <RouterLink to="/">
          <img alt="Logo" src="/media/logos/logo-compact.svg" class="mh-50px">
        </RouterLink>
      </div>
      <!-- end::Logo -->

      <!-- begin::Nav Wrapper -->
      <div
        id="kt_aside_nav"
        class="aside-nav d-flex flex-column align-items-center flex-column-fluid pt-0 pb-5"
      >
        <!-- begin::Nav scroll -->
        <div
          class="hover-scroll-y"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
          data-kt-scroll-wrappers="#kt_aside_nav"
          data-kt-scroll-offset="10px"
        >
          <!-- begin::Nav -->
          <ul class="nav flex-column" role="tablist">
            <!-- begin::Item -->
            <li class="nav-item mb-1" title="Features">
              <a
                href="#"
                class="nav-link h-40px w-40px h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white active"
                data-bs-toggle="tab"
                data-bs-target="#kt_aside_tab_1"
                role="tab"
              >
                <span class="svg-icon svg-icon-2 svg-icon-lg-1">
                  <InlineSvg
                    src="/media/icons/duotone/Layout/Layout-4-blocks.svg"
                  />
                </span>
              </a>
            </li>
            <!-- end::Item -->

            <!-- begin::Item -->
            <li class="nav-item mb-1" title="Members">
              <a
                href="#"
                class="nav-link h-40px w-40px  h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                data-bs-toggle="tab"
                data-bs-target="#kt_aside_tab_2"
                role="tab"
              >
                <span class="svg-icon svg-icon-2 svg-icon-lg-1">
                  <InlineSvg
                    src="/media/icons/duotone/Communication/Group.svg"
                  />
                </span>
              </a>
            </li>
            <!-- end::Item -->

            <!-- begin::Item -->
            <li class="nav-item mb-1" title="Latest Reports">
              <a
                href="#"
                class="nav-link h-40px w-40px  h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                data-bs-toggle="tab"
                data-bs-target="#kt_aside_tab_3"
                role="tab"
              >
                <span class="svg-icon svg-icon-2 svg-icon-lg-1">
                  <InlineSvg src="/media/icons/duotone/Media/Equalizer.svg" />
                </span>
              </a>
            </li>
            <!-- end::Item -->

            <!-- begin::Item -->
            <li class="nav-item mb-1" title="Project Management">
              <a
                href="#"
                class="nav-link h-40px w-40px h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                data-bs-toggle="tab"
                data-bs-target="#kt_aside_tab_2"
                role="tab"
              >
                <span class="svg-icon svg-icon-2 svg-icon-lg-1">
                  <InlineSvg
                    src="/media/icons/duotone/General/Shield-check.svg"
                  />
                </span>
              </a>
            </li>
            <!-- end::Item -->

            <!-- begin::Item -->
            <li class="nav-item mb-1" title="User Management">
              <a
                href="#"
                class="nav-link h-40px w-40px  h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                data-bs-toggle="tab"
                data-bs-target="#kt_aside_tab_3"
                role="tab"
              >
                <span class="svg-icon svg-icon-2 svg-icon-lg-1">
                  <InlineSvg src="/media/icons/duotone/Home/Library.svg" />
                </span>
              </a>
            </li>
            <!-- end::Item -->

            <!-- begin::Item -->
            <li class="nav-item mb-1" title="Finance & Accounting">
              <a
                href="#"
                class="nav-link h-40px w-40px  h-lg-50px w-lg-50px btn btn-custom btn-icon btn-color-white"
                data-bs-toggle="tab"
                data-bs-target="#kt_aside_tab_6"
                role="tab"
              >
                <span class="svg-icon svg-icon-2 svg-icon-lg-1">
                  <InlineSvg src="/media/icons/duotone/Files/File-plus.svg" />
                </span>
              </a>
            </li>
            <!-- end::Item -->
          </ul>
          <!-- end::Nav -->
        </div>
        <!-- end::Nav scroll -->
      </div>
      <!-- end::Nav Wrapper -->

      <!-- begin::Footer -->
      <div
        id="kt_aside_footer"
        class="aside-footer d-flex flex-column align-items-center flex-column-auto py-5 py-lg-7"
      >
        <!-- begin::Aside Toggle -->
        <button
          v-if="displayAsidePrimary && displayAsideSecondary"
          id="kt_aside_toggle"
          class="btn btn-sm btn-icon btn-white btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex"
          data-kt-toggle="true"
          data-kt-toggle-state="active"
          data-kt-toggle-target="body"
          data-kt-toggle-name="aside-minimize"
          title="Toggle Aside"
        >
          <span class="svg-icon svg-icon-2 rotate-180">
            <InlineSvg src="/media/icons/duotone/Navigation/Left-2.svg" />
          </span>
        </button>
        <!-- end::Aside Toggle -->

        <!-- begin::Dropdown -->
        <div class="mb-2">
          <button
            type="button"
            class="btn btn-custom h-40px w-40px h-lg-50px w-lg-50px btn-icon btn-color-white"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-start"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-2 svg-icon-lg-1">
              <InlineSvg
                src="/media/icons/duotone/Communication/Dial-numbers.svg"
              />
            </span>
          </button>
          <Dropdown3 />
        </div>
        <!-- end::Dropdown -->
      </div>
      <!-- end::Footer -->
    </div>
    <!-- end::Primary -->

    <!-- begin::Secondary -->
    <div
      v-if="displayAsideSecondary"
      class="aside-secondary d-flex flex-row-fluid bg-white"
    >
      <!-- begin::Workspace -->
      <div
        id="kt_aside_wordspace"
        class="aside-workspace my-7 ps-5 pe-4 ps-lg-10 pe-lg-6"
      >
        <template v-if="!displayAsidePrimary">
          <!-- begin::Logo -->
          <div id="kt_aside_logo" class="aside-logo py-2 pb-7">
            <RouterLink to="/">
              <img
                alt="Logo"
                src="/media/logos/logo-compact.svg"
                class="mh-50px"
              >
            </RouterLink>
          </div>
          <!-- end::Logo -->

          <KTAsideMenu :menu-config="asideMenu as any" />
        </template>

        <!-- begin::Tab Content -->
        <div v-else class="tab-content">
          <!-- begin::Main menu -->
          <div id="kt_aside_tab_1" class="tab-pane fade show active">
            <KTAsideMenu :menu-config="asideMenu as any" />
          </div>
          <!-- end::Main menu -->

          <!-- begin::Demo menu -->
          <div id="kt_aside_tab_2" class="tab-pane fade">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <!-- end::Demo menu -->

          <!-- begin::Demo menu -->
          <div id="kt_aside_tab_3" class="tab-pane fade">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <!-- end::Demo menu -->
        </div>
        <!-- end::Tab Content -->
      </div>
      <!-- end::Workspace -->
    </div>
    <!-- end::Secondary -->
  </div>
  <!-- end::Aside -->
</template>
