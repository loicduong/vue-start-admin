<script setup lang="ts">
import { Modal } from 'bootstrap'
import { onMounted, ref } from 'vue'
/*
TIP: To start with clean menu update the config path to @/core/config/MainMenuCleanConfig".
 */
import menuConfig from '@/core/config/MainMenuConfig'

const myModal = ref<null | Modal>(null)

onMounted(() => {
  myModal.value = new Modal(
    document.getElementById('kt_mega_menu_modal') as HTMLElement,
  )
})

function onLinkClick() {
  if (myModal.value) {
    myModal.value.hide()
  }
}
</script>

<template>
  <div class="col-lg-6 pr-lg-25">
    <div class="row">
      <template v-for="(item, i) in menuConfig" :key="i">
        <div class="col-sm-4">
          <h3 class="font-weight-bolder mb-5 fw-bolder">
            {{ item.heading }}
          </h3>
          <ul
            class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10"
          >
            <template v-for="(page, j) in item.pages" :key="j">
              <li class="menu-item">
                <div
                  v-if="page.pro"
                  class="menu-link ps-0 py-2 menu-modal-link"
                >
                  {{ page.heading }}
                  <span
                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1"
                  >Pro</span>
                </div>
              </li>
              <RouterLink
                v-if="!page.pro"
                v-slot="{ href, navigate, isActive, isExactActive }"
                :to="page.route"
              >
                <li class="menu-item">
                  <a
                    class="menu-link ps-0 py-2 menu-modal-link"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    :href="href"
                    @click="
                      onLinkClick();
                      navigate;
                    "
                  >{{ page.heading }}
                  </a>
                </li>
              </RouterLink>
            </template>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>
