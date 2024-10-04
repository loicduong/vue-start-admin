import type { RouteRecordRaw } from 'vue-router'
import { useConfigStore } from '@/store/modules/ConfigModule'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboards/start',
    component: () => import('@/view/layout/Layout.vue'),
    children: [
      {
        path: '/dashboards',
        name: 'dashboards',
        component: () => import('@/view/pages/dashboards/Dashboards.vue'),
        children: [
          {
            path: 'start',
            name: 'start',
            component: () => import('@/view/pages/dashboards/Start.vue'),
          },
          {
            path: 'light',
            name: 'light',
            meta: { asideEnabled: true, asidePrimaryDisabled: true },
            component: () => import('@/view/pages/dashboards/Light.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/view/pages/general/Error.vue'),
  },
  {
    // the 404 route, when none of the above matches
    path: '/404',
    name: '404',
    component: () => import('@/view/pages/general/Error.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(() => {
  const configStore = useConfigStore()
  // reset config to initial state
  configStore.resetLayoutConfig()

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
})

export default router
