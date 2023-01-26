<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      author: "Carla Samaniego",
    };
  },
  computed: {
    ...mapState(["copyrightDate"]),
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      &copy; {{ copyrightDate }}.
      <a
        href=""
        target="__blank"
        class="
          font-general-medium
          text-secondary-dark
          dark:text-secondary-light
          uppercase
          hover:underline hover:text-pink-600
          dark:hover:text-pink-300
          duration-500
        "
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
