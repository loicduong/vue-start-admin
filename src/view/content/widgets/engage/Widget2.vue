<script setup lang="ts">
interface Props {
  color?: string
  image?: string
}

defineProps<Props>()
</script>

<template>
  <div class="card card-custom mb-5 mb-xxl-8 overflow-hidden">
    <div class="card-body p-0 d-flex card-rounded" :class="`bg-light-${color}`">
      <div class="py-18 px-12">
        <h3 class="fs-2x">
          <RouterLink to="/product" class="text-dark text-hover-primary fw-bolder">
            Nike Sneakers
          </RouterLink>
        </h3>
        <div class="fs-3" :class="`text-${color}`">
          Get Amazing Nike Sneakers
        </div>
      </div>
      <div
        v-if="image"
        class="d-none d-md-flex flex-row-fluid bgi-no-repeat bgi-position-y-center bgi-position-x-right bgi-size-cover"
        style="transform: translateX(10%) rotate(-26deg);"
        :style="{ backgroundImage: `url(${image})` }"
      />
    </div>
  </div>
</template>
