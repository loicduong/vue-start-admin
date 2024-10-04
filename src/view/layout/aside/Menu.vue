<script setup lang="ts">
import { ScrollComponent } from '@/assets/ts/components/_ScrollComponent'
import { MenuComponent } from '@/assets/ts/components/MenuComponent'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  menuConfig: {
    heading: string
    pages: {
      heading: string
      pro: boolean
      route: string
      sectionTitle: string
      sub: {
        heading: string
        route: string
      }[]
    }[]
  }[]
}

defineProps<Props>()

const route = useRoute()
const scrollElRef = ref<null | HTMLElement>(null)

onMounted(() => {
  ScrollComponent.reinitialization()
  MenuComponent.reinitialization()
  if (scrollElRef.value) {
    scrollElRef.value.scrollTop = 0
  }
})

function hasActiveChildren(match: string) {
  return route.path.includes(match)
}
</script>

<template>
  <div
    class="menu menu-column menu-rounded menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6"
    data-kt-menu="true"
  >
    <div
      id="kt_aside_menu_scroll"
      ref="scrollElRef"
      class="hover-scroll-y pe-4 pe-lg-5"
      data-kt-scroll="true"
      data-kt-scroll-height="auto"
      data-kt-scroll-dependencies="#kt_aside_logo"
      data-kt-scroll-wrappers="#kt_aside_wordspace"
      data-kt-scroll-offset="10px"
    >
      <div class="menu-wrapper menu-column menu-fit">
        <template v-for="(item, i) in menuConfig" :key="i">
          <div v-if="item?.heading" class="menu-item">
            <h4
              class="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase px-0"
            >
              {{ item?.heading }}
            </h4>
          </div>
          <template v-for="(menuItem, j) in item.pages" :key="j">
            <template v-if="menuItem?.heading">
              <div class="menu-item">
                <div v-if="menuItem?.pro" class="menu-link py-2 fs-6 px-0">
                  <span class="menu-title">{{ menuItem?.heading }}
                    <span
                      v-if="menuItem?.pro"
                      class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1"
                    >Pro</span>
                  </span>
                </div>
                <RouterLink
                  v-if="!menuItem?.pro"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                  :to="menuItem?.route"
                >
                  <a
                    :href="href"
                    class="menu-link py-2 fs-6 px-0"
                    :class="[isActive && 'active', isExactActive && 'active']"
                    @click="navigate"
                  >
                    <span class="menu-title">{{ menuItem.heading }} </span>
                  </a>
                </RouterLink>
              </div>
            </template>
            <div
              v-if="menuItem.sectionTitle"
              :class="{ show: hasActiveChildren(menuItem.route) }"
              data-kt-menu-trigger="click"
              data-kt-menu-sub="accordion"
              class="menu-item menu-accordion"
            >
              <span class="menu-link py-2 fs-6 px-0">
                <span class="menu-title">{{ menuItem.sectionTitle }}</span>
                <span class="menu-arrow" />
              </span>
              <div
                :class="{ show: hasActiveChildren(menuItem.route) }"
                class="menu-sub menu-sub-accordion"
              >
                <template v-for="(item2, k) in menuItem.sub" :key="k">
                  <div v-if="item2.heading" class="menu-item">
                    <RouterLink
                      v-slot="{ href, navigate, isActive, isExactActive }"
                      :to="item2.route"
                    >
                      <a
                        :href="href"
                        class="menu-link py-2 fs-6"
                        :class="[
                          isActive && 'active',
                          isExactActive && 'active',
                        ]"
                        @click="navigate"
                      >
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot" />
                        </span>
                        <span class="menu-title">{{ item2.heading }}</span>
                      </a>
                    </RouterLink>
                  </div>
                </template>
              </div>
            </div>
          </template>
          <div class="menu-item">
            <div class="h-30px" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
