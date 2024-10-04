<script setup lang="ts">
import { setCurrentPageTitle } from '@/core/helpers/breadcrumbs/breadcrumb'
import EUICustomizable from '@/view/pages/resources/documentation/element-ui/form/transfer/Customizable.vue'
import EUIPropAliases from '@/view/pages/resources/documentation/element-ui/form/transfer/PropAliases.vue'

setCurrentPageTitle('Transfer')
</script>

<template>
  <EUICustomizable />
  <EUIPropAliases />
</template>
