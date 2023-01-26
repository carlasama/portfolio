<script>
import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,
  components: { AppBanner, Button },
};
</script>

<template>
  <div class="container mx-auto">
    <AppBanner />

    <!-- <ProjectsGrid /> -->

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <!-- <NuxtLink
        to="/projects"
        class="
          font-general-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-pink-500
          hover:bg-pink-600
          focus:ring-1 focus:ring-pink-900
          text-white text-lg
          sm:text-xl
          duration-300
        "
        aria-label="Projects"
      >
        <Button title="Projects" />
      </NuxtLink> -->
    </div>
  </div>
</template>

<style scoped></style>
