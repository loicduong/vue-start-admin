<template>
  <!-- begin::Error -->
  <div class="d-flex flex-column flex-column-fluid position-relative" style="background-color: #EAF9FC;">
    <!-- begin::Background -->
    <div
      class="bgi-size-contain bgi-position-x-end bgi-position-y-bottom bgi-no-repeat position-absolute top-0 start-0 w-100 h-100"
      style="background-image: url(/media/svg/illustrations/404-hd.png);"
    />
    <!-- end::Background -->

    <!-- begin::Content -->
    <div class="px-10 px-md-20 pt-10 pt-md-14 z-index-1">
      <RouterLink to="/">
        <img alt="Logo" src="/media/logos/logo-default.svg" class="h-75px">
      </RouterLink>
    </div>
    <div
      class="px-10 px-md-20 py-10 py-md-0 d-flex flex-column justify-content-md-center align-items-start flex-root w-md-700px z-index-1"
    >
      <p class="display-6 fw-bolder text-gray-800 mb-8">
        Something went wrong..
      </p>
      <p class="fs-6 mb-8">
        Some plugins may ask a purchase code registration activation once
        installed, however, you can simply ignore these messages bundled plugins
        do not require activation or registration
      </p>
      <RouterLink v-slot="{ href, navigate }" to="/">
        <a :href="href" class="btn btn-primary fs-6 fw-bolder py-4 px-6 mr-auto" @click="navigate">Return Home</a>
      </RouterLink>
    </div>
    <!-- end::Content -->
  </div>
  <!-- end::Error -->
</template>
